import { preflight } from './_util.js';

export interface GlobalsPreflightConfig {
	disableZIndexes?: boolean;
}

export const globalPreflight = (config: GlobalsPreflightConfig) =>
	preflight({
		getCSS: () => `
:root {
	--font-sans: "Inter", sans-serif;
	--font-serif: "Domine", serif;
	--font-title: "Inter", sans-serif;
	--font-default: var(--font-sans, sans-serif);

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

	--un-shadow-color: #000000;
	--un-shadow-opacity: 10%;

	--arrow-size: 1rem;
}

html, body {
	margin: 0;
	padding: 0;
	font-family: var(--font-default);
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
}

@property --v-shadow-y-mult {
	syntax: "*";
	inherits: false;
}

@property --v-border-r-color {
	syntax: "<color>";
	inherits: false;
}

@property --v-border-b-color {
	syntax: "<color>";
	inherits: false;
}

@property --v-border-l-color {
	syntax: "<color>";
	inherits: false;
}

@property --v-border-t-color {
	syntax: "<color>";
	inherits: false;
}

@property --v-border-r-color-altered {
	syntax: "<color>";
	inherits: false;
}

@property --v-border-b-color-altered {
	syntax: "<color>";
	inherits: false;
}

@property --v-border-l-color-altered {
	syntax: "<color>";
	inherits: false;
}

@property --v-border-t-color-altered {
	syntax: "<color>";
	inherits: false;
}
`,
	});
