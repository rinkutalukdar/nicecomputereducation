import { Suspense } from 'react'
import type { Metadata } from 'next'
import CoursesClient from './CoursesClient'
import { COURSES, CATEGORIES } from '@/data/courses'

export const metadata: Metadata = {
  title: 'All Courses',
  description:
    'Browse all computer courses at NICE Computer Education — DCA, ADCA, Web Design, Python, Tally GST, Digital Marketing, Graphic Design and more.',
}

export default function CoursesPage() {
  return (
    <Suspense fallback={null}>
      <CoursesClient courses={COURSES} categories={CATEGORIES} />
    </Suspense>
  )
}