import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Ease out back — slight overshoot on landing, feels physical
function easeOutBack(t: number): number {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

// Ease out cubic — smooth deceleration for particles
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene    = new THREE.Scene()
    const camera   = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    type ShapeEntry = {
      mesh:          THREE.Mesh
      // final resting position
      finalX:        number
      finalY:        number
      finalZ:        number
      // where it starts (offset from final)
      startOffsetX:  number
      startOffsetY:  number
      targetOpacity: number
      revealAt:      number   // seconds when entry anim begins
      duration:      number   // seconds for entry anim
      easing:        'back' | 'cubic'
      // idle float after landing
      floatOffset:   number
      floatSpeed:    number
      landed:        boolean
    }

    const shapes: ShapeEntry[] = []

    const add = (
      geo: THREE.BufferGeometry,
      mat: THREE.Material & { opacity?: number; transparent?: boolean },
      fx: number, fy: number, fz: number,
      rx: number, ry: number, rz: number,
      targetOpacity: number,
      revealAt: number,
      startOffsetX: number,
      startOffsetY: number,
      easing: 'back' | 'cubic' = 'back'
    ) => {
      ;(mat as THREE.MeshBasicMaterial).transparent = true
      ;(mat as THREE.MeshBasicMaterial).opacity     = 0
      const mesh = new THREE.Mesh(geo, mat)
      // Start at offset position
      mesh.position.set(fx + startOffsetX, fy + startOffsetY, fz)
      mesh.rotation.set(rx, ry, rz)
      scene.add(mesh)
      shapes.push({
        mesh,
        finalX: fx, finalY: fy, finalZ: fz,
        startOffsetX, startOffsetY,
        targetOpacity,
        revealAt,
        duration: 0.85,
        easing,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed:  0.003 + Math.random() * 0.005,
        landed: false,
      })
    }

    // ── SHAPE 0: Big wireframe icosahedron — falls from top ──
    add(
      new THREE.IcosahedronGeometry(1.4, 0),
      new THREE.MeshBasicMaterial({ color: 0x6B7A50, wireframe: true }),
      -3.5, 1.2, -1,   0.3, 0.5, 0,
      0.35,
      0.0,              // first to fall
      0, 10,            // drops from Y+10 above
      'back'
    )

    // ── SHAPE 1: Amber torus ring — falls from top ──
    add(
      new THREE.TorusGeometry(0.9, 0.22, 16, 64),
      new THREE.MeshStandardMaterial({ color: 0xD4920A, roughness: 0.6, metalness: 0.2 }),
      3.2, -0.8, -2,   0.8, 0.3, 0,
      0.85,
      0.7,
      0, 10,
      'back'
    )

    // ── SHAPE 2: Pink dodecahedron — falls from top ──
    add(
      new THREE.DodecahedronGeometry(0.55),
      new THREE.MeshStandardMaterial({ color: 0xD4607A, roughness: 0.4, metalness: 0.1 }),
      -2.2, -1.6, -1,  0.5, 0.2, 0,
      0.7,
      1.3,
      0, 10,
      'back'
    )

    // ── SHAPE 3: Olive octahedron — falls from top ──
    add(
      new THREE.OctahedronGeometry(0.8),
      new THREE.MeshStandardMaterial({ color: 0x8A9A66, roughness: 0.7, metalness: 0.0 }),
      2.8, 1.8, -1.5,  0.2, 0.4, 0.1,
      0.8,
      1.9,
      0, 10,
      'back'
    )

    // ── SHAPE 4: Torus knot — falls from top ──
    add(
      new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16),
      new THREE.MeshStandardMaterial({ color: 0x6B7A50, roughness: 0.3, metalness: 0.4 }),
      -4.5, -1.2, -3,  0, 0, 0,
      0.6,
      2.5,
      0, 10,
      'back'
    )

    // ── SHAPE 5: Cone — falls from top ──
    add(
      new THREE.ConeGeometry(0.5, 1.1, 6),
      new THREE.MeshStandardMaterial({ color: 0x8A9A66, roughness: 0.7, metalness: 0.0 }),
      4.8, 0.4, -2,    0, 0, 0.3,
      0.8,
      2.5,
      0, 10,
      'back'
    )

    // ── PARTICLES: left half fly in from left, right half from right ──
    const PARTICLE_COLORS = [0x6B7A50, 0xD4920A, 0xF2EDE4, 0x4E5A38, 0xD4607A, 0xF0A820]
    for (let i = 0; i < 22; i++) {
      const r    = 0.04 + Math.random() * 0.1
      const mat  = new THREE.MeshStandardMaterial({
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      })
      const fx = (Math.random() - 0.5) * 14
      const fy = (Math.random() - 0.5) * 8
      const fz = (Math.random() - 0.5) * 4 - 1

      // Left-side particles come from left (-14 offset), right from right (+14)
      const fromLeft   = fx < 0
      const sideOffset = fromLeft ? -14 : 14

      add(
        new THREE.SphereGeometry(r, 8, 8),
        mat,
        fx, fy, fz,
        0, 0, 0,
        0.3 + Math.random() * 0.4,
        3.1 + (i / 22) * 0.6,   // stagger particles over 0.6s
        sideOffset, 0,           // fly in from side
        'cubic'
      )
    }

    // Lighting
    scene.add(new THREE.AmbientLight(0xF2EDE4, 0.8))
    const p1 = new THREE.PointLight(0xD4920A, 2.5, 20)
    p1.position.set(4, 3, 5)
    scene.add(p1)
    const p2 = new THREE.PointLight(0x6B7A50, 1.8, 20)
    p2.position.set(-4, -2, 3)
    scene.add(p2)
    const dir = new THREE.DirectionalLight(0xffffff, 0.5)
    dir.position.set(0, 10, 5)
    scene.add(dir)

    // Mouse parallax
    let mouseX = 0, mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    let animFrame: number
    const clock = new THREE.Clock()

    const animate = () => {
      animFrame = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      shapes.forEach((s) => {
        const mat = s.mesh.material as THREE.MeshBasicMaterial

        if (elapsed < s.revealAt) return  // not yet

        const raw      = Math.min((elapsed - s.revealAt) / s.duration, 1)
        const eased    = s.easing === 'back' ? easeOutBack(raw) : easeOutCubic(raw)

        // Interpolate position from start → final
        s.mesh.position.x = (s.finalX + s.startOffsetX) + (s.finalX - (s.finalX + s.startOffsetX)) * eased
        s.mesh.position.y = (s.finalY + s.startOffsetY) + (s.finalY - (s.finalY + s.startOffsetY)) * eased

        // Fade in
        mat.opacity = easeOutCubic(raw) * s.targetOpacity

        // Once landed, add floating
        if (raw >= 1) {
          s.landed = true
          s.mesh.position.y = s.finalY + Math.sin(elapsed * s.floatSpeed * 100 + s.floatOffset) * 0.08
        }

        // Slow rotation always
        s.mesh.rotation.x += s.floatSpeed * 0.4
        s.mesh.rotation.y += s.floatSpeed * 0.6
      })

      // Camera parallax
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.04
      camera.position.y += (-mouseY * 0.4 - camera.position.y) * 0.04
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={mountRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
  )
}