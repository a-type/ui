import preset from '../../arbor/arbor.js';
import { preflight } from './_util.js';

export interface GlobalsPreflightConfig {
	disableZIndexes?: boolean;
	rootSelector?: string;
}

export const globalPreflight = ({
	disableZIndexes,
	rootSelector = '#root, #main, #app, #storybook-root',
}: GlobalsPreflightConfig) =>
	preflight({
		getCSS: () => `
:root {
	--z-now-playing: 40;
	--z-nav: 50;
	${
		disableZIndexes
			? ''
			: `
	--z-menu: 100;
	--z-backdrop: 900;
	--z-dialog: 1000;
	--z-tooltip: 10000;
	--z-overdraw: 100000;
	`
	}
}

@layer preflightBase {
	html, body {
		margin: 0;
		padding: 0;
		font-family: Inter, sans-serif;
		min-height: 100%;
		--webkit-font-smoothing: antialiased;
	}

	body {
		overflow: overlay;
		background-color: ${preset.modes.base.schema.$tokens.color.main.paper.var}
	}

	${rootSelector} {
		isolation: isolate;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
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
