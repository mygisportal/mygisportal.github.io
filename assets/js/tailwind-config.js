/* Tailwind CDN runtime config — Tufte-inspired academic minimalism
 * Ocean blue + Forest green palette, with paper/ink neutrals.
 * If you migrate to compiled Tailwind, copy this into tailwind.config.js
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paper & ink — Tufte's hallmark warm-neutral surface
        paper: {
          DEFAULT: '#fdfaf3',   // warm off-white
          50:  '#fefcf7',
          100: '#fdfaf3',
          200: '#f6f1e4',
        },
        ink: {
          DEFAULT: '#111111',   // deep ink for max readability
          soft:    '#3a3a3a',
        },
        night: {
          DEFAULT: '#0e1116',   // dark mode "paper"
          soft:    '#161a21',
        },
        muted: '#6b6b6b',
        rule:  'rgb(0 0 0 / 0.10)',  // hairline rules

        // Ocean (primary)
        ocean: {
          50:  '#eef5fa',
          100: '#d6e6f0',
          200: '#a8c8dd',
          300: '#7aaac9',
          400: '#4c8cb6',
          500: '#2a6f9c',
          600: '#1f5a82',
          700: '#0d3b66',   // primary
          800: '#0a2e50',
          900: '#07203a',
        },

        // Forest (secondary)
        forest: {
          50:  '#eef5ef',
          100: '#d4e5d6',
          200: '#a9c9ac',
          300: '#7eae84',
          400: '#5a925f',
          500: '#3f7745',
          600: '#2f5d35',
          700: '#234a28',   // secondary
          800: '#19371e',
          900: '#0f2613',
        },

        // Earth tone accents (subtle)
        earth: {
          50:  '#f8f3ec',
          100: '#ede2cf',
          200: '#d4b98e',
          300: '#b8954f',
          400: '#956d2c',
        },
      },
      fontFamily: {
        // Lora as display serif — modern Tufte-spirit, web-safe
        display: ['Lora', 'Georgia', 'Cambria', 'serif'],
        body:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif:   ['Lora', 'Georgia', 'serif'],
      },
      maxWidth: {
        'content':  '72rem',  // main container
        'prose':    '38rem',  // optimal reading width (≈ 65ch)
        'prose-wide': '52rem',
      },
      boxShadow: {
        'paper':  '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
        'crisp':  '0 0 0 1px rgba(0,0,0,0.06)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#111',
            maxWidth: '38rem',
          }
        }
      },
      animation: {
        'fade-in':       'fadeIn 0.6s ease-out',
        'fade-in-up':    'fadeInUp 0.7s ease-out',
        'shimmer':       'shimmer 2.4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
};
