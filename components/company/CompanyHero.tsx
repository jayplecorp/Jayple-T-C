'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function CompanyHero() {
  return (
    <section className="bg-navy text-white relative overflow-hidden pt-28 pb-20 sm:pb-24 lg:pt-36 lg:pb-32" aria-labelledby="company-hero-heading">
      {/* Background Subtle Gradient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'radial-gradient(circle 800px at 50% -200px, rgba(200,214,32,0.15) 0%, transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-lime mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            CORPORATE IDENTITY
          </span>

          {/* Headline */}
          <h1 id="company-hero-heading" className="font-display font-extrabold text-[36px] sm:text-[48px] lg:text-[60px] leading-tight tracking-tight text-white mb-6">
            Jayple Private Limited
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-text-on-dark-soft/90 leading-relaxed max-w-2xl mx-auto">
            Access official registration disclosures, verified corporate parameters, live platform stats, and compliance information for Jayple Private Limited.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
