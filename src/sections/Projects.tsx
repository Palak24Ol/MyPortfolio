import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrambleText from '../components/ScrambleText'

const PROJECTS = [
  {
    title: 'Portfolio Website',
    path: 'C:\\PALAK\\works\\portfolio',
    description: 'A retro-aesthetic animated portfolio with 3D elements, custom cursor, and smooth scroll animations built with React + Three.js.',
    tags: ['React', 'Three.js', 'GSAP', 'TypeScript'],
    link: 'https://portfolio-palak-khaki.vercel.app/',
    github: 'https://github.com/Palak24Ol/PORTFOLIO_PALAK',
    color: 'var(--olive)',
    emoji: '🌐',
    image: '/projects/portfolio.png',   // ← put screenshots in /public/projects/
  },
  {
    title: 'UI/UX Design Projects',
    path: 'C:\\PALAK\\works\\design',
    description: 'Collection of UI/UX design projects including mobile apps, web interfaces, and brand identities crafted in Figma.',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'],
    link: 'https://behance.net/palakjaiswal',
    github: '',
    color: 'var(--pink-accent)',
    emoji: '🎨',
    image: '/projects/design.png',
  },
  {
    title: 'Full Stack Web App',
    path: 'C:\\PALAK\\works\\webapp',
    description: 'A full-stack web application with user authentication, real-time features, and a clean modern UI using React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    github: 'https://github.com/Palak24Ol',
    color: 'var(--amber)',
    emoji: '⚡',
    image: '/projects/webapp.png',
  },
  {
    title: 'Open Source Contributions',
    path: 'C:\\PALAK\\works\\oss',
    description: 'Active contributions to open source projects, bug fixes, feature additions, and documentation improvements across GitHub.',
    tags: ['GitHub', 'Open Source', 'Collaboration'],
    link: 'https://github.com/Palak24Ol',
    github: 'https://github.com/Palak24Ol',
    color: 'var(--olive-light)',
    emoji: '🐙',
    image: '/projects/oss.png',
  },
]

interface ProjectCardProps {
  proj: typeof PROJECTS[0]
  i: number
}

function ProjectCard({ proj, i }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        perspective: 1000,
        height: 320,
        cursor: 'pointer',
      }}
    >
      {/* Flip container */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >

        {/* ── FRONT — info card ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          background: 'var(--window-bg)',
          border: '1.5px solid var(--window-border)',
          boxShadow: '3px 3px 0 var(--window-border)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Titlebar */}
          <div style={{ background: 'var(--window-title)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid var(--window-border)', flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#E05C5C' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#E8C040' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--olive-light)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--dark)', opacity: 0.6, marginLeft: 4 }}>{proj.path}</span>
          </div>

          {/* Color band */}
          <div style={{ height: 3, background: proj.color, flexShrink: 0 }} />

          {/* Body */}
          <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', flex: 1, gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>{proj.emoji}</span>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--dark)', fontWeight: 700 }}>{proj.title}</h3>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.8, flex: 1 }}>
              {proj.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {proj.tags.map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, padding: '3px 8px', border: `1px solid ${proj.color}`, color: proj.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {tag}
                </span>
              ))}
            </div>
            {/* Flip hint */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', opacity: 0.5, letterSpacing: '0.1em', textAlign: 'right' }}>
              hover to preview →
            </div>
          </div>
        </div>

        {/* ── BACK — project image ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'var(--dark)',
          border: `1.5px solid ${proj.color}`,
          boxShadow: `4px 4px 0 ${proj.color}`,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Image fills most of back */}
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <img
              src={proj.image}
              alt={proj.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
              }}
              onError={(e) => {
                // Fallback if no image yet
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            {/* Fallback bg when no image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, var(--dark) 0%, ${proj.color}33 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: -1,
            }}>
              <span style={{ fontSize: 64, opacity: 0.3 }}>{proj.emoji}</span>
            </div>
          </div>
 {/* Bottom bar with links */}
          <div style={{
            padding: '12px 16px',
            background: 'rgba(0,0,0,0.6)',
            borderTop: `1px solid ${proj.color}44`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cream)', fontWeight: 700 }}>
              {proj.title}
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              {proj.link && proj.link !== '#' && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '5px 10px', background: proj.color, color: 'var(--cream)', textDecoration: 'none', borderRadius: 2, letterSpacing: '0.06em' }}
                >
                  ↗ VISIT
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '5px 10px', background: 'transparent', color: 'var(--cream)', border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none', borderRadius: 2, letterSpacing: '0.06em' }}
                >
                  ⌥ GITHUB
                </a>
              )}
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: 40 }}
      >
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // WORKS.DIR
        </div>
        <ScrambleText
          text="My Works"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }}
        />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 28 }}>
        {PROJECTS.map((proj, i) => (
          <ProjectCard key={proj.title} proj={proj} i={i} />
        ))}
      </div>
    </section>
  )
}