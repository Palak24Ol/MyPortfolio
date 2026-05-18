import { useEffect, useState } from 'react'
import Lenis from 'lenis'

import CustomCursor from './components/CustomCursor'
import Loader       from './components/Loader'
import Navbar       from './components/Navbar'

import Hero     from './sections/Hero'
import About    from './sections/About'
import Skills   from './sections/Skills'
import Projects from './sections/Projects'
import Contact  from './sections/Contact'
import Footer   from './sections/Footer'
import Resume from './sections/Resume'

import Experience from './sections/Experience'
 


export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Lenis smooth scroll
  useEffect(() => {
    if (!loaded) return
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [loaded])

  return (
    <>
      {/* Boot loader */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* Overlays */}
      <div className="grid-bg"    aria-hidden="true" />
      <div className="scanlines"  aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main content (shown after load) */}
      {loaded && (
        <>
          <Navbar visible={loaded} />
             

          <main>
            <Hero />
            <Resume />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}
