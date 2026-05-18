import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

const LETTERS = 'portfolio'.split('')

export default function Loader({ onComplete }: LoaderProps) {
  const [showName, setShowName] = useState(false)
  const [done,     setDone]     = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowName(true), 1400)  // name slides in
    const t2 = setTimeout(() => setDone(true),     5200)  // begin exit (was 3500 — too fast)
    const t3 = setTimeout(() => onComplete(),       5900)  // hand off to app
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#4E5A38',          /* --dark — portfolio's darkest tone */
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Google Font — Great Vibes */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

            /* Graph-paper grid — matches the portfolio aesthetic */
            .loader-grid {
              position: absolute;
              inset: 0;
              background-image:
                linear-gradient(rgba(107,122,80,0.10) 1px, transparent 1px),
                linear-gradient(90deg, rgba(107,122,80,0.10) 1px, transparent 1px);
              background-size: 36px 36px;
              pointer-events: none;
            }

            /* Subtle vignette so grid fades at edges */
            .loader-vignette {
              position: absolute;
              inset: 0;
              background: radial-gradient(ellipse at center, transparent 40%, #1E1C14 100%);
              pointer-events: none;
            }
          `}</style>

          {/* Grid overlay */}
          <div className="loader-grid" />
          <div className="loader-vignette" />

          {/* ── Animated olive corner accent — top-left ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.18, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', top: -60, left: -60,
              width: 280, height: 280,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #6B7A50 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* ── Animated amber accent — bottom-right ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.14, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', bottom: -80, right: -80,
              width: 360, height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #D4920A 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* ── Main content ── */}
          <div style={{ position: 'relative', display: 'inline-block', zIndex: 2 }}>

            {/* PORTFOLIO — letter by letter drop-in */}
            <div
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(72px, 14vw, 160px)',
                color: '#F2EDE4',            /* --cream — main portfolio background colour */
                lineHeight: 1,
                letterSpacing: '-0.02em',
                userSelect: 'none',
                display: 'flex',
              }}
            >
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    /* Every other letter gets a subtle olive tint for depth */
                    color: i % 3 === 0 ? '#D4920A' : '#F2EDE4',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* PALAK JAISWAL — cursive left-to-right reveal */}
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
              animate={
                showName
                  ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 }
                  : { clipPath: 'inset(0 100% 0 0)', opacity: 1 }
              }
              transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                top: '72%',
                left: '4%',
                zIndex: 2,
                fontFamily: '"Great Vibes", cursive',
                fontSize: 'clamp(30px, 5.5vw, 64px)',
                color: '#E8E0D0',            /* --pink-accent */
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              palak jaiswal
            </motion.div>

          </div>

          {/* ── TAGLINE — fades in after name, stays long enough to read ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showName ? 0.80 : 0, y: showName ? 0 : 10 }}
            transition={{ duration: 0.8, delay: showName ? 0.5 : 0 }}  /* 0.5s after name appears */
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(13px, 2vw, 18px)',
              color: '#6B7A50',             /* --olive */
              letterSpacing: '0.04em',
              marginTop: 36,
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
            }}
          >
            From imagination to impactful visuals.
          </motion.div>

           

        </motion.div>
      )}
    </AnimatePresence>
  )
}