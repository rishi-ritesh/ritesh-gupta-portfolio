import { Mail, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { ButtonLink } from './Button'
import { ExternalLink } from './ExternalLink'
import { GithubIcon, LinkedinIcon } from './Icons'
import { Reveal } from './Reveal'
import { Section } from './Section'

const row = 'flex items-center gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent'

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk about your next Android or full-stack role.">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="max-w-md leading-relaxed text-muted">
              I am open to Android Developer and Full-Stack Developer roles. The fastest way to reach me is email.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" />
                Email me
              </ButtonLink>
              <ButtonLink href={profile.resumeHref} download={profile.resumeFileName} variant="secondary">
                Download Resume
              </ButtonLink>
            </div>
          </div>
          <ul className="space-y-3">
            <li>
              <a href={`mailto:${profile.email}`} className={row}>
                <Mail size={18} aria-hidden="true" className="text-accent" />
                <span className="break-all">{profile.email}</span>
              </a>
            </li>
            <li>
              <ExternalLink href={profile.linkedin} icon={<LinkedinIcon size={18} className="text-accent" />} className={row}>
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.github} icon={<GithubIcon size={18} className="text-accent" />} className={row}>
                GitHub
              </ExternalLink>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-line bg-surface p-4">
              <MapPin size={18} aria-hidden="true" className="text-accent" />
              {profile.location}
            </li>
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
