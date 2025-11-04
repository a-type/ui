import { preflight } from './_util.js';

export interface FontsPreflightOptions {
	interFontLocation: string;
}

export const fontsPreflight = (
	{ interFontLocation }: FontsPreflightOptions = {
		interFontLocation:
			'https://resources.biscuits.club/fonts/Inter-VariableFont_slnt,wght.ttf',
	},
) =>
	preflight({
		getCSS: () => `
		@font-face {
			font-family: "Inter";
			src: url("${interFontLocation}") format("truetype-variations");
			font-weight: 1 999;
			font-style: oblique 0deg 5deg;
			font-display: block;
		}
	`,
	});
