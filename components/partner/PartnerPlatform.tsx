'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

interface PlatformFeature {
  icon: React.ReactNode
  title: string
  description: string
}

const platformFeatures: PlatformFeature[] = [
  {
    icon: (
      <svg className="w-5.5 h-5.5 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Booking Slot Coordination',
    description: 'Salon partners can configure available daily hours, block out specific dates, and coordinate time slots to avoid client schedule overlaps.'
  },
  {
    icon: (
      <svg className="w-5.5 h-5.5 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
    title: 'Catalog Pricing & Service Listings',
    description: 'Update the prices of your styling treatments, modify descriptions, and list service durations to keep customers informed.'
  },
  {
    icon: (
      <svg className="w-5.5 h-5.5 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Operational Tracking',
    description: 'Review incoming customer requests, monitor active slots, and check scheduled timings from a unified partner dashboard.'
  }
]

export default function PartnerPlatform() {
  return (
    <section className="section-padding bg-white text-text" aria-labelledby="platform-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Context */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="space-y-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft block">
                Platform Experience
              </span>
              <h2 id="platform-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                Operational tools designed for salon management.
              </h2>
              <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                Jayple provides Salon Partners with a dedicated environment to manage listing details. The platform translates complex salon operations into simple, actionable updates.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Platform Features List */}
          <div className="lg:col-span-7 space-y-8">
            {platformFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-surface-off border border-surface-border rounded-2xl"
              >
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
