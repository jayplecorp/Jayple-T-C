import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Careers at Jayple — Join India\'s Fastest-Growing Salon Tech Platform',
  description: 'Meet the team building Jayple. We\'re a group of passionate designers, engineers, and operators transforming India\'s salon industry.',
  alternates: { canonical: 'https://jayple.in/team/' },
}

const TEAM = [
  { name: 'Jayaprakash',  role: 'Product Lead',      bio: 'Drives product vision, user experience and strategic direction at Jayple.',          photo: '/images/jayaprakash.jpg', initials: 'JP' },
  { name: 'Allwin',       role: 'Operations Lead',    bio: 'Manages partner onboarding, support operations and ground-level execution.',          photo: null, initials: 'AW' },
  { name: 'Janarthanan',  role: 'Backend Architect',  bio: 'Architects the scalable infrastructure powering Jayple\'s booking engine and APIs.',  photo: null, initials: 'JN' },
  { name: 'Gouthem',      role: 'Growth Specialist',  bio: 'Drives user acquisition, retention strategies and salon partner growth programs.',    photo: null, initials: 'GT' },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-surface-off pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient section-padding">
        <div className="container-max text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime/70 mb-4 block">Our People</span>
          <h1 className="font-display text-display-xl text-white mb-5 max-w-2xl mx-auto">
            The team behind <span className="text-lime">Jayple</span>
          </h1>
          <p className="text-text-on-dark-soft text-[17px] max-w-xl mx-auto leading-relaxed">
            A dedicated group of builders, operators and engineers on a mission to digitise India&apos;s salon industry.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-4xl mx-auto">
            {TEAM.map(({ name, role, bio, photo, initials }) => (
              <div key={name} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden mb-4 bg-navy shadow-md">
                  {photo ? (
                    <Image src={photo} alt={name} width={96} height={96} className="object-cover w-full h-full" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-extrabold text-2xl text-lime">
                      {initials}
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-[16px] text-text mb-0.5">{name}</h3>
                <p className="text-lime-dark text-sm font-medium mb-2">{role}</p>
                <p className="text-text-soft text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section-padding bg-surface-warm">
        <div className="container-max text-center">
          <h2 className="font-display text-display-md text-text mb-4">We&apos;re growing</h2>
          <p className="text-text-soft text-[16px] mb-10 max-w-md mx-auto">
            Interested in helping us build the future of salon technology in India? We&apos;d love to hear from you.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {['Product Designer', 'iOS / Android Engineer', 'Business Development'].map((role) => (
              <div key={role} className="bg-surface border border-surface-border rounded-md p-5 text-left">
                <p className="font-bold text-text text-sm mb-1">{role}</p>
                <p className="text-text-muted text-xs mb-3">Trichy, India · Full-time</p>
                <a href="mailto:careers@jayple.in" className="text-xs font-semibold text-lime-dark hover:text-lime transition-colors">
                  Apply →
                </a>
              </div>
            ))}
          </div>
          <a
            href="mailto:careers@jayple.in"
            className="inline-block px-7 py-3.5 bg-navy text-white font-bold rounded-md hover:bg-navy-mid transition-colors"
          >
            careers@jayple.in
          </a>
        </div>
      </section>
    </div>
  )
}
