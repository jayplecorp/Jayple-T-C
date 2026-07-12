'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import AppStoreActions from '@/components/AppStoreActions'

export default function PartnerAppSection() {
  return (
    <>
      {/* 04 — Salon Partner App Capabilities & Actions */}
      <section id="partner-app" className="section-padding bg-white text-text" aria-labelledby="app-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={TRANSITION_DEFAULT}
                className="space-y-4"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-text-soft block">
                  The Partner Platform
                </span>
                <h2 id="app-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                  Salon operational tools, built for mobile.
                </h2>
                <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                  The dedicated Jayple Salon Partner app gives salon owners and authorized staff direct control over key features. Update availability, edit treatments, and coordinate listings from a clean interface.
                </p>
              </motion.div>

              {/* Specific features bullets list */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
                className="grid sm:grid-cols-2 gap-6 pt-4"
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-navy text-base sm:text-lg">Booking Management</h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    Track confirmed and incoming appointments in real-time, reducing manual slot check conflicts.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-navy text-base sm:text-lg">Catalog Adjustments</h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    Update listing prices, edit service styling details, and adjust operational parameters when needed.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-navy text-base sm:text-lg">Staff Availability</h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    Coordinate timing calendars and specify opening/closing windows directly through the dashboard.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-navy text-base sm:text-lg">Checkout Support</h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    Organize listing details to support clean transaction flows for your salon clients.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-6 flex flex-col justify-center items-center bg-surface-off border border-surface-border rounded-3xl p-8 sm:p-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
                className="text-center space-y-6 w-full max-w-sm"
              >
                <span className="text-xs font-bold text-lime uppercase tracking-widest block">
                  Download Partner App
                </span>
                <p className="text-sm text-text-soft leading-relaxed">
                  Access partner tools directly. Install the Salon Partner application on supported Android systems.
                </p>
                
                {/* Embedded central store app action buttons (iOS is hidden via props) */}
                <div className="flex flex-col items-center gap-4 pt-2">
                  <AppStoreActions type="partner" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 05 — High-contrast closing B2B CTA */}
      <section className="section-padding bg-navy text-white relative overflow-hidden" aria-labelledby="connect-heading">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          aria-hidden="true" 
          style={{
            backgroundImage: 'radial-gradient(circle 800px at 50% 50%, rgba(200,214,32,0.12) 0%, transparent 60%)'
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
            <span id="connect-heading" className="text-xs font-bold uppercase tracking-widest text-lime/80 block">
              Start Discussion
            </span>
            
            <h2 className="font-display text-display-md sm:text-display-lg font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto">
              Ready to list your salon?
            </h2>
            
            <p className="text-base sm:text-lg text-text-on-dark-soft/90 max-w-xl mx-auto leading-relaxed">
              Connect with our partner success team to discuss listing options, review operational parameters, and begin onboarding steps.
            </p>

            <div className="pt-6">
              <a
                href="mailto:jayple.appointments@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lime text-navy font-bold text-base rounded-xl hover:bg-lime-bright transition-colors group shadow-lime-sm"
              >
                Email us at jayple.appointments@gmail.com →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
