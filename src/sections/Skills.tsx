import { motion } from 'framer-motion'
import RetroWindow from '../components/RetroWindow'
import ScrambleText from '../components/ScrambleText'

const SKILLS = [
  { name: 'Java',                       pct: 90, color: 'var(--olive)' },
  { name: 'React',                      pct: 82, color: 'var(--amber)' },
  { name: 'TypeScript / JavaScript',    pct: 78, color: 'var(--olive-light)' },
  { name: 'Node.js',                    pct: 75, color: 'var(--pink-accent)' },
  { name: 'SpringBoot',                 pct: 85, color: 'var(--amber-bright)' },
  { name: 'MongoDB / SQL',              pct: 75, color: 'var(--olive)' },
  { name: 'Python',                     pct: 70, color: 'var(--amber)' },
]

const TOOLS = [
  { name: 'GitHub',   emoji: '🐙' },
  { name: 'Postman',  emoji: '📮' },
  { name: 'Figma',    emoji: '🎨' },
  { name: 'IntelliJ', emoji: '🧠' },
  { name: 'VS Code',  emoji: '💙' },
  { name: 'Firebase', emoji: '🔥' },
  { name: 'Docker',   emoji: '🐳' },
  { name: 'Swagger',  emoji: '📘' },
  { name: 'Redis',    emoji: '🟥' },
  { name: 'MySQL',    emoji: '🛢️' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} style={{ marginBottom: 40 }}
      >
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // SKILLS.EXE
        </div>
        <ScrambleText
          text="What I Know"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }}
        />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))', gap: 'clamp(20px,4vw,32px)' }}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        >
          <RetroWindow title="C:\PALAK\skills.log" animate={false}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {SKILLS.map((skill, i) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px,2vw,12px)', color: 'var(--text)' }}>
                      <ScrambleText text={skill.name} />
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
                      <ScrambleText text={`${skill.pct}%`} />
                    </span>
                  </div>
                  <div style={{ height: 8, background: 'var(--cream-dark)', border: '1px solid var(--window-border)' }}>
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
                      style={{ height: '100%', background: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </RetroWindow>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
        >
          <RetroWindow title="C:\PALAK\tools" animate={false}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              TOOLS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'clamp(8px,2vw,12px)' }}>
              {TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -4, scale: 1.12 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'default' }}
                >
                  <div style={{
                    width: 'clamp(34px,6vw,44px)', height: 'clamp(34px,6vw,44px)',
                    background: 'var(--cream)', border: '1px solid var(--window-border)',
                    borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 'clamp(16px,3vw,20px)', boxShadow: '2px 2px 0 var(--window-border)',
                  }}>
                    {tool.emoji}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7, color: 'var(--text-muted)', textAlign: 'center' }}>
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
