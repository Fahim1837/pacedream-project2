/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#BAA333"
    },
    backgroundImage: {
      'hero-img': "url('images/room-mate-filter-image.webp')",
    }

    },
  },
  plugins: [],
}

