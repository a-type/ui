import { Theme } from '@unocss/preset-mini';
import { PROPS } from '../logic/properties.js';

export const spacing: Theme['spacing'] = {
	xs: `calc(0.25rem * var(${PROPS.LOCALS.SPACING_SCALE},1) * var(${PROPS.USER.SPACING_SCALE},1))`,
	sm: `calc(0.5rem * var(${PROPS.LOCALS.SPACING_SCALE},1) * var(${PROPS.USER.SPACING_SCALE},1))`,
	md: `calc(1rem * var(${PROPS.LOCALS.SPACING_SCALE},1) * var(${PROPS.USER.SPACING_SCALE},1))`,
	lg: `calc(2rem * var(${PROPS.LOCALS.SPACING_SCALE},1) * var(${PROPS.USER.SPACING_SCALE},1))`,
	xl: `calc(3rem * var(${PROPS.LOCALS.SPACING_SCALE},1) * var(${PROPS.USER.SPACING_SCALE},1))`,
};
