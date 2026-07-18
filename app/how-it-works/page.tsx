import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CustomerProcess from '@/components/customer/CustomerProcess'

export const metadata: Metadata = {
  title: 'How Jayple Works — Salon Booking Lifecycle',
  description: 'Understand the step-by-step journey of discovering local salons, reserving slots in real-time, and walking in for wait-free beauty care.',
  alternates: { canonical: 'https://jayple.in/how-it-works/' },
}

export default function HowItWorksPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'How it Works', href: '/how-it-works' },
  ]

  return (
    <div className="min-h-screen bg-surface-off">
      <PageHero
        eyebrow="Ecosystem Process"
        title="How Jayple Works"
        lead="A simple, transparent breakdown of the discovery, instant scheduling, and checkout journey."
        breadcrumbs={breadcrumbs}
      />
      <CustomerProcess />
    </div>
  )
}
