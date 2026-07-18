'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import AppStoreActions from '@/components/AppStoreActions'

export default function CustomerAppSection() {
  return (
    <>
      {/* 01 — Customer App Features Section */}
      <section id="download" className="section-padding bg-white text-text" aria-labelledby="app-heading">
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
                  The Mobile Experience
                </span>
                <h2 id="app-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                  Your grooming calendar, built for convenience.
                </h2>
                <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                  The dedicated Jayple Customer App gives you direct access to the best styling salons in Trichy. Discover styling packages, coordinate timings, and organize your hair and beauty schedule from a clean mobile interface.
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
                  <h3 className="font-bold text-navy text-base sm:text-lg">Instant Slot Reservation</h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    Reserve available slots in real-time. Walk in right when your stylist is ready.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-navy text-base sm:text-lg">Wallet & Rewards</h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    Earn cashback credited to your Jayple Wallet on bookings, saving more on your next beauty and grooming sessions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-navy text-base sm:text-lg">Detailed Stylist Portfolios</h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    Explore stylist profiles, check credentials, view real review metrics, and inspect catalogs beforehand.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-navy text-base sm:text-lg">Local Discovery Map</h3>
                  <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                    Find top-rated barbershops and salons operating in Trichy with simple address routing guidance.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-6 flex flex-col justify-center items-center bg-navy border border-white/10 rounded-3xl p-8 sm:p-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
                className="text-center space-y-6 w-full"
              >
                <span className="text-xs font-bold text-lime uppercase tracking-widest block">
                  Download Customer App
                </span>
                <p className="text-sm text-white/70 leading-relaxed">
                  Start booking salon appointments seamlessly. Install the Jayple application on your Android or iOS device.
                </p>
                
                {/* Embedded central store app action buttons */}
                <div className="flex flex-col items-center gap-4 pt-2">
                  <AppStoreActions type="customer" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 02 — High-contrast closing Customer CTA */}
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
              Skip The Queues
            </span>
            
            <h2 className="font-display text-display-md sm:text-display-lg font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto">
              Ready for a smarter salon experience?
            </h2>
            
            <p className="text-base sm:text-lg text-text-on-dark-soft/90 max-w-xl mx-auto leading-relaxed">
              Install the Jayple app on your mobile device. Browse verified local salons, lock in your open timings, and enjoy a wait-free grooming session.
            </p>

            <div className="flex justify-center pt-6">
              <AppStoreActions type="customer" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
