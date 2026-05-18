import { useState } from 'react'
import { motion } from 'framer-motion'
import RetroWindow from '../components/RetroWindow'
import ScrambleText from '../components/ScrambleText'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#1E1C14', border: '1px solid var(--olive-dark)',
    color: 'var(--olive-light)', fontFamily: 'var(--font-mono)',
    fontSize: 'clamp(12px,2.5vw,13px)', padding: '10px 14px',
    outline: 'none', borderRadius: 0, caretColor: 'var(--olive-light)',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
    textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6, display: 'block',
  }

  return (
    <section id="contact" className="section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--olive)', letterSpacing: '0.1em', marginBottom: 12 }}>
          // CONTACT.EXE
        </div>
        <ScrambleText text="Say Hello!" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--dark)', lineHeight: 1 }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px,100%), 1fr))', gap: 'clamp(20px,4vw,32px)', alignItems: 'start' }}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        >
          <RetroWindow title="C:\PALAK\contact.exe" animate={false}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
                <div style={{ fontFamily: 'var(--font-retro)', fontSize: 22, color: 'var(--olive)', marginBottom: 8 }}>MESSAGE SENT!</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{'>'} I'll get back to you soon. Thanks!</div>
              </motion.div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={labelStyle}>{'>'} your name</label>
                  <input style={inputStyle} name="name" value={form.name} onChange={handleChange} placeholder="Palak Jaiswal" autoComplete="off" />
                </div>
                <div>
                  <label style={labelStyle}>{'>'} your email</label>
                  <input style={inputStyle} name="email" type="email" value={form.email} onChange={handleChange} placeholder="hello@example.com" />
                </div>
                <div>
                  <label style={labelStyle}>{'>'} message</label>
                  <textarea style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }} name="message" value={form.message} onChange={handleChange} placeholder="Let's build something cool together..." />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={handleSubmit}
                  style={{ background: 'var(--olive)', color: 'var(--cream)', border: 'none', padding: '12px 24px', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', cursor: 'pointer', textTransform: 'uppercase', borderRadius: 2, boxShadow: '3px 3px 0 var(--olive-dark)' }}
                >
                  ↗ SEND MESSAGE
                </motion.button>
              </div>
            )}
          </RetroWindow>
        </motion.div>

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0, ease: [0.22,1,0.36,1] }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(11px,2.5vw,13px)', color: 'var(--text)', lineHeight: 2 }}
          >
            <span style={{ color: 'var(--olive)' }}>{'>'} </span>
            Open to <span style={{ color: 'var(--amber)' }}>freelance projects</span>, full-time roles, and interesting collaborations.
            <br />
            <span style={{ color: 'var(--olive)' }}>{'>'} </span>
            I respond within <span style={{ color: 'var(--pink-accent)' }}>24 hours</span>. Let's create something awesome!
          </motion.div>

          {[
            { icon: '📧', label: 'Email',    value: 'heyitspalakjaiswal24@gmail.com', href: 'mailto:heyitspalakjaiswal24@gmail.com' },
            { icon: '🐙', label: 'GitHub',   value: 'github.com/Palak24Ol',           href: 'https://github.com/Palak24Ol' },
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/palakjaiswal2401', href: 'https://www.linkedin.com/in/palakjaiswal2401' },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.1, ease: [0.22,1,0.36,1] }}
              whileHover={{ x: 4 }}
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 'clamp(10px,2vw,12px) clamp(12px,3vw,16px)', background: 'var(--window-bg)', border: '1px solid var(--window-border)', textDecoration: 'none', boxShadow: '2px 2px 0 var(--window-border)' }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <ScrambleText text={item.label} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px,2vw,12px)', color: 'var(--olive)', wordBreak: 'break-all' }}>
                  <ScrambleText text={item.value} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
