import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sun: {
          50: "#fff8ec",
          100: "#ffedc7",
          200: "#ffd685",
          300: "#ffbb43",
          400: "#ff9f1c",
          500: "#f77f00",
          600: "#d9640a",
          700: "#b34c0d",
          800: "#8f3c11",
          900: "#753210",
        },
        deep: {
          50: "#eef6f8",
          100: "#d3e9ee",
          200: "#a8d3de",
          300: "#71b3c4",
          400: "#3e8ea3",
          500: "#28718a",
          600: "#1f5a70",
          700: "#1a4a5c",
          800: "#123340",
          900: "#0b2129",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
