import { motion } from 'framer-motion'
import ScrambleText from '../components/ScrambleText'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // RESUME.PDF
        </div>
        <ScrambleText text="My Resume" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px,100%), 1fr))', gap: 'clamp(28px,5vw,48px)', alignItems: 'center' }}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
          style={{ background: 'var(--window-bg)', border: '1.5px solid var(--window-border)', boxShadow: '4px 4px 0 var(--window-border)', overflow: 'hidden' }}
        >
          <div style={{ background: 'var(--window-title)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--window-border)' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#E05C5C' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#E8C040' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--olive-light)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px,2vw,11px)', color: 'var(--dark)', opacity: 0.6, marginLeft: 4 }}>
              <ScrambleText text="Palak_Jaiswal_Resume.pdf" />
            </span>
          </div>

          <img src="/resume.png" alt="Palak Jaiswal Resume" style={{ width: '100%', display: 'block' }} />

          <div style={{ padding: 'clamp(12px,2.5vw,16px) clamp(14px,3vw,20px)', borderTop: '1px solid var(--window-border)', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href="/resume.pdf" download="Palak_Jaiswal_Resume.pdf"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '10px 20px', background: 'var(--olive)', color: 'var(--cream)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 2, boxShadow: '3px 3px 0 var(--olive-dark)' }}
            >
              <ScrambleText text="↓ Download PDF" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22,1,0.36,1] }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: -24, left: 10, fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px,4vw,36px)', color: 'var(--amber)', zIndex: 2, userSelect: 'none' }}>
            ✦
          </motion.div>
          <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: 40, right: -10, fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px,3.5vw,28px)', color: 'var(--olive)', zIndex: 2, userSelect: 'none' }}>
            ✿
          </motion.div>
          <motion.div animate={{ rotate: [-8,8,-8] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', bottom: 20, left: -10, fontFamily: 'var(--font-pixel)', fontSize: 'clamp(8px,1.5vw,11px)', color: 'var(--pink-accent)', zIndex: 2, userSelect: 'none' }}>
            {'{ code }'}
          </motion.div>
          <motion.div animate={{ scale: [1,1.1,1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', bottom: -10, right: 20, fontSize: 'clamp(20px,3.5vw,28px)', zIndex: 2, userSelect: 'none' }}>
            ☕
          </motion.div>

          <div style={{ position: 'relative', border: '3px solid var(--olive)', boxShadow: '6px 6px 0 var(--amber)', overflow: 'hidden', maxWidth: 320, width: '100%', zIndex: 1 }}>
            <img src="/photo.png" alt="Palak Jaiswal" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(107,122,80,0.7))', padding: 'clamp(20px,4vw,32px) 16px 14px', fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px,2vw,12px)', color: 'var(--cream)', letterSpacing: '0.08em' }}>
              <ScrambleText text="Palak Jaiswal — Full Stack Dev & UI/UX Designer" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
