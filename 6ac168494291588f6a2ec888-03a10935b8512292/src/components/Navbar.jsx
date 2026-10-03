import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../data/content'
export default function Navbar() {
  const [active, setActive] = useState('about'), [open, setOpen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
      className="fixed inset-x-0 top-3 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-5xl md:top-5">
      <nav aria-label="Primary" className="glass flex items-center justify-between rounded-full py-2 pl-2 pr-3 md:pr-4">
        <a href="#top" aria-label="Home" className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-bold text-cream">{site.short}</a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map(([label, id]) => (
            <li key={id}><a href={'#' + id} aria-current={active === id ? 'true' : undefined}
              className="relative rounded-full px-4 py-2 text-sm font-semibold">
              {active === id && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-ink/10" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="relative">{label}</span></a></li>
          ))}
        </ul>
        <button className="grid h-11 w-11 place-items-center rounded-full md:hidden" aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ opacity: 0, y: -10, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10 }}
            className="glass mt-2 rounded-3xl p-3 md:hidden">
            {nav.map(([label, id]) => (
              <li key={id}><a href={'#' + id} onClick={() => setOpen(false)}
                className={'block rounded-2xl px-4 py-3 text-lg font-semibold ' + (active === id ? 'bg-ink text-cream' : '')}>{label}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
