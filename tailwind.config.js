/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        sm: '1rem',
        md: '1.5rem',
        lg: '3rem',
        xl: '5rem'
      },
      margin: {
        sm: '1rem',
        md: '1.5rem',
        lg: '3rem',
        xl: '5rem'
      },
      colors: {
        primary: '#222831',
        secondary: '#393E46',
        action: '#FFD369',
        default: '#EEEEEE',
        hPrimary: '#2C394B',
        hSecondary: '#393E46',
        hAction: '#222831'
      },
      gap: {
        sm: '0.5rem',
        md: '1.5rem',
        lg: '3rem',
        xl: '5rem'
      }
    }
  },
  plugins: []
}
