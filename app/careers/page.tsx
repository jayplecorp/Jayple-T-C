import type { Metadata } from 'next'
import Link from 'next/link'
import CareersHero from '@/components/careers/CareersHero'
import CareersIntro from '@/components/careers/CareersIntro'

export const metadata: Metadata = {
  title: 'Careers — Jayple',
  description: 'Explore opportunities, work culture, and remote project-based roles at Jayple Private Limited.',
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
            name: 'Careers — Jayple',
            description: 'Explore opportunities, work culture, and remote project-based roles at Jayple Private Limited.',
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

      {/* 04 — Careers Internships CTA */}
      <section className="section-padding bg-navy text-white relative overflow-hidden" aria-labelledby="internships-cta-heading">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          aria-hidden="true" 
          style={{
            backgroundImage: 'radial-gradient(circle 800px at 50% 50%, rgba(200,214,32,0.12) 0%, transparent 60%)'
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-lime/80 block mb-3">
            Opportunities
          </span>
          <h2 id="internships-cta-heading" className="font-display text-display-md font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto mb-6">
            Looking for Internships?
          </h2>
          <p className="text-base sm:text-lg text-text-on-dark-soft/90 max-w-xl mx-auto leading-relaxed mb-8">
            We offer remote, project-based internship opportunities where you can contribute directly to active business workflows and build on a live digital salon booking platform.
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-3 px-8 py-4 bg-lime text-navy font-bold text-base rounded-xl hover:bg-lime-bright transition-colors group shadow-lime-sm"
          >
            Explore Internship Openings →
          </Link>
        </div>
      </section>
    </div>
  )
}
