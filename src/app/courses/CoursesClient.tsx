'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import CourseCard from '@/components/courses/CourseCard'
import { SectionHeading } from '@/components/ui'
import type { Course } from '@/data/courses'
import { cn } from '@/lib/utils'

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const

interface Props {
  courses: Course[]
  categories: string[]
}

export default function CoursesClient({ courses, categories }: Props) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeLevel, setActiveLevel] = useState<typeof LEVELS[number]>('All')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchSearch =
        search === '' ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase()) ||
        c.shortTitle.toLowerCase().includes(search.toLowerCase())
      const matchCat = activeCategory === 'All' || c.category === activeCategory
      const matchLevel = activeLevel === 'All' || c.level === activeLevel
      return matchSearch && matchCat && matchLevel
    })
  }, [courses, search, activeCategory, activeLevel])

  const clearFilters = () => {
    setSearch('')
    setActiveCategory('All')
    setActiveLevel('All')
  }

  const hasFilters = search !== '' || activeCategory !== 'All' || activeLevel !== 'All'

  return (
    <>
      {/* Page hero */}
      <section className="bg-navy-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern pointer-events-none" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="section-label text-crimson-300 mb-3">Our Programmes</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Explore All Courses
          </h1>
          <p className="text-sky-200 text-lg max-w-xl mx-auto">
            {courses.length} professional courses to choose from. Filter by category, level,
            or search for exactly what you need.
          </p>
        </div>
      </section>

      <section className="py-12 bg-ash min-h-screen">
        <div className="container mx-auto px-4">
          {/* Search + Filter bar */}
          <div className="bg-white rounded-2xl shadow-card border border-ash-200 p-4 mb-8 flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ash border border-ash-200 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal placeholder:text-gray-400"
              />
            </div>

            {/* Level pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-gray-400 flex-shrink-0" />
              {LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all',
                    activeLevel === level
                      ? 'bg-navy text-white'
                      : 'bg-ash text-gray-500 hover:bg-ash-200'
                  )}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Clear */}
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-crimson text-xs font-semibold hover:text-crimson-700 transition-colors flex-shrink-0"
              >
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-crimson text-white shadow-glow'
                    : 'bg-white text-gray-600 border border-ash-200 hover:border-crimson/30 hover:text-crimson'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-navy">{filtered.length}</span> of{' '}
              {courses.length} courses
            </p>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((course) => (
                <CourseCard key={course.slug} course={course} featured={course.isFeatured} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-display font-bold text-navy text-xl mb-2">No courses found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your filters or search term.</p>
              <button onClick={clearFilters} className="btn-primary">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
