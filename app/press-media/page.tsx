import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import PressMedia from '@/components/about/PressMedia'

export const metadata: Metadata = {
  title: 'Press & Media Resources — Jayple',
  description: 'Access the official newsroom, verified corporate parameters, fact sheet, and media assets for Jayple Private Limited.',
  alternates: { canonical: 'https://jayple.in/press-media/' },
}

export default function PressMediaPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Press & Media', href: '/press-media' },
  ]

  return (
    <div className="min-h-screen bg-surface-off">
      <PageHero
        eyebrow="Press & Media"
        title="Jayple Newsroom & Resources"
        lead="Access official brand details, color parameters, verified corporate metrics, and contact paths for content publishers."
        breadcrumbs={breadcrumbs}
      />
      <PressMedia />
    </div>
  )
}
