import type { Metadata } from 'next'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Centers',
  description:
    'Find a NICE Computer Education center near you. We have branches across Assam — Pathsala (Head Office), Jalah, and Mushalpur.',
}

const CENTERS = [
  {
    id: 'pathsala',
    name: 'Pathsala Branch',
    tag: 'Head Office',
    tagColor: 'bg-crimson text-white',
    address: 'College Road, Pathsala, Bajali, Assam – 781325',
    landmark: 'Near Bhattadev University',
    phone: ['+91-9864394437', '03666-295920'],
    hours: 'Mon–Sat, 9:00 AM – 8:00 PM',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.4664947105202!2d91.17875305801033!3d26.505117359788503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37597f025dbd2f3b%3A0x50829e58bf9f76bf!2sNice%20Computer%20Education!5e0!3m2!1sen!2sin!4v1778760708414!5m2!1sen!2sin',
    mapLink: 'https://maps.google.com/?q=Nice+Computer+Education+Pathsala',
    district: 'Bajali',
    icon: '🏛️',
    accentColor: 'border-crimson',
    iconBg: 'bg-crimson-50',
  },
  {
    id: 'jalah',
    name: 'Jalah Branch',
    tag: 'Branch Center',
    tagColor: 'bg-royal text-white',
    address: 'Jalah, Dist. Baksa, Assam',
    landmark: null,
    phone: null,
    hours: 'Mon–Sat, 9:00 AM – 6:00 PM',
    mapEmbed: null,
    mapLink: 'https://maps.google.com/?q=Jalah+Baksa+Assam',
    district: 'Baksa',
    icon: '🏫',
    accentColor: 'border-royal',
    iconBg: 'bg-royal-50',
  },
  {
    id: 'mushalpur',
    name: 'Mushalpur Branch',
    tag: 'Branch Center',
    tagColor: 'bg-royal text-white',
    address: 'Mushalpur, Dist. Baksa, Assam',
    landmark: null,
    phone: null,
    hours: 'Mon–Sat, 9:00 AM – 6:00 PM',
    mapEmbed: null,
    mapLink: 'https://maps.google.com/?q=Mushalpur+Baksa+Assam',
    district: 'Baksa',
    icon: '🏫',
    accentColor: 'border-royal',
    iconBg: 'bg-royal-50',
  },
]

export default function CentersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-royal/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-12 w-56 h-56 rounded-full bg-crimson/15 blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="section-label text-crimson-300 mb-3">Our Locations</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Find a Center Near You
          </h1>
          <p className="text-sky-200 text-lg max-w-xl mx-auto">
            NICE Computer Education operates across Assam with dedicated branches serving
            students in Bajali and Baksa districts.
          </p>

          {/* Quick district pills */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {['Bajali', 'Baksa'].map((d) => (
              <span
                key={d}
                className="bg-white/10 border border-white/20 text-sky-200 text-sm font-medium px-4 py-1.5 rounded-full"
              >
                📍 {d} District
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Centers */}
      <section className="py-16 bg-ash">
        <div className="container mx-auto px-4">

          {/* Summary strip */}
          <div className="grid grid-cols-3 gap-4 mb-14 max-w-xl mx-auto">
            {[
              { value: '3', label: 'Centers' },
              { value: '2', label: 'Districts' },
              { value: '1', label: 'State' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-ash-200 shadow-card p-4 text-center">
                <div className="font-display font-bold text-navy text-3xl">{s.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Center cards */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {CENTERS.map((center) => (
              <div
                key={center.id}
                className={`bg-white rounded-3xl border-l-4 ${center.accentColor} border border-ash-200 shadow-card overflow-hidden`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${center.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {center.icon}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="font-display font-bold text-navy text-xl">
                          {center.name}
                        </h2>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${center.tagColor}`}>
                          {center.tag}
                        </span>
                      </div>

                      <div className="space-y-2.5 mt-4">
                        {/* Address */}
                        <div className="flex items-start gap-2.5 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                          <div>
                            <span>{center.address}</span>
                            {center.landmark && (
                              <span className="block text-xs text-gray-400 mt-0.5">
                                {center.landmark}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Phone */}
                        {center.phone && (
                          <div className="flex items-center gap-2.5">
                            <Phone className="w-4 h-4 text-crimson flex-shrink-0" />
                            <div className="flex flex-wrap gap-x-3 gap-y-1">
                              {center.phone.map((p) => (
                                <a
                                  key={p}
                                  href={`tel:${p.replace(/[^+0-9]/g, '')}`}
                                  className="text-sm text-royal font-medium hover:text-crimson transition-colors"
                                >
                                  {p}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Hours */}
                        <div className="flex items-center gap-2.5 text-sm text-gray-500">
                          <Clock className="w-4 h-4 text-crimson flex-shrink-0" />
                          {center.hours}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={center.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline text-sm py-2 px-4 gap-1.5"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          Get Directions
                        </a>
                        {center.phone ? (
                          <a
                            href={`tel:${center.phone[0].replace(/[^+0-9]/g, '')}`}
                            className="btn-secondary text-sm py-2 px-4 gap-1.5"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            Call Center
                          </a>
                        ) : (
                          <Link href="/contact" className="btn-secondary text-sm py-2 px-4 gap-1.5">
                            <Phone className="w-3.5 h-3.5" />
                            Enquire
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Embedded map for Pathsala */}
                  {center.mapEmbed && (
                    <div className="mt-6 rounded-2xl overflow-hidden border border-ash-200 h-56">
                      <iframe
                        src={center.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${center.name} map`}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <div className="inline-block bg-white rounded-3xl border border-ash-200 shadow-card px-8 py-8 max-w-lg">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-display font-bold text-navy text-xl mb-2">
                Not Sure Which Center to Visit?
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Call our head office and we'll help you find the most convenient branch
                and best-fit course for you — completely free.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+919864394437" className="btn-primary gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link href="/contact#enquire" className="btn-outline gap-2">
                  Send Enquiry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}