import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
  icon?: ReactNode
}

/** Opens in a new tab safely and tells screen-reader users that it does. */
export function ExternalLink({ href, children, className = '', icon }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {icon}
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
      {!icon && <ArrowUpRight size={14} aria-hidden="true" className="shrink-0" />}
    </a>
  )
}
