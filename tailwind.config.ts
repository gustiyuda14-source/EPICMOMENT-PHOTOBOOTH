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
          dark: "#c9a24f",
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
        "gold-gradient":
          "linear-gradient(105deg, #f5e2ab 0%, #e8c477 45%, #c9a24f 100%)",
      },
      boxShadow: {
        "gold-glow": "0 8px 40px -12px rgba(232, 196, 119, 0.45)",
        "gold-soft": "0 0 30px -10px rgba(232, 196, 119, 0.4)",
        card: "0 20px 50px -24px rgba(0, 0, 0, 0.6)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
