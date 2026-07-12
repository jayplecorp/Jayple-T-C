'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

interface OnboardingStep {
  step: string
  title: string
  description: string
}

const onboardingSteps: OnboardingStep[] = [
  {
    step: 'Step 01',
    title: 'Express Interest',
    description: 'Provide your basic salon details, location, and business contact information by sending an email to our partner success team.'
  },
  {
    step: 'Step 02',
    title: 'Context Review',
    description: 'We review salon profiles, service standards, and local reputation as part of our onboarding review steps to ensure a positive customer experience.'
  },
  {
    step: 'Step 03',
    title: 'Discussion & Demo',
    description: 'Our team connects with you to arrange a discussion, explain the platform features, and answer operational questions.'
  },
  {
    step: 'Step 04',
    title: 'Activation & Launch',
    description: 'Approved salons complete account set up and catalog listing. We help verify that services display correctly before booking slots go live.'
  }
]

export default function PartnerProcess() {
  return (
    <section className="section-padding bg-surface-off border-t border-b border-surface-border text-text" aria-labelledby="process-heading">
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
              Onboarding Process
            </span>
            <h2 id="process-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
              Our review-led onboarding steps.
            </h2>
            <p className="text-base sm:text-lg text-text-soft leading-relaxed">
              We focus on building a reliable ecosystem. Rather than offering unrestricted public registration, Jayple reviews each prospective partner business context and reputation to support platform quality.
            </p>
          </motion.div>
        </div>

        {/* Vertical/Horizontal step list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {onboardingSteps.map((step, idx) => (
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
