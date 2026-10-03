import { motion } from 'framer-motion'
import { timeline } from '../data/content'
import SectionHeading, { Reveal } from './SectionHeading'
export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32">
      <span aria-hidden="true" className="pointer-events-none absolute right-0 top-10 select-none whitespace-nowrap text-[11vw] font-extrabold tracking-tighter text-ink/[0.04]">Education &amp; Experience</span>
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading id="exp-h" eyebrow="EDUCATION & EXPERIENCE" parts={['Always ', 'learning']} />
        <ol className="relative ml-3 border-l border-ink/15 pl-8 md:ml-0 md:pl-12">
          <motion.span aria-hidden="true" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute -left-px top-0 h-full w-px origin-top bg-gold" />
          {timeline.map((t, i) => (
            <li key={t.title} className="relative pb-12 last:pb-0">
              <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, type: 'spring' }}
                className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-cream bg-ink ring-1 ring-gold md:-left-[57px]" aria-hidden="true" />
              <Reveal delay={i * 0.05}>
                <div className="card p-6 md:p-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gold">{String(i + 1).padStart(2, '0')} · {t.date}</p>
                  <h3 className="mt-2 text-xl font-bold md:text-2xl">{t.title}</h3>
                  <p className="serif text-lg text-ink/60">{t.org}</p>
                  <p className="mt-3 text-ink/75">{t.desc}</p>
                  {t.extra && <p className="mt-4 inline-block rounded-lg bg-ink px-3 py-1 text-sm font-semibold text-cream">{t.extra}</p>}
                </div>
              </Reveal>
            </li>))}
        </ol>
      </div>
    </section>
  )
}
