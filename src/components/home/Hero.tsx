'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, GraduationCap, Trophy, Users, BookOpen } from 'lucide-react'
import { STATS } from '@/data/content'

const TRUST_POINTS = [
  'Government-recognised certificates',
  'Expert industry-trained faculty',
  '100% placement assistance',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy min-h-screen flex flex-col">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/static/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Mobile overlay — valid /90 opacity */}
        <div className="absolute inset-0 bg-navy/90 sm:bg-navy/80 lg:hidden" />

        {/* Desktop overlay — directional fade */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-navy/95 via-navy/85 to-navy/40" />

        {/* Bottom fade — all screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/90" />
      </div>

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glows */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-royal/25 blur-[100px]" />
        <div className="absolute bottom-40 -left-20 h-72 w-72 rounded-full bg-crimson/15 blur-3xl" />
      </div>

      {/* ── Main content — grows to fill, leaves room for stats bar ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-12 pb-8 sm:pt-16 lg:pt-24 flex-1 flex items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: Copy */}
          <div className="flex flex-col animate-fade-up">

            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-sky-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-300 animate-pulse" />
              Pathsala's Most Trusted Computer Institute
            </div>

            {/* Headline */}
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.08] text-white sm:text-5xl xl:text-6xl">
              Shape Your Future
              <br />
              <span className="bg-gradient-to-r from-crimson-300 via-crimson-400 to-crimson-300 bg-clip-text text-transparent">
                with Expert
              </span>
              <br />
              Computer Skills
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-sky-200 sm:text-lg">
              Industry-aligned courses in programming, design, accounting and digital marketing.
              Get certified. Get skilled. Get placed - right here in Pathsala, Assam.
            </p>

            {/* Trust checklist */}
            <ul className="mt-6 space-y-2.5">
              {TRUST_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-sky-200">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-crimson-300" />
                  {p}
                </li>
              ))}
            </ul>

            {/* CTAs — stack on mobile, row on sm+ */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-7 py-3.5 text-base font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:bg-crimson-600 hover:shadow-xl active:translate-y-0 animate-pulse-glow"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50"
              >
                Free Counselling
              </Link>
            </div>
          </div>

          {/* RIGHT: Image card — visible on desktop */}
          <div className="hidden lg:flex lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[440px]">
              {/* Glow backdrop */}
              <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-br from-royal/40 to-crimson/20 blur-sm" />

              {/* Card — 4:5 portrait */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-hero" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/static/hero-strip.webp"
                  alt="Students at NICE Computer Education"
                  fill
                  className="object-cover object-center"
                  sizes="440px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />

                {/* Bottom badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 backdrop-blur-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-crimson shadow-lg">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">100% Placement Support</div>
                    <div className="text-xs text-sky-300">Live projects · Govt. certified</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-300">Enrolling</span>
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -top-4 -left-6 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-navy/80 px-4 py-3 shadow-hero backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-royal">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold leading-none text-white">15+</div>
                  <div className="text-xs text-sky-300">Yrs Experience</div>
                </div>
              </div>

              <div className="absolute -right-6 top-1/3 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-navy/80 px-4 py-3 shadow-hero backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-crimson">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold leading-none text-white">5000+</div>
                  <div className="text-xs text-sky-300">Students</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile image strip — only visible on mobile/tablet ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-6 lg:hidden">
        <div className="relative overflow-hidden rounded-2xl border border-white/15" style={{ aspectRatio: '16/7' }}>
          <Image
            src="/static/hero-strip.webp"
            alt="Students at NICE Computer Education"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 0px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />

        </div>
      </div>

      {/* ── Stats bar — NOT absolute, sits in flow so it never overlaps ── */}
      <div className="relative z-20 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg">
                  {s.icon}
                </div>
                <div>
                  <div className="font-display text-xl font-bold leading-none text-white">{s.value}</div>
                  <div className="mt-0.5 text-xs text-sky-300">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}