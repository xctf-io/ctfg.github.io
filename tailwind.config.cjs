const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Lexend Variable", ...defaultTheme.fontFamily.sans],
				heading: [
					"Lexend Exa Variable",
					...defaultTheme.fontFamily.sans,
				],
			},
			colors: {
				bg: "var(--color-background)",
				text: "var(--color-text)",
				selection: "var(--color-selection)",
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				code: "var(--color-code)",
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
				semitransparent: "var(--color-semitransparent)",
				lowcontrast: "var(--color-low-contrast)",
			},
			borderColor: {
				default: "var(--color-border)",
				text: "var(--color-text)",
				offset: "var(--color-offset)",
				lowcontrast: "var(--color-border-low-contrast)",
			},
			screens: {
				xs: "480px",
			},
			dropShadow: {
				title: "0 2px 6px var(--color-primary)",
				lowcontrast: "0 2px 6px var(--color-border-low-contrast)",
			},
			animation: {
				"spin-slow": "spin 50s linear infinite",
			},
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: "var(--color-primary)",
							"text-underline-offset": "4px",
							"&:hover": {
								"text-decoration-style": "wavy",
							},
						},
						pre: {
							color: "var(--color-text)",
						},
					},
				},
			},
		},
	},
	corePlugins: {
		fontSize: false,
	},
	plugins: [
		require("tailwindcss-fluid-type"),
		require("@tailwindcss/typography"),
	],
};
