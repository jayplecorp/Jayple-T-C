'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

export default function CompanyIntro() {
  return (
    <section className="section-padding bg-surface-off text-text border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bold statement */}
          <div className="lg:col-span-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Who We Are
              </span>
              <h2 className="font-display font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] text-navy leading-tight tracking-tight">
                A technology-driven company connecting the salon industry.
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Editorial narrative */}
          <div className="lg:col-span-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
              className="space-y-6 text-base sm:text-lg text-text-soft leading-relaxed"
            >
              <p>
                {companyData.name} is building a smarter, more convenient digital ecosystem that simplifies salon discovery, service exploration, and appointment booking for customers, while helping salon businesses strengthen their digital presence.
              </p>
              <p>
                By building dedicated platforms built around local communities — beginning our journey in {companyData.liveCity} — we eliminate everyday friction like long waiting lines, lack of transparent pricing, and booking inconveniences.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
