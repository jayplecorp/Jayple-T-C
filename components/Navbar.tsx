'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { onAppCTAClick } from '@/hooks/useDeeplink'
import { navigationData, footerLegalLinks, NavigationGroup } from '@/lib/companyData'
import { EASE, TRANSITION_DEFAULT } from '@/lib/tokens'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const headerRef = useRef<HTMLElement>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Handle click outside dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (activeDropdown) {
        const activeRef = dropdownRefs.current[activeDropdown]
        if (activeRef && !activeRef.contains(target)) {
          setActiveDropdown(null)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  const isGroupActive = (group: NavigationGroup) => {
    return group.items.some(item => {
      if (item.href.startsWith('/#')) {
        return pathname === '/'
      }
      return pathname === item.href
    })
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy/95 backdrop-blur-md py-3.5 border-b border-white/05 shadow-sm' : 'bg-transparent py-5'
        }`}
        aria-label="Site navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-6">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-md" aria-label="Jayple Corporate Home">
            <Image
              src="/logo.png"
              alt="Jayple Logo"
              width={34}
              height={34}
              className="rounded-lg"
              priority
            />
            <span className="font-display font-extrabold text-xl text-white tracking-tight">
              Jay<span className="text-lime">p</span>le
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
            {navigationData.map((group) => {
              const isActive = isGroupActive(group)
              const isOpen = activeDropdown === group.label

              return (
                <div
                  key={group.label}
                  ref={(el) => { dropdownRefs.current[group.label] = el }}
                  className="relative"
                >
                  <button
                    onClick={() => toggleDropdown(group.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${
                      isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                    } ${isOpen ? 'bg-white/05 text-white' : 'hover:bg-white/03'}`}
                  >
                    {group.label}
                    <svg
                      className={`w-3.5 h-3.5 opacity-60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="absolute left-0 mt-2 w-80 bg-navy-mid border border-white/08 rounded-xl shadow-lg p-3 z-50 overflow-hidden"
                      >
                        <div className="flex flex-col gap-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex flex-col p-3 rounded-lg hover:bg-white/05 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                            >
                              <span className="text-sm font-semibold text-white group-hover:text-lime transition-colors flex items-center gap-1">
                                {item.label}
                                <svg
                                  className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              </span>
                              {item.description && (
                                <span className="text-xs text-text-on-dark-muted mt-1 leading-relaxed">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3.5">
            <Link
              href="/partner"
              className="text-sm font-semibold text-white/80 hover:text-white px-4 py-2 border border-white/15 rounded-lg hover:bg-white/05 hover:border-white/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              Partner with Jayple
            </Link>
            <a
              href="#get-app"
              onClick={onAppCTAClick}
              className="text-sm font-bold bg-lime hover:bg-lime-bright text-navy px-5 py-2.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy shadow-lime-sm"
              aria-label="Explore and download Jayple customer app"
            >
              Explore Jayple
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="lg:hidden p-2 text-white hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-navy-deep/80 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Sidebar Container */}
            <motion.aside
              key="mobile-menu"
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: EASE }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 bg-navy border-l border-white/08 flex flex-col shadow-xl lg:hidden"
              aria-label="Mobile navigation menu"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/08">
                <span className="font-display font-extrabold text-lg text-white">
                  Jay<span className="text-lime">p</span>le
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 text-text-on-dark-muted hover:text-white text-2xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>

              {/* Sidebar Scrollable Body */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-5">
                {navigationData.map((group) => (
                  <div key={group.label} className="flex flex-col gap-1.5">
                    <h3 className="px-3 text-xs font-bold text-text-on-dark-muted uppercase tracking-widest">
                      {group.label}
                    </h3>
                    <div className="flex flex-col">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="px-3 py-2.5 rounded-lg text-sm text-text-on-dark-soft hover:bg-white/05 hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="h-px bg-white/08 my-2" />

                {/* Mobile Legal Group */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="px-3 text-xs font-bold text-text-on-dark-muted uppercase tracking-widest">
                    Legal & Policies
                  </h3>
                  <div className="flex flex-col">
                    {[
                      ['Privacy Policy', '/privacy'],
                      ['Terms & Conditions', '/terms'],
                      ['Cancellation & Refund', '/refund-policy'],
                    ].map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="px-3 py-2 text-xs text-text-on-dark-muted hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Sidebar Action Footer */}
              <div className="px-6 py-6 border-t border-white/08 flex flex-col gap-3.5 bg-navy-deep">
                <a
                  href="#get-app"
                  onClick={(e) => {
                    setMenuOpen(false)
                    onAppCTAClick(e)
                  }}
                  className="w-full py-3 text-center text-sm font-bold bg-lime hover:bg-lime-bright text-navy rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  Explore Jayple
                </a>
                <Link
                  href="/partner"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-3 text-center text-sm font-semibold text-white border border-white/20 hover:border-white/40 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  Partner with Jayple
                </Link>
                <p className="text-center text-[10px] text-text-on-dark-muted mt-2">
                  &copy; {new Date().getFullYear()} Jayple Private Limited
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
