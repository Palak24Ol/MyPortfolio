import { motion } from 'framer-motion'
import RetroWindow from '../components/RetroWindow'
import ScrambleText from '../components/ScrambleText'

const SKILLS = [
  { name: 'React / Next.js',   pct: 90, color: 'var(--olive)' },
  { name: 'TypeScript',        pct: 82, color: 'var(--amber)' },
  { name: 'Node.js / Express', pct: 78, color: 'var(--olive-light)' },
  { name: 'UI/UX Design',      pct: 88, color: 'var(--pink-accent)' },
  { name: 'Figma',             pct: 85, color: 'var(--amber-bright)' },
  { name: 'MongoDB / SQL',     pct: 75, color: 'var(--olive)' },
]

const TOOLS = [
  { name: 'GitHub',   emoji: '🐙' },
  { name: 'VS Code',  emoji: '💙' },
  { name: 'Figma',    emoji: '🎨' },
  { name: 'Canva',    emoji: '✏️' },
  { name: 'Tailwind', emoji: '🌊' },
  { name: 'Three.js', emoji: '🔷' },
  { name: 'GSAP',     emoji: '⚡' },
  { name: 'Framer',   emoji: '🖼️' },
  { name: 'Word',     emoji: '📄' },
  { name: 'Excel',    emoji: '📊' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: 40 }}
      >
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // SKILLS.EXE
        </div>
        {/* ── heading ── */}
        <ScrambleText
          text="What I Know"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }}
        />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>

        {/* LEFT — skill bars */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <RetroWindow title="C:\PALAK\skills.log" animate={false}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {SKILLS.map((skill, i) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    {/* ── skill name scrambles on hover ── */}
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text)' }}>
                      <ScrambleText text={skill.name} />
                    </span>
                    {/* ── percentage scrambles on hover ── */}
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
                      <ScrambleText text={`${skill.pct}%`} />
                    </span>
                  </div>
                  <div style={{ height: 8, background: 'var(--cream-dark)', border: '1px solid var(--window-border)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ height: '100%', background: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </RetroWindow>
        </motion.div>

        {/* RIGHT — tools grid */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <RetroWindow title="C:\PALAK\tools" animate={false}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              TOOLS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
              {TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -4, scale: 1.12 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'default' }}
                >
                  <div style={{ width: 44, height: 44, background: 'var(--cream)', border: '1px solid var(--window-border)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '2px 2px 0 var(--window-border)' }}>
                    {tool.emoji}
                  </div>
                  {/* ── tool name scrambles on hover ── */}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--text-muted)', textAlign: 'center' }}>
                    <ScrambleText text={tool.name} />
                  </span>
                </motion.div>
              ))}
            </div>
          </RetroWindow>
        </motion.div>

      </div>
    </section>
  )
}