import type { Metadata } from 'next'
import DeeplinkAutoRedirect from '@/components/DeeplinkAutoRedirect'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import Partner from '@/components/Partner'
import Trust from '@/components/Trust'
import Team from '@/components/Team'
import AppCTA from '@/components/AppCTA'

export const metadata: Metadata = {
  title: 'Jayple — Book Salon Appointments Instantly | No Waiting in Trichy',
  alternates: { canonical: 'https://jayple.in/' },
}

export default function HomePage() {
  return (
    <>
      <DeeplinkAutoRedirect />
      <Hero />
      <TrustStrip />
      <Features />
      <Stats />
      <HowItWorks />
      <Services />
      <Partner />
      <Trust />
      <Team />
      <AppCTA />
    </>
  )
}
