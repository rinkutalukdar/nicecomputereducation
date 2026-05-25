'use client'

import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import {
  BookOpen,
  Code2,
  Calculator,
  Palette,
  Monitor,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Code,
} from 'lucide-react'
import { COURSES } from '@/data/courses'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  {
    slug: 'Design',
    label: 'Graphic Design',
    tagline: 'Create visual stories',
    Icon: Palette,
    gradient: 'from-pink-400 to-rose-500',
    lightBg: 'bg-pink-50',
    lightText: 'text-pink-600',
    border: 'border-pink-100',
    ring: 'ring-pink-400',
    count: 2,
  },
  {
    slug: 'Certificate',
    label: 'Certificate Courses',
    tagline: 'Start your journey',
    Icon: GraduationCap,
    gradient: 'from-royal-500 to-royal-700',
    lightBg: 'bg-royal-50',
    lightText: 'text-royal-600',
    border: 'border-royal-100',
    ring: 'ring-royal-400',
    count: 3,
  },
  {
    slug: 'Office Tools',
    label: 'MS Office & Tools',
    tagline: 'Excel at productivity',
    Icon: Monitor,
    gradient: 'from-indigo-400 to-indigo-600',
    lightBg: 'bg-indigo-50',
    lightText: 'text-indigo-600',
    border: 'border-indigo-100',
    ring: 'ring-indigo-400',
    count: 2,
  },
  {
    slug: 'PG Diploma',
    label: 'PG Diploma',
    tagline: 'Graduate-level mastery',
    Icon: GraduationCap,
    gradient: 'from-slate-500 to-slate-700',
    lightBg: 'bg-slate-50',
    lightText: 'text-slate-600',
    border: 'border-slate-100',
    ring: 'ring-slate-400',
    count: 1,
  },
  {
    slug: 'Development',
    label: 'Web Development',
    tagline: 'Build for the internet',
    Icon: Code2,
    gradient: 'from-sky-400 to-blue-600',
    lightBg: 'bg-sky-50',
    lightText: 'text-sky-600',
    border: 'border-sky-100',
    ring: 'ring-sky-400',
    count: 2,
  },
  {
    slug: 'Accounting',
    label: 'Tally & Accounting',
    tagline: 'Master the numbers',
    Icon: Calculator,
    gradient: 'from-emerald-400 to-emerald-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-600',
    border: 'border-emerald-100',
    ring: 'ring-emerald-400',
    count: 2,
  },
  {
    slug: 'Programming',
    label: 'Programming',
    tagline: 'Code from scratch',
    Icon: Code,
    gradient: 'from-violet-400 to-violet-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-600',
    border: 'border-violet-100',
    ring: 'ring-violet-400',
    count: 2,
  },
]

// ✅ Fixed: use c.categories.includes() instead of c.category ===
const COURSE_COUNTS = Object.fromEntries(
  CATEGORIES.map((cat) => [
    cat.slug,
    COURSES.filter((c) => c.categories.includes(cat.slug)).length,
  ])
)

export default function CategoryStrip() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const updateScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => el.removeEventListener('scroll', updateScroll)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 bg-white border-b border-ash-200 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="section-label mb-1.5">What do you want to learn?</p>
            <h2 className="font-display font-bold text-navy text-2xl md:text-3xl leading-tight">
              Browse by Category
            </h2>
          </div>
          <Link
            href="/courses"
            className="hidden sm:flex items-center gap-1.5 text-royal text-sm font-semibold hover:text-crimson transition-colors group"
          >
            All courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Scroll container + arrow buttons */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-ash-200 shadow-card flex items-center justify-center text-navy transition-all duration-200 -translate-x-3',
              canScrollLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scroll-smooth pb-3 -mb-3
                       [scrollbar-width:none] [-ms-overflow-style:none]
                       [&::-webkit-scrollbar]:hidden
                       snap-x snap-mandatory"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.Icon
              const count = COURSE_COUNTS[cat.slug] ?? 0
              const isActive = activeSlug === cat.slug

              return (
                <Link
                  key={cat.slug}
                  href={`/courses?category=${encodeURIComponent(cat.slug)}`}
                  onMouseEnter={() => setActiveSlug(cat.slug)}
                  onMouseLeave={() => setActiveSlug(null)}
                  className="snap-start flex-shrink-0 group"
                >
                  <div
                    className={cn(
                      'relative w-[160px] md:w-[175px] rounded-2xl border overflow-hidden transition-all duration-300',
                      isActive
                        ? `${cat.border} shadow-lift -translate-y-1.5 ring-2 ${cat.ring}`
                        : `${cat.border} shadow-card hover:shadow-lift hover:-translate-y-0.5`
                    )}
                  >
                    {/* Gradient top bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${cat.gradient}`} />

                    <div className={cn('p-4 transition-colors duration-300', cat.lightBg)}>
                      {/* Icon circle */}
                      <div
                        className={cn(
                          'w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-300',
                          isActive
                            ? `bg-gradient-to-br ${cat.gradient} text-white shadow-sm scale-110`
                            : `${cat.lightBg} ${cat.lightText}`
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Label */}
                      <div className="font-display font-bold text-navy text-sm leading-snug mb-0.5">
                        {cat.label}
                      </div>

                      {/* Tagline */}
                      <div className="text-[11px] text-gray-400 leading-tight mb-3">
                        {cat.tagline}
                      </div>

                      {/* Course count pill */}
                      <div
                        className={cn(
                          'inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all duration-300',
                          isActive
                            ? `bg-gradient-to-r ${cat.gradient} text-white`
                            : `${cat.lightBg} ${cat.lightText}`
                        )}
                      >
                        <BookOpen className="w-3 h-3" />
                        {count} {count === 1 ? 'course' : 'courses'}
                      </div>
                    </div>

                    {/* Arrow on hover */}
                    <div
                      className={cn(
                        'absolute bottom-3.5 right-3.5 transition-all duration-300',
                        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
                      )}
                    >
                      <ArrowRight className={cn('w-3.5 h-3.5', cat.lightText)} />
                    </div>
                  </div>
                </Link>
              )
            })}

            {/* View all card */}
            <Link href="/courses" className="snap-start flex-shrink-0 group">
              <div className="w-[140px] md:w-[155px] h-full min-h-[152px] rounded-2xl border-2 border-dashed border-ash-200 hover:border-royal/40 flex flex-col items-center justify-center gap-2 text-center p-4 transition-all duration-200 hover:bg-royal-50">
                <div className="w-10 h-10 rounded-xl bg-ash flex items-center justify-center group-hover:bg-royal-100 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-royal transition-colors" />
                </div>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-royal transition-colors leading-tight">
                  View all courses
                </span>
              </div>
            </Link>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-ash-200 shadow-card flex items-center justify-center text-navy transition-all duration-200 translate-x-3',
              canScrollRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile hints */}
        <div className="sm:hidden mt-4 flex items-center justify-between">
          <p className="text-[11px] text-gray-400 flex items-center gap-1">
            <ChevronLeft className="w-3 h-3" /> Swipe to explore <ChevronRight className="w-3 h-3" />
          </p>
          <Link href="/courses" className="text-royal text-sm font-semibold hover:text-crimson transition-colors">
            View all →
          </Link>
        </div>
      </div>
    </section>
  )
}