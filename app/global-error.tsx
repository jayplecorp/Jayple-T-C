'use client'

import React from 'react'

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <head>
        <title>Error — Jayple</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-surface-off text-text min-h-screen flex items-center justify-center font-sans antialiased">
        <div className="max-w-md w-full bg-white border border-surface-border rounded-2xl p-8 text-center m-6">
          <svg className="w-12 h-12 text-lime-dark mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h1 className="font-extrabold text-2xl text-navy mb-3">
            A critical error occurred
          </h1>
          <p className="text-sm text-text-soft leading-relaxed mb-6">
            A system-level error prevented the website from loading. Please reload or try again.
          </p>
          <button
            onClick={() => reset()}
            className="w-full bg-lime text-navy hover:bg-lime-bright text-sm font-bold py-3 px-4 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            Reload Website
          </button>
        </div>
      </body>
    </html>
  )
}
