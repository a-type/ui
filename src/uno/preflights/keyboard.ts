import { preflight } from './_util.js';

export const keyboardPreflight = preflight({
	getCSS: () =>
		// add space to bottom of body equal to virtual keyboard inset so that
		// content is not hidden behind the keyboard
		`
	body {
		margin-bottom: env(keyboard-inset-height, 0px) !important;
	}
`,
});
