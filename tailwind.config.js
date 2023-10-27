/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./page-components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontSize: {
    md: "15px",
  },
  theme: {
    colors: {
      gray: {
        800: "#151730",
        900: "#0A0B19",
        950: "#000000",
      },
      green: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#2FFF9B",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
    },
    extend: {
      maxWidth: {
        xxx: "1200px",
      },
      width: {
        xxx: "1200px",
      },
    },
  },
  plugins: [],
};
