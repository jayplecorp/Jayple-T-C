'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function AboutQuestion() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden" aria-labelledby="question-section-title">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'radial-gradient(circle 600px at 50% 50%, var(--accent) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime/80 block">
            The Founding Question
          </span>
          
          <h2 id="question-section-title" className="font-display text-[26px] sm:text-[34px] lg:text-[40px] font-semibold text-white leading-snug tracking-tight max-w-3xl mx-auto">
            Can technology make the salon discovery and booking experience easier?
          </h2>
          
          <div className="w-12 h-0.5 bg-lime/30 mx-auto my-8" aria-hidden="true" />
          
          <p className="text-sm sm:text-base text-text-on-dark-soft/90 max-w-xl mx-auto leading-relaxed">
            This core question stayed with the founders as they continued college. What started as an everyday observation gradually developed into a collaborative project, laying the technical foundations of the Jayple platform.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
