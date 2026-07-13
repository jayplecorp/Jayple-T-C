'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

interface ValuePillar {
  icon: React.ReactNode
  title: string
  description: string
}

const valuePillars: ValuePillar[] = [
  {
    icon: (
      <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: 'Digital Discoverability',
    description: 'Provide clients with a clean web and mobile representation of your salon, listing operating hours, address, and styling images.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
    title: 'Catalog Organization',
    description: 'Display your complete list of grooming treatments, pricing variations, and time durations clearly, reducing catalog confusion.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Slot Coordination',
    description: 'Coordinate appointments through digital slot booking to manage flow and reduce manual call scheduling workload.'
  }
]

export default function PartnerValue() {
  return (
    <>
      {/* 01 — Salon Business Challenge & Value Prop */}
      <section className="section-padding bg-white text-text" aria-labelledby="value-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Main Statement */}
          <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={TRANSITION_DEFAULT}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                  The Problem We Solve
                </span>
                <h2 id="value-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                  Moving salon business details out of scattered channels.
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
                className="space-y-6 text-base sm:text-lg text-text-soft leading-relaxed"
              >
                <p>
                  Salons often coordinate pricing, available treatments, and bookings across fragmented paths—phone calls, direct messages, and offline notes. This manual approach can lead to scheduled double-bookings, miscommunicated durations, and limited local search visibility.
                </p>
                <p>
                  Jayple provides a unified space. By listing your business details on our platform, you give customers a clear structure to discover services and select open slots, simplifying the administrative steps before they walk through your doors.
                </p>
              </motion.div>
            </div>
          </div>

          {/* 3-Column Value Proposition Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.1 }}
                className="bg-surface-off border border-surface-border rounded-2xl p-6 sm:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-6 shrink-0">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-text-soft leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 02 — Metrics summary strip */}
      <section className="bg-navy-mid py-12 text-white border-t border-b border-navy-light" aria-label="Ecosystem statistics">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: companyData.stats.salonPartners, label: 'Salon Partners' },
              { val: companyData.stats.servicesAvailable, label: 'Services listed' },
              { val: companyData.liveCity, label: 'Active market' },
              { val: companyData.paymentProcessor, label: 'Payment handling' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.08 }}
                className="py-4 bg-white/05 rounded-xl border border-white/05"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-lime mb-1">
                  {stat.val}
                </div>
                <div className="text-xs sm:text-sm text-text-on-dark-soft uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Transition into Onboarding Chapter */}
      <section className="section-padding bg-surface-off text-center border-b border-surface-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft block">
              The Next Steps
            </span>
            <h2 className="font-display font-extrabold text-[24px] sm:text-[32px] text-navy leading-tight tracking-tight">
              Understanding the path to partnership.
            </h2>
            <p className="text-sm sm:text-base text-text-soft max-w-xl mx-auto leading-relaxed">
              Partnership begins with understanding your salon&apos;s context, services, and operational setup. In the next section, we outline how our review-led onboarding process operates.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
