/** @type {import("prettier").Config} */
module.exports = {
  "singleQuote": false,
  "semi": true,
  "bracketSpacing": true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
