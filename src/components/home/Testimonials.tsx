'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/data/content'
import { cn } from '@/lib/utils'

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={cn('h-4 w-4', i < rating ? 'text-amber-400' : 'text-white/20')}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const avatarBg: Record<string, string> = {
  royal:   'bg-royal text-white',
  crimson: 'bg-crimson text-white',
  navy:    'bg-navy-400 text-white',
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const total = TESTIMONIALS.length

  const go = (idx: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 220)
  }

  const prev = () => go(active === 0 ? total - 1 : active - 1)
  const next = () => go(active === total - 1 ? 0 : active + 1)

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [active])

  const t = TESTIMONIALS[active]

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">

      {/* ── Rich layered background ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse at 80% 10%, rgba(26,60,204,0.35) 0%, transparent 50%)',
            'radial-gradient(ellipse at 10% 90%, rgba(204,20,20,0.2) 0%, transparent 45%)',
            'linear-gradient(160deg, #090940 0%, #0d0d5e 50%, #0b1a5a 100%)',
          ].join(', '),
        }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative giant quote mark */}
      <div className="pointer-events-none absolute -top-6 left-6 font-display text-[200px] font-bold leading-none text-white/[0.03] md:text-[320px]">
        "
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ── Section header ── */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson-300" />
            Student Stories
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Real Results from{' '}
            <span className="bg-gradient-to-r from-crimson-300 to-crimson-400 bg-clip-text text-transparent">
              Real Students
            </span>
          </h2>
          <p className="mt-3 max-w-lg text-sm text-sky-300 sm:text-base">
            Over 5,000 students have transformed their careers at NICE.
            Here's what some of them have to say.
          </p>
        </div>

        {/* ── Main layout: featured card + sidebar strip ── */}
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_280px]">

          {/* Featured testimonial card */}
          <div
            className={cn(
              'relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 md:p-12',
              animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
            )}
            style={{ minHeight: '320px' }}
          >
            {/* Accent top bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson via-royal to-crimson opacity-80" />

            {/* Stars */}
            <StarRating rating={t.rating} />

            {/* Quote */}
            <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed text-white md:text-2xl">
              <span className="text-crimson-300">"</span>
              {t.content}
              <span className="text-crimson-300">"</span>
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div
                className={cn(
                  'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-bold shadow-lift',
                  avatarBg[t.color] ?? 'bg-navy-400 text-white'
                )}
              >
                {t.avatar}
              </div>
              <div>
                <div className="font-display text-base font-bold text-white">{t.name}</div>
                <div className="mt-0.5 text-sm text-sky-400">{t.role}</div>
              </div>

              {/* Verified chip */}
              <div className="ml-auto hidden items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 sm:flex">
                <svg className="h-3.5 w-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-green-400">Verified Graduate</span>
              </div>
            </div>

            {/* Navigation arrows inside card */}
            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-400',
                      i === active
                        ? 'w-8 bg-crimson'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-white transition-all hover:bg-white/15 active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-crimson text-white shadow-glow transition-all hover:bg-crimson-600 active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right sidebar — stacked mini cards */}
          <div className="flex flex-row gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => go(i)}
                className={cn(
                  'group flex shrink-0 items-center gap-3 rounded-2xl border p-3.5 text-left transition-all duration-200 lg:w-full',
                  i === active
                    ? 'border-crimson/40 bg-crimson/10 shadow-glow/30'
                    : 'border-white/8 bg-white/5 hover:border-white/15 hover:bg-white/8'
                )}
              >
                <div
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold transition-transform duration-200 group-hover:scale-105',
                    avatarBg[item.color] ?? 'bg-navy-400 text-white'
                  )}
                >
                  {item.avatar}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white">{item.name}</div>
                  <div className="truncate text-xs text-sky-400">{item.role.split('·')[0].trim()}</div>
                  {/* Mini star */}
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, si) => (
                      <svg key={si} className="h-2.5 w-2.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* Active indicator */}
                {i === active && (
                  <div className="ml-auto h-2 w-2 shrink-0 rounded-full bg-crimson" />
                )}
              </button>
            ))}
          </div>

        </div>

        {/* ── Bottom stat strip ── */}
        <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-10 sm:gap-8">
          {[
            { value: '5000+', label: 'Students Trained', icon: '🎓' },
            { value: '4.9★', label: 'Average Rating', icon: '⭐' },
            { value: '98%', label: 'Recommend NICE', icon: '❤️' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="text-2xl">{s.icon}</span>
              <div className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-sky-400 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}