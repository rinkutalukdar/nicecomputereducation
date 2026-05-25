import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Instagram } from 'lucide-react'
import { COURSES } from '@/data/courses'
import Image from 'next/image'

const featuredCourseLinks = COURSES.filter((c) => c.isFeatured).map((c) => ({
  href: `/courses/${c.slug}`,
  label: c.shortTitle,
}))

const QUICK_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About Us' },
  { href: '/courses',  label: 'All Courses' },
  { href: '/centers',  label: 'Centers' },
  { href: '/contact',  label: 'Contact Us' },
]

const SOCIAL = [
  {
    href: 'https://www.facebook.com/nicecomputerpathsala',
    label: 'Facebook',
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    href: '#',
    label: 'YouTube',
    icon: <Youtube className="w-4 h-4" />,
  },
  {
    href: '#',
    label: 'Instagram',
    icon: <Instagram className="w-4 h-4" />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-sky-200">

      {/* ── Main grid ── */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/static/logo.png"
            alt="NICE Computer Education"
            width={500}
            height={152}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-sky-300">
            Empowering students across Guwahati and Assam with professional computer education
            and skill development since 2000.
          </p>

          {/* Trust badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {['Govt. Certified', 'Tailored Curriculum'].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-sky-200"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className="mt-6 flex gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-sky-300 transition-all hover:border-crimson/40 hover:bg-crimson/15 hover:text-crimson-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Popular Courses */}
        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-white">
            Popular Courses
          </h4>
          <ul className="space-y-3">
            {featuredCourseLinks.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="group flex items-center gap-2.5 text-sm text-sky-300 transition-colors hover:text-white"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crimson-400 transition-transform group-hover:scale-125" />
                  {c.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/courses"
                className="inline-flex items-center gap-1 text-sm font-semibold text-royal-300 transition-colors hover:text-white"
              >
                View all courses
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-white">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group flex items-center gap-2.5 text-sm text-sky-300 transition-colors hover:text-white"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-royal-400 transition-transform group-hover:scale-125" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-white">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-sky-300">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-crimson-400" />
              <span className="leading-relaxed">NICE Computer Education, College Road, Pathsala, Bajali, Assam - 781325</span>
            </li>
            <li>
              <a
                href="tel:+91-9864394437"
                className="flex gap-3 text-sm text-sky-300 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-crimson-400" />
                +91-9864394437 / 03666295920
              </a>
            </li>
            <li>
              <a
                href="mailto:info@nicecomputereducation.in"
                className="flex gap-3 text-sm text-sky-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-crimson-400" />
                info@nicecomputereducation.in
              </a>
            </li>
            <li className="flex gap-3 text-sm text-sky-300">
              <Clock className="h-4 w-4 flex-shrink-0 text-crimson-400" />
              Mon-Sat: 9:00 AM - 8:00 PM
            </li>
          </ul>

          {/* Phone CTA */}
          <a
            href="tel:+919864394437"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-crimson/30 hover:bg-crimson/15"
          >
            <Phone className="h-4 w-4 text-crimson-300" />
            Call Us Now
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-sky-400 sm:flex-row">
          <span>© {new Date().getFullYear()} NICE Computer Education. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Pathsala, Assam, India</span>
            <span className="h-3 w-px bg-white/20" />
            <Link href="/contact" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/20" />
            <span>
              Designed & developed by{' '}
              <a
                href="https://www.theskillnode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-300 transition-colors hover:text-white"
              >
                The SkillNode
              </a>
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}