import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2B48",
          dark: "#091D33",
          light: "#173E67",
        },
        brandBlue: {
          DEFAULT: "#1D68BD",
          hover: "#15529A",
          light: "#3B86DB",
          soft: "#EAF3FC",
          pale: "#F3F8FD",
        },
        brandCyan: {
          DEFAULT: "#0284C7",
          light: "#38BDF8",
          soft: "#E0F2FE",
        },
        bodyText: {
          DEFAULT: "#2D3748",
          muted: "#64748B",
          subtle: "#94A3B8",
        },
        borderSubtle: {
          DEFAULT: "#E2E8F0",
          hover: "#CBD5E1",
        },
        status: {
          emergency: "#DC2626",
          emergencyBg: "#FEF2F2",
          warning: "#D97706",
          warningBg: "#FFFBEB",
          success: "#16A34A",
          successBg: "#F0FDF4",
        },
      },
      fontFamily: {
        sans: [
          "DM Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "Manrope",
          "DM Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "20px",
        pill: "9999px",
        element: "14px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 43, 72, 0.05)",
        card: "0 10px 30px -4px rgba(15, 43, 72, 0.08)",
        glow: "0 0 30px -5px rgba(29, 104, 189, 0.3)",
        dropdown: "0 20px 40px -10px rgba(15, 43, 72, 0.15)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-glow": "pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
