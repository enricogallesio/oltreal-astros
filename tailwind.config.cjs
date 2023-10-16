/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
				display: ["Cabin Sketch"],
			},

			backgroundImage: {
				landing: "url(/pubassets/landing_hero_bg.jpeg)",
			},
			dropShadow: {
				hero: "0 5px 5px rgba(0, 0, 0, 0.8)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require.resolve("prettier-plugin-astro")],
	darkMode: "class",
};
