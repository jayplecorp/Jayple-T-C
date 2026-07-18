'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'
import { teamData } from '@/lib/companyData'

export default function FoundingLeadership() {
  const founder = teamData.founders.find(m => m.role === 'Founder & CEO') || {
    name: 'Jayaprakash Thangavel',
    role: 'Founder & CEO',
    bio: "Leading Jayple's vision and shaping ideas into meaningful digital experiences.",
    photo: '/images/team/jayaprakash.webp',
    initials: 'JP'
  }
  
  const coFounder = teamData.founders.find(m => m.role === 'Co-Founder & COO') || {
    name: 'Allwin E',
    role: 'Co-Founder & COO',
    bio: "Supporting Jayple's direction through collaboration, strategy, and a shared vision for growth.",
    photo: '/images/team/allwin.webp',
    initials: 'AW'
  }

  return (
    <section className="section-padding bg-white text-text" aria-labelledby="founding-leadership-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Founding Leadership
            </span>
            <h2 id="founding-leadership-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
              The people who carried the idea forward.
            </h2>
            <p className="text-base sm:text-lg text-text-soft leading-relaxed">
              The idea that developed into Jayple began during Jayaprakash and Allwin&apos;s college journey. Today, as Founder and Co-Founder, they continue shaping the company&apos;s direction around the core problems they first observed, ensuring the platform develops with a clear, shared vision.
            </p>
          </motion.div>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-20 lg:mb-28">
          
          {/* Jayaprakash Thangavel (Founder) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
            className="flex flex-col bg-surface-off border border-surface-border rounded-2xl p-6 sm:p-8 group"
          >
            {/* Portrait Image Container */}
            <div className="relative w-3/4 aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0 mx-auto">
              <Image
                src={founder.photo || '/images/team/jayaprakash.webp'}
                alt="Jayaprakash Thangavel, Founder of Jayple"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-lime-dark uppercase tracking-widest block mb-2">
                  {founder.role}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-navy mb-4">
                  {founder.name}
                </h3>
                <p className="text-sm sm:text-base text-text-soft leading-relaxed mb-6">
                  {founder.bio}
                </p>
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-surface-border bg-white rounded-xl text-xs font-semibold text-navy hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-surface-off shadow-sm hover:shadow transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    View LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Allwin E (Co-Founder) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
            className="flex flex-col bg-surface-off border border-surface-border rounded-2xl p-6 sm:p-8 group"
          >
            {/* Portrait Image Container or Initials Fallback */}
            {coFounder.photo ? (
              <div className="relative w-3/4 aspect-square rounded-xl overflow-hidden mb-6 bg-surface-warm border border-surface-border shrink-0 mx-auto">
                <Image
                  src={coFounder.photo}
                  alt={`${coFounder.name}, Co-Founder of Jayple`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="relative w-3/4 aspect-square rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-navy-mid to-navy border border-surface-border flex flex-col items-center justify-center shrink-0 mx-auto">
                <div 
                  className="absolute inset-0 pointer-events-none opacity-10" 
                  aria-hidden="true" 
                  style={{
                    backgroundImage: 'radial-gradient(circle 120px at 50% 50%, var(--accent) 0%, transparent 60%)'
                  }}
                />
                <span className="font-display font-extrabold text-5xl sm:text-6xl text-lime relative z-10 select-none">
                  {coFounder.initials}
                </span>
              </div>
            )}

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-lime-dark uppercase tracking-widest block mb-2">
                  {coFounder.role}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-navy mb-4">
                  {coFounder.name}
                </h3>
                <p className="text-sm sm:text-base text-text-soft leading-relaxed mb-6">
                  {coFounder.bio}
                </p>
                {coFounder.linkedin && (
                  <a
                    href={coFounder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-surface-border bg-white rounded-xl text-xs font-semibold text-navy hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-surface-off shadow-sm hover:shadow transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    View LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Transition / Connecting Narrative */}
        <div className="border-t border-surface-border pt-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={TRANSITION_DEFAULT}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
                  Responsibility & Growth
                </span>
                <h3 className="font-display font-extrabold text-[24px] sm:text-[30px] text-navy leading-tight tracking-tight">
                  The work extends beyond the founding team.
                </h3>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
              >
                <p className="text-base sm:text-lg text-text-soft leading-relaxed">
                  While Jayple&apos;s direction is set by the founders, carrying that vision forward requires the coordination of wider leadership and operational teams. Responsibility for technology, operations, partner success, and marketing is shared across our growing team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
