import { NextRequest, NextResponse } from 'next/server'

interface EnquiryBody {
  name: string
  email: string
  phone: string
  course?: string
  message?: string
}

function validate(body: EnquiryBody) {
  const errors: string[] = []
  if (!body.name || body.name.trim().length < 2) errors.push('name')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email ?? '')) errors.push('email')
  if (!/^\+?[0-9\s]{10,13}$/.test((body.phone ?? '').replace(/\s/g, ''))) errors.push('phone')
  return errors
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryBody = await req.json()
    const errors = validate(body)

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 422 }
      )
    }

    // ── Placeholder: persist to Neon DB when ready ──
    // import { db } from '@/lib/db'
    // import { enquiries } from '@/lib/db/schema'
    // await db.insert(enquiries).values({ ... })

    console.log('New enquiry:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      course: body.course,
      message: body.message,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
