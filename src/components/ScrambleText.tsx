
import { useRef, useCallback } from 'react'

// Only uppercase — matches locomotive's typography feel
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

interface ScrambleTextProps {
  text: string
  style?: React.CSSProperties
  className?: string
}

export default function ScrambleText({ text, style, className }: ScrambleTextProps) {
  const elRef      = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scramble = useCallback(() => {
    const el = elRef.current
    if (!el) return

    // Clear any running scramble
    if (intervalRef.current) clearInterval(intervalRef.current)

    const chars    = text.split('')
    const total    = chars.length
    // How many random cycles each character goes through before locking
    const CYCLES_PER_CHAR = 8
    // ms between each random frame — this is what makes it readable/slow like loco
    const FRAME_MS = 45
    // ms of stagger delay before each successive char starts locking in
    const STAGGER_MS = 60

    // Track how many cycles each position has done
    const cycleCount  = new Array(total).fill(0)
    // Track which positions have locked in
    const locked      = new Array(total).fill(false)

    // Stagger: position i locks after i * STAGGER_MS extra cycles worth of time
    const lockThreshold = chars.map((_, i) => CYCLES_PER_CHAR + Math.floor((i * STAGGER_MS) / FRAME_MS))

    intervalRef.current = setInterval(() => {
      let allLocked = true

      const display = chars.map((char, i) => {
        if (char === ' ') return ' '
        if (locked[i])   return char   // already settled — show real char

        cycleCount[i]++

        if (cycleCount[i] >= lockThreshold[i]) {
          locked[i] = true
          return char  // lock in
        }

        allLocked = false
        // Show a random character while cycling
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      })

      el.innerText = display.join('')

      if (allLocked) {
        clearInterval(intervalRef.current!)
        el.innerText = text  // snap to original (preserves original casing)
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
 
