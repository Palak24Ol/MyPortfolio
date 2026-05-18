import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Dot follows instantly
      dot.style.left = mouseX + 'px'
      dot.style.top  = mouseY + 'px'

      // Ring follows with lerp (lag for smoothness)
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top  = ringY + 'px'

      raf = requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      dot.classList.add('hovered')
      ring.classList.add('hovered')
    }

    const onLeaveLink = () => {
      dot.classList.remove('hovered')
      ring.classList.remove('hovered')
    }

    const attachHover = () => {
      const targets = document.querySelectorAll('a, button, [data-cursor]')
      targets.forEach(el => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachHover)
    observer.observe(document.body, { childList: true, subtree: true })
    attachHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
