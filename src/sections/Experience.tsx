import { motion } from 'framer-motion'
import ScrambleText from '../components/ScrambleText'

const TIMELINE = [
  {
    type: 'work',
    role: 'UI/UX Designer & Frontend Dev',
    org: 'Freelance',
    period: '2023 — Present',
    desc: 'Designing and building end-to-end digital products for clients — from wireframes in Figma to deployed React apps. Focus on clean UI, smooth animations, and great UX.',
    tags: ['React', 'Figma', 'Tailwind', 'Framer Motion'],
    icon: '💼',
    color: 'var(--olive)',
  },
  {
    type: 'work',
    role: 'Web Development Intern',
    org: 'Your Company Name',
    period: 'Jun 2023 — Aug 2023',
    desc: 'Built responsive web interfaces, collaborated with designers on component libraries, and shipped features using React and Node.js in an agile team.',
    tags: ['React', 'Node.js', 'REST APIs'],
    icon: '🏢',
    color: 'var(--amber)',
  },
  {
    type: 'edu',
    role: 'B.Tech — Computer Science',
    org: 'Your University Name',
    period: '2021 — 2025',
    desc: 'Studying core CS fundamentals — data structures, algorithms, databases, and software engineering. Active in coding clubs and hackathons.',
    tags: ['DSA', 'DBMS', 'OS', 'Networking'],
    icon: '🎓',
    color: 'var(--pink-accent)',
  },
  {
    type: 'edu',
    role: 'Higher Secondary (12th)',
    org: 'Your School Name',
    period: '2019 — 2021',
    desc: 'Science stream with Computer Science. Scored well and developed an early interest in programming and design.',
    tags: ['Computer Science', 'Mathematics'],
    icon: '📚',
    color: 'var(--olive-light)',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: 56 }}
      >
        <div style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 10,
          color: 'var(--olive)',
          letterSpacing: '0.1em',
          marginBottom: 12,
        }}>
          // EXPERIENCE.LOG
        </div>
        {/* ── section heading ── */}
        <ScrambleText
          text="Timeline"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 6vw, 64px)',
            color: 'var(--dark)',
            lineHeight: 1,
          }}
        />
      </motion.div>

      {/* Timeline */}
      <div style={{ position: 'relative', maxWidth: 720 }}>

        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            left: 19,
            top: 8,
            bottom: 8,
            width: 2,
            background: 'linear-gradient(to bottom, var(--olive), var(--olive-light), var(--window-border))',
            transformOrigin: 'top',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}
            >
              {/* Dot + icon */}
              <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    border: `2px solid ${item.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    boxShadow: `0 0 0 4px var(--bg)`,
                  }}
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  flex: 1,
                  background: 'var(--window-bg)',
                  border: '1px solid var(--window-border)',
                  boxShadow: `3px 3px 0 var(--window-border)`,
                  padding: '16px 20px',
                  borderLeft: `3px solid ${item.color}`,
                }}
              >
                {/* Top row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginBottom: 6,
                }}>
                  <div>
                    {/* ── role heading scrambles on hover ── */}
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: 14,
                      color: 'var(--dark)',
                    }}>
                      <ScrambleText text={item.role} />
                    </div>
                    {/* ── org name scrambles on hover ── */}
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: item.color,
                      marginTop: 2,
                      letterSpacing: '0.04em',
                    }}>
                      @ <ScrambleText text={item.org} />
                    </div>
                  </div>

                  {/* Period badge */}
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    color: 'var(--text-muted)',
                    background: 'var(--cream-dark)',
                    border: '1px solid var(--window-border)',
                    padding: '4px 10px',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.period}
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--text-muted)',
                  lineHeight: 1.9,
                  marginBottom: 12,
                }}>
                  {item.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9,
                        padding: '3px 8px',
                        border: `1px solid ${item.color}`,
                        color: item.color,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}