'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, TRANSITION_DEFAULT } from '@/lib/tokens'
import { onAppCTAClick } from '@/hooks/useDeeplink'

const SERVICES = [
  {
    name: 'Haircut',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Beard Styling',
    img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Facial',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Spa',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Hair Coloring',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Bridal Makeup',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Manicure',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Pedicure',
    img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=400&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface-off" aria-labelledby="services-heading">
      <div className="container-max">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={TRANSITION_DEFAULT}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3 block">Service Catalog</span>
          <h2 id="services-heading" className="font-display text-display-lg text-text mb-4">
            Book any service,<br />instantly.
          </h2>
          <p className="text-text-soft text-[16px]">
            Premium grooming services at verified partner salons — booked in seconds.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
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
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/30 to-transparent" />

              {/* Category name */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-bold text-white text-[15px] leading-tight">{name}</p>
                <p className="text-[12px] text-white/60 mt-0.5 flex items-center gap-1">
                  Book now
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 inline transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </div>

              {/* Lime accent on hover */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.3 }}
        >
          <button
            onClick={onAppCTAClick}
            className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 rounded-md text-sm font-semibold text-text hover:border-navy hover:bg-navy hover:text-white transition-all duration-200"
          >
            View all services
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
