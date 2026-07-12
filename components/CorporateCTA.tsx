'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

interface CorporateCTAProps {
  eyebrow?: string
  title: string
  highlightTitle?: string
  description: string
  actions?: React.ReactNode
  variant?: 'dark' | 'light'
  className?: string
}

export default function CorporateCTA({
  eyebrow,
  title,
  highlightTitle,
  description,
  actions,
  variant = 'dark',
  className = '',
}: CorporateCTAProps) {
  const isDark = variant === 'dark'

  return (
    <section 
      className={`section-padding relative overflow-hidden ${
        isDark ? 'bg-cta-gradient text-white' : 'bg-surface-off text-text'
      } ${className}`}
    >
      {/* Background ambient glow (conditional based on theme) */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(200,214,32,0.08) 0%, transparent 70%)' }}
        />
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          {eyebrow && (
            <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${
              isDark ? 'text-lime/75' : 'text-text-soft'
            }`}>
              {eyebrow}
            </span>
          )}
          
          <h2 className="font-display text-display-lg mb-5 tracking-tight leading-tight">
            {title}
            {highlightTitle && (
              <span className={isDark ? 'text-lime' : 'text-lime-dark'}> {highlightTitle}</span>
            )}
          </h2>

          <p className={`text-[16px] leading-relaxed max-w-lg mx-auto mb-10 ${
            isDark ? 'text-text-on-dark-soft' : 'text-text-soft'
          }`}>
            {description}
          </p>

          {actions && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {actions}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
