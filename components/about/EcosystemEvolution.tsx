'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function EcosystemEvolution() {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden" aria-labelledby="ecosystem-heading">
      {/* Ambient background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'radial-gradient(circle 500px at 30% 50%, var(--accent) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime/80 mb-3 block">
            The Platform Takes Shape
          </span>
          <h2 id="ecosystem-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-white leading-tight tracking-tight mb-6">
            From an idea to dedicated digital experiences.
          </h2>
          <p className="text-base sm:text-[17px] text-text-on-dark-soft/90 leading-relaxed">
            Once the problem was understood from both perspectives, Jayple&apos;s direction became clearer. A single interface would not represent the full scope of the challenge. Instead, Jayple developed dedicated digital experiences around both sides of the salon journey.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

          {/* Customer Platform */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.05 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-navy-mid overflow-hidden">
              <Image
                src="/images/hero-salon-app.png"
                alt="Jayple customer platform — salon discovery and booking interface"
                fill
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="font-display font-bold text-lg text-white mb-2">Jayple for Customers</h3>
              <p className="text-sm text-text-on-dark-soft/80 leading-relaxed mb-4">
                A dedicated experience for discovering salon businesses, exploring services, accessing service information, and booking salon appointments.
              </p>
              <div className="flex items-center gap-3 text-xs text-text-on-dark-muted">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08]">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
                  Live
                </span>
                <span>Android</span>
                <span aria-hidden="true">·</span>
                <span>iOS</span>
              </div>
            </div>
          </motion.div>

          {/* Salon Partner Platform */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-navy-mid overflow-hidden">
              <Image
                src="/images/hero-salon-styling.png"
                alt="Jayple Salon Partner platform — salon business management interface"
                fill
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="font-display font-bold text-lg text-white mb-2">Jayple for Salon Partners</h3>
              <p className="text-sm text-text-on-dark-soft/80 leading-relaxed mb-4">
                A dedicated experience for salon businesses to present services, strengthen digital presence, improve discoverability, and connect with customers.
              </p>
              <div className="flex items-center gap-3 text-xs text-text-on-dark-muted">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08]">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
                  Live
                </span>
                <span>Android</span>
                <span aria-hidden="true">·</span>
                <span>iOS</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
