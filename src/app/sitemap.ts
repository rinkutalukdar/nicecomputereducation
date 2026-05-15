import type { MetadataRoute } from 'next'
import { COURSES } from '@/data/courses'

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://nicecomputereducation.in'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/centers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic course pages
  const coursePages: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: course.isFeatured ? 0.85 : 0.7,
  }))

  return [...staticPages, ...coursePages]
}