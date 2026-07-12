'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function CareersHero() {
  return (
    <section className="bg-navy text-white relative overflow-hidden pt-28 pb-20 sm:pb-24 lg:pt-36 lg:pb-32" aria-labelledby="careers-hero-heading">
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
            CAREERS AT JAYPLE
          </span>

          {/* Headline */}
          <h1 id="careers-hero-heading" className="font-display font-extrabold text-[36px] sm:text-[48px] lg:text-[64px] leading-tight tracking-tight text-white mb-6">
            Contribute to real work behind a <span className="text-lime">live platform.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-text-on-dark-soft/90 leading-relaxed max-w-2xl mx-auto mb-10">
            Work on operational tasks and project assignments connected to a platform already in use by customers and salon partners.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#internships"
              className="px-8 py-4 bg-lime text-navy font-bold text-sm sm:text-base rounded-xl hover:bg-lime-bright transition-colors shadow-lime-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Explore Internships →
            </a>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/20 text-white font-semibold text-sm sm:text-base rounded-xl hover:border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Read Jayple&apos;s Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
