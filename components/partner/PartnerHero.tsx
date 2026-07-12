'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

export default function PartnerHero() {
  return (
    <section className="bg-navy text-white relative overflow-hidden pt-28 pb-20 sm:pb-24 lg:pt-36 lg:pb-32" aria-labelledby="partner-hero-heading">
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
            Accepting new partners in {companyData.liveCity}
          </span>

          {/* Headline */}
          <h1 id="partner-hero-heading" className="font-display font-extrabold text-[36px] sm:text-[48px] lg:text-[64px] leading-tight tracking-tight text-white mb-6">
            Partner with <span className="text-lime">Jayple.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-text-on-dark-soft/90 leading-relaxed max-w-2xl mx-auto mb-10">
            Establish a digital presence, organize your service catalog, and manage customer bookings through our dedicated partner platform.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jayple.appointments@gmail.com"
              className="px-8 py-4 bg-lime text-navy font-bold text-sm sm:text-base rounded-xl hover:bg-lime-bright transition-colors shadow-lime-sm"
            >
              Apply to Partner →
            </a>
            <a
              href="#partner-app"
              className="px-8 py-4 border border-white/20 text-white font-semibold text-sm sm:text-base rounded-xl hover:border-white/50 transition-colors"
            >
              Explore the App
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
