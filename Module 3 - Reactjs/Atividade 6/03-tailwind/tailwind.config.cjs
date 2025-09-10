/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        surface: '#f8fafc',
        muted: '#6b7280'
      },
      borderRadius: {
        'lg': '14px'
      },
      transitionDuration: {
        fast: '200ms'
      }
    },
  },
  plugins: [],
}
