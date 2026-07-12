'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function MissionVision() {
  return (
    <section className="section-padding bg-surface-off text-text" aria-labelledby="mission-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Our Mission
            </span>
            <h2 id="mission-heading" className="font-display font-extrabold text-[24px] sm:text-[30px] text-navy leading-tight tracking-tight mb-5">
              What we are actively building.
            </h2>
            <p className="text-base sm:text-[17px] text-text-soft leading-relaxed">
              To build clear, accessible digital experiences that make salon discovery, service exploration, and appointment booking simpler for customers — while enabling salon businesses to strengthen their digital presence, improve discoverability, and participate in the Jayple ecosystem.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Our Vision
            </span>
            <h3 className="font-display font-extrabold text-[24px] sm:text-[30px] text-navy leading-tight tracking-tight mb-5">
              The future we want to contribute towards.
            </h3>
            <p className="text-base sm:text-[17px] text-text-soft leading-relaxed">
              We envision a more connected digital salon ecosystem — where discovering and accessing salon services becomes simpler for customers, and meaningful digital participation becomes more accessible for salon businesses of every size.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
