/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // reference the library only
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#14b8a6",
        accent1: "#3b82f6",
        accent2: "#10b981",
        hover: "#2563eb",
      },
    },
  },
  plugins: [],
};
