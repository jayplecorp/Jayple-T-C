'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

interface Principle {
  number: string
  title: string
  description: string
}

const principles: Principle[] = [
  {
    number: '01',
    title: 'Start with real problems',
    description: 'Jayple began from friction personally experienced and observed. We ground every idea in a real problem before deciding what the product should become.',
  },
  {
    number: '02',
    title: 'Make the experience clearer',
    description: 'The original challenge involved uncertainty — which salon, what services, when to visit. We value clarity. Good digital experiences should reduce confusion and make the next step easier to understand.',
  },
  {
    number: '03',
    title: 'Build for both sides',
    description: 'A stronger salon experience cannot be considered from one side alone. We build with both customers and salon partners in view, because the problem is connected.',
  },
  {
    number: '04',
    title: 'Learn while building',
    description: 'The founders\' idea developed while they continued college. We do not pretend to have every answer. We learn, question, improve, and keep building with a clearer understanding of the problem.',
  },
  {
    number: '05',
    title: 'Grow with purpose',
    description: 'Jayple is currently live in Trichy. Growth matters when it strengthens the experience and keeps the company connected to the problem it exists to address.',
  },
]

export default function CompanyPrinciples() {
  return (
    <section className="section-padding bg-white text-text" aria-labelledby="principles-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
            How We Think
          </span>
          <h2 id="principles-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
            Principles shaping how we build.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.number}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              className="bg-surface-off border border-surface-border rounded-2xl p-7 flex flex-col"
            >
              <span className="text-xs font-bold text-lime-dark tracking-wider mb-3 block">
                {principle.number}
              </span>
              <h3 className="font-display font-bold text-[17px] text-navy mb-3">
                {principle.title}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed flex-1">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
