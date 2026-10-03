import { Github, Linkedin, Mail } from 'lucide-react'
import { site, nav } from '../data/content'
import { Reveal } from './SectionHeading'
export default function Contact() {
  const [a, accent, b] = site.contact.heading
  const links = [[Github, 'GitHub', site.github], [Linkedin, 'LinkedIn', site.linkedin], [Mail, 'Email', 'mailto:' + site.email]]
  return (
    <section id="contact" aria-labelledby="contact-h" className="px-5 py-12 md:px-10">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-ink px-6 py-20 text-cream md:px-16 md:py-28">
        <Reveal><h2 id="contact-h" className="h-display text-5xl sm:text-7xl md:text-8xl">{a}<span className="serif text-gold">{accent}</span>{b}</h2></Reveal>
        <Reveal delay={0.1}><p className="mt-6 max-w-xl text-lg text-cream/75">{site.contact.text}</p></Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
          {/* TODO: replace email, GitHub and LinkedIn placeholders in src/data/content.js */}
          <a href={'mailto:' + site.email} className="group inline-flex min-h-[52px] items-center gap-2 rounded-2xl bg-cream px-7 font-semibold text-ink transition-shadow hover:shadow-xl">Get in touch <span className="transition-transform group-hover:translate-x-1">→</span></a>
          <span className="text-sm text-cream/60">{site.email}</span>
        </Reveal>
        <ul className="mt-12 flex flex-wrap gap-3">
          {links.map(([Icon, label, href]) => (
            <li key={label}><a href={href} {...(label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-cream/20 px-4 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"><Icon size={16} />{label}</a></li>))}
        </ul>
      </div>
    </section>
  )
}
export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-12 md:px-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div><p className="text-xl font-extrabold tracking-tight">{site.name}</p><p className="serif text-gold">{site.role}</p>
          <p className="mt-2 text-sm text-ink/60">B.Tech CSE • {site.university} • {site.gradYear}</p></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          {nav.map(([l, id]) => <li key={id}><a className="hover:text-gold" href={'#' + id}>{l}</a></li>)}</ul></nav>
      </div>
      <p className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink/50">© 2026 {site.name}</p>
    </footer>
  )
}
