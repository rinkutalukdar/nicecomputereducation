'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/courses',   label: 'Courses' },
  { href: '/about',     label: 'About Us' },
  { href: '/centers',   label: 'Centers' },
  { href: '/contact',   label: 'Contact' },
]


const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.886a.5.5 0 00.606.64l6.288-1.643A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.893 9.893 0 01-5.031-1.371l-.36-.214-3.733.976.999-3.638-.235-.374A9.86 9.86 0 012.1 12C2.1 6.534 6.534 2.1 12 2.1c5.466 0 9.9 4.434 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z" />
  </svg>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-navy py-2 text-xs text-white md:block">
        <div className="container mx-auto flex items-center justify-between px-4">

          {/* Left */}
          <div className="flex items-center gap-5 text-sky-200">

            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              Pathsala, College Road, Assam
            </span>

            <span>
              Mon–Sat: 9:00 AM – 6:00 PM
            </span>

          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            {/* Phone */}
            <a
              href="tel:+919864394437"
              className="flex items-center gap-1.5 text-sky-200 transition-colors hover:text-crimson-300"
            >
              <Phone className="h-3 w-3" />
              +91-9864394437
            </a>

            {/* divider */}
            <div className="h-4 w-px bg-white/10" />

            {/* WhatsApp */}
            <a
              href="https://wa.me/919864394437"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/15 px-3 py-1.5 font-medium text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>

          </div>

        </div>
</div>

      {/* Main nav */}
      <nav
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-card border-b border-ash-200' : 'border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/static/logo.png"
              alt="NICE Computer Education"
              width={500}
              height={152}
              priority
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-crimson bg-crimson-50'
                    : 'text-navy hover:text-royal hover:bg-ash'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact#enquire" className="btn-primary ml-3 py-2 text-sm">
              Enroll Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-navy rounded-lg hover:bg-ash transition"
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-ash-200 bg-white animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-crimson bg-crimson-50 font-semibold'
                      : 'text-navy hover:bg-ash'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact#enquire" className="btn-primary mt-2 text-center">
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
