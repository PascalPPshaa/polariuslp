import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B3FE4",
        "primary-dark": "#3730C4",
        "primary-light": "#6C63FF",
        accent: "#FF6B35",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, rgba(75,63,228,0.85) 0%, rgba(180,60,90,0.7) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
