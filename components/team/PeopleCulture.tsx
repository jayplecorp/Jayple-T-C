'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

interface Principle {
  index: string
  title: string
  description: string
}

const workingPrinciples: Principle[] = [
  {
    index: '01',
    title: 'Keep contributions connected',
    description: 'Whether it is a software developer refining an API, a partner success team member visiting a salon, or outreach through telecalling—we recognize that every task affects the same client and merchant ecosystem.',
  },
  {
    index: '02',
    title: 'Validate through local grounding',
    description: 'We do not build in isolation. We focus our active learning directly in Trichy, observing how local salons operate and how customers schedule bookings to ensure our technology matches real-world use.',
  },
  {
    index: '03',
    title: 'Refine through direct outcomes',
    description: 'Jayple is at an early stage. We do not expect every system to be perfect on day one. We evaluate how tasks are handled, learn from operational feedback, and refine our approach systematically.',
  },
]

export default function PeopleCulture() {
  return (
    <>
      {/* 14, 15 — How We Work & Working Principles */}
      <section className="section-padding bg-surface-off border-t border-surface-border text-text" aria-labelledby="culture-heading">
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
                How We Work
              </span>
              <h2 id="culture-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
                Building the way we work as we grow.
              </h2>
              <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                As a newly launched company, our working principles are not set in stone—they are shaped daily by the practical demands of building our ecosystem. We value direct communication, connected task execution, and learning through hands-on responsibilities.
              </p>
            </motion.div>
          </div>

          {/* Numbered Editorial Principles List */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {workingPrinciples.map((principle) => (
              <motion.div
                key={principle.index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={TRANSITION_DEFAULT}
                className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-extrabold text-3xl text-lime block mb-4">
                    {principle.index}
                  </span>
                  <h3 className="font-display font-bold text-lg text-navy mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-text-soft leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 16, 17 — Early-Stage Context & Collaboration Connected Experience */}
      <section className="section-padding bg-white border-t border-surface-border text-text" aria-labelledby="stage-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={TRANSITION_DEFAULT}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                  Company Stage
                </span>
                <h2 id="stage-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight">
                  A developing company taking deliberate steps.
                </h2>
              </motion.div>
            </div>

            {/* Right Column */}
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
                  Jayple was recently introduced to the public. As an early-stage company, our structures, operational pipelines, and work divisions are designed to scale carefully alongside our network of salon partners.
                </p>
                <p>
                  We focus our energy on core priorities first—ensuring content is updated accurately on our platform, partner onboarding is handled cleanly on the ground, and our mobile products run reliably. By maintaining a clear connection between engineering, success, and communication, we make progress as a cohesive team.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 18, 19 — Careers & Internships closing bridge */}
      <section id="open-roles" className="section-padding bg-navy text-white relative overflow-hidden" aria-labelledby="careers-heading">
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
            <span id="careers-heading" className="text-xs font-bold uppercase tracking-widest text-lime/80 block">
              Careers &amp; Internships
            </span>
            
            <h2 className="font-display text-display-md sm:text-display-lg font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto">
              Interested in building with Jayple?
            </h2>
            
            <p className="text-base sm:text-lg text-text-on-dark-soft/90 max-w-xl mx-auto leading-relaxed">
              We are an early-stage team learning and developing from Trichy. As our platform work expands, opportunities to contribute open up across technology, operations, success, and marketing functions.
            </p>

            <div className="pt-6">
              <Link
                href="/careers"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lime text-navy font-bold text-base rounded-xl hover:bg-lime-bright transition-colors group shadow-lime-sm"
              >
                Explore Careers &amp; Internships
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
