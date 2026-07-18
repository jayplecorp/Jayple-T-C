'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT, EASE } from '@/lib/tokens'
import { onAppCTAClick } from '@/hooks/useDeeplink'

export default function CustomerHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-navy text-white pt-28 pb-16 overflow-hidden" aria-labelledby="customer-hero-heading">
      {/* Background Subtle Gradient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 animate-pulse" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'radial-gradient(circle 800px at 50% -200px, rgba(200,214,32,0.15) 0%, transparent 80%)',
          animationDuration: '8s'
        }}
      />
      {/* Background ambient grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-text-on-dark-muted">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-lime font-medium">For Customers</span>
        </div>

        <div className="max-w-5xl">
          {/* Eyebrow Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-lime mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              Now active in Trichy
            </span>
          </motion.div>

          {/* Narrative H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            id="customer-hero-heading"
            className="font-display text-display-lg sm:text-display-xl text-white mb-6 leading-[1.1] tracking-tight"
          >
            Your beauty, <span className="gradient-text">zero wait.</span>
          </motion.h1>

          {/* Lead Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="text-base sm:text-lg lg:text-xl text-text-on-dark-soft/90 leading-relaxed max-w-3xl mb-10"
          >
            Discover trusted salons in Trichy, compare exact pricing catalogs, and schedule open slots instantly. No waiting lines, no manual callbacks — just styling on time.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#download"
              onClick={onAppCTAClick}
              className="px-8 py-4 bg-lime text-navy font-bold text-sm sm:text-base rounded-xl hover:bg-lime-bright transition-colors shadow-lime-sm"
            >
              Get the App →
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-white/20 text-white font-semibold text-sm sm:text-base rounded-xl hover:border-white/50 transition-colors"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
