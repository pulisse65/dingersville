/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F47B20',
          teal: '#14B8A6',
          purple: '#7C3AED',
          deepGreen: '#1A4D2E',
          cream: '#FDF8F0',
          white: '#FFFFFF',
        },
        // Short aliases used by the redesigned components.
        orange: '#F47B20',
        teal: '#14B8A6',
        purple: '#7C3AED',
        deepGreen: '#1A4D2E',
        ink: '#1F1B16',
        cream: '#FDF8F0',
        gold: '#D4A017',
      },
      fontFamily: {
        brand: ['var(--font-brand)', "Comic Sans MS", 'cursive'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
