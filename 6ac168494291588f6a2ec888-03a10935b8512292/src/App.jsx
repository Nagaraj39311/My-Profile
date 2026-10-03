import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact, { Footer } from './components/Contact'
export default function App() {
  const reduce = useReducedMotion(), glow = useRef(null)
  useEffect(() => {
    if (reduce) return
    const lenis = new Lenis({ anchors: true, lerp: 0.1 })
    let id; const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [reduce])
  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const m = (e) => { if (glow.current) glow.current.style.transform = `translate3d(${e.clientX - 200}px,${e.clientY - 200}px,0)` }
    window.addEventListener('pointermove', m, { passive: true })
    return () => window.removeEventListener('pointermove', m)
  }, [reduce])
  return (
    <>
      <div ref={glow} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-60 md:block"
        style={{ background: 'radial-gradient(circle, rgba(185,154,90,.18), rgba(15,22,51,.04) 50%, transparent 70%)', willChange: 'transform' }} />
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-cream">Skip to content</a>
      <Navbar />
      <main className="relative z-10">
        <Hero /><About /><Skills /><Projects /><Experience /><Achievements /><Contact />
      </main>
      <Footer />
    </>
  )
}
