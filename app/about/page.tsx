import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Jayple — India\'s Premium Salon & Wellness Booking Platform',
  description: 'Jayple was founded in Trichy to revolutionize how India books salon appointments. Our mission: zero waiting, verified salons, and fair growth for beauty professionals.',
  alternates: { canonical: 'https://jayple.in/about/' },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-off pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-max text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-4 block">Our Story</span>
          <h1 className="font-display text-display-xl text-white mb-6 max-w-3xl mx-auto">
            We&apos;re on a mission to make <span className="text-lime">great grooming</span> accessible to everyone.
          </h1>
          <p className="text-text-on-dark-soft text-[17px] max-w-2xl mx-auto leading-relaxed">
            Jayple started as a simple idea in Trichy — what if booking a salon appointment was as easy as ordering food? Today, we&apos;re India&apos;s premium salon booking platform, connecting customers with verified salons and helping beauty professionals grow.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-surface">
        <div className="container-max grid md:grid-cols-2 gap-10">
          <div className="bg-surface-off border border-surface-border rounded-md p-8">
            <div className="w-12 h-12 bg-lime/10 rounded-md flex items-center justify-center text-2xl mb-5">🎯</div>
            <h2 className="font-display text-display-sm text-text mb-4">Our Mission</h2>
            <p className="text-text-soft text-[15px] leading-relaxed">
              To eliminate waiting times in salons across India by connecting customers with verified beauty professionals through seamless technology — while empowering salon owners with tools to manage, grow, and scale their businesses.
            </p>
          </div>
          <div className="bg-surface-off border border-surface-border rounded-md p-8">
            <div className="w-12 h-12 bg-lime/10 rounded-md flex items-center justify-center text-2xl mb-5">🌟</div>
            <h2 className="font-display text-display-sm text-text mb-4">Our Vision</h2>
            <p className="text-text-soft text-[15px] leading-relaxed">
              A future where every Indian can walk into any salon, at the right time, with zero waiting — and every salon professional has the digital tools they need to thrive in a modern economy.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-warm">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="font-display text-display-lg text-text mb-4">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🤝', title: 'Trust',          desc: 'Every partner is verified. Every review is real. No fake listings.' },
              { icon: '🚀', title: 'Innovation',     desc: 'We build smart tools that make salon operations genuinely better.' },
              { icon: '🌍', title: 'Local First',    desc: 'Trichy is our home. We build for local communities before scaling.' },
              { icon: '⚖️', title: 'Fairness',       desc: 'Transparent pricing, fair settlements, and honest communication always.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-surface border border-surface-border rounded-md p-6 text-center">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-[16px] text-text mb-2">{title}</h3>
                <p className="text-text-soft text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-navy text-center">
        <div className="container-max">
          <h2 className="font-display text-display-md text-white mb-4">Join us on this journey</h2>
          <p className="text-text-on-dark-soft mb-8">Book your first appointment or partner with us today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#get-app" className="px-7 py-3.5 bg-lime text-navy font-bold rounded-md hover:bg-lime-bright transition-colors">
              Get the App
            </Link>
            <Link href="/partner" className="px-7 py-3.5 border border-white/20 text-white font-semibold rounded-md hover:border-white/50 transition-colors">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
