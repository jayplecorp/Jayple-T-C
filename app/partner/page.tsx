import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'List Your Salon on Jayple | Grow Bookings & Revenue in Trichy',
  description: 'Join Jayple as a salon partner. Get digital bookings, manage appointments, track settlements, and grow your business with India\'s fastest-growing salon platform.',
  alternates: { canonical: 'https://jayple.in/partner/' },
}

const BENEFITS = [
  { icon: '📈', title: 'Grow Visibility',         desc: 'Get discovered by thousands of customers searching for salons in your area daily.' },
  { icon: '📅', title: 'Manage Appointments',      desc: 'End phone-booking chaos. Smart slot management with auto-confirmation.' },
  { icon: '💰', title: 'Track Revenue',            desc: 'Real-time dashboard with earnings, payout tracking and settlement logs.' },
  { icon: '⭐', title: 'Build Reputation',         desc: 'Collect verified reviews and build a trusted digital presence.' },
  { icon: '🔄', title: 'Win Repeat Clients',       desc: 'Wallet cashback and loyalty features bring customers back automatically.' },
  { icon: '🔒', title: 'Secure & Compliant',       desc: 'PCI-DSS payments, DPDP compliant data handling, T+2 day settlements.' },
]

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-surface-off pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-max text-center">
          <span className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 px-3.5 py-1.5 rounded-pill text-[11px] font-semibold text-lime mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            Accepting new partners in Trichy
          </span>
          <h1 className="font-display text-display-xl text-white mb-6 max-w-3xl mx-auto">
            Grow your salon with <span className="text-lime">Jayple.</span>
          </h1>
          <p className="text-text-on-dark-soft text-[17px] max-w-xl mx-auto leading-relaxed mb-10">
            Attract more clients, digitalise your presence, automate appointments, and build recurring revenue — all from one app.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:partner@jayple.in"
              className="px-8 py-4 bg-lime text-navy font-bold text-[15px] rounded-md hover:bg-lime-bright transition-all duration-200 shadow-lime"
            >
              Apply to Partner →
            </a>
            <Link
              href="/#partners"
              className="px-8 py-4 border border-white/20 text-white font-semibold text-[15px] rounded-md hover:border-white/50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy-mid section-padding-sm">
        <div className="container-max grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { val: '+128%', label: 'Avg. Visibility Increase' },
            { val: '94%',   label: 'Digital Booking Rate' },
            { val: '<2%',   label: 'No-Show Rate' },
            { val: 'T+2',   label: 'Settlement Cycle' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center bg-white/05 rounded-md py-6">
              <div className="font-display text-3xl font-extrabold text-lime mb-1">{val}</div>
              <div className="text-sm text-text-on-dark-muted">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="font-display text-display-lg text-text mb-4">Everything you need to grow</h2>
            <p className="text-text-soft text-[16px]">Jayple gives salon owners the tools that top businesses use.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(({ icon, title, desc }) => (
              <div key={title} className="bg-surface-off border border-surface-border rounded-md p-6 lime-top">
                <div className="text-2xl mb-4">{icon}</div>
                <h3 className="font-bold text-[16px] text-text mb-2">{title}</h3>
                <p className="text-text-soft text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section-padding bg-cta-gradient text-center">
        <div className="container-max">
          <h2 className="font-display text-display-md text-white mb-4">Ready to list your salon?</h2>
          <p className="text-text-on-dark-soft mb-8 max-w-md mx-auto">Reach out to our partner team and we&apos;ll get you onboarded within 48 hours.</p>
          <a
            href="mailto:partner@jayple.in"
            className="inline-block px-8 py-4 bg-lime text-navy font-bold rounded-md hover:bg-lime-bright transition-all shadow-lime"
          >
            Email us at partner@jayple.in →
          </a>
        </div>
      </section>
    </div>
  )
}
