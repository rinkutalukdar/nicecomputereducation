import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NICE Computer Education — Pathsala, Assam'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Fetch the logo as a buffer and convert to base64 data URL
  // so Satori can render it without next/image
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
    'https://nicecomputereducation.in'

  let logoDataUrl: string | null = null
  try {
    const res = await fetch(`${baseUrl}/static/logo.png`)
    if (res.ok) {
      const buf = await res.arrayBuffer()
      const b64 = Buffer.from(buf).toString('base64')
      logoDataUrl = `data:image/png;base64,${b64}`
    }
  } catch {
    // fall back to text logo if fetch fails
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: 'linear-gradient(135deg, #0d0d5e 0%, #1a3ccc 60%, #0d0d5e 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circle top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '500px',
            height: '500px',
            borderRadius: '9999px',
            background: 'rgba(26,60,204,0.4)',
            display: 'flex',
          }}
        />
        {/* Decorative circle bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '380px',
            height: '380px',
            borderRadius: '9999px',
            background: 'rgba(204,20,20,0.2)',
            display: 'flex',
          }}
        />

        {/* Main content column */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 72px',
          }}
        >
          {/* ── TOP: logo row ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Logo image OR fallback text mark */}
            {logoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoDataUrl}
                alt="NICE Computer Education"
                width={280}
                height={85}
                style={{ objectFit: 'contain' }}
              />
            ) : (
              /* Text fallback when logo file isn't available */
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'rgba(255,255,255,0.15)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: 900,
                    color: 'white',
                  }}
                >
                  N
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 900, color: '#fca5a5', lineHeight: '1' }}>
                    NICE
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(186,230,253,0.9)', letterSpacing: '3px' }}>
                    COMPUTER EDUCATION
                  </span>
                </div>
              </div>
            )}

            {/* Government Certified pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '9999px',
                padding: '6px 18px',
              }}
            >
              <span style={{ fontSize: '12px', color: 'rgba(186,230,253,0.9)', fontWeight: 600 }}>
                ✓ Government Certified
              </span>
            </div>
          </div>

          {/* ── MIDDLE: headline ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#f87171', letterSpacing: '3px' }}>
              PATHSALA · JALAH · MUSHALPUR — ASSAM
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
              <span
                style={{
                  fontSize: '66px',
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: '1.08',
                  letterSpacing: '-2px',
                }}
              >
                Shape Your Future
              </span>
              <div style={{ display: 'flex', gap: '18px' }}>
                <span
                  style={{
                    fontSize: '66px',
                    fontWeight: 900,
                    color: '#fca5a5',
                    lineHeight: '1.08',
                    letterSpacing: '-2px',
                  }}
                >
                  with Expert
                </span>
                <span
                  style={{
                    fontSize: '66px',
                    fontWeight: 900,
                    color: 'white',
                    lineHeight: '1.08',
                    letterSpacing: '-2px',
                  }}
                >
                  IT Skills
                </span>
              </div>
            </div>

            <span
              style={{
                fontSize: '20px',
                color: 'rgba(186,230,253,0.8)',
                fontWeight: 400,
                marginTop: '4px',
              }}
            >
              DCA · ADCA · Web Design · Tally GST · Digital Marketing
            </span>
          </div>

          {/* ── BOTTOM: stats row ── */}
          <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
            {[
              { value: '5000+', label: 'Students Trained' },
              { value: '15+', label: 'Years of Excellence' },
              { value: '20+', label: 'Courses Offered' },
              { value: '3', label: 'Centers Across Assam' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  borderLeft: '3px solid rgba(204,20,20,0.8)',
                  paddingLeft: '16px',
                }}
              >
                <span style={{ fontSize: '32px', fontWeight: 900, color: 'white', lineHeight: '1' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '13px', color: 'rgba(186,230,253,0.75)', fontWeight: 400 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}