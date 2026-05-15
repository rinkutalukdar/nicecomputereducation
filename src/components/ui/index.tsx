import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

// ── SectionHeading ─────────────────────────────────────────────────────────
interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ label, title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center mx-auto', className)}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-700 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-gray-500 text-lg leading-relaxed', centered && 'max-w-2xl mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ── Badge ──────────────────────────────────────────────────────────────────
type BadgeVariant = 'navy' | 'royal' | 'crimson' | 'gray'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const badgeStyles: Record<BadgeVariant, string> = {
  navy:    'bg-navy-50 text-navy-700',
  royal:   'bg-royal-50 text-royal-600',
  crimson: 'bg-crimson-50 text-crimson-600',
  gray:    'bg-gray-100 text-gray-600',
}

export function Badge({ children, variant = 'gray', className }: BadgeProps) {
  return (
    <span className={cn('badge', badgeStyles[variant], className)}>
      {children}
    </span>
  )
}

// ── Star Rating ────────────────────────────────────────────────────────────
export function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn('w-4 h-4', i < rating ? 'text-amber-400' : 'text-gray-200')}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}
