import type { Metadata } from 'next'
import Link from 'next/link'
import { companyData } from '@/lib/companyData'

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
        <div className="container-max max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="space-y-5">
            {[
              {
                icon: '🎧',
                title: 'Customer Support',
                email: companyData.officialEmail,
                desc: 'Get help with your customer account setup, booking inquiries, or refund requests.',
                action: { label: 'Email Support', href: `mailto:${companyData.officialEmail}` }
              },
              {
                icon: '💈',
                title: 'Salon Partner Enquiries',
                email: companyData.businessEmail,
                desc: 'Find out how to list your salon treatments and coordinate calendars on our platform.',
                action: { label: 'Email Partner Success', href: `mailto:${companyData.businessEmail}` }
              },
              {
                icon: '✉️',
                title: 'General & Media Queries',
                email: companyData.businessEmail,
                desc: 'For business collaborations, official correspondence, or press/media inquiries.',
                action: { label: 'Email General Inbox', href: `mailto:${companyData.businessEmail}` }
              },
            ].map(({ icon, title, desc, action }) => (
              <div key={title} className="bg-white border border-surface-border rounded-2xl p-6 flex gap-4">
                <div className="text-3xl shrink-0" aria-hidden="true">{icon}</div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-navy mb-1">{title}</h3>
                    <p className="text-text-soft text-xs sm:text-sm leading-relaxed mb-4">{desc}</p>
                  </div>
                  <a
                    href={action.href}
                    className="inline-flex items-center text-xs font-bold text-lime-dark hover:text-lime-dark/80 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm w-fit"
                  >
                    {action.label} <span className="transition-transform group-hover:translate-x-1 ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Service Availability / Careers / Social */}
          <div className="space-y-6">
            <div className="bg-navy rounded-2xl p-7 sm:p-8 text-white">
              <h3 className="font-display text-xl font-bold mb-4">Service Availability</h3>
              <p className="text-text-on-dark-soft text-sm leading-relaxed mb-6">
                Our digital salon booking and discovery ecosystem is currently live and active in Trichy (Tiruchirappalli), Tamil Nadu, India.
              </p>
              
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-sm text-text-on-dark-soft">
                  <span className="text-lime" aria-hidden="true">✉️</span> 
                  <span>{companyData.businessEmail}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-on-dark-soft">
                  <span className="text-lime" aria-hidden="true">📞</span> 
                  <span>{companyData.officialPhone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-text-on-dark-soft">
                  <span className="text-lime" aria-hidden="true">📍</span> 
                  <span>Current Service Market: Trichy, Tamil Nadu</span>
                </div>
              </div>

              <div className="border-t border-white/10 mt-6 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-text-on-dark-muted mb-4">Careers &amp; Internships</h4>
                <p className="text-xs text-text-on-dark-soft/90 leading-relaxed mb-4">
                  Interested in remote, project-based internship opportunities at Jayple? View active openings and submit your application through our Careers section.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center text-xs font-bold text-lime hover:text-lime-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-sm"
                >
                  Explore Careers &amp; Internships →
                </Link>
              </div>

              <div className="border-t border-white/10 mt-6 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-text-on-dark-muted mb-4">Follow us</h4>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/jayple.in/', abbr: 'IG' },
                  ].map(({ label, href, abbr }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-9 h-9 bg-white/06 border border-white/10 rounded-md flex items-center justify-center text-xs font-bold text-text-on-dark-muted hover:bg-lime hover:text-navy transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
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
