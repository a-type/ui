import { ThemeConfig } from '@arbor-css/classes';
import { animation, easing } from './animations.js';
import { height, width } from './sizes.js';

export function makeTheme(): ThemeConfig {
	return {
		width,
		height,
		breakpoints: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		// @ts-expect-error
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
