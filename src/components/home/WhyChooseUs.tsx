import { SectionHeading } from '@/components/ui'
import { WHY_US } from '@/data/content'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-ash">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
                  alt="Students in computer lab"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
                    alt="Teacher and student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative flex-1 rounded-2xl overflow-hidden min-h-[140px]">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80"
                    alt="Classroom session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* ISO badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lift border border-ash-200 px-6 py-4 flex items-center gap-4 whitespace-nowrap">
              <span className="text-3xl">🏛️</span>
              <div>
                <div className="font-display font-bold text-navy text-sm">ISO 9001:2015</div>
                <div className="text-gray-400 text-xs">Government Certified</div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              label="Why Choose NICE"
              title="The Institute That Truly Invests in Your Success"
              subtitle="We don't just teach — we make sure every student walks out job-ready and confident."
            />

            <div className="grid sm:grid-cols-2 gap-5">
              {WHY_US.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-ash-200 hover:shadow-card transition-shadow"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-base mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
