'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

interface PlatformFeature {
  icon: string
  title: string
  description: string
}

const platformFeatures: PlatformFeature[] = [
  {
    icon: '📅',
    title: 'Booking Slot Coordination',
    description: 'Salon partners can configure available daily hours, block out specific dates, and coordinate time slots to avoid client schedule overlaps.'
  },
  {
    icon: '📋',
    title: 'Catalog Pricing & Service Listings',
    description: 'Update the prices of your styling treatments, modify descriptions, and list service durations to keep customers informed.'
  },
  {
    icon: '📊',
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
                className="flex gap-4 p-6 bg-surface-off border border-surface-border rounded-2xl"
              >
                <span className="text-2xl pt-1" role="img" aria-hidden="true">
                  {feature.icon}
                </span>
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
