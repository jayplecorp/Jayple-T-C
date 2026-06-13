import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Salon Tips, Industry News & Jayple Updates',
  description: 'Read the latest from Jayple — grooming tips, salon business advice, product updates and more.',
  alternates: { canonical: 'https://jayple.in/blog/' },
}

const POSTS = [
  {
    tag: 'Tips',
    title: '5 Things to Check Before Booking a Salon Appointment',
    excerpt: 'From hygiene to pricing transparency — here\'s what the best customers look for before committing to a slot.',
    date: '12 Jun 2026',
    readTime: '3 min read',
  },
  {
    tag: 'Business',
    title: 'How Digital Booking Cuts No-Shows by 90%',
    excerpt: 'Salon owners who switched to digital appointment management report dramatic drops in last-minute cancellations.',
    date: '8 Jun 2026',
    readTime: '5 min read',
  },
  {
    tag: 'Product',
    title: 'Introducing Wallet Cashback — Every Booking Earns',
    excerpt: 'We\'re launching automatic cashback rewards for every Jayple booking. Here\'s how it works.',
    date: '1 Jun 2026',
    readTime: '2 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface-off pt-20">
      <section className="bg-hero-gradient section-padding">
        <div className="container-max text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-4 block">Journal</span>
          <h1 className="font-display text-display-xl text-white mb-5">The Jayple Blog</h1>
          <p className="text-text-on-dark-soft text-[17px] max-w-md mx-auto">
            Salon tips, industry insights, and product updates.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(({ tag, title, excerpt, date, readTime }) => (
              <article
                key={title}
                className="bg-surface-off border border-surface-border rounded-md p-6 lime-top card-hover flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-lime/10 text-lime-dark text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                    {tag}
                  </span>
                  <span className="text-text-muted text-xs">{readTime}</span>
                </div>
                <h2 className="font-bold text-[16px] text-text mb-3 leading-snug flex-1">{title}</h2>
                <p className="text-text-soft text-sm leading-relaxed mb-4">{excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-border">
                  <span className="text-text-muted text-xs">{date}</span>
                  <Link href="#" className="text-xs font-semibold text-lime-dark hover:text-lime transition-colors">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
