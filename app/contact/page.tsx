import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Jayple — Get in Touch',
  description: 'Reach out to the Jayple team for support, partnership enquiries, or press. We\'re based in Trichy, India.',
  alternates: { canonical: 'https://jayple.in/contact/' },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-off pt-20">
      <section className="bg-hero-gradient section-padding">
        <div className="container-max text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-4 block">Get in Touch</span>
          <h1 className="font-display text-display-xl text-white mb-5">Contact us</h1>
          <p className="text-text-on-dark-soft text-[17px] max-w-lg mx-auto">
            Questions, partnerships, or press enquiries — we&apos;re always happy to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="space-y-5">
            {[
              { icon: '💼', title: 'Partner Enquiries', email: 'partner@jayple.in',  desc: 'Want to list your salon? We onboard within 48 hours.' },
              { icon: '🎧', title: 'Customer Support',  email: 'support@jayple.in',  desc: 'Booking issues, refunds, or app help.' },
              { icon: '📰', title: 'Press & Media',     email: 'press@jayple.in',    desc: 'Media kit, interviews, and brand assets.' },
              { icon: '💼', title: 'Careers',           email: 'careers@jayple.in',  desc: 'Interested in joining the Jayple team?' },
            ].map(({ icon, title, email, desc }) => (
              <div key={title} className="bg-surface-off border border-surface-border rounded-md p-5 flex gap-4">
                <div className="text-2xl shrink-0">{icon}</div>
                <div>
                  <h3 className="font-bold text-[15px] text-text mb-0.5">{title}</h3>
                  <a href={`mailto:${email}`} className="text-lime-dark font-semibold text-sm hover:underline">{email}</a>
                  <p className="text-text-muted text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Address / social */}
          <div>
            <div className="bg-navy rounded-xl p-7 text-white h-full">
              <h3 className="font-display text-xl font-bold mb-4">Jayple HQ</h3>
              <p className="text-text-on-dark-soft text-sm leading-relaxed mb-6">
                Trichy (Tiruchirappalli), Tamil Nadu, India
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-text-on-dark-soft">
                  <span className="text-lime">✉️</span> hello@jayple.in
                </div>
                <div className="flex items-center gap-2 text-sm text-text-on-dark-soft">
                  <span className="text-lime">📍</span> Trichy, Tamil Nadu 620 001
                </div>
              </div>
              <div className="border-t border-white/08 mt-6 pt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-text-on-dark-muted mb-4">Follow us</p>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/jayple.in/', abbr: 'IG' },
                  ].map(({ label, href, abbr }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-9 h-9 bg-white/06 border border-white/10 rounded-md flex items-center justify-center text-xs font-bold text-text-on-dark-muted hover:bg-lime hover:text-navy transition-all"
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {abbr}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
