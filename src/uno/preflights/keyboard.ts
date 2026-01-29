import { preflight } from './_util.js';

export const keyboardPreflight = preflight({
	getCSS: () =>
		// add space to bottom of body equal to virtual keyboard inset so that
		// content is not hidden behind the keyboard
		`
	body {
		transform: translateY(calc(-1 * env(keyboard-inset-height,0px)));
	}
`,
});
