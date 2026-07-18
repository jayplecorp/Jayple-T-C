import type { Metadata } from 'next'
import CustomerHero from '@/components/customer/CustomerHero'
import CustomerValue from '@/components/customer/CustomerValue'
import CustomerServices from '@/components/customer/CustomerServices'
import CustomerAppSection from '@/components/customer/CustomerAppSection'

export const metadata: Metadata = {
  title: 'Jayple for Customers — Zero Wait, Instant Salon Booking',
  description: 'Book trusted local salons instantly in Trichy. Discover top beauty professionals, compare pricing, schedule slots with zero wait time, and earn cashback.',
  alternates: { canonical: 'https://jayple.in/customer/' },
}

export default function CustomerPage() {
  return (
    <div className="min-h-screen bg-surface-off">
      <CustomerHero />
      <CustomerValue />
      <CustomerServices />
      <CustomerAppSection />
    </div>
  )
}
