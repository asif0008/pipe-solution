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
        'primary': 'rgb(15 76 129)',
        'background': '#F0F0F0',
        'highlight': '#0FA490 ',
        'grey1': '#D9D9D9'
      },
    },
  },
  plugins: [],
};
