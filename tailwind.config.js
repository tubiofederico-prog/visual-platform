/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        accent: {
          red: '#ef4444',
          crimson: '#dc2626',
          scarlet: '#b91c1c',
          rose: '#f43f5e',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(239, 68, 68, 0.2)',
        'glow-lg': '0 0 30px rgba(239, 68, 68, 0.3)',
      },
      backdropBlur: {
        'xl': '20px',
        '2xl': '40px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
