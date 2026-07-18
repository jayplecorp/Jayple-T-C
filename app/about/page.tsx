import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutIntro from '@/components/about/AboutIntro'
import AboutProblem from '@/components/about/AboutProblem'
import AboutQuestion from '@/components/about/AboutQuestion'
import IdeaGrowth from '@/components/about/IdeaGrowth'
import TwoSidedProblem from '@/components/about/TwoSidedProblem'
import EcosystemEvolution from '@/components/about/EcosystemEvolution'
import JaypleJourney from '@/components/about/JaypleJourney'
import PurposeStatement from '@/components/about/PurposeStatement'
import MissionVision from '@/components/about/MissionVision'
import CompanyPrinciples from '@/components/about/CompanyPrinciples'
import JaypleToday from '@/components/about/JaypleToday'
import AboutClosing from '@/components/about/AboutClosing'

export const metadata: Metadata = {
  title: 'About Jayple | Our Story, Purpose & Technology Mission',
  description: 'Jayple Private Limited is a technology-driven company building digital experiences for salon discovery, appointment booking, and salon business participation, currently live in Trichy.',
  alternates: { canonical: 'https://jayple.in/about/' },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-off">
      
      {/* ── MODULE 3.2 — OPENING NARRATIVE ── */}

      {/* 01 — ABOUT HERO */}
      <AboutHero />

      {/* 02 — COMPANY INTRODUCTION / WHO JAYPLE IS */}
      <AboutIntro />

      {/* 03 — BUILT FROM A REAL PROBLEM */}
      <AboutProblem />

      {/* 04 — THE QUESTION THAT STARTED JAYPLE */}
      <AboutQuestion />

      {/* ── MODULE 3.3 — IDEA EVOLUTION & TWO-SIDED ECOSYSTEM ── */}

      {/* 05 — AN IDEA THAT GREW WITH US */}
      <IdeaGrowth />

      {/* 07 — THE PROBLEM HAD TWO SIDES */}
      <TwoSidedProblem />

      {/* 08 — FROM IDEA TO ECOSYSTEM */}
      <EcosystemEvolution />

      {/* 09 — THE JAYPLE JOURNEY */}
      <JaypleJourney />

      {/* ── MODULE 3.4 — PURPOSE, PRINCIPLES & CLOSING ── */}

      {/* 10 — WHY JAYPLE EXISTS */}
      <PurposeStatement />

      {/* 11 — MISSION & VISION */}
      <MissionVision />

      {/* 12 — HOW WE THINK */}
      <CompanyPrinciples />

      {/* 13 — JAYPLE TODAY */}
      <JaypleToday />

      {/* 16 — THE JOURNEY CONTINUES */}
      <AboutClosing />

    </div>
  )
}
