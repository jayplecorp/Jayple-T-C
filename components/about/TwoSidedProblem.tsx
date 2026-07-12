'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function TwoSidedProblem() {
  return (
    <section className="section-padding bg-white text-text" aria-labelledby="two-sided-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
            A Broader Understanding
          </span>
          <h2 id="two-sided-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
            The customer experience was only one side of the story.
          </h2>
          <p className="text-base sm:text-[17px] text-text-soft leading-relaxed">
            The more the founders thought about the customer experience, the clearer another perspective became. A better discovery and booking experience could not be considered in isolation from the salon businesses providing those services.
          </p>
        </motion.div>

        {/* Two-Sided Narrative Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Customer Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.05 }}
            className="bg-surface-off border border-surface-border rounded-2xl p-8 relative"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lime">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-navy">For Customers</h3>
            </div>
            <p className="text-text-soft text-[15px] leading-relaxed mb-5">
              People looking for salon services often faced uncertainty before the visit itself — which salon to choose, what services are available, whether pricing is clear, and whether booking is possible without a physical visit.
            </p>
            <ul className="space-y-3">
              {[
                'Discover salon businesses nearby',
                'Explore available services and pricing',
                'Access relevant service information',
                'Book salon appointments through the platform',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-soft">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Salon Partner Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
            className="bg-surface-off border border-surface-border rounded-2xl p-8 relative"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lime">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-navy">For Salon Partners</h3>
            </div>
            <p className="text-text-soft text-[15px] leading-relaxed mb-5">
              Salon businesses — especially smaller, independent ones — often had limited ways to present their services digitally, improve discoverability, or connect with potential customers beyond walk-ins and word of mouth.
            </p>
            <ul className="space-y-3">
              {[
                'Showcase salon services and pricing digitally',
                'Strengthen online presence and discoverability',
                'Connect with customers through a dedicated platform',
                'Participate in a growing digital salon ecosystem',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-soft">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Connecting narrative */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.2 }}
          className="max-w-3xl mt-10"
        >
          <p className="text-base sm:text-[17px] text-text-soft leading-relaxed">
            This realisation shaped Jayple&apos;s direction. The problem was connected — customers and salon businesses were part of the same experience. A meaningful solution needed to consider both sides, not just one.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
