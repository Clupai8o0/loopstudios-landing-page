module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				headers: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {
			textColor: ["responsive", "hover", "focus", "group-hover"],
		},
	},
	plugins: [],
};
