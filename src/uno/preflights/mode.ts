import { PROPS } from '../logic/properties.js';
import { preflight } from './_util.js';
import { ColorPreflightOptions, palettePropertyReset } from './colors.js';

const lightModeCSS = (options: ColorPreflightOptions) => `
${PROPS.MODE.MULT}: 1;
${PROPS.MODE.L_NEUTRAL}: 90%;
${PROPS.MODE.L_RANGE_UP}: 10%;
${PROPS.MODE.L_RANGE_DOWN}: 70%;
${PROPS.MODE.S_NEUTRAL}: 75%;
${PROPS.MODE.S_RANGE_UP}: -55%;
${PROPS.MODE.S_RANGE_DOWN}: 20%;
${PROPS.MODE.WHITE}: #ffffff;
${PROPS.MODE.BLACK}: #000000;

color: var(${PROPS.COLOR.INHERITED});
background-color: var(${PROPS.BACKGROUND_COLOR.INHERITED});

${palettePropertyReset(options)}
`;

const darkModeCSS = (options: ColorPreflightOptions) => `
${PROPS.MODE.MULT}: -1;
${PROPS.MODE.L_NEUTRAL}: 60%;
${PROPS.MODE.L_RANGE_UP}: 38%;
${PROPS.MODE.L_RANGE_DOWN}: 70%;
${PROPS.MODE.S_NEUTRAL}: 80%;
${PROPS.MODE.S_RANGE_UP}: 40%;
${PROPS.MODE.S_RANGE_DOWN}: -30%;
${PROPS.MODE.WHITE}: #000000;
${PROPS.MODE.BLACK}: #ffffff;

color: var(${PROPS.COLOR.INHERITED});
background-color: var(${PROPS.BACKGROUND_COLOR.INHERITED});

${palettePropertyReset(options)}
`;

export const modePreflight = (options: ColorPreflightOptions) =>
	preflight({
		getCSS: () => `
@layer preflightBase {
	html {
		${lightModeCSS(options)}
	}

	@media (prefers-color-scheme: dark) {
		html {
			${darkModeCSS(options)}
		}
	}
}

@layer preflightVariants {
	.override-light {
		${lightModeCSS(options)}
	}
	.override-dark {
		${darkModeCSS(options)}
	}
}`,
	});
