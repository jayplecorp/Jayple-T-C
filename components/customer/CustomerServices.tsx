'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'
import { onAppCTAClick } from '@/hooks/useDeeplink'

const SERVICES = [
  {
    name: 'Haircut & Styling',
    img: '/images/services/haircut.webp',
  },
  {
    name: 'Beard Grooming',
    img: '/images/services/beard grooming.webp',
  },
  {
    name: 'Facial & Skin Care',
    img: '/images/services/facial.webp',
  },
  {
    name: 'Massage & Therapy',
    img: '/images/services/massage.webp',
  },
  {
    name: 'Hair Coloring',
    img: '/images/services/hair colouring.webp',
  },
  {
    name: 'Bridal & Groom Makeup',
    img: '/images/services/bridal and groom.webp',
  },
  {
    name: 'Manicure Care',
    img: '/images/services/manicure.webp',
  },
  {
    name: 'Pedicure Care',
    img: '/images/services/pedicure.webp',
  },
]

export default function CustomerServices() {
  return (
    <section id="services" className="section-padding bg-white text-text" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={TRANSITION_DEFAULT}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-soft mb-3 block">
              Treatment Catalog
            </span>
            <h2 id="services-heading" className="font-display font-extrabold text-[28px] sm:text-[36px] text-navy leading-tight tracking-tight mb-6">
              Book any service instantly.
            </h2>
            <p className="text-base sm:text-lg text-text-soft leading-relaxed max-w-xl mx-auto">
              Find premium grooming treatments offered by local verified beauty professionals, with clear costs and time estimates.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {SERVICES.map(({ name, img }) => (
            <motion.button
              key={name}
              variants={fadeUp}
              transition={TRANSITION_DEFAULT}
              onClick={onAppCTAClick}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer w-full text-left"
              aria-label={`Book ${name}`}
            >
              {/* Photo */}
              <img
                src={img}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy/30 to-transparent" />

              {/* Category name */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-bold text-white text-[15px] sm:text-[17px] leading-tight">{name}</p>
                <p className="text-[12px] text-lime mt-1 flex items-center gap-1 font-semibold uppercase tracking-wider">
                  Book Slot
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 inline transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </div>

              {/* Lime accent on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.3 }}
        >
          <button
            onClick={onAppCTAClick}
            className="inline-flex items-center gap-2 px-8 py-4 border border-navy/20 hover:border-navy rounded-xl text-sm font-semibold text-text hover:bg-navy hover:text-white transition-all duration-200 shadow-sm"
          >
            Explore All Treatment Types
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  )
}
