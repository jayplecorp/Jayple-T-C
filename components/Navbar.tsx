'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { onAppCTAClick } from '@/hooks/useDeeplink'

const NAV_LINKS = [
  { label: 'Home',        href: '/#home' },
  { label: 'About',       href: '/about' },
  { label: 'How it Works',href: '/#how' },
  { label: 'For Partners',href: '/partner' },
  { label: 'Careers',     href: '/team' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-brand ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
        aria-label="Site navigation"
      >
        <div className="container-max flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Jayple Home">
            <Image src="/logo.png" alt="Jayple Logo" width={36} height={36} className="rounded-lg" priority />
            <span className="font-display font-extrabold text-xl text-white tracking-tight">
              Jay<span className="text-lime">p</span>le
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-text-on-dark-soft hover:text-white transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/partner"
              className="px-4 py-2 text-sm font-semibold text-text-on-dark-soft border border-white/20 rounded-md hover:border-white/50 hover:text-white transition-all duration-200"
            >
              Become a Partner
            </Link>
            <a
              href="#get-app"
              onClick={onAppCTAClick}
              className="px-5 py-2 text-sm font-bold bg-lime text-navy rounded-md hover:bg-lime-bright transition-all duration-200 shadow-lime-sm"
              aria-label="Get the Jayple app"
            >
              Get the App
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-sidebar"
          >
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-4 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-navy-deep/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              key="sidebar"
              id="mobile-sidebar"
              className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-navy flex flex-col shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile navigation"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/08">
                <span className="font-display font-extrabold text-lg text-white">
                  Jay<span className="text-lime">p</span>le
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-text-on-dark-muted hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-md text-text-on-dark-soft hover:bg-white/05 hover:text-white font-medium text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="h-px bg-white/08 my-3" />
                <p className="px-3 text-xs font-bold text-text-on-dark-muted uppercase tracking-widest mb-2">Legal</p>
                {[
                  ['Privacy Policy', '/privacy'],
                  ['Terms & Conditions', '/terms'],
                  ['Cancellation & Refund', '/refund-policy'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-on-dark-muted hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="px-4 pb-8 pt-4 border-t border-white/08 flex flex-col gap-3">
                <a
                  href="#get-app"
                  onClick={(e) => { setMenuOpen(false); onAppCTAClick(e) }}
                  className="w-full py-3 text-center text-sm font-bold bg-lime text-navy rounded-md"
                >
                  Get the App
                </a>
                <Link
                  href="/partner"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-3 text-center text-sm font-semibold text-white border border-white/20 rounded-md"
                >
                  Become a Partner
                </Link>
              </div>

              <p className="text-center text-xs text-text-on-dark-muted pb-6">© 2026 Jayple</p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
