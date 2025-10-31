import { Theme } from '@unocss/preset-mini';
import { animation, easing } from './animations.js';
import { borderRadius, lineWidth } from './borders.js';
import { colors } from './colors.js';
import { boxShadow } from './shadows.js';
import { height, width } from './sizes.js';
import { spacing } from './spacing.js';
import { fontFamily, fontSize } from './typography.js';

export const theme: Theme = {
	colors,
	fontSize,
	fontFamily,
	spacing,
	borderRadius,
	lineWidth,
	width,
	height,
	minWidth: width,
	minHeight: height,
	boxShadow,
	easing,
	animation,
	zIndex: {
		nav: 'var(--z-nav)',
		menu: 'var(--z-menu)',
		dialog: 'var(--z-dialog)',
		backdrop: 'var(--z-backdrop)',
		tooltip: 'var(--z-tooltip)',
		overdraw: 'var(--z-overdraw)',
		'now-playing': 'var(--z-now-playing)',
	},
};
