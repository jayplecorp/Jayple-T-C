import Link from 'next/link'
import Image from 'next/image'

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
                { label: 'Instagram', href: 'https://instagram.com', abbr: 'IG' },
                { label: 'LinkedIn',  href: 'https://linkedin.com',  abbr: 'in' },
                { label: 'Facebook',  href: 'https://facebook.com',  abbr: 'f'  },
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
