'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileAppEntry() {
  const [showOffer, setShowOffer] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'mobile_app_entry_view', {
        event_category: 'Mobile',
        event_label: 'App Entry Page Load'
      })
    }
    
    // Very fast reveal for instant gratification without lag
    const timer = setTimeout(() => setShowOffer(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-[100dvh] bg-[#07090F] flex flex-col items-center px-6 pt-6 pb-2 font-sans overflow-hidden">
      
      {/* High-performance static background accents (Zero lag) */}
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] bg-[radial-gradient(ellipse_at_center,_#213612_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[50%] bg-[radial-gradient(ellipse_at_center,_#0B1B36_0%,_transparent_70%)] pointer-events-none" />

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md z-10 pb-[6vh]">
        <AnimatePresence mode="wait">
          {!showOffer ? (
             <motion.div 
               key="loader"
               exit={{ scale: 1.2, opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="flex flex-col items-center justify-center relative will-change-transform"
             >
               <Image src="/Jayple.webp" alt="Jayple" width={90} height={90} className="rounded-3xl shadow-2xl" />
             </motion.div>
          ) : (
            <motion.div 
              key="offer"
              initial={{ scale: 0.6, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300, mass: 1 }}
              className="w-full flex flex-col items-center will-change-transform"
            >
              {/* The Badge */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="mb-6 bg-[#D4FF00] text-[#07090F] px-6 py-2 rounded-full text-[13px] font-black uppercase tracking-[0.2em] shadow-[0_4px_15px_rgba(212,255,0,0.3)] transform -rotate-2 flex items-center justify-center gap-2 will-change-transform"
              >
                <motion.svg animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </motion.svg>
                Secret Reward Unlocked
              </motion.div>

              {/* The Main Offer Card - Solid dark gradient, no blur for 60fps performance */}
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-[#141B2D] to-[#0A0E17] rounded-[32px] p-8 mb-8 text-center shadow-2xl border border-white/10 relative overflow-hidden will-change-transform"
              >
                 {/* Accent top line */}
                 <motion.div 
                   animate={{ opacity: [0.5, 1, 0.5] }}
                   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                   className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D4FF00] to-[#00F0FF]" 
                 />

                 {/* Shimmer sweep */}
                 <motion.div 
                    initial={{ x: '-150%', opacity: 0 }}
                    animate={{ x: '250%', opacity: 0.1 }}
                    transition={{ delay: 1, duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
                    className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-45deg] pointer-events-none"
                 />

                 <h2 className="text-white/70 font-bold text-xs tracking-widest uppercase mb-4">You have earned up to</h2>
                 
                 <div className="relative inline-block mb-6">
                   {/* Floating SVG Stars */}
                   <motion.svg animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute -top-6 -right-8 w-8 h-8 text-[#D4FF00] drop-shadow-[0_0_10px_rgba(212,255,0,0.8)] pointer-events-none will-change-transform" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                   </motion.svg>
                   <motion.svg animate={{ rotate: [360, 180, 0], scale: [1, 1.3, 1], y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute -bottom-2 -left-10 w-6 h-6 text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] pointer-events-none will-change-transform" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                   </motion.svg>

                   <motion.h1 
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                     className="font-black text-[6rem] leading-[0.9] text-white tracking-tighter origin-center will-change-transform"
                   >
                     <span className="text-5xl align-top text-[#D4FF00] mr-1">₹</span>500
                   </motion.h1>
                 </div>

                 <h3 className="font-black text-3xl tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00F0FF] mb-8 relative z-10">
                   CASHBACK
                 </h3>
                 
                 {/* Premium Voucher Format (No Copy Button) */}
                 <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#0F1522] to-[#07090F] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-6 flex flex-col items-center overflow-hidden group">
                   
                   <p className="text-[10px] text-[#00F0FF] uppercase tracking-[0.2em] mb-4 font-bold relative z-10 text-center">
                     Apply this code on app
                   </p>
                   
                   {/* Physical Voucher Block */}
                   <div className="relative z-10 w-full max-w-[240px] rounded-xl bg-[#D4FF00] p-1.5 shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                     <div className="relative rounded-lg border-2 border-dashed border-[#07090F]/30 py-4 flex items-center justify-center overflow-hidden">
                       <p className="text-[26px] font-black tracking-[0.15em] text-[#07090F]">
                         JAYPLE500
                       </p>
                     </div>
                   </div>
                   
                   <p className="text-[10px] text-white/40 mt-5 font-bold tracking-[0.15em] uppercase relative z-10 text-center">
                     Valid on First Salon Booking
                   </p>
                 </div>
              </motion.div>

              <div className="w-full space-y-4">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }} 
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center justify-center gap-2 mb-4"
                >
                  <svg className="w-4 h-4 text-[#D4FF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  <p className="text-sm text-white/90 font-bold text-center">Tap to claim before it expires</p>
                  <svg className="w-4 h-4 text-[#D4FF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.div>
                
                {/* Android */}
                <motion.a
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.95 }}
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
                  className="flex items-center justify-center gap-3 w-full bg-[#D4FF00] text-[#07090F] font-black py-4 px-6 rounded-[20px] shadow-[0_8px_20px_rgba(212,255,0,0.2)] will-change-transform"
                >
                  <svg className="w-7 h-7" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  <span className="text-[17px] tracking-wide">Get Android App</span>
                </motion.a>

                {/* iOS */}
                <motion.a
                  whileTap={{ scale: 0.96 }}
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
                  className="flex items-center justify-center gap-3 w-full bg-[#1A2438] text-white border border-white/10 font-bold py-4 px-6 rounded-[20px] shadow-lg will-change-transform hover:bg-[#25324d] transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <span className="text-[17px] tracking-wide">Get iOS App</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="z-10 text-[10px] text-white/20 font-bold tracking-widest uppercase mt-4">
        &copy; {new Date().getFullYear()} Jayple
      </div>
    </div>
  )
}

