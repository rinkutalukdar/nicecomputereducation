import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

const WHATSAPP_NUMBER = '+919864394437' // ← replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent('Hi! I would like to know more about your courses at NICE Computer Education.')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
const PHONE_NUMBER = 'tel:+919864394437'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.886a.5.5 0 00.606.64l6.288-1.643A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.893 9.893 0 01-5.031-1.371l-.36-.214-3.733.976.999-3.638-.235-.374A9.86 9.86 0 012.1 12C2.1 6.534 6.534 2.1 12 2.1c5.466 0 9.9 4.434 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z" />
  </svg>
)

export default function CTABanner() {
  return (
    <>
      {/* ══════════════════════════════════════════
          FLOATING MOBILE ACTIONS — fixed bottom bar
      ══════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Frosted top edge */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex items-stretch bg-navy-800/95 backdrop-blur-md">

          {/* Call */}
          <a
            href={PHONE_NUMBER}
            className="flex flex-1 items-center justify-center gap-2.5 py-4 text-sm font-bold text-white transition-colors active:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-crimson">
              <Phone className="h-4 w-4" />
            </div>
            Call Now
          </a>

          {/* Divider */}
          <div className="w-px bg-white/10 my-3" />

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2.5 py-4 text-sm font-bold text-white transition-colors active:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#25D366]">
              <WhatsAppIcon className="h-4 w-4" />
            </div>
            WhatsApp
          </a>

          {/* Divider */}
          <div className="w-px bg-white/10 my-3" />

          {/* Enquire */}
          <Link
            href="/contact#enquire"
            className="flex flex-1 items-center justify-center gap-2.5 py-4 text-sm font-bold text-white transition-colors active:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-royal">
              <ArrowRight className="h-4 w-4" />
            </div>
            Enquire
          </Link>

        </div>
        {/* Safe area for iPhone home bar */}
        <div className="h-safe-bottom bg-navy-800/95" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} />
      </div>

      {/* ══════════════════════════════════════════
          FLOATING WHATSAPP BUBBLE — desktop only
      ══════════════════════════════════════════ */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-5 z-50 hidden md:flex items-center gap-2.5 overflow-hidden rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
      >
        <WhatsAppIcon className="h-5 w-5 flex-shrink-0" />
        <span>Chat with us</span>
      </a>

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <section className="relative bg-white px-6 py-24">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-navy-700 via-navy-600 to-royal-700 shadow-hero">

          {/* Background effects */}
          <div className="absolute inset-0">

            {/* Royal glow */}
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-royal-400/20 blur-[100px]" />

            {/* Crimson accent */}
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-crimson-500/10 blur-[90px]" />

            {/* Light center */}
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />

            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>

          <div className="relative z-10 px-8 py-16 text-center md:px-14">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-sky-100 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
              Admissions Open
            </div>

            {/* Heading */}
            <h2 className="font-display mx-auto max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to Start Your{" "}
              <span className="text-crimson-300">
                Tech Career?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sky-100/80">
              Speak with our counsellors for free and choose the
              right course based on your goals.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

              <Link
                href="/contact#enquire"
                className="inline-flex items-center gap-2 rounded-2xl bg-crimson px-8 py-4 font-semibold text-white shadow-button transition-all hover:-translate-y-1 hover:bg-crimson-600"
              >
                Enquire Now
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>

              <a
                href={PHONE_NUMBER}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>

            </div>

          </div>
        </div>

      </section>

      {/* Bottom padding so fixed mobile bar doesn't cover page content */}
      <div className="h-16 md:hidden" />
    </>
  )
}