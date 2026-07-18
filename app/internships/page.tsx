import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CareersInternships from '@/components/careers/CareersInternships'
import CareersRoles from '@/components/careers/CareersRoles'
import CareersJourney from '@/components/careers/CareersJourney'

export const metadata: Metadata = {
  title: 'Internships — Jayple',
  description: 'Apply for remote, project-based internship opportunities at Jayple Private Limited and contribute to active platform workflows.',
  alternates: { canonical: 'https://jayple.in/internships/' },
}

export default function InternshipsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Careers', href: '/careers' },
    { label: 'Internships', href: '/internships' },
  ]

  return (
    <div className="min-h-screen bg-surface-off">
      <PageHero
        eyebrow="Internship Program"
        title="Build side-by-side with Jayple"
        lead="Explore remote, project-based internship opportunities where you gain real-world experience on an active digital ecosystem."
        breadcrumbs={breadcrumbs}
      />
      <CareersInternships />
      <CareersRoles />
      <CareersJourney />
    </div>
  )
}
