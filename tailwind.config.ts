import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1120",
        charcoal: "#1F2937",
        gold: "#D4AF37",
        mist: "#F8FAFC",
        text: "#111827"
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(11, 17, 32, 0.16)",
        soft: "0 16px 40px rgba(15, 23, 42, 0.09)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
