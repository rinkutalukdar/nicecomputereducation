import Link from 'next/link'
import Image from 'next/image'
import { Clock, ChevronRight, GraduationCap, Users } from 'lucide-react'
import { formatFee } from '@/lib/utils'
import type { Course } from '@/data/courses'

const levelConfig = {
  Beginner:     { bg: 'bg-royal/10 text-royal border-royal/20',   dot: 'bg-royal' },
  Intermediate: { bg: 'bg-navy/10 text-navy border-navy/20',      dot: 'bg-navy' },
  Advanced:     { bg: 'bg-crimson/10 text-crimson border-crimson/20', dot: 'bg-crimson' },
} as const

interface CourseCardProps {
  course: Course
  featured?: boolean
}

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  const level = levelConfig[course.level]

  return (
    <Link href={`/courses/${course.slug}`} className="group block h-full">
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
          featured
            ? 'shadow-lift ring-2 ring-crimson/25'
            : 'shadow-card ring-1 ring-sky-100'
        }`}
      >

        {/* ── Thumbnail ── */}
        <div className="relative h-52 flex-shrink-0 overflow-hidden bg-gradient-to-br from-navy to-royal">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

          {/* Top row: category + popular */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between">
            {course.categories.slice(0, 1).map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm"
              >
                {cat}
              </span>
            ))}
            {featured && (
              <span className="flex items-center gap-1 rounded-full bg-crimson px-3 py-1 text-[11px] font-bold text-white shadow-glow">
                🔥 Popular
              </span>
            )}
          </div>

          {/* Bottom row: duration */}
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 backdrop-blur-sm">
              <Clock className="h-3 w-3 text-white/80" />
              <span className="text-xs font-medium text-white">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 backdrop-blur-sm">
              <Users className="h-3 w-3 text-white/80" />
              <span className="text-xs font-medium text-white">Enrolling</span>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-1 flex-col p-5">

          {/* Level badge */}
          <span
            className={`mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${level.bg}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${level.dot}`} />
            {course.level}
          </span>

          {/* Title */}
          <h3 className="font-display text-lg font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-royal">
            {course.title}
          </h3>

          {/* Tagline */}
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
            {course.tagline}
          </p>

          {/* Highlights */}
          <ul className="mt-4 space-y-1.5">
            {course.highlights.slice(0, 2).map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-[10px] font-bold text-crimson">
                  ✓
                </span>
                {h}
              </li>
            ))}
          </ul>

          {/* Spacer */}
          <div className="flex-1" />

          {/* ── Footer ── */}
          <div className="mt-5 flex items-center justify-between border-t border-sky-100 pt-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                Course Fee
              </div>
              <div className="font-display text-xl font-bold text-royal">
                {formatFee(course.fee)}
              </div>
            </div>

            <span className="flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white transition-all duration-200 group-hover:bg-royal group-hover:gap-2.5">
              View Details
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Left accent bar — appears on hover */}
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-l-2xl bg-gradient-to-b from-crimson via-royal to-navy transition-transform duration-300 group-hover:scale-y-100" />

      </article>
    </Link>
  )
}