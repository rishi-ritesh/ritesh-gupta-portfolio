import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Professional experience" title="Where I have worked.">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((role, i) => (
          <li key={role.company + role.period} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-2 size-3.5 rounded-full border-2 border-bg ${i === 0 ? 'bg-accent' : 'bg-muted'}`}
            />
            <Reveal>
              <p className="text-sm font-medium text-accent">{role.period}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{role.title}</h3>
              <p className="mt-1 text-muted">
                {role.company} · {role.location}
              </p>
              <ul className="mt-5 max-w-3xl space-y-3">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-line" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
