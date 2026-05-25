import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import {
  ShieldCheck,
  GraduationCap,
  Briefcase,
  FlaskConical,
  IndianRupee,
} from 'lucide-react'

import { STATS, WHY_US } from '@/data/content'
import CTABanner from '@/components/home/CTABanner'


export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about NICE Computer Education — Guwahati's trusted computer institute since 2000, empowering students across Assam.",
}

export default function AboutPage() {
  const ICONS = {
    shield: ShieldCheck,
    graduation: GraduationCap,
    briefcase: Briefcase,
    flask: FlaskConical,
    rupee: IndianRupee,
  }
  return (
    <>

      {/* ══════════════════════════════════════
          1. HERO — dark (navy)
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy min-h-[48vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/static/about-bg.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/88 to-royal/80" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/15 px-4 py-1.5 text-xs font-semibold text-crimson-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson-300" />
            Our Story
          </span>
          <h1 className="font-display mt-2 text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl">
            About{' '}
            <span className="bg-gradient-to-r from-crimson-300 to-crimson-400 bg-clip-text text-transparent">
              NICE
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-sky-200 sm:text-lg">
            For over two decades, Pathsala's most trusted name in computer education —
            shaping careers and changing lives since 2000.
          </p>
          <nav className="mt-6 flex items-center gap-2 text-sm text-sky-400">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">About Us</span>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48L1440 48L1440 0C1200 38 960 48 720 38C480 28 240 0 0 20L0 48Z" fill="white" />
          </svg>
        </div>
      </section>


      {/* ══════════════════════════════════════
          2. WHO WE ARE — light (white)
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-crimson/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">

            {/* Image collage */}
            <div className="relative pb-10 pr-10">
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-hero" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/static/front.webp"
                  alt="Students learning"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-2xl border border-white/20 bg-navy/70 px-4 py-2.5 backdrop-blur-md">
                  <div className="font-display text-2xl font-bold leading-none text-white">2000</div>
                  <div className="text-xs text-sky-300">Established</div>
                </div>
              </div>
              <div
                className="absolute bottom-0 right-0 z-20 w-[48%] overflow-hidden rounded-2xl border-4 border-white shadow-hero"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src="/static/front-1.webp"
                  alt="Classroom session"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -left-3 bottom-28 z-30 flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-xl font-bold leading-none text-navy">5000+</div>
                  <div className="text-xs text-gray-400">Students Trained</div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-crimson/20 bg-crimson/6 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-crimson">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson" />
                Who We Are
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                A Place Where Dreams{' '}
                <span className="bg-gradient-to-r from-crimson to-crimson-400 bg-clip-text text-transparent">
                  Take Shape
                </span>
              </h2>
              <div className="mt-1 h-1 w-12 rounded-full bg-crimson" />

              <p className="mt-6 text-xl font-medium leading-relaxed text-navy-700">
                NICE, as the name suggests, is about{' '}
                <span className="font-semibold text-crimson">beautifying your future.</span>{' '}
                An institute where dreams come true — knowledge has no boundaries.
              </p>
              <div className="my-7 h-px bg-gradient-to-r from-sky-100 via-sky-200 to-transparent" />
              <p className="text-base leading-relaxed text-gray-500">
                Established in <strong className="font-semibold text-navy">2000</strong>, NICE grew
                from a small initiative into a strong institution with multiple branches across Assam —
                always focused on quality, discipline, and genuine care for every student.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                From short modular programmes to advanced professional diplomas, we prepare students
                for real-world careers — keeping fees affordable so no one is left behind.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: '🏛️', text: 'Established in 2000' },
                  { icon: '💸', text: 'Affordable Fees for All' },
                  { icon: '🛠️', text: 'Practical Career Training' },
                  { icon: '🎓', text: 'Govt. Recognised Certificates' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3.5 transition-all duration-200 hover:border-royal/20 hover:bg-sky-100"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-navy-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-6 py-3 text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:bg-crimson-600"
                >
                  Explore Courses <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:border-navy/20 hover:bg-sky-50"
                >
                  Free Counselling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          3. STATS — dark (navy)
      ══════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-navy via-navy-700 to-royal py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl backdrop-blur-sm border border-white/10">
                  {stat.icon}
                </div>
                <div className="font-display text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 h-0.5 w-8 rounded-full bg-crimson" />
                <div className="mt-2 text-sm text-sky-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          4. MISSION — light (ash)
      ══════════════════════════════════════ */}
      <section className="bg-ash py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-royal/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-royal">
                Our Mission
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                Quality IT Education,{' '}
                <span className="text-royal">Accessible to Every Student</span>
              </h2>
              <div className="mt-1 h-1 w-12 rounded-full bg-royal" />
              <p className="mt-5 text-base leading-relaxed text-gray-500">
                We believe every student — regardless of background — deserves access to computer
                education that opens real doors to opportunity.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  'Industry-relevant, practical hands-on training',
                  'Affordable fees for every economic background',
                  'Placement support for every graduate',
                  'Up-to-date curriculum matching industry needs',
                  'Safe, inclusive learning environment for all',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-crimson" />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image — single clean card on this side */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border-2 border-royal/15" />
              <div className="relative overflow-hidden rounded-3xl shadow-hero" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/static/about-hero.webp"
                  alt="Students collaborating"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-crimson">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">100% Placement Support</div>
                    <div className="text-xs text-sky-200">Every graduate, every batch</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          5. WHY CHOOSE US — light (white)
      ══════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/20 bg-crimson/6 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-crimson">
              Why Choose Us
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
              What Sets NICE Apart
            </h2>
            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-crimson" />
            <p className="mx-auto mt-4 max-w-lg text-gray-500">
              More than a computer institute — a launchpad for your career.
            </p>
          </div>

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
      </section>


      {/* ══════════════════════════════════════
          6. CTA — dark (navy)
      ══════════════════════════════════════ */}
      <CTABanner />

    </>
  )
}