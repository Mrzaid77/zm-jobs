/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        cardBg: '#141414',
        electricBlue: '#00D4FF',
        accentPurple: '#7B2FFF',
        textWhite: '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        textShine: 'textShine 3s ease-in-out infinite',
      },
      keyframes: {
        textShine: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}