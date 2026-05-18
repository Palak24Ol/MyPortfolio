import { motion } from 'framer-motion'
import RetroWindow from '../components/RetroWindow'
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
  },
]

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
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <RetroWindow title={proj.path} animate={false}>
              <div style={{ height: 4, background: proj.color, marginBottom: 16, marginLeft: -20, marginRight: -20, marginTop: -20 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 24 }}>{proj.emoji}</span>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--dark)', fontWeight: 700 }}>{proj.title}</h3>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 14 }}>
                {proj.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {proj.tags.map(tag => (
                  <span key={tag} className="badge badge--outline" style={{ fontSize: 9 }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {proj.link && proj.link !== '#' && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '6px 12px', background: proj.color, color: 'var(--cream)', border: 'none', borderRadius: 2, cursor: 'pointer', textDecoration: 'none', letterSpacing: '0.06em' }}>
                    ↗ VISIT
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '6px 12px', background: 'transparent', color: 'var(--text)', border: '1px solid var(--window-border)', borderRadius: 2, cursor: 'pointer', textDecoration: 'none', letterSpacing: '0.06em' }}>
                    ⌥ GITHUB
                  </a>
                )}
              </div>
            </RetroWindow>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
