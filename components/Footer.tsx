'use client'

import Link from 'next/link'
import Image from 'next/image'
import { companyData, navigationData, footerLegalLinks, isVerifiedValue } from '@/lib/companyData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep border-t border-white/08 text-text-on-dark-soft" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          
          {/* Brand & Description (spans 2 columns on large screen) */}
          <div className="col-span-2 flex flex-col pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-2.5 mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-md w-fit" aria-label="Jayple Home">
              <Image
                src="/logo.png"
                alt="Jayple Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-display font-extrabold text-lg text-white">
                Jay<span className="text-lime">p</span>le
              </span>
            </Link>
            <p className="text-text-on-dark-muted text-sm leading-relaxed max-w-sm mb-6">
              {companyData.name} is a technology-driven company building a smarter salon discovery and booking ecosystem for customers and salon businesses.
            </p>
            
            {/* Social Channels */}
            <div className="flex gap-3 mb-6">
              {isVerifiedValue(companyData.socials.instagram) && (
                <a
                  href={companyData.socials.instagram}
                  className="w-9 h-9 bg-white/06 border border-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-text-on-dark-muted hover:bg-lime hover:text-navy hover:border-lime transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  aria-label="Instagram Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IG
                </a>
              )}
            </div>

            {/* Factual Operations Meta */}
            <p className="text-xs text-text-on-dark-muted leading-relaxed">
              Live in {companyData.liveCity}, India
            </p>
          </div>

          {/* Navigation Sections */}
          {navigationData.map((group) => (
            <div key={group.label} className="col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-on-dark-muted hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal / Policy links column */}
          <div className="col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLegalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-on-dark-muted hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Corporate Trust, Office & CIN info (Only render verified values) */}
        {(isVerifiedValue(companyData.cin) ||
          isVerifiedValue(companyData.registeredOffice) ||
          isVerifiedValue(companyData.officialEmail) ||
          isVerifiedValue(companyData.officialPhone)) && (
          <div className="border-t border-white/06 mt-12 pt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-text-on-dark-muted">
            {isVerifiedValue(companyData.cin) && (
              <div>
                <span className="font-bold text-white block mb-1">CIN</span>
                {companyData.cin}
              </div>
            )}
            {isVerifiedValue(companyData.registeredOffice) && (
              <div>
                <span className="font-bold text-white block mb-1">Registered Office</span>
                {companyData.registeredOffice}
              </div>
            )}
            {(isVerifiedValue(companyData.officialEmail) || isVerifiedValue(companyData.officialPhone)) && (
              <div>
                <span className="font-bold text-white block mb-1">Contact</span>
                {isVerifiedValue(companyData.officialEmail) && (
                  <a href={`mailto:${companyData.officialEmail}`} className="hover:text-white block">
                    {companyData.officialEmail}
                  </a>
                )}
                {isVerifiedValue(companyData.officialPhone) && (
                  <a href={`tel:${companyData.officialPhone}`} className="hover:text-white block mt-1">
                    {companyData.officialPhone}
                  </a>
                )}
              </div>
            )}
          </div>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-white/06 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-on-dark-muted text-xs">
            &copy; {currentYear} {companyData.name}. All rights reserved.
          </p>
          <p className="text-text-on-dark-muted text-xs">
            Ecosystem live in Trichy, Tamil Nadu, India · Payment processing powered by Razorpay
          </p>
        </div>

      </div>
    </footer>
  )
}
