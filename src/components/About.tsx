import { about } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title={about.lead}>
      <div className="grid gap-5 sm:grid-cols-2">
        {about.paragraphs.map((p, i) => (
          <Reveal key={p.heading} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-line bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold">{p.heading}</h3>
              <p className="leading-relaxed text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <div className="mt-5 rounded-xl border border-line bg-accent-soft p-6">
          <h3 className="mb-2 text-base font-semibold">How I work</h3>
          <p className="leading-relaxed text-muted">{about.approach}</p>
        </div>
      </Reveal>
    </Section>
  )
}
