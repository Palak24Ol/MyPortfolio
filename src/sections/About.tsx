import { motion } from 'framer-motion'
import RetroWindow from '../components/RetroWindow'
import ScrambleText from '../components/ScrambleText'

const FACTS = [
  { icon: '🎓', label: 'Education', value: 'B.Tech Computer Science' },
  { icon: '📍', label: 'Location', value: 'India' },
  { icon: '💼', label: 'Role', value: 'Full Stack Dev + UI/UX Designer' },
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
        <ScrambleText
          text="About Me"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }}
        />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, alignItems: 'start' }}>
        <RetroWindow title="C:\PALAK\about.txt" delay={0}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2, color: 'var(--text)' }}>
            <span style={{ color: 'var(--olive)' }}>{'>'} </span>
            Hey! I'm <strong>Palak Jaiswal</strong>, a passionate Full Stack Developer and UI/UX Designer who loves crafting digital experiences that are both beautiful and functional.
            <br /><br />
            <span style={{ color: 'var(--olive)' }}>{'>'} </span>
            I blend <span style={{ color: 'var(--amber)' }}>clean code</span> with <span style={{ color: 'var(--pink-accent)' }}>thoughtful design</span> — turning ideas into polished products.
            <br /><br />
            <span style={{ color: 'var(--olive)' }}>{'>'} </span>
            When I'm not coding, I'm exploring UI trends, playing with animations, or sketching out the next wild idea.
          </div>
        </RetroWindow>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--olive)', letterSpacing: '0.08em', marginBottom: 8 }}
          >
            // SYSTEM INFO
          </motion.div>
          {FACTS.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ background: 'var(--window-bg)', border: '1px solid var(--window-border)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: '2px 2px 0 var(--window-border)' }}
            >
              <span style={{ fontSize: 22 }}>{f.icon}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{f.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text)', marginTop: 2 }}>{f.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
