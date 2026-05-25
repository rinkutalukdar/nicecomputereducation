import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Clock, GraduationCap, CheckCircle2, ChevronRight,
  BookOpen, Target, Users, ArrowRight,
} from 'lucide-react'
import { getCourse, COURSES } from '@/data/courses'
import { Badge } from '@/components/ui'
import { formatFee, cn } from '@/lib/utils'
import CourseCard from '@/components/courses/CourseCard'
import EnquiryForm from '@/components/forms/EnquiryForm'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourse(params.slug)
  if (!course) return { title: 'Course Not Found' }
  return {
    title: course.title,
    description: course.description,
  }
}

const levelBadge = {
  Beginner:     'royal',
  Intermediate: 'navy',
  Advanced:     'crimson',
} as const

export default function CourseDetailPage({ params }: Props) {
  const course = getCourse(params.slug)
  if (!course) notFound()

  const related = COURSES.filter(
    (c) => c.slug !== course.slug && c.categories.some((cat) => course.categories.includes(cat))
  ).slice(0, 3)

  const fallback = COURSES.filter((c) => c.slug !== course.slug && c.isFeatured).slice(0, 3)
  const relatedCourses = related.length > 0 ? related : fallback

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-ash-200">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-royal transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/courses" className="hover:text-royal transition-colors">Courses</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-navy font-medium truncate">{course.shortTitle}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern pointer-events-none" />
        <div className="absolute inset-0 opacity-20">
          <Image src={course.imageUrl} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-700 via-navy-700/90 to-transparent" />

        <div className="relative container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Badge variant={levelBadge[course.level]}>
                <GraduationCap className="w-3 h-3 mr-1" /> {course.level}
              </Badge>
              {course.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-semibold bg-white/10 border border-white/20 text-sky-200 px-3 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-sky-200 text-base leading-relaxed mb-6 max-w-lg">
              {course.tagline}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-sky-300 mb-8">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-crimson-300" />
                Duration: <strong className="text-white">{course.duration}</strong>
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-crimson-300" />
                Eligibility: <strong className="text-white">{course.eligibility}</strong>
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#enquire" className="btn-primary gap-2">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="btn border-2 border-white/30 text-white hover:bg-white/10">
                Free Counselling
              </Link>
            </div>
          </div>

          {/* Fee card */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl shadow-lift p-8 max-w-sm ml-auto">
              <div className="text-center mb-6">
                <div className="text-gray-400 text-sm mb-1">Total Course Fee</div>
                <div className="font-display font-bold text-navy text-5xl">
                  {formatFee(course.fee)}
                </div>
                <div className="text-gray-400 text-sm mt-1">EMI options available</div>
              </div>

              <ul className="space-y-3 mb-6">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>

              <a href="#enquire" className="btn-primary w-full text-center gap-2">
                Enquire About This Course
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16 bg-ash">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Left: Description + Curriculum + Outcomes */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-2xl p-8 border border-ash-200 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-crimson" />
                <h2 className="font-display font-bold text-navy text-xl">About This Course</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{course.description}</p>

              {/* Mobile fee */}
              <div className="lg:hidden mt-6 pt-6 border-t border-ash-200 text-center">
                <div className="text-gray-400 text-sm mb-1">Course Fee</div>
                <div className="font-display font-bold text-navy text-3xl mb-4">
                  {formatFee(course.fee)}
                </div>
                <a href="#enquire" className="btn-primary w-full justify-center">
                  Enroll Now
                </a>
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-2xl p-8 border border-ash-200 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-crimson" />
                <h2 className="font-display font-bold text-navy text-xl">Course Curriculum</h2>
              </div>
              <div className="space-y-4">
                {course.curriculum.map((module, i) => (
                  <details
                    key={module.module}
                    open={i === 0}
                    className="group border border-ash-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer bg-ash hover:bg-ash-200 transition-colors select-none">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-navy text-sm">{module.module}</span>
                      </div>
                      <span className="text-xs text-gray-400">{module.topics.length} topics</span>
                    </summary>
                    <ul className="px-5 py-4 space-y-2.5 bg-white">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-royal-400 flex-shrink-0 mt-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="bg-white rounded-2xl p-8 border border-ash-200 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-crimson" />
                <h2 className="font-display font-bold text-navy text-xl">What You'll Achieve</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-3 bg-ash rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-crimson flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-snug">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-royal-50 border border-royal-100 rounded-2xl p-6 flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-royal flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-navy mb-1">Eligibility</h3>
                <p className="text-gray-600 text-sm">{course.eligibility}</p>
              </div>
            </div>
          </div>

          {/* Right: Sticky enquiry form */}
          <div className="lg:col-span-1">
            <div id="enquire" className="sticky top-24">
              <div className="bg-white rounded-2xl border border-ash-200 shadow-card overflow-hidden">
                <div className="bg-navy-700 px-6 py-5">
                  <h3 className="font-display font-bold text-white text-lg">
                    Enquire About This Course
                  </h3>
                  <p className="text-sky-300 text-sm mt-1">
                    We'll call you within 24 hours
                  </p>
                </div>
                <div className="p-6">
                  <EnquiryForm courseTitle={course.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related courses ── */}
      {relatedCourses.length > 0 && (
        <section className="py-16 bg-white border-t border-ash-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-navy text-2xl">You Might Also Like</h2>
              <Link href="/courses" className="text-royal text-sm font-semibold hover:text-crimson transition-colors">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
