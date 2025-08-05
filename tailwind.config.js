// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatHeart: {
          '0%': { transform: 'translateY(0)', opacity: '0.8' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
      },
      animation: {
        floatHeart: 'floatHeart 8s linear infinite',
        floatHeartSlow: 'floatHeart 12s linear infinite',
        floatHeartFast: 'floatHeart 6s linear infinite',
      },
    },
  },
  plugins: [],
}
