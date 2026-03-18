import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    colors: {
      /* Essentials */
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",

      /* Brand palette */
      primaryGreen: "#A5C89E",
      accentYellow: "#FFFBB1",
      secondaryGreen: "#D8E983",
      oliveAccent: "#AEB877",

      /* Extended UI roles */
      surface: "#F7FAF6",
      surfaceElevated: "#EDF4EB",
      primary: "#4A7C59",
      primaryHover: "#3D6649",
      accent: "#6B7A3D",
      textPrimary: "#1A2E1A",
      textSecondary: "#4A5D4A",
      textMuted: "#6B7D6B",
      border: "#C5D4C1",
      borderStrong: "#8FA889",

      /* Feedback */
      success: "#2E7D32",
      successBg: "#D8EAD2",
      warning: "#C77700",
      error: "#C62828",
    },
    extend: {
      fontFamily: {
        sans: [
          "var(--font-outfit)",
          "Outfit",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        arabic: ["var(--font-amiri)", "Amiri", "Traditional Arabic", "serif"],
      },
      fontSize: {
        /* Typographic scale */
        xs: ["0.75rem", { lineHeight: "1.5" }] /* 12px */,
        sm: ["0.875rem", { lineHeight: "1.5" }] /* 14px */,
        base: ["1rem", { lineHeight: "1.75" }] /* 16px */,
        lg: ["1.125rem", { lineHeight: "1.6" }] /* 18px */,
        xl: ["1.25rem", { lineHeight: "1.5" }] /* 20px */,
        "2xl": ["1.5rem", { lineHeight: "1.35" }] /* 24px */,
        "3xl": ["1.875rem", { lineHeight: "1.25" }] /* 30px */,
        "4xl": ["2.25rem", { lineHeight: "1.15" }] /* 36px */,
        "5xl": ["3rem", { lineHeight: "1.1" }] /* 48px */,
        "6xl": ["3.75rem", { lineHeight: "1.05" }] /* 60px */,
      },
      spacing: {
        /* 4px baseline grid tokens */
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "14": "56px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
        "card-hover":
          "0 10px 40px rgba(74, 124, 89, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)",
        soft: "0 2px 8px rgba(74, 124, 89, 0.08)",
        elevated:
          "0 8px 30px rgba(74, 124, 89, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04)",
        glow: "0 0 20px rgba(74, 124, 89, 0.15)",
        "inner-glow": "inset 0 1px 4px rgba(74, 124, 89, 0.06)",
      },
      maxWidth: {
        prose: "65ch",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-down": "slide-down 0.3s ease-out forwards",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
