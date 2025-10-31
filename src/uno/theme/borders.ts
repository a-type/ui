import { Theme } from '@unocss/preset-mini';

export const lineWidth: Theme['lineWidth'] = {
	DEFAULT: `calc(1px * var(--global-border-scale,1))`,
	thin: `calc(1px * var(--global-border-scale,1))`,
	none: '0',
	thick: `calc(2px * var(--global-border-scale,1))`,
};

export const borderRadius: Theme['borderRadius'] = {
	xs: `calc(0.25rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
	sm: `calc(0.5rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
	md: `calc(1rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
	lg: `calc(1.25rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
	xl: `calc(1.5rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
	full: `calc(99999px * var(--global-corner-scale,1))`,
};
