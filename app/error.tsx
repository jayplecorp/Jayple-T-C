'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in dev mode
    console.error('Runtime error details:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-surface-off flex items-center justify-center pt-20 px-6">
      <div className="max-w-md w-full bg-white border border-surface-border rounded-2xl p-8 text-center">
        <svg className="w-12 h-12 text-lime-dark mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h1 className="font-display font-extrabold text-2xl text-navy mb-3">
          Something went wrong
        </h1>
        <p className="text-sm text-text-soft leading-relaxed mb-6">
          An unexpected error occurred while loading this page. Our team has been notified.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary text-xs font-bold py-2.5 px-4 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="btn btn-secondary text-xs font-bold py-2.5 px-4 rounded-md border border-surface-border text-navy hover:bg-surface-off focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime inline-flex items-center justify-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
