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

const customerPillars: ValuePillar[] = [
  {
    icon: (
      <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Zero Waiting Room Time',
    description: 'Arrive exactly when your stylist is ready. Our slot-based booking eliminates waiting rooms and wasted hours — forever. Your time is valuable.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Upfront & Transparent Catalogs',
    description: 'Explore full salon menus, compare service pricing, and see estimated treatment times before booking. No surprise bills or hidden fees.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '100% Quality-Verified Salons',
    description: 'Every local styling salon on Jayple passes rigorous quality onboarding, ensuring certified beauty professionals and top hygiene.'
  }
]

export default function CustomerValue() {
  return (
    <>
      {/* 01 — Customer Challenge & Value Proposition */}
      <section className="section-padding bg-white text-text" aria-labelledby="customer-value-heading">
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
                  The Jayple Difference
                </span>
                <h2 id="customer-value-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                  Simplifying how you discover and book salon appointments.
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
                  Most customers schedule salon visits by calling, messaging, or simply walking in hoping for a free slot. This manual coordination leads to unexpected queues, pricing uncertainty, and stylist unavailability.
                </p>
                <p>
                  Jayple digitizes the client-side experience. We provide a single app where you can explore verified local salons in Trichy, compare detailed treatment listings, choose open slots, and confirm appointments instantly.
                </p>
              </motion.div>
            </div>
          </div>

          {/* 3-Column Value Proposition Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {customerPillars.map((pillar, idx) => (
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
      <section className="bg-navy-mid py-12 text-white border-t border-b border-navy-light" aria-label="Customer platform statistics">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: '0 Min', label: 'Average queue wait' },
              { val: 'Earned', label: 'Cashback on every booking' },
              { val: companyData.stats.salonPartners, label: 'Verified Trichy Salons' },
              { val: companyData.stats.avgRating, label: 'Average User Review' },
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
    </>
  )
}
