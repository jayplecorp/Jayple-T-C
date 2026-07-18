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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10">
          
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
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
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

          {/* Customer Legal Links */}
          <div className="col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Customer Legal
            </h3>
            <ul className="space-y-3">
              {footerLegalLinks.slice(0, 5).map((item) => (
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

          {/* Partner Legal Links */}
          <div className="col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Partner Legal
            </h3>
            <ul className="space-y-3">
              {footerLegalLinks.slice(5).map((item) => (
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
