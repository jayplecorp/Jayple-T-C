import Link from 'next/link'

const LEGAL_LINKS = [
  { label: 'Terms & Conditions',    href: '/terms' },
  { label: 'Privacy Policy',        href: '/privacy' },
  { label: 'Cancellation & Refund', href: '/refund-policy' },
  { label: 'Payment Policy',        href: '/payment-policy' },
  { label: 'Cookie Policy',         href: '/cookie-policy' },
  { label: 'Vendor Terms',          href: '/vendor-terms' },
  { label: 'Vendor Privacy',        href: '/vendor-privacy' },
  { label: 'Partner Policy',        href: '/vendor-policy' },
]

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-off pt-20">
      {/* Legal header */}
      <div className="bg-navy py-10">
        <div className="container-max">
          <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-2 block">Legal</span>
          <h1 className="font-display text-2xl font-extrabold text-white">Legal & Policies</h1>
        </div>
      </div>

      <div className="container-max py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar nav */}
          <aside className="lg:w-56 shrink-0">
            <nav className="sticky top-24 bg-surface border border-surface-border rounded-md p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3 px-2">Documents</p>
              <ul className="space-y-0.5">
                {LEGAL_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-3 py-2 text-sm text-text-soft hover:text-text hover:bg-surface-warm rounded-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="flex-1 bg-surface border border-surface-border rounded-md p-8 lg:p-10 prose prose-sm max-w-none
            prose-headings:font-display prose-headings:text-text
            prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
            prose-p:text-text-soft prose-p:leading-relaxed
            prose-a:text-lime-dark prose-a:no-underline hover:prose-a:underline
            prose-strong:text-text
            prose-li:text-text-soft
          ">
            {children}
          </article>
        </div>
      </div>
    </div>
  )
}
