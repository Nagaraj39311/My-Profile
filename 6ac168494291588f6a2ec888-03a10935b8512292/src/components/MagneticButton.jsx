import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
export default function MagneticButton({ href, onClick, children, variant = 'solid', external, className = '', ...rest }) {
  const ref = useRef(null), reduce = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const move = (e) => {
    if (reduce || e.pointerType === 'touch') return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.25)
  }
  const reset = () => { x.set(0); y.set(0) }
  const base = 'group inline-flex min-h-[48px] items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-shadow hover:shadow-xl '
  const look = variant === 'solid' ? 'bg-ink text-cream' : 'border border-ink/20 bg-paper/60 text-ink hover:border-ink/60'
  const Tag = href ? motion.a : motion.button
  return (
    <Tag ref={ref} href={href} onClick={onClick} onPointerMove={move} onPointerLeave={reset} style={{ x, y }}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...(!href ? { type: 'button' } : {})}
      className={base + look + ' ' + className} {...rest}>{children}</Tag>
  )
}
