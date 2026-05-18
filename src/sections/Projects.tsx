import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrambleText from '../components/ScrambleText'

const PROJECTS = [
  { title: 'API Gateway & Analytics Platform', path: 'C:\\PALAK\\works\\api-gateway', description: 'A production-grade API Gateway with JWT + API key authentication, Redis rate limiting, analytics tracking, and a custom Go-powered database engine with real-time admin dashboard.', tags: ['Spring Boot', 'Go', 'Redis', 'PostgreSQL'], link: 'https://github.com/Palak24Ol/api-gateway', github: 'https://github.com/Palak24Ol/api-gateway', color: 'var(--olive)', emoji: '⚡', image: '/projects/api-gateway.png' },
  { title: 'TrackMyMoney', path: 'C:\\PALAK\\works\\trackmymoney', description: 'A full-stack personal finance management system with JWT authentication, email verification, expense tracking, and Excel-based financial report exports.', tags: ['Spring Boot', 'Java', 'React', 'MySQL'], link: 'https://github.com/Palak24Ol/money-manager-fullstack-project', github: 'https://github.com/Palak24Ol/money-manager-fullstack-project', color: 'var(--pink-accent)', emoji: '💰', image: '/projects/trackmymoney.png' },
  { title: 'MockMate', path: 'C:\\PALAK\\works\\mockmate', description: 'An AI-powered mock interview platform featuring live voice interviews, automated candidate scoring, and real-time feedback generation using Gemini AI and VAPI.', tags: ['Next.js', 'TypeScript', 'Firebase', 'Gemini AI'], link: 'https://github.com/Palak24Ol/AI-INTERVIEW', github: 'https://github.com/Palak24Ol/AI-INTERVIEW', color: 'var(--amber)', emoji: '🎤', image: '/projects/mockmate.png' },
  { title: 'Code Editor', path: 'C:\\PALAK\\works\\code-editor', description: 'A browser-based code editor with live code execution, syntax highlighting, and a clean developer-focused interface for writing and testing code in real time.', tags: ['React', 'JavaScript', 'CodeMirror', 'Frontend'], link: 'https://github.com/Palak24Ol/my-code-editor', github: 'https://github.com/Palak24Ol/my-code-editor', color: 'var(--olive-light)', emoji: '💻', image: '/projects/code-editor.png' },
  { title: 'Database Engine', path: 'C:\\PALAK\\works\\database-engine', description: 'A custom database engine built from scratch featuring a B+ Tree index, write-ahead logging (WAL), and a hand-written SQL parser for efficient storage and query execution.', tags: ['Go', 'Database Systems', 'B+ Tree', 'SQL Parser'], link: 'https://github.com/Palak24Ol/DatabaseEngine', github: 'https://github.com/Palak24Ol/DatabaseEngine', color: 'var(--pink-accent)', emoji: '🗄️', image: '/projects/database-engine.png' },
  { title: 'AI Question Engine', path: 'C:\\PALAK\\works\\ai-question-engine', description: 'An AI-powered question generation platform that creates intelligent and dynamic questions using modern AI models with a clean interactive user experience.', tags: ['Next.js', 'TypeScript', 'Firebase', 'Gemini AI'], link: 'https://github.com/Palak24Ol/ai-question-engine', github: 'https://github.com/Palak24Ol/ai-question-engine', color: 'var(--amber)', emoji: '🧠', image: '/projects/ai-question-engine.png' },
  {
  title: 'Multilingual Deep Fake News Detection',
  path: 'C:\\PALAK\\works\\deepfake-news-detection',
  description: 'An AI-based fake news detection system capable of analyzing multilingual content and identifying deep fake or misleading news using machine learning and NLP techniques.',
  tags: ['Python', 'Machine Learning', 'NLP', 'Deep Learning'],
  link: 'https://github.com/Palak24Ol/Multilingual-Deep-Fake-News-Detection',
  github: 'https://github.com/Palak24Ol/Multilingual-Deep-Fake-News-Detection',
  color: 'var(--olive)',
  emoji: '📰',
  image: '/projects/deepfake-news.png',
},
]

interface ProjectCardProps { proj: typeof PROJECTS[0]; i: number }

function ProjectCard({ proj, i }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22,1,0.36,1] }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
      style={{ perspective: 1000, height: 'clamp(300px,40vw,340px)', cursor: 'pointer' }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
        style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          background: 'var(--window-bg)', border: '1.5px solid var(--window-border)',
          boxShadow: '3px 3px 0 var(--window-border)', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ background: 'var(--window-title)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid var(--window-border)', flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#E05C5C' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#E8C040' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--olive-light)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--dark)', opacity: 0.6, marginLeft: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{proj.path}</span>
          </div>
          <div style={{ height: 3, background: proj.color, flexShrink: 0 }} />
          <div style={{ padding: 'clamp(12px,2.5vw,16px) clamp(14px,3vw,18px)', display: 'flex', flexDirection: 'column', flex: 1, gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>{proj.emoji}</span>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(11px,2.5vw,13px)', color: 'var(--dark)', fontWeight: 700 }}>
                <ScrambleText text={proj.title} />
              </h3>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px,2vw,11px)', color: 'var(--text-muted)', lineHeight: 1.8, flex: 1, overflow: 'hidden' }}>
              {proj.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {proj.tags.map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: 8, padding: '2px 6px', border: `1px solid ${proj.color}`, color: proj.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{tag}</span>
              ))}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--text-muted)', opacity: 0.5, textAlign: 'right' }}>
              tap to preview →
            </div>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'var(--dark)', border: `1.5px solid ${proj.color}`,
          boxShadow: `4px 4px 0 ${proj.color}`, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, var(--dark) 0%, ${proj.color}33 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: -1 }}>
              <span style={{ fontSize: 64, opacity: 0.3 }}>{proj.emoji}</span>
            </div>
          </div>
          <div style={{ padding: '10px 14px', background: 'rgba(0,0,0,0.6)', borderTop: `1px solid ${proj.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, flexWrap: 'wrap', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cream)', fontWeight: 700 }}>
              <ScrambleText text={proj.title} />
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              {proj.link && proj.link !== '#' && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, padding: '4px 8px', background: proj.color, color: 'var(--cream)', textDecoration: 'none', borderRadius: 2 }}>
                  ↗ VISIT
                </a>
              )}
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, padding: '4px 8px', background: 'transparent', color: 'var(--cream)', border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none', borderRadius: 2 }}>
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
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // WORKS.DIR
        </div>
        <ScrambleText text="My Works" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }} />
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px,100%), 1fr))', gap: 'clamp(18px,3vw,28px)' }}>
        {PROJECTS.map((proj, i) => <ProjectCard key={proj.title} proj={proj} i={i} />)}
      </div>
    </section>
  )
}
