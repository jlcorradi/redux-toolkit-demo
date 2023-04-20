/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  utilities: {
    // Add the `focus:shadow-outline` class to the `utilities` layer
    "focus:shadow-outline": {
      "box-shadow": "0 0 0 3px rgba(66, 153, 225, 0.5)",
    },
  },
  theme: {
    extend: {
      boxShadow: {
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      },
    },
  },
  plugins: [],
};
