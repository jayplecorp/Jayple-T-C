'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'

const nextPaths = [
  {
    label: 'Leadership & Team',
    description: 'Meet the founders, leadership, and growing team behind Jayple.',
    href: '/team',
  },
  {
    label: 'Jayple for Customers',
    description: 'Understand the salon discovery and booking experience.',
    href: '/#features',
  },
  {
    label: 'Jayple for Salon Partners',
    description: 'Understand how salon businesses participate in the Jayple ecosystem.',
    href: '/partner',
  },
  {
    label: 'Careers & Internships',
    description: 'Explore opportunities to build alongside the Jayple team.',
    href: '/careers',
  },
]

export default function AboutClosing() {
  return (
    <section className="section-padding bg-surface-off text-text" aria-labelledby="closing-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Closing Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
            What Comes Next
          </span>
          <h2 id="closing-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
            The question became a company. The journey continues.
          </h2>
          <p className="text-base sm:text-[17px] text-text-soft leading-relaxed">
            What began as a question during college has developed into Jayple Private Limited — dedicated digital platform experiences, a growing salon partner ecosystem, and a team working from Trichy. The story is still at an early stage. The company continues building around the same core idea: understand the problem clearly, create practical digital experiences, and build with customers and salon partners in view.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.05 }}
          className="mb-12"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-bold text-base rounded-xl hover:bg-navy-mid transition-colors group"
          >
            Meet the people building Jayple
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Secondary Paths */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {nextPaths.map((path) => (
            <motion.div key={path.label} variants={fadeUp} transition={TRANSITION_DEFAULT}>
              <Link
                href={path.href}
                className="block bg-white border border-surface-border rounded-xl p-5 hover:border-lime/40 hover:shadow-sm transition-all group h-full"
              >
                <h3 className="font-display font-bold text-[15px] text-navy mb-1.5 group-hover:text-lime-dark transition-colors">
                  {path.label}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {path.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
