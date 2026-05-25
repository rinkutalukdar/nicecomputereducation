import { SectionHeading } from '@/components/ui'
import { WHY_US } from '@/data/content'
import { Briefcase, FlaskConical, GraduationCap, IndianRupee, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  const ICONS = {
    shield: ShieldCheck,
    graduation: GraduationCap,
    briefcase: Briefcase,
    flask: FlaskConical,
    rupee: IndianRupee,
  }
  return (
    <section className="py-24 bg-ash">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/static/image1.webp"
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
                    src="/static/lab.webp"
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
                <div className="font-display font-bold text-navy text-sm">Registered</div>
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

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_US.map((item) => {
                const Icon = ICONS[item.icon as keyof typeof ICONS]

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-royal/20 hover:shadow-hero"
                  >
                    <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-crimson to-royal transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-display text-lg font-bold text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
