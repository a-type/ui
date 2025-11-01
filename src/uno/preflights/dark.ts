import { preflight } from './_util.js';

const lightModeCSS = `
--mode-mult: 1;
--mode-l-neutral: 90%;
--mode-l-range-up: 15%;
--mode-l-range-down: 70%;
--mode-s-neutral: 75%;
--mode-s-range-up: -55%;
--mode-s-range-down: 20%;
--mode-white: #ffffff;
`;

const darkModeCSS = `
--mode-mult: -1;
--mode-l-neutral: 60%;
--mode-l-range-up: 38%;
--mode-l-range-down: 70%;
--mode-s-neutral: 80%;
--mode-s-range-up: 40%;
--mode-s-range-down: -30%;
--mode-white: #000000;
`;

export const darkModePreflight = preflight({
	getCSS: () => `
@layer preflightBase {
	html {
		${lightModeCSS}
	}

	@media (prefers-color-scheme: dark) {
		html {
			${darkModeCSS}
		}
	}
}

@layer preflightVariants {
	.override-light {
		${lightModeCSS}
	}
	.override-dark {
		${darkModeCSS}
	}
}`,
});
