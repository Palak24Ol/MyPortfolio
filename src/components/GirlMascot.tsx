import { useEffect, useRef } from 'react'

const SLIDE_DELAY = '1.2s'

export default function GirlMascot() {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const isMobile = window.innerWidth < 768
    const LARGE = isMobile ? 200 : 500
    const SMALL = isMobile ? 110 : 300

    const onScroll = () => {
      const el = imgRef.current
      if (!el) return
      const heroRect = hero.getBoundingClientRect()
      const progress = Math.min(Math.max(-heroRect.top / heroRect.height, 0), 1)
      el.style.width = `${LARGE - (LARGE - SMALL) * progress}px`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @keyframes slideInFromLeft {
          0%   { transform: translateX(-120%); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: translateX(0%); opacity: 1; }
        }
        @media (max-width: 768px) {
          .girl-mascot { width: 200px !important; }
        }
        @media (max-width: 480px) {
          .girl-mascot { width: 140px !important; }
        }
      `}</style>
      <img
        ref={imgRef}
        className="girl-mascot"
        src="/girl.png"
        alt="mascot"
        style={{
          position: 'fixed',
          bottom: '0px',
          left: '0px',
          width: 425,
          objectFit: 'contain',
          objectPosition: 'bottom',
          transition: 'width 0.2s ease-out',
          zIndex: 10,
          pointerEvents: 'none',
          userSelect: 'none',
          filter: 'drop-shadow(4px 0px 12px rgba(0,0,0,0.15))',
          animation: `slideInFromLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${SLIDE_DELAY} both`,
        }}
      />
    </>
  )
}
