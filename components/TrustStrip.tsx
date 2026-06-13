const ITEMS = [
  { icon: '🛡️', label: 'Verified Partners' },
  { icon: '💳', label: 'Secure Payments' },
  { icon: '⏱️', label: 'Zero Wait Time' },
  { icon: '💰', label: 'Wallet Cashback' },
  { icon: '⭐', label: '4.9 Star Salons' },
  { icon: '📍', label: 'Trichy First' },
  { icon: '🔒', label: 'DPDP Compliant' },
  { icon: '✅', label: 'Instant Confirmation' },
]

function StripItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mx-8 whitespace-nowrap">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-semibold text-text">{label}</span>
    </div>
  )
}

export default function TrustStrip() {
  return (
    <div className="bg-surface border-y border-surface-border overflow-hidden py-4" aria-label="Trust signals">
      <div className="flex">
        <div className="flex animate-marquee">
          {ITEMS.map((item) => <StripItem key={item.label} {...item} />)}
          <div className="w-px h-5 bg-surface-border self-center" aria-hidden="true" />
        </div>
        <div className="flex animate-marquee2" aria-hidden="true">
          {ITEMS.map((item) => <StripItem key={item.label + '2'} {...item} />)}
        </div>
      </div>
    </div>
  )
}
