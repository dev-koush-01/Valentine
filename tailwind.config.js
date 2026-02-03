module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fdf2f8',
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
}
