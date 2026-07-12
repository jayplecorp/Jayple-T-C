'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function PurposeStatement() {
  return (
    <section className="py-24 bg-white text-text" aria-labelledby="purpose-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Why Jayple Exists
            </span>
            <h2 id="purpose-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-8">
              The problem still shapes the purpose.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
            className="space-y-6 text-base sm:text-[17px] text-text-soft leading-relaxed"
          >
            <p>
              The platform has launched. Dedicated digital experiences are live. But the original problem — the friction around discovering salons, understanding services, and accessing booking — has not disappeared. And salon businesses still need meaningful ways to participate digitally and become easier to discover.
            </p>
            <p>
              Jayple exists between those two needs. The company is building to reduce unnecessary friction for customers exploring salon services while creating clearer digital paths for salon businesses to present what they offer, connect with customers, and participate in a growing ecosystem.
            </p>
            <p className="text-navy font-medium border-l-2 border-lime pl-5">
              The purpose is not to replace how salons work. It is to make the connection between customers and salon businesses simpler, clearer, and more accessible through practical digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
