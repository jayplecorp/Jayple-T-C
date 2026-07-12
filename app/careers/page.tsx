import type { Metadata } from 'next'
import CareersHero from '@/components/careers/CareersHero'
import CareersIntro from '@/components/careers/CareersIntro'
import CareersInternships from '@/components/careers/CareersInternships'
import CareersRoles from '@/components/careers/CareersRoles'
import CareersJourney from '@/components/careers/CareersJourney'

export const metadata: Metadata = {
  title: 'Careers & Internships — Jayple',
  description: 'Explore current remote, project-based internship opportunities at Jayple. Contribute to real work on a live salon booking platform.',
  alternates: { canonical: 'https://jayple.in/careers/' },
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-surface-off">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://jayple.in/careers/#webpage',
            url: 'https://jayple.in/careers/',
            name: 'Careers & Internships — Jayple',
            description: 'Explore current remote, project-based internship opportunities at Jayple. Contribute to real work on a live salon booking platform.',
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://jayple.in/#website',
            },
          }),
        }}
      />

      {/* 01 — Careers Hero section */}
      <CareersHero />

      {/* 02, 03 — Company Work Context, Student-Origin Bridge & Progression timeline */}
      <CareersIntro />

      {/* 04, 05 — Internship Programme Setup, Audience & Opportunity preview */}
      <CareersInternships />

      {/* 06 — Internship Departments, Role requirements, and Responsibilities (Module 6.3) */}
      <CareersRoles />

      {/* 07, 08 — Terms details, Process Journey, and Final CTA apply section (Module 6.4) */}
      <CareersJourney />
    </div>
  )
}
