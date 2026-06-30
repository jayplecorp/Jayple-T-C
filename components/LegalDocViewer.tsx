'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'

interface Section {
  id: string
  number: string
  title: string
  summary: string
  content: React.ReactNode[]
}

function TimelineItem({
  section,
  isOpen,
  isLast,
  onToggle,
}: {
  section: Section
  isOpen: boolean
  isLast: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  return (
    <div className="relative flex gap-4 sm:gap-6 group">
      {/* ── Timeline spine ── */}
      <div className="flex flex-col items-center shrink-0">
        {/* Numbered circle */}
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`section-${section.id}`}
          className={`
            relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
            text-[11px] sm:text-xs font-bold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime
            ${isOpen
              ? 'bg-navy text-white shadow-md scale-105'
              : 'bg-surface-warm text-text-muted border-2 border-surface-border group-hover:border-navy/30 group-hover:text-text-soft group-hover:bg-surface-warm'
            }
          `}
        >
          {section.number}
        </button>

        {/* Connecting line */}
        {!isLast && (
          <div
            className={`
              w-[2px] flex-1 min-h-[20px] transition-colors duration-300
              ${isOpen ? 'bg-navy/20' : 'bg-surface-border'}
            `}
          />
        )}
      </div>

      {/* ── Card ── */}
      <div className="flex-1 pb-4 sm:pb-5">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`section-${section.id}`}
          className={`
            w-full text-left rounded-md sm:rounded-sm p-4 sm:p-5
            border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime
            ${isOpen
              ? 'bg-white border-navy/10 shadow-[0_8px_30px_-6px_rgba(7,19,42,0.10)]'
              : 'bg-white border-surface-border hover:border-navy/15 hover:shadow-[0_4px_16px_-4px_rgba(7,19,42,0.06)] hover:-translate-y-[1px]'
            }
          `}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-[15px] font-semibold text-text leading-snug m-0">
                {section.title}
              </h3>
              {section.summary && (
                <p className="text-[12px] sm:text-[13px] text-text-soft mt-1 leading-normal m-0">
                  {section.summary}
                </p>
              )}
            </div>

            {/* Chevron */}
            <div
              className={`
                shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center
                transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isOpen
                  ? 'bg-navy/5 rotate-180'
                  : 'bg-surface-warm group-hover:bg-navy/5'
                }
              `}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-colors duration-200 ${isOpen ? 'text-navy' : 'text-text-muted'}`}
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* Expanded content */}
        <div
          id={`section-${section.id}`}
          role="region"
          aria-labelledby={`heading-${section.id}`}
          className="overflow-hidden transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            maxHeight: isOpen ? `${height + 40}px` : '0px',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div
            ref={contentRef}
            className="
              mt-2.5 ml-0 sm:ml-0.5 rounded-md sm:rounded-sm bg-surface-off border border-surface-border
              p-4 sm:p-5
              text-[13px] sm:text-sm text-text-soft leading-relaxed space-y-3
              [&_p]:text-[13px] [&_p]:sm:text-sm [&_p]:text-text-soft [&_p]:leading-relaxed [&_p]:m-0 [&_p]:mb-3 last:[&_p]:mb-0
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:m-0 [&_ul]:mb-3 last:[&_ul]:mb-0
              [&_li]:text-[13px] [&_li]:sm:text-sm [&_li]:text-text-soft [&_li]:leading-relaxed
              [&_strong]:text-text [&_strong]:font-semibold
              [&_a]:text-lime-dark hover:[&_a]:underline [&_a]:font-medium
              [&_table]:w-full [&_table]:border-collapse [&_table]:my-3
              [&_th]:text-[12px] [&_th]:sm:text-xs [&_th]:font-semibold [&_th]:text-text [&_th]:bg-surface-warm [&_th]:border [&_th]:border-surface-border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left
              [&_td]:text-[12px] [&_td]:sm:text-xs [&_td]:text-text-soft [&_td]:border [&_td]:border-surface-border [&_td]:px-3 [&_td]:py-2
              [&_h3]:text-[13px] [&_h3]:sm:text-sm [&_h3]:font-semibold [&_h3]:text-text [&_h3]:mt-3 [&_h3]:mb-1.5
            "
          >
            {section.content}
          </div>
        </div>
      </div>
    </div>
  )
}

function getTextContent(element: React.ReactNode): string {
  if (!element) return ''
  if (typeof element === 'string' || typeof element === 'number') {
    return String(element)
  }
  if (Array.isArray(element)) {
    return element.map(getTextContent).join('')
  }
  if (React.isValidElement(element)) {
    return getTextContent(element.props.children)
  }
  return ''
}

export default function LegalDocViewer({ children }: { children: React.ReactNode }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const childrenArray = React.Children.toArray(children)

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  // Group children
  const intro: React.ReactNode[] = []
  const sections: Section[] = []
  let currentSection: Section | null = null

  childrenArray.forEach((child) => {
    if (React.isValidElement(child)) {
      if (child.type === 'h2') {
        const titleText = getTextContent(child)
        let number = (sections.length + 1).toString().padStart(2, '0')
        let title = titleText

        const match = titleText.match(/^(\d+)\.\s*(.*)$/)
        if (match) {
          number = match[1].padStart(2, '0')
          title = match[2]
        }

        currentSection = {
          id: `section-${sections.length}`,
          number,
          title,
          summary: '',
          content: [],
        }
        sections.push(currentSection)
      } else if (child.type === 'h1') {
        intro.push(child)
      } else {
        if (currentSection) {
          currentSection.content.push(child)
          if (!currentSection.summary && child.type === 'p') {
            const text = getTextContent(child)
            currentSection.summary = text.length > 120 ? text.substring(0, 117) + '...' : text
          }
        } else {
          intro.push(child)
        }
      }
    } else {
      if (currentSection) {
        currentSection.content.push(child)
      } else {
        intro.push(child)
      }
    }
  })

  return (
    <>
      {/* Intro text rendered with standard prose formatting */}
      {intro}

      {/* Timeline Section */}
      {sections.length > 0 && (
        <div className="not-prose mt-8">
          {/* Section count badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/5 text-xs font-semibold text-navy">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1.75V12.25M3.5 5.25H10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {sections.length} sections
            </span>
            <span className="text-xs text-text-muted">Click any section to expand</span>
          </div>

          {/* Timeline items */}
          <div className="relative">
            {sections.map((section, index) => (
              <TimelineItem
                key={section.id}
                section={section}
                isOpen={openIndex === index}
                isLast={index === sections.length - 1}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
