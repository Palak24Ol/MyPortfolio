import { motion } from 'framer-motion'
import HeroCanvas from '../components/HeroCanvas'
import RetroWindow from '../components/RetroWindow'
import FolderIcon from '../components/FolderIcon'
import GirlMascot from '../components/GirlMascot'

const LETTERS = 'PORTFOLIO'.split('')
const TITLE_START  = 4.2
const WINDOW_START = 5.0
const FOLDER_START = 5.6

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'visible' }}>

      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <HeroCanvas />
      </div>

      <GirlMascot />

      <div style={{
        position: 'relative', zIndex: 2,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(60px,8vw,80px) clamp(16px,4vw,24px) 120px',
        gap: 'clamp(16px,3vw,32px)',
      }}>

        {/* PORTFOLIO letters */}
        <div style={{ display: 'flex', gap: '0.02em', alignItems: 'center', flexWrap: 'nowrap' }}>
          {LETTERS.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: TITLE_START + i * 0.07, duration: 0.6, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -10, rotate: -3, color: 'var(--olive)', transition: { duration: 0.2 } }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 7.5vw, 120px)',
                color: 'var(--dark)', lineHeight: 1,
                display: 'inline-block', cursor: 'default', userSelect: 'none',
              }}
            >
              {l}
            </motion.span>
          ))}
        </div>

        {/* Retro window */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: WINDOW_START, duration: 0.7, ease: [0.22,1,0.36,1] }}
          style={{ width: 'min(480px, 92vw)' }}
        >
          <RetroWindow title="C:\PALAK\portfolio" animate={false}>
            <div style={{ display: 'flex', gap: 'clamp(10px,3vw,16px)', alignItems: 'center' }}>
              <div style={{
                width: 'clamp(44px,8vw,64px)', height: 'clamp(44px,8vw,64px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--olive), var(--amber))',
                flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'clamp(18px,4vw,28px)', fontFamily: 'var(--font-serif)',
                color: 'var(--cream)', border: '2px solid var(--window-border)',
              }}>P</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px,2vw,12px)', color: 'var(--text-muted)', marginBottom: 4 }}>
                  hi! i'm
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px,4vw,28px)', color: 'var(--amber)', lineHeight: 1.1 }}>
                  Palak Jaiswal
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px,1.8vw,11px)', color: 'var(--olive)', marginTop: 4, letterSpacing: '0.08em' }}>
                  FULL STACK DEV · JAVA DEVELOPER
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px,1.6vw,10px)', color: 'var(--text-muted)', marginTop: 6, fontStyle: 'italic' }}>
                  "Building things that look good &amp; work even better"
                </div>
              </div>
            </div>
          </RetroWindow>
        </motion.div>

        {/* Folder icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: FOLDER_START, duration: 0.5, ease: [0.22,1,0.36,1] }}
          style={{ display: 'flex', gap: 'clamp(16px,4vw,32px)', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {[
            { label: 'resume',  href: '#resume'   },
            { label: 'contact', href: '#contact'  },
            { label: 'works',   href: '#projects' },
          ].map(item => (
            <FolderIcon
              key={item.label}
              label={item.label}
              onClick={() => {
                const el = document.querySelector(item.href)
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: FOLDER_START + 0.4 }}
          style={{
            position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            scroll down
          </span>
          <motion.div
            animate={{ y: [0,6,0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: FOLDER_START + 0.4 }}
            style={{ fontSize: 14, color: 'var(--olive)' }}
          >↓</motion.div>
        </motion.div>
      </div>
    </section>
  )
}
