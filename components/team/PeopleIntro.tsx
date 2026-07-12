'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function PeopleIntro() {
  return (
    <section className="section-padding bg-surface-off text-text border-b border-surface-border" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Who We Are
              </span>
              <h2 id="intro-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                An early-stage team with shared responsibility.
              </h2>
            </motion.div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
              className="space-y-6 text-base sm:text-lg text-text-soft leading-relaxed"
            >
              <p>
                Jayple is at an early stage of its development. Rather than relying on traditional corporate hierarchies or inflated titles, we organise our work around the practical needs of our customers and salon partners.
              </p>
              <p>
                Every member of our team contributes directly to their areas of responsibility. We focus on continuous collaboration and learning, ensuring that the technology platforms we build remain directly connected to the salon frustrations we are working to simplify.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
