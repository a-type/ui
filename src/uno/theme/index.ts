import { Theme, theme as baseTheme } from '@unocss/preset-wind3';
import { PreflightConfig } from '../preflights/index.js';
import { animation, easing } from './animations.js';
import { borderRadius, lineWidth } from './borders.js';
import { makeThemeColors } from './colors.js';
import { boxShadow } from './shadows.js';
import { height, width } from './sizes.js';
import { spacing } from './spacing.js';
import { fontFamily, fontSize } from './typography.js';

export function makeTheme(options: PreflightConfig): Theme {
	return {
		...baseTheme,
		colors: makeThemeColors(options),
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
		blur: {
			sm: '2px',
			md: '4px',
			lg: '8px',
			xl: '16px',
			'2xl': '24px',
			'3xl': '40px',
		},
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
}
