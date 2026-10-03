import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from 'framer-motion'
import { ArrowRightLeft, Github, ExternalLink, X } from 'lucide-react'
import { projects } from '../data/content'
import SectionHeading, { Reveal } from './SectionHeading'
import MagneticButton from './MagneticButton'
function Project({ p, i }) {
  const ref = useRef(null), lastTap = useRef(0), firstTapIndex = useRef(0), reduce = useReducedMotion()
  const [ok, setOk] = useState(true), [photoIndex, setPhotoIndex] = useState(0), [fullscreenPhoto, setFullscreenPhoto] = useState(null)
  const photos = p.images || [p.image]
  const activePhoto = photos[photoIndex]
  const mx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 }), my = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const rx = useTransform(my, [-0.5, 0.5], [6, -6]), ry = useTransform(mx, [-0.5, 0.5], [-8, 8])
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const py = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const move = (e) => { if (reduce || e.pointerType === 'touch') return; const r = ref.current.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5) }
  const reset = () => { mx.set(0); my.set(0) }
  const handlePreviewClick = (event) => {
    const now = Date.now()
    if (event.detail !== 0 && now - lastTap.current < 350) {
      lastTap.current = 0
      setPhotoIndex(firstTapIndex.current)
      setFullscreenPhoto(photos[firstTapIndex.current])
      return
    }
    firstTapIndex.current = photoIndex
    lastTap.current = event.detail === 0 ? 0 : now
    setOk(true)
    setPhotoIndex((index) => (index + 1) % photos.length)
  }
  useEffect(() => {
    if (!fullscreenPhoto) return
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => { if (event.key === 'Escape') setFullscreenPhoto(null) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [fullscreenPhoto])
  return (
    <Reveal>
      <article ref={ref} aria-labelledby={'p' + i} className={'grid items-center gap-8 md:grid-cols-2 md:gap-14 ' + (i % 2 ? 'md:[&>*:first-child]:order-2' : '')}>
        <div style={{ perspective: 1000 }} onPointerMove={move} onPointerLeave={reset}>
          <motion.div style={reduce ? undefined : { rotateX: rx, rotateY: ry }} className="group overflow-hidden rounded-[22px] border border-ink/10 bg-paper shadow-[0_30px_60px_-30px_rgba(15,22,51,.45)]">
            <div className="flex items-center gap-1.5 border-b border-ink/10 bg-cream px-4 py-3" aria-hidden="true">
              {[0, 1, 2].map((d) => <span key={d} className="h-2.5 w-2.5 rounded-full bg-ink/20" />)}
              <span className="ml-3 h-5 flex-1 rounded-md bg-ink/5" /></div>
            <div className="relative aspect-[16/10] overflow-hidden bg-ink/90">
                {ok ? <motion.div style={reduce || p.images ? undefined : { y: py, scale: 1.2 }} className="absolute inset-0">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img key={activePhoto} src={activePhoto} alt={p.title + ' project screenshot ' + (photoIndex + 1)}
                      loading="lazy" decoding="async" onError={() => setOk(false)}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -24, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduce ? { opacity: 0, transition: { duration: 0.15 } } : {
                        opacity: [1, 1, 0],
                        y: ['0%', '20%', '180%'],
                        rotate: [0, 5, 16],
                        scale: [1, 0.99, 0.94],
                        transition: { duration: 1, ease: [0.55, 0, 1, 0.45] },
                      }}
                      transition={{ duration: reduce ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: '50% -20%' }}
                      className={'absolute inset-0 h-full w-full ' + (p.images ? 'object-contain' : 'object-cover')} />
                  </AnimatePresence>
                </motion.div>
                  : <div className="serif grid h-full place-items-center p-6 text-center text-3xl text-cream/80">{p.title}</div>}
                {photos.length > 1 && ok && <button type="button"
                  onClick={handlePreviewClick}
                  aria-label="Show next photo; double-click or double-tap to view fullscreen"
                  aria-haspopup="dialog"
                  className="group/photo absolute inset-0 z-10 cursor-pointer touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-5px] focus-visible:outline-gold">
                  <span className="absolute bottom-4 right-4 inline-flex translate-y-1 items-center gap-2 rounded-full border border-white/30 bg-ink/75 px-3 py-2 text-xs font-semibold text-cream opacity-0 shadow-lg backdrop-blur transition duration-200 group-hover/photo:translate-y-0 group-hover/photo:opacity-100 group-focus-visible/photo:translate-y-0 group-focus-visible/photo:opacity-100">
                    <ArrowRightLeft size={14} aria-hidden="true" /> Tap to cycle · double-tap to expand
                  </span>
                </button>}
              </div>
          </motion.div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold">{p.n} / {String(projects.length).padStart(2, '0')} <span className="text-ink/40">— {p.subtitle.toUpperCase()}</span></p>
          <h3 id={'p' + i} className="h-display text-4xl md:text-5xl">{p.title}</h3>
          <p className="mt-4 max-w-md text-ink/75">{p.desc}</p>
          <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <MagneticButton href={p.github} external><Github size={16} /> GitHub</MagneticButton>
            {/* TODO: add live demo URL in content.js; button stays disabled until then */}
            {p.live ? <MagneticButton href={p.live} variant="ghost" external><ExternalLink size={16} /> Live demo</MagneticButton>
              : <button disabled className="inline-flex min-h-[48px] cursor-not-allowed items-center gap-2 rounded-2xl border border-dashed border-ink/25 px-6 text-sm font-semibold text-ink/50"><ExternalLink size={16} /> Live demo soon</button>}
          </div>
        </div>
        {fullscreenPhoto && createPortal(
          <AnimatePresence>
            <motion.div key="fullscreen-photo" role="dialog" aria-modal="true" aria-label="Fullscreen project photo"
              onClick={(event) => { if (event.target === event.currentTarget) setFullscreenPhoto(null) }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] grid place-items-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8">
              <motion.img src={fullscreenPhoto} alt={p.title + ' project screenshot fullscreen'}
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: reduce ? 0.12 : 0.25 }}
                className="max-h-full max-w-full object-contain" />
              <button type="button" autoFocus onClick={() => setFullscreenPhoto(null)}
                aria-label="Close fullscreen photo"
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-white sm:right-7 sm:top-7">
                <X size={22} aria-hidden="true" />
              </button>
              <span className="sr-only">Press Escape or click outside the photo to close.</span>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
      </article>
    </Reveal>
  )
}
export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-h" className="relative mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <span aria-hidden="true" className="absolute -left-4 top-1/2 hidden origin-center -rotate-90 whitespace-nowrap text-xs font-semibold tracking-[0.5em] text-ink/40 2xl:block">SELECTED WORK</span>
      <SectionHeading id="work-h" eyebrow="SELECTED WORK" parts={["Things I've ", 'built']} />
      <div className="space-y-24 md:space-y-36">{projects.map((p, i) => <Project key={p.n} p={p} i={i} />)}</div>
    </section>
  )
}
