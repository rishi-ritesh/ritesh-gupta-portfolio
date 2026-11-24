import { GraduationCap, MessageSquare, Puzzle, BookOpen } from 'lucide-react'
import { education } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section } from './Section'

const strengthIcons = [MessageSquare, Puzzle, BookOpen]

export function Education() {
  const { teaching } = education
  return (
    <Section id="education" eyebrow="Education & additional experience" title="Teaching shaped how I think about software.">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <div className="h-full rounded-xl border border-line bg-surface p-6">
            <span className="mb-4 grid size-10 place-items-center rounded-lg bg-accent-soft text-accent">
              <GraduationCap size={20} aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.school}</p>
            <p className="mt-1 text-sm font-medium text-accent">{education.year}</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="h-full rounded-xl border border-line bg-surface p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{teaching.title}</h3>
              <p className="text-sm font-medium text-accent">{teaching.period}</p>
            </div>
            <p className="mt-2 leading-relaxed text-muted">{teaching.summary}</p>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {teaching.strengths.map((s, i) => {
                const Icon = strengthIcons[i]
                return (
                  <li key={s.title}>
                    <Icon size={18} aria-hidden="true" className="mb-2 text-accent" />
                    <h4 className="text-sm font-semibold">{s.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
