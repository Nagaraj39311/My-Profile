import { motion, useReducedMotion } from 'framer-motion'
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as]
  return (
    <M className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</M>
  )
}
export default function SectionHeading({ eyebrow, parts, id }) {
  const [a, accent, b = ''] = parts
  return (
    <Reveal className="mb-12 md:mb-16">
      {eyebrow && <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold">{eyebrow}</p>}
      <h2 id={id} className="h-display text-5xl sm:text-6xl md:text-7xl">{a}<span className="serif font-normal">{accent}</span>{b}<span className="text-gold">.</span></h2>
    </Reveal>
  )
}
