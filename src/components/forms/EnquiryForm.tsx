'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Loader2 } from 'lucide-react'

interface EnquiryFormProps {
  courseTitle?: string
  compact?: boolean
}

export default function EnquiryForm({
  courseTitle,
  compact = false,
}: EnquiryFormProps) {

  const initialForm = {
    name: '',
    email: '',
    phone: '',
    course: courseTitle ?? '',
    message: '',
  }

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = () => {
    const e: Record<string, string> = {}

    if (!form.name.trim() || form.name.length < 2)
      e.name = 'Enter your full name'

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email'

    if (!/^\+?[0-9]{10,13}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid phone number'

    if (!compact && !form.message.trim())
      e.message = 'Please add a message'

    return e
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setForm((f) => ({ ...f, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy[name]
        return copy
      })
    }
  }

  const handleSubmit = async () => {
    const errs = validate()

    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    try {
      setStatus('loading')

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          course: form.course || 'General Enquiry',
          message: compact ? 'Quick enquiry from website' : form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setStatus('success')
      setForm(initialForm)

    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>

        <h3 className="font-display font-bold text-navy text-lg mb-2">
          Enquiry Sent!
        </h3>

        <p className="text-gray-500 text-sm">
          We've received your enquiry and will contact you shortly.
        </p>

        <button
          onClick={() => {
            setStatus('idle')
            setForm(initialForm)
          }}
          className="mt-4 text-royal text-sm font-semibold hover:text-crimson transition-colors"
        >
          Submit another →
        </button>
      </div>
    )
  }

  const inputCls = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl bg-ash border text-sm text-navy placeholder:text-gray-400
    focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-colors
    ${errors[field] ? 'border-crimson bg-crimson-50' : 'border-ash-200'}`

  return (
    <form className="space-y-4" noValidate>

      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={inputCls('name')}
        />
        {errors.name && <p className="text-crimson text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className={inputCls('email')}
        />
        {errors.email && <p className="text-crimson text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy mb-1.5">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          className={inputCls('phone')}
        />
        {errors.phone && <p className="text-crimson text-xs mt-1">{errors.phone}</p>}
      </div>

      {!courseTitle && (
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            Course Interested In
          </label>
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            placeholder="e.g. DCA, Web Design, Tally..."
            className={inputCls('course')}
          />
        </div>
      )}

      {courseTitle && (
        <div className="bg-royal-50 border border-royal-100 rounded-xl px-4 py-2.5">
          <span className="text-xs text-royal-600 font-medium">
            📚 {courseTitle}
          </span>
        </div>
      )}

      {!compact && (
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            Message *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="Any specific questions?"
            className={`${inputCls('message')} resize-none`}
          />
          {errors.message && <p className="text-crimson text-xs mt-1">{errors.message}</p>}
        </div>
      )}

      {status === 'error' && (
        <p className="text-crimson text-sm text-center bg-crimson-50 rounded-xl py-2">
          Failed to send enquiry. Please try again.
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="btn-primary w-full gap-2 py-3"
      >
        {status === 'loading'
          ? <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          : 'Send Enquiry'}
      </button>

    </form>
  )
}