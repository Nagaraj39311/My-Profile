import { useState } from 'react'
import { skills, skillFilters } from '../data/content'
import SectionHeading, { Reveal } from './SectionHeading'
export default function Skills() {
  const [f, setF] = useState('All'), [sel, setSel] = useState(skills[0])
  const on = (s) => f === 'All' || s.cat === f
  return (
    <section id="skills" aria-labelledby="skills-h" className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
      <SectionHeading id="skills-h" eyebrow="SKILLS" parts={['Tech ', 'stack']} />
      <div role="group" aria-label="Filter skills" className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
        {skillFilters.map((n) => (
          <button key={n} onClick={() => setF(n)} aria-pressed={f === n}
            className={'min-h-[44px] shrink-0 rounded-xl border px-5 text-sm font-semibold transition-colors ' + (f === n ? 'border-ink bg-ink text-cream' : 'border-ink/15 bg-paper hover:border-ink/50')}>{n}</button>))}
      </div>
      <Reveal>
        <ul className="grid grid-cols-4 gap-4 pb-2 sm:grid-cols-6 md:grid-cols-8 md:gap-5">
          {skills.map((s) => (
            <li key={s.k} className="group relative">
              <button onClick={() => setSel(s)} onMouseEnter={() => setSel(s)} onFocus={() => setSel(s)}
                aria-pressed={sel.k === s.k} aria-label={s.name + ': ' + s.desc}
                className={'key aspect-square w-full ' + (on(s) ? '' : 'dim')}>{s.k}</button>
              <span role="tooltip" className="pointer-events-none absolute -top-2 left-1/2 z-20 hidden w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-full rounded-xl bg-ink p-4 text-left text-xs leading-relaxed text-cream opacity-0 shadow-xl transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 md:block">
                <b className="block text-sm">{s.name}</b>
                <span className="mb-2 mt-1 block font-semibold text-gold">{s.focus}</span>
                {s.desc}</span>
            </li>))}
        </ul>
      </Reveal>
      <div aria-live="polite" className="card mt-12 flex items-center gap-5 p-6">
        <span className="key grid h-14 w-14 shrink-0 place-items-center">{sel.k}</span>
        <div>
          <p className="font-bold">{sel.name} <span className="ml-2 text-xs font-semibold text-gold">{sel.cat.toUpperCase()}</span></p>
          <p className="my-1 text-sm font-semibold">{sel.focus}</p>
          <p className="text-ink/70">{sel.desc}</p>
        </div>
      </div>
    </section>
  )
}
