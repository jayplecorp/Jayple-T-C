'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import AppStoreActions from '@/components/AppStoreActions'

export default function EcosystemOverview() {
  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden" aria-labelledby="ecosystem-heading">
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        aria-hidden="true" 
        style={{
          background: 'radial-gradient(circle 600px at 50% 100%, rgba(20,40,80,0.4) 0%, transparent 60%)'
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
              Ecosystem Mechanics
            </span>
            <h2 id="ecosystem-heading" className="font-display text-display-md sm:text-display-lg text-white">
              One ecosystem.<br />Two sides of the salon experience.
            </h2>
          </motion.div>
        </div>

        {/* Side-by-Side Split Columns */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          
          {/* Customer Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
            className="flex flex-col bg-white/03 border border-white/08 rounded-2xl p-8 hover:border-lime/20 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center text-lime mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">For Customers</h3>
            <p className="text-sm text-text-on-dark-soft/90 leading-relaxed mb-6 flex-1">
              Jayple simplifies how you discover local salons, explore available services, view real-time time slots, and schedule salon visits. Secure UPI/wallet payments and instant booking confirmations keep your grooming seamless.
            </p>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold text-lime uppercase tracking-wide block">Platform App Availability:</span>
              <AppStoreActions type="customer" />
            </div>
          </motion.div>

          {/* Salon Partner Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
            className="flex flex-col bg-white/03 border border-white/08 rounded-2xl p-8 hover:border-lime/20 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center text-lime mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">For Salon Partners</h3>
            <p className="text-sm text-text-on-dark-soft/90 leading-relaxed mb-6 flex-1">
              Establish a credible digital presence, showcase your catalog of services, list styling pricing, and manage client slots through the dedicated Partner Platform. Join a thoughtfully growing network reviewed by the Jayple success team.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <Link
                href="/partner"
                className="w-fit px-6 py-3.5 bg-lime text-navy font-bold text-sm rounded-xl hover:bg-lime-bright transition-all shadow-lime-sm hover:shadow-md"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
