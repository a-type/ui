import { preflight } from './_util.js';

export interface KeyboardPreflightOptions {
	rootSelector?: string;
}

export const keyboardPreflight = ({
	rootSelector = '#root,#main',
}: KeyboardPreflightOptions) =>
	preflight({
		getCSS: () =>
			// add space to bottom of body equal to virtual keyboard inset so that
			// content is not hidden behind the keyboard
			`
	${rootSelector} {
		transform: translateY(calc(-1 * env(keyboard-inset-height,0px)));
	}
`,
	});
