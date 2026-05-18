import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

const BOOT_LINES = [
  'C:\\PALAK> INITIALIZING SYSTEM...',
  'C:\\PALAK> LOADING MODULES...',
  'C:\\PALAK> MOUNTING PROJECTS...',
  'C:\\PALAK> COMPILING SKILLS...',
  'C:\\PALAK> INJECTING AESTHETICS...',
  'C:\\PALAK> PORTFOLIO.EXE READY ✓',
]

export default function Loader({ onComplete }: LoaderProps) {
  const [lines,    setLines]    = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [done,     setDone]     = useState(false)
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    let lineIndex   = 0
    let progressVal = 0

    const addLine = () => {
      if (lineIndex >= BOOT_LINES.length) return
      setLines(prev => [...prev, BOOT_LINES[lineIndex]])
      lineIndex++

      const t = setTimeout(addLine, 340 + Math.random() * 220)
      timeouts.current.push(t)
    }

    // Animate progress bar
    const progressInterval = setInterval(() => {
      progressVal += 1.6
      setProgress(Math.min(progressVal, 100))
      if (progressVal >= 100) clearInterval(progressInterval)
    }, 35)

    // Start lines
    const t0 = setTimeout(addLine, 200)
    timeouts.current.push(t0)

    // All done → exit
    const t1 = setTimeout(() => {
      setDone(true)
      setTimeout(onComplete, 700)
    }, BOOT_LINES.length * 560 + 500)
    timeouts.current.push(t1)

    return () => {
      timeouts.current.forEach(clearTimeout)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Scanline flicker */}
          <div
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
              zIndex: 1,
            }}
          />

          {/* Logo / Title */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: 8 }}>
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(14px, 3vw, 20px)',
              color: 'var(--olive-light)',
              letterSpacing: '0.1em',
              lineHeight: 1.6,
            }}>
              PALAK.EXE
            </div>
            <div style={{
              fontFamily: 'var(--font-retro)',
              fontSize: '16px',
              color: 'var(--text-muted)',
              letterSpacing: '0.15em',
            }}>
              v1.0.0 — Full Stack Developer &amp; UI/UX Designer
            </div>
          </div>

          {/* Terminal lines */}
          <div className="loader__text" style={{ position: 'relative', zIndex: 2 }}>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                style={{ marginBottom: 4 }}
              >
                {line}
              </motion.div>
            ))}
            <span className="loader__cursor" />
          </div>

          {/* Progress bar */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 480, padding: '0 20px' }}>
            <div className="loader__bar-wrap">
              <div className="loader__bar" style={{ width: `${progress}%` }} />
            </div>
            <div className="loader__percent" style={{ textAlign: 'right', marginTop: 4 }}>
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
