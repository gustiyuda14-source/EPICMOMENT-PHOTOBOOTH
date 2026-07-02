import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          deep: "#2b0000",
          DEFAULT: "#4a0404",
          bright: "#8b0a0a",
          satin: "#a3120f",
        },
        gold: {
          DEFAULT: "#e8c477",
          light: "#f5e2ab",
        },
        cream: "#fdfdfd",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "maroon-gradient":
          "linear-gradient(135deg, #4a0404 0%, #8b0a0a 50%, #2b0000 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
