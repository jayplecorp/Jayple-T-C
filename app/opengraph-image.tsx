import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt    = 'Jayple — Book Salon Appointments Instantly'
export const size   = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #07132A 0%, #0F2044 60%, #1A3060 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 80,
            height: 80,
            background: '#C8D620',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
            fontSize: 40,
            fontWeight: 900,
            color: '#07132A',
          }}
        >
          J
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#FFFFFF',
            letterSpacing: '-3px',
            marginBottom: 16,
          }}
        >
          Jayple
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          Book beautiful. Skip the wait.
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['Verified Salons', 'Zero Wait Time', 'Wallet Cashback'].map((label) => (
            <div
              key={label}
              style={{
                background: 'rgba(200,214,32,0.12)',
                border: '1px solid rgba(200,214,32,0.3)',
                borderRadius: 999,
                padding: '8px 20px',
                fontSize: 18,
                fontWeight: 600,
                color: '#C8D620',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 18,
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          jayple.in
        </div>
      </div>
    ),
    { ...size }
  )
}
