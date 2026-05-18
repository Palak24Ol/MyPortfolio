import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface RetroWindowProps {
  title: string
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  animate?: boolean
  delay?: number
}

export default function RetroWindow({
  title,
  children,
  className = '',
  style,
  animate = true,
  delay = 0,
}: RetroWindowProps) {
  const Wrapper = animate ? motion.div : 'div'
  const animProps = animate
    ? {
        initial: { opacity: 0, y: 24, scale: 0.97 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
      }
    : {}

  return (
    // @ts-expect-error — motion.div vs div props
    <Wrapper className={`retro-window ${className}`} style={style} {...animProps}>
      {/* Title bar */}
      <div className="retro-window__titlebar">
        <div className="retro-window__btn retro-window__btn--red" />
        <div className="retro-window__btn retro-window__btn--yellow" />
        <div className="retro-window__btn retro-window__btn--green" />
        <span className="retro-window__titlebar-title">{title}</span>
      </div>

      {/* Body */}
      <div className="retro-window__body">
        {children}
      </div>
    </Wrapper>
  )
}
