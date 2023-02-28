/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryGreen": "#16a34a",
        "lightGreen": "#bbf7d0",
        "primaryRed": "#dc2626",
      },
    },
  },
  plugins: [],
};
