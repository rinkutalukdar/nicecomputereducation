import Hero from '@/components/home/Hero'
import CategoryStrip from '@/components/home/CategoryStrip'
import FeaturedCourses from '@/components/home/FeaturedCourses'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import CTABanner from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}
