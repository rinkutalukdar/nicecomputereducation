import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import EnquiryForm from '@/components/forms/EnquiryForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NICE Computer Education. Visit us in Pathsala, Bajali, Assam, call us, or send an enquiry online. Free counselling available.',
}

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Our Address',
    value: 'NICE Computer Education, College Road, Pathsala, Bajali, Assam - 781325',
    sub: 'Near Bhattadev University',
    color: 'bg-crimson-50 text-crimson',
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: '+91-9864394437, 03666295920',
    sub: 'Mon-Sat, 9AM-8PM',
    color: 'bg-royal-50 text-royal',
    href: 'tel:+91-9864394437',
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: 'info@nicecomputereducation.in',
    sub: 'Reply within 24 hours',
    color: 'bg-navy-50 text-navy',
    href: 'mailto:info@nicecomputereducation.in',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Monday - Saturday',
    sub: '9:00 AM to 8:00 PM',
    color: 'bg-amber-50 text-amber-600',
  },
]

const FAQS = [
  {
    q: 'Is there a free demo class available?',
    a: 'Yes! We offer a free demo session for any course. Just contact us or walk into our centre and we\'ll arrange it for you.',
  },
  {
    q: 'Are your certificates recognised by the government?',
    a: 'Yes. Our institute is government certified and our certificates are widely accepted by government departments and private employers across Assam and India.',
  },
  {
    q: 'Can I pay fees in installments?',
    a: 'Absolutely. We offer flexible payment options for all courses. Speak with our admissions team to find a plan that works best for you.',
  },
  {
    q: 'What makes your institute different from others?',
    a: 'We offer a tailored curriculum designed around real job requirements, fully equipped computer labs with modern hardware, and small batch sizes — so every student gets personal attention from day one.',
  },
  {
    q: 'What is the batch size per class?',
    a: 'We keep batches small — maximum 20 students per batch — to ensure every student gets individual attention and hands-on lab time.',
  },
  {
    q: 'Do you offer placement assistance after course completion?',
    a: 'Yes. Our dedicated placement cell actively connects graduates with local employers. We also help with resume preparation and interview skills.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern pointer-events-none" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="section-label text-crimson-300 mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            We'd Love to Hear From You
          </h1>
          <p className="text-sky-200 text-lg max-w-xl mx-auto">
            Have questions about our courses? Need help choosing the right program?
            Our team is here to help — free of charge.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 bg-ash">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="card p-6 h-full hover:shadow-lift transition-all">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-display font-bold text-navy text-sm leading-snug">
                    {item.value}
                  </div>
                  {item.sub && <div className="text-gray-400 text-xs mt-1">{item.sub}</div>}
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} className="block group">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div id="enquire">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-crimson" />
                <h2 className="font-display font-bold text-navy text-2xl">Send an Enquiry</h2>
              </div>
              <div className="bg-white rounded-2xl border border-ash-200 shadow-card p-8">
                <EnquiryForm />
              </div>
            </div>

            {/* Map + info */}
            <div>
              <h2 className="font-display font-bold text-navy text-2xl mb-6">Find Us</h2>

              {/* Map placeholder — replace src with actual Google Maps embed */}
              <div className="relative h-72 rounded-2xl overflow-hidden border border-ash-200 shadow-card mb-6 bg-ash-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.4664947105202!2d91.17875305801033!3d26.505117359788503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37597f025dbd2f3b%3A0x50829e58bf9f76bf!2sNice%20Computer%20Education!5e0!3m2!1sen!2sin!4v1778760708414!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NICE Computer Education location"
                />
              </div>

              {/* Directions card */}
              <div className="bg-white rounded-2xl border border-ash-200 shadow-card p-6">
                <h3 className="font-display font-bold text-navy mb-3">
                  How to Reach Us
                </h3>

                <ul className="space-y-3 text-sm text-gray-600">

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-2" />
                    From Pathsala Bus Station: approximately 800 meters away. Head south from the station and take the east turn at the main chowk.
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-2" />
                    From Pathsala Railway Station: approximately 800 meters away. Head south and take the east turn from the main chowk.
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-2" />
                    Nearest landmark: Bhattadev University, Pathsala.
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal flex-shrink-0 mt-2" />
                    Parking facility available on the premises.
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">FAQs</p>
            <h2 className="font-display text-3xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={faq.q}
                className="group bg-white border border-ash-200 rounded-2xl overflow-hidden shadow-card"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-ash transition-colors select-none">
                  <span className="font-semibold text-navy text-sm pr-4">{faq.q}</span>
                  <span className="text-xl text-gray-400 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
