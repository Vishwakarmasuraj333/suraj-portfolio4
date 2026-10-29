import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: "#1C1015", // Dark Surface
          900: "#2B1019", // Deep Burgundy
          850: "#35121D",
          800: "#401421", // Dark Maroon
          700: "#641E32", // Wine Red
          600: "#7D293F", // Rich Burgundy Accent
          500: "#9C3953",
          400: "#BCA3A8", // Muted Rose
          200: "#E5D5D8",
          100: "#F2EAEB",
          50: "#FAF6F7",
        },
        gold: {
          300: "#F5E8C7",
          400: "#E8D2A1", // Soft Gold
          500: "#D6B477", // Champagne Gold
          600: "#B89354",
          700: "#8C6C35",
        },
        ivory: {
          50: "#FFFFFF",
          100: "#FCFAF6",
          200: "#F7F1E8", // Warm Ivory
          300: "#EFE4D4",
          400: "#DFCEB7",
          500: "#BAA588",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(214, 180, 119, 0.25)",
        "maroon-glow": "0 0 35px -5px rgba(100, 30, 50, 0.4)",
        "luxury": "0 20px 40px -15px rgba(28, 16, 21, 0.6)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D6B477 0%, #E8D2A1 50%, #B89354 100%)",
        "maroon-radial": "radial-gradient(circle at center, #401421 0%, #2B1019 60%, #1C1015 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

