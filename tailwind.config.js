/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ['Roboto'],
        "TimesNewRoman": ['"Times New Roman"', 'serif'],
        "Aboreto": ['Aboreto', 'serif'],
        "Spectral": ['Spectral', 'serif'],
        "MonaSans":["Mona Sans,sans-serif"]
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-20px)', opacity: '0.8' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translatey(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        backgroundCycle: {
          '0%': { backgroundColor: '#D1C7B7' },
          '9%': { backgroundColor: '#F1A7C1' },
          '18%': { backgroundColor: '#D49AB0' },
          '27%': { backgroundColor: '#B2A7E1' },
          '36%': { backgroundColor: '#7CB9E8' },
          '45%': { backgroundColor: '#6DD5B0' },
          '54%': { backgroundColor: '#92D6A4' },
          '63%': { backgroundColor: '#F1D6A1' },
          '72%': { backgroundColor: '#FFC3A0' },
          '81%': { backgroundColor: '#F2B5D4' },
          '90%': { backgroundColor: '#D1A8D9' },
          '100%': { backgroundColor: '#E2C8ED' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        drift: 'drift 2s ease-in-out infinite',
        backgroundCycle: 'backgroundCycle 10s infinite',
      },
    },
  },
  plugins: [],
};
