'use client'

import React from 'react'

interface PageShellProps {
  children: React.ReactNode
  variant?: 'wide' | 'standard' | 'reading' | 'narrow' | 'full'
  className?: string
}

export default function PageShell({
  children,
  variant = 'standard',
  className = '',
}: PageShellProps) {
  // Map variant to container classes
  const getContainerClass = () => {
    switch (variant) {
      case 'wide':
        return 'max-w-7xl mx-auto px-6 lg:px-8'
      case 'reading':
        return 'max-w-3xl mx-auto px-6 lg:px-8'
      case 'narrow':
        return 'max-w-4xl mx-auto px-6 lg:px-8'
      case 'full':
        return 'w-full'
      case 'standard':
      default:
        return 'max-w-6xl mx-auto px-6 lg:px-8'
    }
  }

  return (
    <div className={`w-full min-h-screen bg-navy-deep text-white ${className}`}>
      {/* Target for Skip to main content link in RootLayout */}
      <div id="main-content" className="focus:outline-none" tabIndex={-1}>
        <div className={getContainerClass()}>{children}</div>
      </div>
    </div>
  )
}
