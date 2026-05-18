import { useRef, useCallback } from 'react'

interface ScrambleTextProps {
  text: string
  style?: React.CSSProperties
  className?: string
}

export default function ScrambleText({ text, style, className }: ScrambleTextProps) {
  const elRef       = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scramble = useCallback(() => {
    const el = elRef.current
    if (!el) return

    if (intervalRef.current) clearInterval(intervalRef.current)

    const chars = text.split('')
    const total = chars.length

    const CYCLES_PER_CHAR = 8
    const FRAME_MS        = 45
    const STAGGER_MS      = 60

    // ── Only use letters actually present in the text ──────────────────────
    const charPool = [
      ...new Set(
        text
          .toUpperCase()
          .split('')
          .filter(c => /[A-Z0-9]/.test(c))
      ),
    ]
    // Fallback to a safe pool if text has no alphanumeric chars (e.g. pure symbols)
    const pool = charPool.length > 0 ? charPool : ['#', '@', '!', '?']

    const cycleCount = new Array(total).fill(0)
    const locked     = new Array(total).fill(false)

    // ── REVERSE order: last character locks in first ────────────────────────
    //    position (total-1) gets threshold = CYCLES_PER_CHAR (locks earliest)
    //    position 0         gets the highest threshold      (locks latest)
    const lockThreshold = chars.map((_, i) =>
      CYCLES_PER_CHAR + Math.floor(((total - 1 - i) * STAGGER_MS) / FRAME_MS)
    )

    intervalRef.current = setInterval(() => {
      let allLocked = true

      const display = chars.map((char, i) => {
        if (char === ' ') return ' '
        if (locked[i])   return char

        cycleCount[i]++

        if (cycleCount[i] >= lockThreshold[i]) {
          locked[i] = true
          return char
        }

        allLocked = false
        return pool[Math.floor(Math.random() * pool.length)]
      })

      el.innerText = display.join('')

      if (allLocked) {
        clearInterval(intervalRef.current!)
        el.innerText = text
      }
    }, FRAME_MS)
  }, [text])

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (elRef.current) elRef.current.innerText = text
  }, [text])

  return (
    <span
      ref={elRef}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className={className}
      style={{ cursor: 'default', display: 'inline-block', ...style }}
    >
      {text}
    </span>
  )
}