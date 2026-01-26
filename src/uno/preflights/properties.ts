import { Theme } from '@unocss/preset-mini';
import { PreflightContext } from 'unocss';
import { PROPS } from '../logic/properties.js';
import { preflight } from './_util.js';

export const propertiesPreflight = preflight({
	getCSS: (_ctx: PreflightContext<Theme>) => {
		return `
@property ${PROPS.LOCALS.CORNER_SCALE} {
	syntax: "*";
	inherits: false;
}
@property ${PROPS.UTILS.SHADOW_Y_MULT} {
	syntax: "*";
	inherits: false;
}
`;
	},
});
