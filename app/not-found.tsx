import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Page Not Found | Jayple',
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center text-center px-6 pt-20">
      <div>
        <div className="font-display text-[120px] font-extrabold text-lime/20 leading-none mb-4">404</div>
        <h1 className="font-display text-display-md text-white mb-4">Page not found</h1>
        <p className="text-text-on-dark-soft text-[16px] max-w-sm mx-auto mb-10">
          Looks like this page took an unscheduled break. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-7 py-3.5 bg-lime text-navy font-bold rounded-md hover:bg-lime-bright transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 border border-white/20 text-white font-semibold rounded-md hover:border-white/50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
