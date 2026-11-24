import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical skills" title="The tools I use across mobile, web and backend.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.05}>
            <div className="h-full rounded-xl border border-line bg-surface p-6">
              <h3 className="mb-4 text-base font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border border-line bg-bg px-2.5 py-1 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
