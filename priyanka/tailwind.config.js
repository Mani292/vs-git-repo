/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Beautiful new dark theme colors
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Stunning gradient colors
        gradient: {
          primary: {
            from: '#667eea',
            to: '#764ba2',
          },
          secondary: {
            from: '#f093fb',
            to: '#f5576c',
          },
          dark: {
            from: '#0f0f23',
            to: '#1a1a2e',
          },
          neon: {
            from: '#00d4ff',
            to: '#0099cc',
          },
          purple: {
            from: '#8b5cf6',
            to: '#d946ef',
          },
          ocean: {
            from: '#06b6d4',
            to: '#3b82f6',
          }
        },
                 // Neon accent colors for dark mode
         neon: {
           blue: '#00d4ff',
           purple: '#8b5cf6',
           pink: '#ec4899',
           green: '#10b981',
           yellow: '#f59e0b',
           orange: '#f97316',
           red: '#ef4444',
           cyan: '#06b6d4',
           indigo: '#6366f1',
         }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 3s ease infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff' },
          '100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        'gradient-neon': 'linear-gradient(45deg, #00d4ff 0%, #0099cc 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
             boxShadow: {
         'neon': '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff',
         'neon-purple': '0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6',
         'neon-pink': '0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 15px #ec4899',
         'neon-red': '0 0 5px #ef4444, 0 0 10px #ef4444, 0 0 15px #ef4444',
         'neon-cyan': '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4',
         'neon-indigo': '0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #6366f1',
       },
    },
  },
  plugins: [],
}
