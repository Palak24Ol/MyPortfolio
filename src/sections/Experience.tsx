import { motion } from 'framer-motion'
import ScrambleText from '../components/ScrambleText'

const TIMELINE = [
  {
    type: 'work', role: 'Web Developer', org: 'THINK INDIA CLUB, NITP',
    period: 'Dec 2023 — Present',
    desc: 'Built responsive web interfaces, collaborated with designers on component libraries, and shipped features using React and Node.js in an agile team.',
    tags: ['React', 'Node.js', 'REST APIs'], icon: '🏢', color: 'var(--olive)',
  },
  {
    type: 'work', role: 'UI/UX Designer', org: 'DesCo, NITP',
    period: 'Nov 2023 — Present',
    desc: 'Designing and building end-to-end digital products for clients — from wireframes in Figma to deployed React apps. Focus on clean UI, smooth animations, and great UX.',
    tags: ['Figma', 'UI/UX', 'Prototyping'], icon: '💼', color: 'var(--amber)',
  },
  {
    type: 'edu', role: 'B.Tech — Computer Science', org: 'NATIONAL INSTITUTE OF TECHNOLOGY, PATNA',
    period: '2023 — Present',
    desc: 'Studying core CS fundamentals — data structures, algorithms, databases, and software engineering. Active in coding clubs and hackathons.',
    tags: ['DSA', 'DBMS', 'OS', 'Networking'], icon: '🎓', color: 'var(--pink-accent)',
  },
  {
    type: 'edu', role: 'Higher Secondary (12th)', org: 'G N National Public School, Gorakhpur',
    period: '2022', desc: 'Scored 93.4% in PCM with Computer Science in CBSE Board exams.', tags: [], icon: '📚', color: 'var(--olive-light)',
  },
  {
    type: 'edu', role: 'Secondary (10th)', org: 'Little Flower School, Gorakhpur',
    period: '2020', desc: 'Scored 95.6% in ICSE Board exams.', tags: [], icon: '📚', color: 'var(--amber-bright)',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} style={{ marginBottom: 56 }}
      >
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // EXPERIENCE.LOG
        </div>
        <ScrambleText
          text="Timeline"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }}
        />
      </motion.div>

      <div style={{ position: 'relative', maxWidth: 720 }}>
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22,1,0.36,1] }}
          style={{
            position: 'absolute', left: 19, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(to bottom, var(--olive), var(--olive-light), var(--window-border))',
            transformOrigin: 'top',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px,4vw,36px)' }}>
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
              style={{ display: 'flex', gap: 'clamp(14px,3vw,28px)', alignItems: 'flex-start' }}
            >
              {/* Icon dot */}
              <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--bg)', border: `2px solid ${item.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, boxShadow: `0 0 0 4px var(--bg)`,
                  }}
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                style={{
                  flex: 1, minWidth: 0,
                  background: 'var(--window-bg)', border: '1px solid var(--window-border)',
                  boxShadow: `3px 3px 0 var(--window-border)`,
                  padding: 'clamp(12px,2.5vw,16px) clamp(14px,3vw,20px)',
                  borderLeft: `3px solid ${item.color}`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'clamp(11px,2.5vw,14px)', color: 'var(--dark)' }}>
                      <ScrambleText text={item.role} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px,2vw,11px)', color: item.color, marginTop: 2, letterSpacing: '0.04em' }}>
                      @ <ScrambleText text={item.org} />
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)',
                    background: 'var(--cream-dark)', border: '1px solid var(--window-border)',
                    padding: '4px 8px', letterSpacing: '0.08em', whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    {item.period}
                  </div>
                </div>

                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px,2vw,11px)', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: 12 }}>
                  {item.desc}
                </p>

                {item.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {item.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, padding: '3px 8px', border: `1px solid ${item.color}`, color: item.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
