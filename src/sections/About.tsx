import { motion } from 'framer-motion'
import RetroWindow from '../components/RetroWindow'
import ScrambleText from '../components/ScrambleText'

const FACTS = [
  { icon: '🎓', label: 'Education', value: 'B.Tech Computer Science and Engineering, NIT PATNA' },
  { icon: '📍', label: 'Location',  value: 'Gorakhpur, India' },
  { icon: '💼', label: 'Role',      value: 'Java Developer and Full Stack Developer' },
  { icon: '☕', label: 'Fuel',      value: 'Coffee & late nights' },
]

export default function About() {
  return (
    <section id="about" className="section">

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} style={{ marginBottom: 40 }}
      >
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // ABOUT.TXT
        </div>
        <ScrambleText
          text="About Me"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }}
        />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))', gap: 'clamp(20px,4vw,32px)', alignItems: 'start' }}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        >
          <RetroWindow title="C:\PALAK\about.txt" animate={false}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(11px,2.5vw,13px)', lineHeight: 2, color: 'var(--text)' }}>
              <span style={{ color: 'var(--olive)' }}>{'>'} </span>
              Hey! I'm <strong>Palak Jaiswal</strong>, part developer, part problem solver, and someone who genuinely enjoys turning random ideas into real projects.
              <br /><br />
              <span style={{ color: 'var(--olive)' }}>{'>'} </span>
              I build <span style={{ color: 'var(--amber)' }}> scalable backend systems</span>, <span style={{ color: 'var(--pink-accent)' }}>full-stack applications </span>and interactive products using Java, Spring Boot, React, and modern web technologies.
              <br /><br />
              <span style={{ color: 'var(--olive)' }}>{'>'} </span>
              Beyond coding, you'll usually find me working on creative ideas, organizing events, exploring design trends, or turning late-night thoughts into new projects.
            </div>
          </RetroWindow>
        </motion.div>

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0, ease: [0.22,1,0.36,1] }}
            style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--olive)', letterSpacing: '0.08em', marginBottom: 8 }}
          >
            // SYSTEM INFO
          </motion.div>

          {FACTS.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.1, ease: [0.22,1,0.36,1] }}
              style={{
                background: 'var(--window-bg)', border: '1px solid var(--window-border)',
                padding: 'clamp(10px,2vw,12px) clamp(12px,3vw,16px)',
                display: 'flex', alignItems: 'flex-start', gap: 14,
                boxShadow: '2px 2px 0 var(--window-border)',
              }}
            >
              <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <ScrambleText text={f.label} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px,2vw,13px)', color: 'var(--text)', marginTop: 2, wordBreak: 'break-word' }}>
                  <ScrambleText text={f.value} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
