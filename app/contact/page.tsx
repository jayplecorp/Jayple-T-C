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
    <div className="min-h-screen bg-surface-off">
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28">
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
                icon: (
                  <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 18v-6a9 9 0 0118 0v6" />
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                  </svg>
                ),
                title: 'Customer Support',
                email: companyData.officialEmail,
                desc: 'Get help with your customer account setup, booking inquiries, or refund requests.',
                action: { label: 'Email Support', href: `mailto:${companyData.officialEmail}` }
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="9.8" y1="8.2" x2="20" y2="17" />
                    <line x1="9.8" y1="15.8" x2="20" y2="7" />
                  </svg>
                ),
                title: 'Salon Partner Enquiries',
                email: companyData.businessEmail,
                desc: 'Find out how to list your salon treatments and coordinate calendars on our platform.',
                action: { label: 'Email Partner Success', href: `mailto:${companyData.businessEmail}` }
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                ),
                title: 'General & Media Queries',
                email: companyData.businessEmail,
                desc: 'For business collaborations, official correspondence, or press/media inquiries.',
                action: { label: 'Email General Inbox', href: `mailto:${companyData.businessEmail}` }
              },
            ].map(({ icon, title, desc, action }) => (
              <div key={title} className="bg-white border border-surface-border rounded-2xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center shrink-0" aria-hidden="true">
                  {icon}
                </div>
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
                  <svg className="w-4 h-4 text-lime shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <span>{companyData.businessEmail}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-on-dark-soft">
                  <svg className="w-4 h-4 text-lime shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{companyData.officialPhone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-text-on-dark-soft">
                  <svg className="w-4 h-4 text-lime shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
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
