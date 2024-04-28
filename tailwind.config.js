/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      mono: ["Josefin Sans", "monospace"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
      },
      height: {
        "80-screen": "80vh",
        "90-screen": "90vh",
        "70-screen": "70vh",
        "60-screen": "60vh",
        "50-screen": "50vh",
      },
      width: {
        "80-screen": "80vw",
        "90-screen": "90vw",
        "70-screen": "70vw",
        "60-screen": "60vw",
        "50-screen": "50vw",
      },
      fontSize: {
        xxs: "0.625rem",
        xxxs: "0.35rem",
      },
      border: {
        "1/2": "0.5px",
        "1": "1px",
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInSlideIn: 'fadeInSlideIn 0.5s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInSlideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
