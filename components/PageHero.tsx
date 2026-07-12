'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, TRANSITION_DEFAULT } from '@/lib/tokens'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageHeroProps {
  eyebrow?: string
  title: string
  highlightedTitle?: string
  lead?: string
  breadcrumbs?: BreadcrumbItem[]
  actions?: React.ReactNode
  variant?: 'centered' | 'split' | 'minimal'
  media?: React.ReactNode
  className?: string
}

export default function PageHero({
  eyebrow,
  title,
  highlightedTitle,
  lead,
  breadcrumbs,
  actions,
  variant = 'centered',
  media,
  className = '',
}: PageHeroProps) {
  const contentMarkup = (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={TRANSITION_DEFAULT}
      className={`relative z-10 flex flex-col ${
        variant === 'centered' ? 'items-center text-center max-w-3xl mx-auto' : 'items-start text-left max-w-2xl'
      }`}
    >
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-text-on-dark-muted font-medium">
            {breadcrumbs.map((crumb, idx) => (
              <li key={crumb.href} className="flex items-center gap-2">
                {idx > 0 && <span className="opacity-50">/</span>}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-white" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Eyebrow */}
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-widest text-lime/80 mb-4 block">
          {eyebrow}
        </span>
      )}

      {/* Heading (Single H1 for SEO compliance) */}
      <h1 className="font-display text-display-xl text-white mb-6 leading-tight">
        {title}
        {highlightedTitle && <span className="text-lime"> {highlightedTitle}</span>}
      </h1>

      {/* Lead paragraph */}
      {lead && (
        <p className="text-lg md:text-xl text-text-on-dark-soft/90 leading-relaxed mb-8 max-w-2xl">
          {lead}
        </p>
      )}

      {/* Actions (Buttons, Badges, etc.) */}
      {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
    </motion.div>
  )

  if (variant === 'split') {
    return (
      <section className={`relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-hero-gradient overflow-hidden ${className}`}>
        {/* Glow ambient background */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 20%, rgba(200,214,32,0.05) 0%, transparent 60%)' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">{contentMarkup}</div>
            {media && <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">{media}</div>}
          </div>
        </div>
      </section>
    )
  }

  // Centered or Minimal hero
  return (
    <section className={`relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-hero-gradient overflow-hidden ${className}`}>
      {/* Glow ambient background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 30%, rgba(200,214,32,0.06) 0%, transparent 65%)' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {contentMarkup}
      </div>
    </section>
  )
}
