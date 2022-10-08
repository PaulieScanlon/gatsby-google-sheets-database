module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00AFF4',
        secondary: '#FF3287',
        tertiary: '#C87296'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
