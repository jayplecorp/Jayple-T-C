import type { Metadata } from 'next'
import PartnerHero from '@/components/partner/PartnerHero'
import PartnerValue from '@/components/partner/PartnerValue'
import PartnerProcess from '@/components/partner/PartnerProcess'
import PartnerPlatform from '@/components/partner/PartnerPlatform'
import PartnerBenefits from '@/components/partner/PartnerBenefits'
import PartnerAppSection from '@/components/partner/PartnerAppSection'

export const metadata: Metadata = {
  title: 'For Salon Partners — Jayple',
  description: 'Partner with Jayple to establish your salon\'s digital presence, organize service catalogs, and manage customer bookings in Trichy.',
  alternates: { canonical: 'https://jayple.in/partner/' },
}

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-surface-off">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://jayple.in/partner/#webpage',
            url: 'https://jayple.in/partner/',
            name: 'For Salon Partners — Jayple',
            description: 'Partner with Jayple to establish your salon\'s digital presence, organize service catalogs, and manage customer bookings in Trichy.',
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://jayple.in/#website',
            },
          }),
        }}
      />
      
      {/* 01 — Partner Hero section */}
      <PartnerHero />

      {/* 02, 03 — Partner Value Proposition, Problem, & Metric proofs */}
      <PartnerValue />

      {/* 04 — Onboarding review & inbound steps (Module 5.3) */}
      <PartnerProcess />

      {/* 05 — Partner Platform Experience (Module 5.3) */}
      <PartnerPlatform />

      {/* 06 — Partner Benefits experience (Module 5.4) */}
      <PartnerBenefits />

      {/* 07, 08 — Partner App downloads & final conversion closing (Module 5.4) */}
      <PartnerAppSection />
    </div>
  )
}
