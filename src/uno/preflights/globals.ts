import { PROPS } from '../logic/properties.js';
import { preflight } from './_util.js';

export interface GlobalsPreflightConfig {
	disableZIndexes?: boolean;
}

export const globalPreflight = (config: GlobalsPreflightConfig) =>
	preflight({
		getCSS: () => `
:root {
	${PROPS.USER.FONTS.SANS}: "Inter", sans-serif;
	${PROPS.USER.FONTS.SERIF}: "Domine", serif;
	${PROPS.USER.FONTS.TITLE}: "Inter", sans-serif;
	${PROPS.USER.FONTS.DEFAULT}: var(${PROPS.USER.FONTS.SANS}, sans-serif);

	--z-now-playing: 40;
	--z-nav: 50;
	${
		config.disableZIndexes
			? ''
			: `
	--z-menu: 100;
	--z-backdrop: 900;
	--z-dialog: 1000;
	--z-tooltip: 10000;
	--z-overdraw: 100000;
	`
	}

	${PROPS.BUILT_IN.SHADOW_COLOR}: #000000;
	${PROPS.BUILT_IN.SHADOW_OPACITY}: 10%;

	--arrow-size: 1rem;
}

@layer preflightBase {
	html, body {
		margin: 0;
		padding: 0;
		font-family: var(${PROPS.USER.FONTS.DEFAULT}, sans-serif);
		font-size: 16px;
		min-height: 100%;
		--webkit-font-smoothing: antialiased;
	}

	body {
		overflow: overlay;
	}

	#main {
		isolation: isolate;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		border-style: solid;
		border-width: 0;
	}
}
`,
	});
