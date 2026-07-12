'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { companyData } from '@/lib/companyData'

export default function AboutIntro() {
  return (
    <section className="section-padding bg-surface-off text-text border-b border-surface-border" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left statement column */}
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                Company Identity
              </span>
              <h2 id="intro-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                Building with purpose. Starting in {companyData.liveCity}.
              </h2>
            </motion.div>
          </div>

          {/* Right explanation column */}
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
                {companyData.name} is a technology-driven company building a digital salon discovery and booking ecosystem. 
              </p>
              <p>
                Rather than treating booking as a simple transaction, we design dedicated experiences that recognize the needs of both sides of the salon ecosystem — helping customers discover services and schedule visits while providing salon partners with tools to build a strong digital presence.
              </p>
              <p>
                By starting our operations locally in {companyData.liveCity}, we focus on practical challenges first. This deliberate regional grounding lets us build solutions tailored directly to customers and local beauty professionals.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
