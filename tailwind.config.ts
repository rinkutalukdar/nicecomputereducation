import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── NICE Brand (extracted from logo) ──────────────────────────────
        navy: {
          DEFAULT: '#0d0d5e',
          50:  '#eeeef9',
          100: '#d0d0ef',
          200: '#a0a0de',
          300: '#7070cc',
          400: '#4040bb',
          500: '#1f1fb0',
          600: '#1616a0',
          700: '#0d0d5e',  // ← logo colour
          800: '#090940',
          900: '#050528',
        },
        royal: {
          DEFAULT: '#1a3ccc',
          50:  '#eef1fd',
          100: '#d0d9f9',
          200: '#a1b3f3',
          300: '#728cec',
          400: '#4366e5',
          500: '#1a3ccc',  // ← logo colour
          600: '#1530a8',
          700: '#102580',
          800: '#0b1a5a',
          900: '#060e35',
        },
        crimson: {
          DEFAULT: '#cc1414',
          50:  '#fde8e8',
          100: '#f9c0c0',
          200: '#f39393',
          300: '#ec5f5f',
          400: '#e03535',
          500: '#cc1414',  // ← logo colour
          600: '#a81010',
          700: '#820c0c',
          800: '#5c0808',
          900: '#380505',
        },
        // Neutral surface
        ash: {
          DEFAULT: '#f5f5fa',
          50:  '#fafafe',
          100: '#f5f5fa',
          200: '#ebebf5',
        },
      },

      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },

      boxShadow: {
        card:   '0 2px 20px 0 rgba(13,13,94,0.07)',
        lift:   '0 8px 40px 0 rgba(13,13,94,0.14)',
        glow:   '0 4px 20px 0 rgba(204,20,20,0.35)',
      },

      animation: {
        'fade-up':  'fadeUp 0.6s ease-out forwards',
        'fade-in':  'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

      backgroundImage: {
        'hero-pattern': "radial-gradient(ellipse at 70% 50%, rgba(26,60,204,0.25) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(204,20,20,0.15) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
}

export default config
