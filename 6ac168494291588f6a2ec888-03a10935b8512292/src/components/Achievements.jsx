import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { achievements } from '../data/content'
import SectionHeading from './SectionHeading'
function Count({ value, decimals = 0, pad = 0 }) {
  const ref = useRef(null), inView = useInView(ref, { once: true }), reduce = useReducedMotion()
  const fmt = (v) => (decimals ? v.toFixed(decimals) : String(Math.round(v)).padStart(pad, '0'))
  const [txt, setTxt] = useState(reduce ? fmt(value) : fmt(0))
  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, value, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => setTxt(fmt(v)), onComplete: () => setTxt(fmt(value)) })
    return () => c.stop()
  }, [inView])
  return <span ref={ref} aria-label={fmt(value)}>{txt}</span>
}
export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="ach-h" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <SectionHeading id="ach-h" eyebrow="ACHIEVEMENTS" parts={['Proud ', 'moments']} />
      <ul className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.li key={a.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.7 }} className={'card p-8 ' + (i % 2 ? 'sm:mt-10' : '')}>
            <p className="h-display text-7xl md:text-8xl"><Count {...a} /></p>
            <p className="serif mt-3 text-2xl text-gold">{a.label}</p>
            <p className="mt-2 text-ink/70">{a.caption}</p>
          </motion.li>))}
      </ul>
    </section>
  )
}
