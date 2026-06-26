import Link from 'next/link'
import Image from 'next/image'

const APP_STORE_URL  = 'https://apps.apple.com/in/app/jayple/id6779542812'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.jayple.app'

const COMPANY_LINKS = [
  { label: 'Home',          href: '/' },
  { label: 'About',         href: '/about' },
  { label: 'Careers',       href: '/team' },
  { label: 'For Partners',  href: '/partner' },
  { label: 'Blog',          href: '/blog' },
  { label: 'Contact',       href: '/contact' },
]

const PARTNER_LINKS = [
  { label: 'Become a Partner', href: '/partner' },
  { label: 'Partner Policy',   href: '/vendor-policy' },
  { label: 'Vendor Terms',     href: '/vendor-terms' },
  { label: 'Vendor Privacy',   href: '/vendor-privacy' },
]

const LEGAL_LINKS = [
  { label: 'Terms & Conditions',    href: '/terms' },
  { label: 'Privacy Policy',        href: '/privacy' },
  { label: 'Cancellation & Refund', href: '/refund-policy' },
  { label: 'Payment Policy',        href: '/payment-policy' },
  { label: 'Cookie Policy',         href: '/cookie-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/08" aria-label="Site footer">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Jayple Home">
              <Image src="/logo.png" alt="Jayple Logo" width={32} height={32} className="rounded-lg" />
              <span className="font-display font-extrabold text-lg text-white">
                Jay<span className="text-lime">p</span>le
              </span>
            </Link>
            <p className="text-text-on-dark-muted text-sm leading-relaxed max-w-xs mb-6">
              Jayple is India's premium salon & wellness booking platform — streamlining salon discovery, appointment scheduling and secure online payments across Trichy.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/jayple.in/', abbr: 'IG' },
              ].map(({ label, href, abbr }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 bg-white/06 border border-white/10 rounded-md flex items-center justify-center text-xs font-bold text-text-on-dark-muted hover:bg-lime hover:text-navy hover:border-lime transition-all duration-200"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {abbr}
                </a>
              ))}
            </div>
            {/* Download links */}
            <div className="flex flex-wrap gap-2 mt-5">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/06 border border-white/10 hover:bg-white/12 px-3.5 py-2 rounded-md transition-all duration-200"
                aria-label="Get Jayple on Google Play"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 2.3 13 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1zM14.5 13.5l2.8 2.8-9.9 5.6 7.1-8.4zm0-3L7.4 2.1l9.9 5.6-2.8 2.8zM18.6 9.1l3.1 1.8c.7.4.7 1.4 0 1.8l-3.1 1.8L15.5 12l3.1-2.9z" />
                </svg>
                <span className="text-xs font-semibold text-white">Google Play</span>
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/06 border border-white/10 hover:bg-white/12 px-3.5 py-2 rounded-md transition-all duration-200"
                aria-label="Download Jayple on the App Store"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.4 1.4c.1 1-.3 2-.9 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7.6-.8 1.7-1.3 2.6-1.4zM19 17.3c-.5 1.1-.7 1.6-1.3 2.6-.9 1.4-2.1 3.1-3.7 3.1-1.4 0-1.7-.9-3.6-.9-1.8 0-2.2.9-3.6.9-1.5 0-2.7-1.5-3.5-2.9C.8 16.3.5 11.9 2.2 9.6c1-1.4 2.5-2.2 4-2.2 1.5 0 2.5 1 3.7 1 1.2 0 1.9-1 3.7-1 1.3 0 2.7.7 3.7 2-3.3 1.8-2.7 6.4 1.3 7.9z" />
                </svg>
                <span className="text-xs font-semibold text-white">App Store</span>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-on-dark-muted mb-5">Company</h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-text-on-dark-soft hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-on-dark-muted mb-5">Partners</h3>
            <ul className="space-y-3">
              {PARTNER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-text-on-dark-soft hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-on-dark-muted mb-5">Legal</h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-text-on-dark-soft hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/06 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-on-dark-muted text-sm">© 2026 Jayple. All rights reserved.</p>
          <p className="text-text-on-dark-muted text-sm">Crafted for hair & beauty wellness · Trichy, India</p>
        </div>
      </div>
    </footer>
  )
}
