import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import SecurityTrust from '@/components/about/SecurityTrust'

export const metadata: Metadata = {
  title: 'Security & Trust — Jayple',
  description: 'Understand how Jayple protects user accounts, transaction paths, and details for both customers and salon partners.',
  alternates: { canonical: 'https://jayple.in/security-trust/' },
}

export default function SecurityTrustPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Security & Trust', href: '/security-trust' },
  ]

  return (
    <div className="min-h-screen bg-surface-off">
      <PageHero
        eyebrow="Security & Trust"
        title="Platform Safety & Integrity"
        lead="Our commitment to maintaining a secure, verified beauty discovery and appointment scheduling ecosystem."
        breadcrumbs={breadcrumbs}
      />
      <SecurityTrust />
    </div>
  )
}
