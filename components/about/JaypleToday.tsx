'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

export default function JaypleToday() {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden" aria-labelledby="today-heading">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'radial-gradient(circle 600px at 70% 40%, var(--accent) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime/80 mb-3 block">
            Jayple Today
          </span>
          <h2 id="today-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-white leading-tight tracking-tight mb-6">
            Still at the beginning of the journey.
          </h2>
          <p className="text-base sm:text-[17px] text-text-on-dark-soft/90 leading-relaxed">
            Jayple launched on {companyData.launchDate}. The company is at an early stage — building, learning, and growing the ecosystem in {companyData.liveCity}. These numbers represent where the journey currently stands.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Salon Partners */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
            <div className="font-display font-extrabold text-[36px] sm:text-[42px] text-white tracking-tight leading-none mb-2">
              {companyData.stats.salonPartners}
            </div>
            <p className="text-sm text-text-on-dark-soft/80">
              Salon partners onboarded
            </p>
          </div>

          {/* Services */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
            <div className="font-display font-extrabold text-[36px] sm:text-[42px] text-white tracking-tight leading-none mb-2">
              {companyData.stats.servicesAvailable}
            </div>
            <p className="text-sm text-text-on-dark-soft/80">
              Salon services in the ecosystem
            </p>
          </div>

          {/* Market */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
            <div className="font-display font-extrabold text-[36px] sm:text-[42px] text-lime tracking-tight leading-none mb-2">
              {companyData.liveCity}
            </div>
            <p className="text-sm text-text-on-dark-soft/80">
              Current live market
            </p>
          </div>

          {/* Platforms */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
            <div className="font-display font-extrabold text-[20px] sm:text-[24px] text-white tracking-tight leading-tight mb-2">
              Customer +<br />Salon Partner
            </div>
            <p className="text-sm text-text-on-dark-soft/80">
              Dedicated experiences · Android &amp; iOS
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
