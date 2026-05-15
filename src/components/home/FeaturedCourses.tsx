import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui'
import CourseCard from '@/components/courses/CourseCard'
import { getFeaturedCourses } from '@/data/courses'

export default function FeaturedCourses() {
  const courses = getFeaturedCourses()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label="Our Courses"
            title="Job-Ready Courses for Every Goal"
            subtitle="From beginner certificates to advanced diplomas — choose the program that fits your ambition."
            className="mb-0"
          />
          <Link
            href="/courses"
            className="btn-ghost border border-ash-200 flex-shrink-0 self-start md:self-auto"
          >
            View all courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} featured={course.isFeatured} />
          ))}
        </div>
      </div>
    </section>
  )
}
