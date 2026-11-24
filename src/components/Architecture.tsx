import { ArrowDown, Database, KeyRound, Monitor, Server, ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import { architecture } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section } from './Section'

function Node({ icon, name, tech, note }: { icon: ReactNode; name: string; tech: string; note?: string }) {
  return (
    <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-surface p-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">{icon}</span>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted">{tech}</p>
        {note && <p className="mt-1 text-xs text-muted">{note}</p>}
      </div>
    </div>
  )
}

function Arrows({ count }: { count: 1 | 2 }) {
  return (
    <div aria-hidden="true" className={`grid py-3 text-accent ${count === 2 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
      {Array.from({ length: count }).map((_, i) => (
        <ArrowDown key={i} size={22} className={`mx-auto ${i > 0 ? 'hidden sm:block' : ''}`} />
      ))}
    </div>
  )
}

export function Architecture() {
  const { clients, server, auth, database } = architecture
  return (
    <Section id="architecture" eyebrow="Technical architecture" title="How TestPortal is put together.">
      <Reveal>
        <p className="-mt-4 mb-8 max-w-2xl text-muted">{architecture.intro}</p>
        <figure aria-label="TestPortal architecture diagram" className="rounded-2xl border border-line bg-bg p-5 sm:p-8">
          <ol className="mx-auto max-w-3xl">
            <li>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Frontends</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Node icon={<Monitor size={20} aria-hidden="true" />} {...clients[0]} />
                <Node icon={<Monitor size={20} aria-hidden="true" />} {...clients[1]} />
              </div>
            </li>
            <li aria-hidden="true">
              <Arrows count={1} />
            </li>
            <li>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Backend</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Node icon={<Server size={20} aria-hidden="true" />} name={server.name} tech={server.tech} />
                <Node icon={<ShieldCheck size={20} aria-hidden="true" />} name={auth.name} tech={auth.tech} />
              </div>
            </li>
            <li aria-hidden="true">
              <Arrows count={2} />
            </li>
            <li>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Data</p>
              <Node icon={<Database size={20} aria-hidden="true" />} name={database.name} tech={database.tech} />
            </li>
          </ol>
          <figcaption className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted">
            <KeyRound size={14} aria-hidden="true" className="shrink-0" />
            High-level view. Authentication uses Better Auth with MongoDB.
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  )
}
