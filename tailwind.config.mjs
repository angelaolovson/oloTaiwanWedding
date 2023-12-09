/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'navFooter': '#EDEEEC'
			},
			fontSize: {
				'20md': '20px',
			},
		},
	},
	plugins: [],
}
