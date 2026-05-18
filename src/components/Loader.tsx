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
    const t1 = setTimeout(() => setShowName(true), 1400)
    const t2 = setTimeout(() => setDone(true),     3500)
    const t3 = setTimeout(() => onComplete(),       4200)
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
            background: '#4E5A38',          /* plain flat background, no grid */
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Google Font — Great Vibes */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
          `}</style>

          <div style={{ position: 'relative', display: 'inline-block', zIndex: 2 }}>

            {/* ── PORTFOLIO — letter by letter ── */}
            <div
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(72px, 14vw, 160px)',
                color: '#C8D9A0',
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
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* ── PALAK JAISWAL — cursive, left-to-right reveal ── */}
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
                color: '#D95F5F',            /* warm cream — pops on #4E5A38 */
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              palak jaiswal
            </motion.div>

          </div>

          {/* ── TAGLINE ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showName ? 0.75 : 0, y: showName ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(13px, 2vw, 18px)',
              color: '#D95F5F',
              letterSpacing: '0.01em',
              marginTop: 28,
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 2,
            }}
          >
            From imagination to impactful visuals.
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}