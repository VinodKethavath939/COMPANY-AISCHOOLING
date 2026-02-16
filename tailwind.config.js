/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // AI SCHOOLING Design System Colors
      colors: {
        // Primary - Deep Space Navy (Authority & Trust)
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#0f172a',
          900: '#0a0f1a',
          950: '#050810',
        },
        // Accent - Electric Cyan (AI Intelligence)
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Neon - Electric Violet (Innovation & Future)
        neon: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          green: '#10b981',
          pink: '#ec4899',
        },
        // Surface colors for glassmorphism
        surface: {
          dark: 'rgba(15, 23, 42, 0.8)',
          light: 'rgba(255, 255, 255, 0.05)',
          glass: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
        // Semantic colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      // Typography System
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'headline': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'title': ['1.5rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'micro': ['0.75rem', { lineHeight: '1.4' }],
      },
      // Spacing for AI Dashboard feel
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      // Border radius for modern cards
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      // Box shadows for depth and glow effects
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.3)',
        'glow': '0 0 30px rgba(99, 102, 241, 0.4)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.5)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.4)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.4)',
        'inner-glow': 'inset 0 0 30px rgba(99, 102, 241, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'float': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
      },
      // Backdrop blur for glassmorphism
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      // Animation system
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Background images for mesh gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [],
}
