import { motion } from 'framer-motion'
import ScrambleText from '../components/ScrambleText'

export default function Resume() {
  return (
    <section id="resume" className="section">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: 48 }}
      >
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // RESUME.PDF
        </div>
        <ScrambleText
          text="My Resume"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }}
        />
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 48,
        alignItems: 'center',
      }}>

        {/* LEFT — Resume slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'var(--window-bg)',
            border: '1.5px solid var(--window-border)',
            boxShadow: '4px 4px 0 var(--window-border)',
            overflow: 'hidden',
          }}
        >
          {/* Titlebar */}
          <div style={{
            background: 'var(--window-title)',
            padding: '6px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderBottom: '1px solid var(--window-border)',
          }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#E05C5C', border: '1px solid rgba(0,0,0,0.15)' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#E8C040', border: '1px solid rgba(0,0,0,0.15)' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--olive-light)', border: '1px solid rgba(0,0,0,0.15)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--dark)', opacity: 0.6, marginLeft: 4 }}>
              Palak_Jaiswal_Resume.pdf
            </span>
          </div>

          {/* Resume image preview */}
          <img
            src="/resume.png"
            alt="Palak Jaiswal Resume"
            style={{ width: '100%', display: 'block' }}
          />

          {/* Download button */}
          <div style={{
            padding: '16px 20px',
            borderTop: '1px solid var(--window-border)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            {/* Added the missing '<a' right here */}
            <a 
              href="/resume.pdf"
              download="Palak_Jaiswal_Resume.pdf"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                padding: '10px 20px',
                background: 'var(--olive)',
                color: 'var(--cream)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: 2,
                boxShadow: '3px 3px 0 var(--olive-dark)',
              }}
            >
              ↓ Download PDF
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Photo + doodles slides in from right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          {/* Doodle — star top left */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', top: -24, left: 10,
              fontFamily: 'var(--font-serif)', fontSize: 36,
              color: 'var(--amber)', zIndex: 2, userSelect: 'none',
            }}
          >
            ✦
          </motion.div>

          {/* Doodle — flower right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: 40, right: -10,
              fontFamily: 'var(--font-serif)', fontSize: 28,
              color: 'var(--olive)', zIndex: 2, userSelect: 'none',
            }}
          >
            ✿
          </motion.div>

        

          

          {/* Photo frame */}
          <div style={{
            position: 'relative',
            border: '3px solid var(--olive)',
            boxShadow: '6px 6px 0 var(--amber)',
            overflow: 'hidden',
            maxWidth: 320,
            width: '100%',
            zIndex: 1,
          }}>
            <img
              src="/photo.png"
              alt="Palak Jaiswal"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(107,122,80,0.7))',
              padding: '32px 16px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--cream)',
              letterSpacing: '0.08em',
            }}>
              Palak Jaiswal — Full Stack Dev & UI/UX Designer
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}