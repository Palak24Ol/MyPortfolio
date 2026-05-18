import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'home',       label: 'Home',    emoji: '🏠', href: '#hero'       },
  { id: 'about',      label: 'About',   emoji: '👤', href: '#about'      },
  { id: 'skills',     label: 'Skills',  emoji: '⚡', href: '#skills'     },
  { id: 'experience', label: 'XP',      emoji: '📋', href: '#experience' },
  { id: 'projects',   label: 'Works',   emoji: '📁', href: '#projects'   },
  { id: 'contact',    label: 'Contact', emoji: '✉️', href: '#contact'    },
  { id: 'resume', label: 'Resume', emoji: '📄', href: '#resume' },
]

const SOCIAL_ITEMS = [
  {
    id: 'github', label: 'GitHub', href: 'https://github.com/Palak24Ol',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/palak-jaiswal',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'behance', label: 'Behance', href: 'https://behance.net/palakjaiswal',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029L23.726 17zm-8.738-4h4.738c-.099-1.546-1.062-2.409-2.365-2.409-1.397 0-2.244.876-2.373 2.409zM10.016 7.558A3.97 3.97 0 0010.016 7C7.467 7 7 9.819 7 9.819s-.387-2.819-2.7-2.819c-2.312 0-2.3 3.056-2.3 3.056L2 19.5h9.5l.516-3.5h-.999s-.017 1.5-1.01 1.5-1.01-1.5-1.01-1.5H7.5L7 11.5s0-2 1.5-2 1.5 2 1.5 2l.499 3H12l.516-3.5H11.5s0-2.5-1.484-2.442z"/>
      </svg>
    ),
  },
]

export default function Navbar({ visible }: { visible: boolean }) {
  const [active,  setActive]  = useState('home')
  const [tooltip, setTooltip] = useState<string | null>(null)

  useEffect(() => {
    const sections = NAV_ITEMS.map(i => document.querySelector(i.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActive(id)
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="taskbar"
          // ── Slides in from RIGHT after PORTFOLIO text finishes ──
          // PORTFOLIO last letter ~5.0s, loader ~4s → delay 1.5s after nav mounts
          initial={{ x: '110vw', opacity: 0 }}
          animate={{ x: 0,       opacity: 1 }}
          exit={{    x: '110vw', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 18,
            delay: 1.5,        // after loader + shapes + PORTFOLIO
          }}
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className="taskbar__item"
              style={{ position: 'relative' }}
              onMouseEnter={() => setTooltip(item.id)}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => scrollTo(item.href)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && scrollTo(item.href)}
            >
              <AnimatePresence>
                {tooltip === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{    opacity: 0, y: 4 }}
                    style={{
                      position: 'absolute', bottom: '100%',
                      left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--dark)', color: 'var(--cream)',
                      fontFamily: 'var(--font-mono)', fontSize: 10,
                      padding: '4px 8px', borderRadius: 2,
                      whiteSpace: 'nowrap', marginBottom: 8,
                      pointerEvents: 'none',
                    }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="taskbar__icon"
                whileHover={{ y: -6 }}
                style={{
                  background: active === item.id ? 'var(--amber-bright)' : 'var(--cream)',
                  color:      active === item.id ? 'var(--dark)'         : 'var(--olive)',
                }}
              >
                {item.emoji}
              </motion.div>
              <span className="taskbar__label">{item.label}</span>
            </div>
          ))}

          <div className="taskbar__divider" />

          {SOCIAL_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="taskbar__item"
              onMouseEnter={() => setTooltip(item.id)}
              onMouseLeave={() => setTooltip(null)}
              style={{ position: 'relative' }}
            >
              <AnimatePresence>
                {tooltip === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{    opacity: 0, y: 4 }}
                    style={{
                      position: 'absolute', bottom: '100%',
                      left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--dark)', color: 'var(--cream)',
                      fontFamily: 'var(--font-mono)', fontSize: 10,
                      padding: '4px 8px', borderRadius: 2,
                      whiteSpace: 'nowrap', marginBottom: 8,
                      pointerEvents: 'none',
                    }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="taskbar__icon"
                whileHover={{ y: -6 }}
                style={{ color: 'var(--olive)' }}
              >
                {item.svg}
              </motion.div>
              <span className="taskbar__label">{item.label}</span>
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}