import type { Metadata } from 'next'
import Image from 'next/image'
import PeopleHero from '@/components/team/PeopleHero'
import PeopleIntro from '@/components/team/PeopleIntro'
import FoundingLeadership from '@/components/team/FoundingLeadership'
import ExecutiveAndTeam from '@/components/team/ExecutiveAndTeam'
import PeopleCulture from '@/components/team/PeopleCulture'

export const metadata: Metadata = {
  title: 'Leadership & Team — Jayple',
  description: 'Meet the founding leadership, executive officers, and operational team members building the Jayple salon discovery and booking ecosystem.',
  alternates: { canonical: 'https://jayple.in/team/' },
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-surface-off">
      {/* 01 & 02 — People Hero & Introduction */}
      <PeopleHero />
      <PeopleIntro />

      {/* 03, 04, 05, 06 — Founding Leadership, Founder & Co-Founder profiles, and Transition */}
      <FoundingLeadership />

      {/* 07, 08, 09, 10, 11, 12, 13 — Executive Leadership & Team structure */}
      <ExecutiveAndTeam />

      {/* 14, 15, 16, 17, 18, 19 — Working Philosophy, Culture & Careers bridge */}
      <PeopleCulture />
    </div>
  )
}
