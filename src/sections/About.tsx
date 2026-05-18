import { motion } from 'framer-motion'
import RetroWindow from '../components/RetroWindow'
import ScrambleText from '../components/ScrambleText'

const FACTS = [
  { icon: '🎓', label: 'Education', value: 'B.Tech Computer Science and Engineering, NIT PATNA' },
   
  { icon: '📍', label: 'Location', value: 'Gorakhpur, India' },
  { icon: '💼', label: 'Role', value: 'Java Developer and Full Stack Developer' },
  { icon: '☕', label: 'Fuel', value: 'Coffee & late nights' },
]

export default function About() {
  return (
    <section id="about" className="section">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: 40 }}
      >
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // ABOUT.TXT
        </div>
        {/* ── "About Me" heading already had ScrambleText ── */}
        <ScrambleText
          text="About Me"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }}
        />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, alignItems: 'start' }}>

        {/* LEFT — slides in from extreme left */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <RetroWindow title="C:\PALAK\about.txt" animate={false}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2, color: 'var(--text)' }}>
              <span style={{ color: 'var(--olive)' }}>{'>'} </span>
              Hey! I'm <strong>Palak Jaiswal</strong>, part developer,
part problem solver, and someone who genuinely
enjoys turning random ideas into real projects.
              <br /><br />
              <span style={{ color: 'var(--olive)' }}>{'>'} </span>
              I build 
 <span style={{ color: 'var(--amber)' }}> scalable backend systems</span>, <span style={{ color: 'var(--pink-accent)' }}>full-stack applications </span>and interactive products using Java, Spring Boot, React,
and modern web technologies.
              <br /><br />
              <span style={{ color: 'var(--olive)' }}>{'>'} </span>
               Beyond coding, you’ll usually find me working on creative
ideas, organizing events, exploring design trends, or
turning late-night thoughts into new projects.
            </div>
          </RetroWindow>
        </motion.div>

        {/* RIGHT — 4 fact boxes, label + value both scramble on hover */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--olive)', letterSpacing: '0.08em', marginBottom: 8 }}
          >
            // SYSTEM INFO
          </motion.div>

          {FACTS.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--window-bg)',
                border: '1px solid var(--window-border)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                boxShadow: '2px 2px 0 var(--window-border)',
              }}
            >
              <span style={{ fontSize: 22 }}>{f.icon}</span>
              <div>
                {/* ── label scrambles on hover ── */}
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <ScrambleText text={f.label} />
                </div>
                {/* ── value scrambles on hover ── */}
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text)', marginTop: 2 }}>
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