import { Theme } from '@unocss/preset-mini';
import { PROPS } from '../logic/properties.js';

export const lineWidth: Theme['lineWidth'] = {
	DEFAULT: `calc(1px * var(${PROPS.USER.BORDER_SCALE},1))`,
	thin: `calc(1px * var(${PROPS.USER.BORDER_SCALE},1))`,
	none: '0',
	thick: `calc(2px * var(${PROPS.USER.BORDER_SCALE},1))`,
};

export const borderRadius: Theme['borderRadius'] = {
	xs: `calc(0.25rem * var(${PROPS.LOCALS.CORNER_SCALE},1) * var(${PROPS.USER.CORNER_SCALE},1))`,
	sm: `calc(0.5rem * var(${PROPS.LOCALS.CORNER_SCALE},1) * var(${PROPS.USER.CORNER_SCALE},1))`,
	md: `calc(1rem * var(${PROPS.LOCALS.CORNER_SCALE},1) * var(${PROPS.USER.CORNER_SCALE},1))`,
	lg: `calc(1.25rem * var(${PROPS.LOCALS.CORNER_SCALE},1) * var(${PROPS.USER.CORNER_SCALE},1))`,
	xl: `calc(1.5rem * var(${PROPS.LOCALS.CORNER_SCALE},1) * var(${PROPS.USER.CORNER_SCALE},1))`,
	full: `calc(99999px * var(${PROPS.USER.CORNER_SCALE},1))`,
};
