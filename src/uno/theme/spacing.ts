import { Theme } from '@unocss/preset-mini';

export const spacing: Theme['spacing'] = {
	xs: 'calc(0.25rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
	sm: 'calc(0.5rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
	md: 'calc(1rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
	lg: 'calc(2rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
	xl: 'calc(3rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
};
