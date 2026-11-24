import { Code2, ExternalLink as ExternalIcon, Play } from 'lucide-react'
import { projects, type Project, type ProjectLink } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'
import { Reveal } from './Reveal'
import { Section } from './Section'

function LinkButton({ link }: { link: ProjectLink }) {
  const Icon = link.kind === 'code' ? Code2 : link.kind === 'store' ? Play : ExternalIcon
  const style =
    link.kind === 'code'
      ? 'border border-line text-fg hover:border-accent hover:text-accent'
      : 'bg-accent text-accent-fg hover:opacity-90'
  return (
    <ExternalLink
      href={link.href}
      icon={<Icon size={15} aria-hidden="true" />}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${style}`}
    >
      {link.label}
    </ExternalLink>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{title}</h4>
      {children}
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 leading-relaxed">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article
        aria-labelledby={`${project.id}-title`}
        className={`rounded-2xl border bg-surface p-6 sm:p-8 ${project.featured ? 'border-accent/50' : 'border-line'}`}
      >
        <header className="mb-6">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-accent">0{index + 1}</span>
            {project.featured && (
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">Featured</span>
            )}
          </div>
          <h3 id={`${project.id}-title`} className="text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-muted">{project.tagline}</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Block title="Overview">
              <p className="leading-relaxed text-muted">{project.overview}</p>
            </Block>
            <Block title="Problem">
              <p className="leading-relaxed text-muted">{project.problem}</p>
            </Block>
            <Block title="My contribution">
              <div className="text-muted">
                <List items={project.contribution} />
              </div>
            </Block>
          </div>
          <div className="space-y-6">
            <Block title="Key features">
              <div className="text-muted">
                <List items={project.features} />
              </div>
            </Block>
            <Block title="Tech stack">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="rounded-md border border-line bg-bg px-2.5 py-1 text-sm text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </div>

        <footer className="mt-8 border-t border-line pt-6">
          {project.links.length > 0 ? (
            <ul className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <li key={l.href}>
                  <LinkButton link={l} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">{project.noLinksNote}</p>
          )}
        </footer>
      </article>
    </Reveal>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured projects" title="Real products I have built and shipped.">
      <div className="space-y-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
