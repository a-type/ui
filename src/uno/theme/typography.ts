import { Theme } from '@unocss/preset-mini';
import { PROPS } from '../logic/properties.js';

export const fontFamily: Theme['fontFamily'] = {
	default: `var(${PROPS.USER.FONTS.DEFAULT}, sans-serif)`,
	sans: `var(${PROPS.USER.FONTS.SANS}, sans-serif)`,
	serif: `var(${PROPS.USER.FONTS.SERIF}, serif)`,
	title: `var(${PROPS.USER.FONTS.TITLE}, var(${PROPS.USER.FONTS.DEFAULT}))`,
};
export const fontSize: Theme['fontSize'] = {
	xxs: ['0.625rem', '0.75rem'],
	xs: ['0.75rem', '1rem'],
	sm: ['1rem', '1.25rem'],
	md: ['1.125rem', '1.5rem'],
	lg: ['1.25rem', '1.75rem'],
	xl: ['1.5rem', '2rem'],
	'2xl': ['1.75rem', '2.25rem'],
	'3xl': ['2rem', '2.5rem'],
	'4xl': ['2.5rem', '3rem'],
	'5xl': ['3rem', '3.5rem'],
	'6xl': ['4rem', '4.5rem'],
	'7xl': ['5rem', '5.5rem'],
	'8xl': ['6rem', '6.5rem'],
	'9xl': ['7rem', '7.5rem'],
};
