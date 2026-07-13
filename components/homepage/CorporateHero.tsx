'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EASE, TRANSITION_SLOW } from '@/lib/tokens'
import { onAppCTAClick } from '@/hooks/useDeeplink'
import { companyData } from '@/lib/companyData'

export default function CorporateHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient pt-28 pb-16 overflow-hidden">
      {/* Background ambient grid overlay & radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none" 
        aria-hidden="true" 
        style={{
          background: 'radial-gradient(circle 800px at 70% 30%, rgba(200,214,32,0.06) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Live City Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
              </span>
              <span className="text-xs font-bold text-lime tracking-wide">
                Live in {companyData.liveCity} · Starting with Purpose
              </span>
            </motion.div>

            {/* Corporate Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-display text-display-lg sm:text-display-xl text-white mb-6 leading-[1.08] tracking-tight"
            >
              Building a smarter <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime to-lime-bright">
                salon ecosystem.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="text-base sm:text-lg text-text-on-dark-soft/90 leading-relaxed max-w-xl mb-10"
            >
              Jayple connects customers and salon businesses through dedicated digital platforms designed to make salon discovery, service exploration, and appointment booking simpler.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#get-app"
                onClick={onAppCTAClick}
                className="px-7 py-4 text-sm font-bold bg-lime hover:bg-lime-bright text-navy rounded-xl shadow-lime hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 group"
                aria-label="Explore and download customer app"
              >
                Explore Jayple
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <Link
                href="/about"
                className="px-7 py-4 text-sm font-semibold text-white/90 hover:text-white border border-white/15 hover:border-white/30 rounded-xl hover:bg-white/05 transition-all duration-300 hover:-translate-y-0.5"
              >
                Discover our story
              </Link>
            </motion.div>

          </div>

          {/* Right Visual Column (Premium Abstract Asymmetric Bento Composition) */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[450px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={TRANSITION_SLOW}
              className="relative w-full h-full"
            >
              {/* Main App Experience Block */}
              <div className="absolute top-0 left-0 w-[65%] h-[85%] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-navy-mid">
                <img
                  src="/images/hero-salon-app.png"
                  alt="Customer using Jayple mobile application to view salon details"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold text-lime uppercase tracking-widest block mb-1">Customer Platform</span>
                  <h3 className="text-sm font-bold text-white leading-tight">Explore verified salons & book instant slots.</h3>
                </div>
              </div>

              {/* Partner Operations Block */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[70%] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-navy-light">
                <img
                  src="/images/hero-salon-styling.png"
                  alt="Professional salon styling dashboard and operations"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold text-lime uppercase tracking-widest block mb-1">Partner Platform</span>
                  <h3 className="text-sm font-bold text-white leading-tight">Strengthen digital presence & manage bookings.</h3>
                </div>
              </div>

              {/* Factual floating data card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-10 right-4 bg-navy-deep/90 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-md max-w-[180px] hidden sm:block"
              >
                <p className="text-[32px] font-extrabold text-lime font-display leading-none">25+</p>
                <p className="text-[12px] text-text-on-dark-soft font-medium mt-1.5 leading-snug">Salon Partners onboarded in Trichy</p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
