'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { onAppCTAClick } from '@/hooks/useDeeplink'

export default function HomepageConnect() {
  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden" aria-labelledby="connect-heading">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'radial-gradient(circle 800px at 50% 50%, rgba(200,214,32,0.15) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-3 block">
              Engagement Paths
            </span>
            <h2 id="connect-heading" className="font-display text-display-md text-white">
              There is more than one way to be part of the Jayple journey.
            </h2>
            <p className="text-text-on-dark-soft/90 text-base sm:text-lg mt-3 leading-relaxed">
              Whether you are a customer looking for booking convenience, a salon owner building a digital brand, or an engineer looking for team opportunities.
            </p>
          </motion.div>
        </div>

        {/* 3 Audience Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Customers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
            className="flex flex-col bg-white/03 border border-white/08 rounded-2xl p-8 hover:border-lime/20 transition-all duration-300 h-full"
          >
            <span className="text-[10px] font-bold text-lime uppercase tracking-widest block mb-2">For Customers</span>
            <h3 className="text-lg font-bold text-white mb-3">Explore Booking Platforms</h3>
            <p className="text-sm text-text-on-dark-muted leading-relaxed mb-6 flex-1">
              Download the customer mobile experience to explore salons, read verified styling lists, and schedule appointments instantly.
            </p>
            <a
              href="#get-app"
              onClick={onAppCTAClick}
              className="w-full py-3.5 text-center text-sm font-bold bg-lime hover:bg-lime-bright text-navy rounded-xl transition-all shadow-lime-sm"
            >
              Explore Jayple
            </a>
          </motion.div>

          {/* Salon Businesses */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
            className="flex flex-col bg-white/03 border border-white/08 rounded-2xl p-8 hover:border-lime/20 transition-all duration-300 h-full"
          >
            <span className="text-[10px] font-bold text-lime uppercase tracking-widest block mb-2">For Salon Businesses</span>
            <h3 className="text-lg font-bold text-white mb-3">Partner with the Ecosystem</h3>
            <p className="text-sm text-text-on-dark-muted leading-relaxed mb-6 flex-1">
              Establish digital presence, automate salon schedules, and streamline checkout operations using our partner platform tools.
            </p>
            <Link
              href="/partner"
              className="w-full py-3.5 text-center text-sm font-semibold text-white border border-white/20 hover:border-white/40 rounded-xl transition-all hover:bg-white/05"
            >
              Partner with Jayple
            </Link>
          </motion.div>

          {/* Candidates */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.2 }}
            className="flex flex-col bg-white/03 border border-white/08 rounded-2xl p-8 hover:border-lime/20 transition-all duration-300 h-full"
          >
            <span className="text-[10px] font-bold text-lime uppercase tracking-widest block mb-2">For Candidates</span>
            <h3 className="text-lg font-bold text-white mb-3">Build the Future of Styling</h3>
            <p className="text-sm text-text-on-dark-muted leading-relaxed mb-6 flex-1">
              Learn, contribute, and collaborate alongside our young, serious product engineering, success, and marketing teams.
            </p>
            <Link
              href="/careers"
              className="w-full py-3.5 text-center text-sm font-semibold text-white border border-white/20 hover:border-white/40 rounded-xl transition-all hover:bg-white/05"
            >
              Explore Careers
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
