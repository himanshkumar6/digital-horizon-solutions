import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#050505",
          subtle: "#0A0A0A",
          elevated: "#111111",
        },
        surface: {
          DEFAULT: "#151515",
          subtle: "#121212",
          elevated: "#1B1B1B",
          border: "#262626",
          glass: "rgba(20, 20, 20, 0.72)",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F4ECD2",
          200: "#E7D8A2",
          300: "#DAC373",
          400: "#D4AF37", // Canonical warm metallic gold accent
          500: "#BE9828",
          600: "#99781B",
          700: "#705615",
          800: "#4D3B12",
          900: "#2B210C",
        },
        accent: {
          gold: "#D4AF37",
          "gold-light": "#E5C07B",
          "gold-dark": "#A67C1E",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "gold-glow": "0 0 25px -5px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 50px -10px rgba(212, 175, 55, 0.35)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E5C07B 0%, #D4AF37 50%, #99781B 100%)",
        "gold-gradient-subtle": "linear-gradient(135deg, rgba(229, 192, 123, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)",
        "radial-horizon": "radial-gradient(circle at 50% 100%, rgba(212, 175, 55, 0.12) 0%, rgba(10, 10, 10, 0) 70%)",
        "radial-hero": "radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.08) 0%, rgba(5, 5, 5, 0) 65%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
