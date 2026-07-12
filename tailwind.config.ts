import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#07132A',
          deep:    '#03091A',
          mid:     '#0F2044',
          light:   '#1A3060',
          soft:    '#2A4A80',
        },
        lime: {
          DEFAULT: '#C8D620',
          bright:  '#E8F224',
          brand:   '#B8C31E',
          dark:    '#A3AD18',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          off:     '#F6F8FC',
          warm:    '#EEF2F8',
          border:  '#E2E8F4',
        },
        text: {
          DEFAULT: '#0B1B36',
          soft:    '#5A6882',
          muted:   '#8A9ABB',
          'on-dark':      '#FFFFFF',
          'on-dark-soft': '#C3CEDF',
          'on-dark-muted':'#8294B0',
        },
        // Semantic corporate roles mapping
        corp: {
          bg: {
            primary: 'var(--background-primary)',
            deep: 'var(--background-deep)',
            elevated: 'var(--background-elevated)',
            light: 'var(--background-light)',
            subtle: 'var(--background-subtle)',
          },
          surface: {
            dark: 'var(--surface-dark)',
            light: 'var(--surface-light)',
            muted: 'var(--surface-muted)',
          },
          text: {
            'primary-dark': 'var(--text-primary-dark)',
            'secondary-dark': 'var(--text-secondary-dark)',
            'primary-light': 'var(--text-primary-light)',
            'secondary-light': 'var(--text-secondary-light)',
          },
          border: {
            dark: 'var(--border-dark)',
            light: 'var(--border-light)',
          },
          accent: {
            DEFAULT: 'var(--accent)',
            hover: 'var(--accent-hover)',
          },
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(48px,6.5vw,92px)', { lineHeight: '1.03', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(36px,4.5vw,60px)', { lineHeight: '1.08', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(26px,3vw,40px)',   { lineHeight: '1.12', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(20px,2.2vw,28px)', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        xs:   '6px',
        sm:   '10px',
        md:   '16px',
        lg:   '24px',
        xl:   '32px',
        pill: '9999px',
      },
      boxShadow: {
        sm:   '0 2px 8px rgba(7,19,42,0.06)',
        md:   '0 12px 30px -8px rgba(7,19,42,0.18)',
        lg:   '0 30px 60px -25px rgba(7,19,42,0.30)',
        lime: '0 12px 28px -8px rgba(200,214,32,0.50)',
        'lime-sm': '0 4px 14px -4px rgba(200,214,32,0.40)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #07132A 0%, #0F2044 60%, #1A3060 100%)',
        'cta-gradient':  'linear-gradient(135deg, #07132A 0%, #0F2044 100%)',
        'lime-glow':     'radial-gradient(ellipse at 50% 50%, rgba(200,214,32,0.15) 0%, transparent 70%)',
      },
      animation: {
        marquee:    'marquee 28s linear infinite',
        'marquee2': 'marquee2 28s linear infinite',
        'float-y':  'floatY 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
