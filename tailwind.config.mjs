import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["corporate"],
					primary: "hsl(234, 90%, 60%)",
					accent: "hsl(15, 90%, 60%)",
				},
				dark: {
					...require("daisyui/src/theming/themes")["business"],
					primary: "hsl(234, 90%, 60%)",
					accent: "hsl(15, 90%, 60%)",
				},
			},
		],
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		logs: true,
		themeRoot: ":root",
	},
	darkMode: ['class', '[data-theme="dark"]'],
	plugins: [
		starlightPlugin(),
		require('daisyui'),
		require("@tailwindcss/typography")
	],
}

