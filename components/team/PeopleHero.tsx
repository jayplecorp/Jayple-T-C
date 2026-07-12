'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EASE, fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function PeopleHero() {
  return (
    <section className="relative bg-hero-gradient pt-28 pb-16 overflow-hidden">
      {/* Subtle ambient grid and highlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none" 
        aria-hidden="true" 
        style={{
          background: 'radial-gradient(circle 600px at 80% 20%, rgba(200,214,32,0.04) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-text-on-dark-muted">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-lime font-medium">Leadership & Team</span>
        </div>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-xs font-bold uppercase tracking-widest text-lime/80 mb-4 block"
          >
            Our People
          </motion.span>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="font-display text-display-lg sm:text-display-xl text-white mb-6 leading-[1.1] tracking-tight"
          >
            The people building Jayple.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="text-base sm:text-lg text-text-on-dark-soft/90 leading-relaxed max-w-2xl"
          >
            Jayple is being built by a growing team working across company direction, technology, finance, marketing, partner success, and telecalling. We are focused on solving real salon scheduling challenges through practical digital platforms.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
