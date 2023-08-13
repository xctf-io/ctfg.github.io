const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        heading: ["Unbounded Variable", "sans-serif"],
      },
      colors: {
        bg: "var(--color-background)",
        text: "var(--color-text)",
        selection: "var(--color-selection)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        semitransparent: "var(--color-secondary-transparent)",
        accent: "var(--color-accent)",
      },
      textColor: {
        default: "var(--color-text)",
        invert: "var(--color-background)",
        offset: "var(--color-text-offset)",
        icon: "var(--color-icon)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        button: "var(--color-secondary)",
        primary: "var(--color-primary)",
        offset: "var(--color-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      screens: {
        xs: "480px",
      },
      dropShadow: {
        title: "0 2px 6px var(--color-primary)"
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      }
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
