import type { Metadata } from 'next'

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
    date: 'Coming soon',
    readTime: '3 min read',
  },
  {
    tag: 'Business',
    title: 'How Digital Booking Cuts No-Shows by 90%',
    excerpt: 'Salon owners who switched to digital appointment management report dramatic drops in last-minute cancellations.',
    date: 'Coming soon',
    readTime: '5 min read',
  },
  {
    tag: 'Product',
    title: 'Introducing Wallet Cashback — Every Booking Earns',
    excerpt: 'We\'re launching automatic cashback rewards for every Jayple booking. Here\'s how it works.',
    date: 'Coming soon',
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
          {/* Coming Soon Banner */}
          <div className="text-center mb-10 bg-lime/5 border border-lime/20 rounded-xl px-6 py-8">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 px-3.5 py-1.5 rounded-pill text-[11px] font-semibold text-lime-dark mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-dark" />
              Coming Soon
            </div>
            <h2 className="font-display text-display-sm text-text mb-2">We&apos;re cooking up great content</h2>
            <p className="text-text-soft text-sm max-w-md mx-auto">
              Our blog is launching soon with salon tips, industry insights, and Jayple product updates. Stay tuned!
            </p>
          </div>

          {/* Preview Cards (non-clickable) */}
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-5 text-center">Preview of upcoming posts</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(({ tag, title, excerpt, date, readTime }) => (
              <article
                key={title}
                className="bg-surface-off border border-surface-border rounded-md p-6 lime-top flex flex-col opacity-75"
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
                  <span className="text-xs font-semibold text-text-muted">
                    Coming soon
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
