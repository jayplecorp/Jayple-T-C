'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileAppEntry() {
  const [showOffer, setShowOffer] = useState(false)

  useEffect(() => {
    // Trigger GA4 event for mobile app entry view
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'mobile_app_entry_view', {
        event_category: 'Mobile',
        event_label: 'App Entry Page Load'
      })
    }
    
    // Auto-reveal the offer after a short delay for that suspenseful "bump/pow" effect
    const timer = setTimeout(() => setShowOffer(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-[100dvh] relative overflow-hidden flex flex-col items-center justify-center p-6 text-white bg-[#020617]">
      
      {/* Animated Deep Space / Neon Background Mesh */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -left-1/4 w-[150vw] h-[150vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-lime/30 via-[#2dd4bf]/20 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          translateY: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[100vw] h-[100vw] max-w-[600px] max-h-[600px] bg-gradient-to-bl from-lime-bright/20 via-[#4f46e5]/40 to-transparent rounded-full blur-[100px] pointer-events-none"
      />

      <AnimatePresence mode="wait">
        {!showOffer ? (
           <motion.div 
             key="loader"
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
             transition={{ duration: 0.5, ease: "circIn" }}
             className="flex flex-col items-center justify-center z-20 relative"
           >
             <div className="absolute inset-0 bg-lime/30 blur-[50px] rounded-full animate-pulse" />
             <Image src="/Jayple.webp" alt="Jayple" width={100} height={100} className="rounded-3xl shadow-[0_0_50px_rgba(200,214,32,0.4)] ring-2 ring-lime/50 z-10" />
           </motion.div>
        ) : (
          <motion.div 
            key="offer"
            initial={{ scale: 0.3, opacity: 0, rotate: -10, y: 150 }}
            animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
            transition={{ type: "spring", damping: 14, stiffness: 120, mass: 0.8 }}
            className="w-full max-w-md z-10 flex flex-col items-center"
          >
            {/* The Reveal Badge */}
            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', damping: 12, stiffness: 200 }}
              className="mb-6 bg-lime/20 border border-lime/40 text-lime-bright px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_0_20px_rgba(200,214,32,0.3)] flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-bright opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-bright"></span>
              </span>
              Surprise Unlocked
            </motion.div>

            {/* The Main Offer Card */}
            <motion.div 
              className="w-full relative bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-8 mb-8 text-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
               {/* Shine effect sweeping across the card */}
               <motion.div 
                  initial={{ x: '-150%', opacity: 0 }}
                  animate={{ x: '250%', opacity: 0.5 }}
                  transition={{ delay: 1.5, duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
                  className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-45deg]"
               />

               <h2 className="text-white/60 font-semibold text-sm tracking-[0.3em] uppercase mb-1">Claim up to</h2>
               
               <div className="relative inline-block my-4">
                 <motion.h1 
                    initial={{ scale: 0.5, filter: 'blur(10px)' }}
                    animate={{ scale: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                    className="font-display font-black text-[5rem] leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-lime-100 to-white/40 drop-shadow-[0_0_30px_rgba(200,214,32,0.4)]"
                 >
                   ₹500
                 </motion.h1>
                 
                 {/* Floating sparkles */}
                 <motion.div animate={{ y: [-8, 8, -8], rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-2 -right-8 text-lime-bright text-2xl drop-shadow-[0_0_10px_rgba(200,214,32,0.8)]">✦</motion.div>
                 <motion.div animate={{ y: [8, -8, 8], rotate: [0, -20, 20, 0], scale: [1, 1.3, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-2 -left-8 text-[#2dd4bf] text-xl drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]">✧</motion.div>
               </div>

               <h3 className="font-black text-2xl tracking-[0.2em] text-lime-bright mb-8 drop-shadow-md">CASHBACK</h3>
               
               <div className="bg-[#020617]/60 rounded-3xl p-5 border border-white/5 inline-block w-full relative group">
                 <div className="absolute inset-0 bg-lime/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-3 font-bold">Use Code</p>
                 <p className="text-[1.75rem] font-black tracking-widest text-white border-2 border-dashed border-lime/30 rounded-2xl py-3 bg-white/5 shadow-inner">JAYPLE500</p>
                 <p className="text-[9px] text-white/40 mt-4 font-bold tracking-widest uppercase">For Your First Salon Appointment</p>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full space-y-4"
            >
              <p className="text-sm text-white/80 font-medium mb-2 drop-shadow-md">Download now to claim instantly</p>
              
              {/* Android */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://play.google.com/store/apps/details?id=com.jayple.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
                    (window as any).gtag('event', 'click_android_download', {
                      event_category: 'Mobile',
                      event_label: 'Android Download Click'
                    })
                  }
                }}
                className="flex items-center justify-center gap-3 w-full bg-lime text-[#020617] font-black py-4 px-6 rounded-[20px] shadow-[0_10px_40px_-10px_rgba(200,214,32,0.8)] transition-colors hover:bg-lime-bright relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/30 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <svg className="w-7 h-7 relative z-10" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <span className="relative z-10 text-[17px] tracking-wide">Get Android App</span>
              </motion.a>

              {/* iOS */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://apps.apple.com/in/app/jayple/id6779542812"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
                    (window as any).gtag('event', 'click_ios_download', {
                      event_category: 'Mobile',
                      event_label: 'iOS Download Click'
                    })
                  }
                }}
                className="flex items-center justify-center gap-3 w-full bg-white/10 backdrop-blur-xl text-white border border-white/20 font-bold py-4 px-6 rounded-[20px] shadow-2xl transition-all hover:bg-white/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <svg className="w-7 h-7 relative z-10" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span className="relative z-10 text-[17px] tracking-wide">Get iOS App</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 text-[10px] text-white/20 font-medium tracking-widest uppercase"
      >
        &copy; {new Date().getFullYear()} Jayple
      </motion.div>
    </div>
  )
}

