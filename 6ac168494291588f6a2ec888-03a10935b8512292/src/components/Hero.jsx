import { useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Volume2, VolumeX, Captions } from 'lucide-react'
import { site } from '../data/content'
import MagneticButton from './MagneticButton'
export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, -70]), scale = useTransform(scrollY, [0, 700], [1, 0.8])
  const x = useTransform(scrollY, [0, 700], [0, 60]), opacity = useTransform(scrollY, [0, 650], [1, 0])
  const [stage, setStage] = useState(site.video ? 'video' : 'image') // video -> image -> placeholder
  const [muted, setMuted] = useState(true), [cc, setCc] = useState(false)
  const [a, accent] = site.heroTitle
  const rise = (d) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] } })
  return (
    <section id="top" aria-labelledby="hero-h" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-10">
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[19vw] font-extrabold leading-none tracking-tighter text-ink/[0.045]">{site.watermark}</span>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p {...rise(0.1)} className="mb-6 text-xs font-semibold tracking-[0.25em] text-ink/70">{site.eyebrow}</motion.p>
          <motion.h1 id="hero-h" {...rise(0.2)} className="h-display text-[clamp(3.2rem,9vw,7.5rem)]">
            {a}<span className="serif">{accent}</span><span className="text-gold">.</span></motion.h1>
          <motion.p {...rise(0.35)} className="mt-6 max-w-lg text-lg text-ink/75 md:text-xl">{site.subtitle}</motion.p>
          <motion.div {...rise(0.5)} className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="#contact">Contact me <span className="transition-transform group-hover:translate-x-1">→</span></MagneticButton>
            <MagneticButton href="#work" variant="ghost">View my work <span className="transition-transform group-hover:translate-y-1">↓</span></MagneticButton>
          </motion.div>
          <motion.p {...rise(0.65)} className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-[0.2em]">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600/60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" /></span>{site.availability}</motion.p>
        </div>
        <motion.div style={reduce ? undefined : { y, x, scale, opacity }} className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute inset-0 rounded-[28px] border border-ink/10 bg-paper/60" aria-hidden="true" />
          {stage === 'video' && (
            <video className="absolute inset-0 h-full w-full object-contain" autoPlay loop muted={muted} playsInline preload="none"
              aria-label="Animated 3D developer character" onError={() => setStage('image')}>
              <source src={site.video} type="video/webm" onError={() => setStage('image')} />
            </video>
          )}
          {stage === 'image' && (
            <img src={site.poster} alt="Portrait of Nagaraj Kalburgi" loading="lazy" decoding="async"
              className="absolute inset-0 h-full w-full object-contain" onError={() => setStage('placeholder')} />
          )}
          {stage === 'placeholder' && (
            <div className="absolute inset-0 grid place-items-center p-8 text-center text-sm text-ink/50">
              <div><div className="serif mx-auto mb-3 grid h-24 w-24 place-items-center rounded-full bg-ink text-4xl text-cream">NK</div>
                Character area — add <code>character.webm</code> or <code>character.png</code> to <code>public/assets/</code></div></div>
          )}
          {stage === 'video' && (
            <>
              {cc && <p role="status" className="glass absolute inset-x-4 bottom-16 rounded-xl px-3 py-2 text-center text-sm">{site.captionText}</p>}
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="glass grid h-11 w-11 place-items-center rounded-full" aria-label={muted ? 'Unmute' : 'Mute'} onClick={() => setMuted(!muted)}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
                <button className="glass grid h-11 w-11 place-items-center rounded-full" aria-pressed={cc} aria-label="Toggle captions" onClick={() => setCc(!cc)}><Captions size={18} /></button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
