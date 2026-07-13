'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
}

const verifiedBenefits: Benefit[] = [
  {
    icon: (
      <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: 'Ecosystem Visibility',
    description: `Present your salon and available services within the Jayple search ecosystem available in the active live market of ${companyData.liveCity}.`
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
    title: 'Structured Client Journey',
    description: 'Give customers a clear digital path to explore catalog listings, service details, pricing structure, and timing parameters.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lime-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
    title: 'Operational Support',
    description: 'Use the dedicated Salon Partner experience to coordinate supported timing profiles and organize appointment slots.'
  }
]

export default function PartnerBenefits() {
  return (
    <section className="section-padding bg-surface text-text border-b border-surface-border" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Partner Benefits
            </span>
            <h2 id="benefits-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
              What the Jayple Partner experience makes possible.
            </h2>
            <p className="text-base sm:text-lg text-text-soft leading-relaxed">
              We focus on delivering platform utilities that help salons define their presence online and manage incoming scheduling traffic responsibly.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {verifiedBenefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.08 }}
              className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-6 shrink-0">
                  {benefit.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-soft leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
