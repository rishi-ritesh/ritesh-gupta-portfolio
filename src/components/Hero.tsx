import { useState } from 'react'
import { Download, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile, stats } from '../data/portfolio'
import { ButtonLink } from './Button'
import { ExternalLink } from './ExternalLink'
import { GithubIcon, LinkedinIcon } from './Icons'

function Portrait() {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        role="img"
        aria-label={`Initials of ${profile.name}`}
        className="grid aspect-[5/8] w-full place-items-center bg-accent-soft text-6xl font-semibold text-accent"
      >
        RG
      </div>
    )
  }
  return (
    <img
      src={profile.photo}
      alt={`Portrait of ${profile.name}`}
      width={500}
      height={800}
      fetchPriority="high"
      decoding="async"
      onError={() => setFailed(true)}
      className="aspect-[5/8] w-full object-cover"
    />
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } }

  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          {profile.openToWork && (
            <motion.p
              {...fade(0)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Open to work
            </motion.p>
          )}

          <motion.h1 {...fade(0.05)} id="hero-title" className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {profile.name}
          </motion.h1>
          <motion.p {...fade(0.1)} className="mt-3 text-xl font-medium text-accent sm:text-2xl">
            {profile.title}
          </motion.p>
          <motion.ul {...fade(0.12)} aria-label="Core technologies" className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
            {profile.stackLine.map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {t}
                {i < profile.stackLine.length - 1 && <span aria-hidden="true" className="text-line">/</span>}
              </li>
            ))}
          </motion.ul>

          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.resumeHref} download={profile.resumeFileName}>
              <Download size={16} aria-hidden="true" />
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </ButtonLink>
          </motion.div>

          <motion.div {...fade(0.26)} className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted">
            <ExternalLink href={profile.github} icon={<GithubIcon size={18} />} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin} icon={<LinkedinIcon size={18} />} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              LinkedIn
            </ExternalLink>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div {...fade(0.15)} className="mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-sm">
            <div className="overflow-hidden rounded-xl">
              <Portrait />
            </div>
          </div>
        </motion.div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 md:mt-20 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
            <p className="mt-1 text-sm leading-snug text-muted" aria-hidden="true">{s.label}</p>
          </div>
        ))}
      </dl>
    </section>
  )
}
