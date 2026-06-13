const ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 shrink-0">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 shrink-0">
      <rect x={2} y={5} width={20} height={14} rx={2} />
      <line x1={2} y1={10} x2={22} y2={10} />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 shrink-0">
      <circle cx={12} cy={12} r={10} />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 shrink-0">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 shrink-0">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 shrink-0">
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
      <circle cx={12} cy={10} r={3} />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 shrink-0">
      <rect x={3} y={11} width={18} height={11} rx={2} />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
}

import type { ReactNode } from 'react'

const ITEMS: { icon: ReactNode; label: string }[] = [
  { icon: ICONS.shield, label: 'Verified Partners' },
  { icon: ICONS.card,   label: 'Secure Payments' },
  { icon: ICONS.clock,  label: 'Zero Wait Time' },
  { icon: ICONS.wallet, label: 'Wallet Cashback' },
  { icon: ICONS.star,   label: '4.9 Star Salons' },
  { icon: ICONS.pin,    label: 'Trichy First' },
  { icon: ICONS.lock,   label: 'DPDP Compliant' },
  { icon: ICONS.check,  label: 'Instant Confirmation' },
]

function Dot() {
  return <span className="w-1 h-1 rounded-full bg-surface-border mx-6 shrink-0" aria-hidden="true" />
}

function StripItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap text-text-soft">
      <span className="text-navy opacity-60">{icon}</span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  )
}

export default function TrustStrip() {
  return (
    <div className="bg-surface border-y border-surface-border overflow-hidden py-3.5" aria-label="Trust signals">
      <div className="flex">
        <div className="flex items-center animate-marquee gap-0">
          {ITEMS.map((item) => (
            <span key={item.label} className="flex items-center">
              <StripItem {...item} />
              <Dot />
            </span>
          ))}
        </div>
        <div className="flex items-center animate-marquee2 gap-0" aria-hidden="true">
          {ITEMS.map((item) => (
            <span key={item.label + '2'} className="flex items-center">
              <StripItem {...item} />
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
