'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LEGAL_LINKS = [
  { label: 'Terms & Conditions',    href: '/terms',          short: 'Terms' },
  { label: 'Privacy Policy',        href: '/privacy',        short: 'Privacy' },
  { label: 'Cancellation & Refund', href: '/refund-policy',  short: 'Refund' },
  { label: 'Payment Policy',        href: '/payment-policy', short: 'Payment' },
  { label: 'Cookie Policy',         href: '/cookie-policy',  short: 'Cookies' },
  { label: 'Vendor Terms',          href: '/vendor-terms',   short: 'Vendor Terms' },
  { label: 'Vendor Privacy',        href: '/vendor-privacy', short: 'Vendor Privacy' },
  { label: 'Partner Policy',        href: '/vendor-policy',  short: 'Partner Policy' },
]

function LegalSidebar() {
  const pathname = usePathname()

  return (
    <aside className="lg:w-60 shrink-0">
      <nav className="sticky top-24 bg-surface border border-surface-border rounded-xl p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 px-2">All Policies</p>
        <ul className="space-y-1">
          {LEGAL_LINKS.map(({ label, href }) => {
            const isActive = pathname === href || pathname === href + '/'
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-3 py-2.5 text-sm rounded-md transition-all duration-200 ${
                    isActive
                      ? 'bg-navy text-white font-semibold shadow-sm'
                      : 'text-text-soft hover:text-text hover:bg-surface-warm font-medium'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

function LegalHeader() {
  const pathname = usePathname()
  const current = LEGAL_LINKS.find(
    (l) => pathname === l.href || pathname === l.href + '/'
  )
  const pageTitle = current?.label || 'Legal & Policies'

  return (
    <div className="bg-hero-gradient section-padding-sm">
      <div className="container-max">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4 text-sm">
          <Link href="/" className="text-text-on-dark-muted hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-text-on-dark-muted">/</span>
          <span className="text-lime font-medium">{current?.short || 'Legal'}</span>
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-3 block">
          Legal & Policies
        </span>
        <h1 className="font-display text-display-md text-white">
          {pageTitle}
        </h1>
        <p className="text-text-on-dark-soft text-[15px] mt-3 max-w-xl">
          Last reviewed and updated in June 2026. Please read these policies carefully before using the Jayple platform.
        </p>

        {/* Quick nav pills on mobile */}
        <div className="flex flex-wrap gap-2 mt-6 lg:hidden">
          {LEGAL_LINKS.map(({ short, href }) => {
            const isActive = pathname === href || pathname === href + '/'
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-pill text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-lime text-navy'
                    : 'bg-white/08 text-white/70 border border-white/15 hover:bg-white/15'
                }`}
              >
                {short}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-off pt-20">
      <LegalHeader />

      <div className="container-max py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar — hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <LegalSidebar />
          </div>

          {/* Content */}
          <article className="flex-1 bg-surface border border-surface-border rounded-xl p-8 lg:p-10 prose prose-sm max-w-none
            prose-headings:font-display prose-headings:text-text
            prose-h1:text-2xl prose-h1:mb-2
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pt-6 prose-h2:border-t prose-h2:border-surface-border
            prose-h3:text-lg
            prose-p:text-text-soft prose-p:leading-relaxed
            prose-a:text-lime-dark prose-a:no-underline hover:prose-a:underline
            prose-strong:text-text
            prose-li:text-text-soft
            prose-ul:my-3
          ">
            {children}
          </article>
        </div>
      </div>
    </div>
  )
}
