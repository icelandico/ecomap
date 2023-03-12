/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryGreen": "#16a34a",
        "lightGreen": "#bbf7d0",
        "primaryRed": "#dc2626",
        "limeGreen": "#84cc16",
        "primaryBlue": "#0ea5e9",
        "primaryOrange": "#f97316",
        "primaryGray": "#d1d5db",
        "primaryYellow": "#fde047",
      },
    },
  },
  plugins: [],
};
