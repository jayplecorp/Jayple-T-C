'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

interface BookingStep {
  step: string
  title: string
  description: string
}

const bookingSteps: BookingStep[] = [
  {
    step: 'Step 01',
    title: 'Discover Salons',
    description: 'Explore verified styling salons in Trichy. Filter by user rating, specific grooming treatments, price lists, and proximity.'
  },
  {
    step: 'Step 02',
    title: 'Select Open Slots',
    description: 'Review live availability calendars and select exact time slots. Avoid calling ahead or guessing wait times.'
  },
  {
    step: 'Step 03',
    title: 'Confirm & Pay',
    description: 'Book your appointment securely. Pay using UPI, credit cards, or your built-in digital Jayple Wallet with instant confirmation.'
  },
  {
    step: 'Step 04',
    title: 'Walk In on Time',
    description: 'Arrive at your scheduled slot to zero wait time. Get styled by professionals and earn immediate cashback.'
  }
]

export default function CustomerProcess() {
  return (
    <section id="how" className="section-padding bg-surface-off border-t border-b border-surface-border text-text" aria-labelledby="booking-process-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Booking Journey
            </span>
            <h2 id="booking-process-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
              Four steps to styling convenience.
            </h2>
            <p className="text-base sm:text-lg text-text-soft leading-relaxed">
              We design booking around clarity. From discovering a salon to checking out with wallet cashback, Jayple handles the operational details so you can focus on looking your best.
            </p>
          </motion.div>
        </div>

        {/* 4-Step grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bookingSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ ...TRANSITION_DEFAULT, delay: idx * 0.08 }}
              className="bg-white border border-surface-border rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-lime uppercase tracking-widest block mb-4">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
