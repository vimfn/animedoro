/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'default': "url(https://marketplace.canva.com/EAFQDK2NEPU/1/0/1600w/canva-purple-anime-city-desktop-wallpaper-LEFL5_yVCqY.jpg)",
      },
    },
  },
  daisyui: {
    themes: ["retro"],
  },
  plugins: [require("daisyui")],
}
