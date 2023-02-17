/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2972fe",
        "primary-hover": "#2972fe",
        "primary-active": "#2972fe",
        "primary-disabled": "#93b8fe",
        secondary: "#ffb800",
        "Secondary-hover": "#ffb800",
        "Secondary-active": "#ffb800",
        "Secondary-disabled": "#ffdb7f",
        tertiary: "#6d5ffd",
        quaternary: "#ff1843",
        success: "#23a757",
        warning: "#b95000",
        error: "#da1414",
        info: "#2e5aac",
        "success-bg": "#edf9f0",
        "warning-bg": "#fff4ec",
        "error-bg": "#feefef",
        "info-bg": "#eef2fa",
        neutral: "#9098a1",
        "neutral-1": "#2c3a4b",
        "neutral-2": "#394452",
        "neutral-3": "#545d69",
        "neutral-4": "#6d7580",
        "neutral-5": "#858c94",
        "neutral-6": "#a5abb3",
        "neutral-7": "#dadee3",
        "neutral-8": "#ebeef2",
        "neutral-9": "#f4f6f9",
        "accent-1": "#ecb2f2",
        "accent-2": "#2d6a6a",
        "accent-3": "#e9ad8c",
        "accent-4": "#221874",
        "accent-5": "#7cc6d6",
        "accent-6": "#e1604d",
      },
    },
  },
  plugins: [],
};