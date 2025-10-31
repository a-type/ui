import { Preflight } from 'unocss';
import { preflight } from './_util.js';

export const layerPreflight: Preflight = preflight({
	getCSS: () =>
		`@layer preflightBase, preflightVariant, components, responsive, variants, utilities;`,
});
