import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { site } from '../data/content'
import MagneticButton from './MagneticButton'
import SectionHeading, { Reveal } from './SectionHeading'
function Badge() {
  const reduce = useReducedMotion()
  const [img, setImg] = useState(true)
  const mx = useMotionValue(0), rot = useSpring(mx, { stiffness: 60, damping: 8 })
  const onMove = (e) => { if (reduce || e.pointerType === 'touch') return; const r = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width - 0.5) * 10) }
  return (
    <div onPointerMove={onMove} onPointerLeave={() => mx.set(0)} className="relative mx-auto flex w-64 justify-center sm:w-72">
      <motion.div style={{ rotate: rot, transformOrigin: '50% 0' }} className="flex flex-col items-center">
        <motion.div animate={reduce ? undefined : { rotate: [-2.5, 2.5, -2.5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 0' }} className="flex flex-col items-center">
          <div aria-hidden="true" className="h-24 w-3 bg-gradient-to-b from-gold to-gold/70" />
          <div aria-hidden="true" className="-mt-1 h-4 w-10 rounded-sm bg-ink/80" />
          <motion.article drag={!reduce} dragSnapToOrigin dragElastic={0.25} dragTransition={{ bounceStiffness: 120, bounceDamping: 10 }}
            whileDrag={{ scale: 1.03 }} aria-label="Student ID card"
            className="w-64 cursor-grab touch-pan-y rounded-[24px] border border-ink/10 bg-paper p-5 shadow-[0_30px_60px_-20px_rgba(15,22,51,.4)] sm:w-72">
          <div className="mx-auto mb-4 h-2 w-16 rounded-full bg-ink/15" aria-hidden="true" />
          <div className="mb-4 aspect-square overflow-hidden rounded-2xl bg-cream">
            {img ? <img src={site.profile} alt="Portrait of Nagaraj Kalburgi" loading="lazy" decoding="async" draggable="false" className="h-full w-full object-cover" onError={() => setImg(false)} />
              : <div aria-hidden="true" className="h-full w-full bg-ink" />}
          </div>
            <h3 className="text-xl font-extrabold tracking-tight">{site.name}</h3>
            <p className="serif text-lg text-gold">{site.role}</p>
            <dl className="mt-3 space-y-1 border-t border-ink/10 pt-3 text-xs">
              {[['University', site.university], ['Degree', site.degree], ['Graduation', site.gradYear], ['CGPA', site.cgpa], ['USN', site.studentId]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3"><dt className="text-ink/50">{k}</dt><dd className="text-right font-semibold">{v}</dd></div>))}
            </dl>
          </motion.article>
        </motion.div>
      </motion.div>
    </div>
  )
}
export default function About() {
  const a = site.about
  return (
    <section id="about" aria-labelledby="about-h" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid items-start gap-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeading id="about-h" eyebrow="ABOUT" parts={a.heading} />
          <Reveal delay={0.1}><p className="max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">{a.p1}</p></Reveal>
          <Reveal delay={0.2}><p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">{a.p2}</p></Reveal>
          <Reveal delay={0.3} className="mt-6">
            <p className="font-hand -rotate-2 text-3xl text-gold md:text-4xl">{a.quote}</p></Reveal>
          <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href={site.resume} target="_blank" rel="noopener noreferrer"><Download size={16} /> Download Resume</MagneticButton>
            <MagneticButton href={site.github} variant="ghost" external><Github size={16} /> GitHub</MagneticButton>
            <MagneticButton href={site.linkedin} variant="ghost" external><Linkedin size={16} /> LinkedIn</MagneticButton>
          </Reveal>
        </div>
        <Badge />
      </div>
    </section>
  )
}
