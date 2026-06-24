/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#09090b',
        surface:   '#111115',
        surface2:  '#18181b',
        border:    '#27272a',
        brand:     '#00ff9d',
        brandDim:  '#00cc7a',
        muted:     '#71717a',
        text:      '#fafafa',
        textSub:   '#a1a1aa',
      },
      fontFamily: {
        mono: ['ui-monospace', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-brand': 'pulse-brand 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'pulse-brand': {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.5' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
