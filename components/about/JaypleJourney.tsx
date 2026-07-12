'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

interface JourneyStageData {
  label: string
  type: 'narrative' | 'milestone' | 'market'
  date?: string
  title: string
  description: string
}

const journeyStages: JourneyStageData[] = [
  {
    label: 'The Question',
    type: 'narrative',
    title: 'A question worth exploring',
    description: 'A salon-related experience during college created a question about whether technology could simplify salon discovery and booking.',
  },
  {
    label: 'The Idea Developed',
    type: 'narrative',
    title: 'Continued learning and shaping',
    description: 'Jayaprakash and Allwin continued discussing the problem, observing the experience, and gradually shaping a practical direction as they moved through college.',
  },
  {
    label: 'The Problem Expanded',
    type: 'narrative',
    title: 'A broader understanding',
    description: 'The founders recognised that salon businesses were also part of the broader digital experience — the problem had two sides that needed to be addressed together.',
  },
  {
    label: 'Two Sides Emerged',
    type: 'narrative',
    title: 'Customers and Salon Partners',
    description: 'Customer needs and salon business needs became part of one company direction. Jayple developed towards dedicated experiences for both sides of the salon journey.',
  },
  {
    label: 'The Platforms Took Shape',
    type: 'narrative',
    title: 'Dedicated digital experiences',
    description: 'Jayple developed dedicated customer and Salon Partner digital experiences, available on Android and iOS, forming the foundation of the Jayple ecosystem.',
  },
  {
    label: companyData.launchDate,
    type: 'milestone',
    date: companyData.launchDate,
    title: 'Jayple launched',
    description: `${companyData.brandName} launched as a technology-driven company building a digital salon discovery and booking ecosystem.`,
  },
  {
    label: companyData.liveCity,
    type: 'market',
    title: 'The current journey begins',
    description: `Jayple's current live market journey begins in ${companyData.operatingMarket}. Building and learning locally before expanding further.`,
  },
]

function StageIndicator({ type }: { type: JourneyStageData['type'] }) {
  if (type === 'milestone') {
    return (
      <div className="w-4 h-4 rounded-full bg-lime border-[3px] border-surface-off shrink-0 relative z-10" />
    )
  }
  if (type === 'market') {
    return (
      <div className="w-4 h-4 rounded-full bg-navy/40 border-[3px] border-surface-off shrink-0 relative z-10" />
    )
  }
  return (
    <div className="w-3 h-3 rounded-full bg-surface-border border-2 border-surface-off shrink-0 relative z-10 mt-0.5" />
  )
}

export default function JaypleJourney() {
  return (
    <section className="section-padding bg-surface-off text-text" aria-labelledby="journey-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
            The Journey
          </span>
          <h2 id="journey-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
            From a question to Jayple.
          </h2>
        </motion.div>

        {/* Vertical Journey Timeline */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="relative max-w-2xl ml-0 lg:ml-8"
          aria-label="Jayple company journey"
        >
          {/* Vertical line */}
          <div
            className="absolute left-[7px] lg:left-[7px] top-2 bottom-2 w-px bg-surface-border"
            aria-hidden="true"
          />

          {journeyStages.map((stage, index) => (
            <motion.li
              key={stage.label}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: index * 0.06 }}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              <StageIndicator type={stage.type} />
              <div className="flex-1 min-w-0">
                <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                  stage.type === 'milestone' 
                    ? 'text-lime-dark'
                    : stage.type === 'market'
                    ? 'text-navy/60'
                    : 'text-text-muted'
                }`}>
                  {stage.label}
                </span>
                <h3 className={`font-display font-bold mb-1.5 ${
                  stage.type === 'milestone'
                    ? 'text-[18px] text-navy'
                    : 'text-[16px] text-text'
                }`}>
                  {stage.title}
                </h3>
                <p className="text-sm text-text-soft leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

      </div>
    </section>
  )
}
