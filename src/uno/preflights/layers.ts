import { Preflight } from 'unocss';
import { preflight } from './_util.js';

export const layerPreflight: Preflight = preflight({
	getCSS: () =>
		`@layer preflightBase, preflightVariant, primitives, components, composed, composed-2, responsive, variants, utilities, user;`,
});
