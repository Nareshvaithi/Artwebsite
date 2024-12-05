/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Roboto":['Roboto'],
        "TimesNewRoman": ['"Times New Roman"', 'serif'],
        "Aboreto": ['Aboreto', 'serif'],
        "Spectral": ['Spectral', 'serif'],
        "MonaSans":["Mona Sans,sans-serif"]

      },
      keyframes: {
        backgroundCycle: {
          '0%': { backgroundColor: '#D1C7B7' },  // Darker Ivory
          '9%': { backgroundColor: '#F1A7C1' },  // Darker Pastel Pink
          '18%': { backgroundColor: '#D49AB0' },  // Soft Rose
          '27%': { backgroundColor: '#B2A7E1' },  // Darker Lavender
          '36%': { backgroundColor: '#7CB9E8' },  // Darker Pastel Blue
          '45%': { backgroundColor: '#6DD5B0' },  // Darker Mint Green
          '54%': { backgroundColor: '#92D6A4' },  // Darker Pastel Green
          '63%': { backgroundColor: '#F1D6A1' },  // Darker Pale Yellow
          '72%': { backgroundColor: '#FFC3A0' },  // Soft Coral
          '81%': { backgroundColor: '#F2B5D4' },  // Light Pinkish Lavender
          '90%': { backgroundColor: '#D1A8D9' },  // Darker Pastel Lavender
          '100%': { backgroundColor: '#E2C8ED' }, // Soft Pastel Lavender (back to start)
        },
      },
      animation: {
        backgroundCycle: 'backgroundCycle 10s infinite',
      },
    },
  },
  plugins: [],
}

