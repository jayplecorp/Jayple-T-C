import type { Metadata } from 'next'
import CompanyHero from '@/components/company/CompanyHero'
import CompanyFacts from '@/components/company/CompanyFacts'

export const metadata: Metadata = {
  title: 'Company Information & Legal Identity — Jayple',
  description: 'Access official company registration disclosures, verified corporate parameters, live platform stats, and compliance files for Jayple Private Limited.',
  alternates: { canonical: 'https://jayple.in/company/' },
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-surface-off">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://jayple.in/company/#webpage',
            url: 'https://jayple.in/company/',
            name: 'Company Information & Legal Identity — Jayple',
            description: 'Access official company registration disclosures, verified corporate parameters, live platform stats, and compliance files for Jayple Private Limited.',
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://jayple.in/#website',
            },
          }),
        }}
      />

      {/* 01 — Hero Header section */}
      <CompanyHero />

      {/* 02 — Corporate facts & link lists */}
      <CompanyFacts />
    </div>
  )
}
