import { Rule } from 'unocss';

export const overflowRules: Rule[] = [
	[
		'overflow-stable',
		{
			'scrollbar-gutter': 'stable',
			'scrollbar-color':
				'hsl(from var(--v-color-altered,var(--v-color,var(--mode-black))) h calc(s * 0.2) calc(l * 4)) transparent',
		},
	],
	[
		'overflow-auto',
		{
			overflow: 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color':
				'hsl(from var(--v-color-altered,var(--v-color,var(--mode-black))) h calc(s * 0.2) calc(l * 4)) transparent',
		},
	],
	[
		'overflow-y-auto',
		{
			'overflow-y': 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color':
				'hsl(from var(--v-color-altered,var(--v-color,var(--mode-black))) h calc(s * 0.2) calc(l * 4)) transparent',
		},
	],
	[
		'overflow-x-auto',
		{
			'overflow-x': 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color':
				'hsl(from var(--v-color-altered,var(--v-color,var(--mode-black))) h calc(s * 0.2) calc(l * 4)) transparent',
		},
	],
	[
		'overflow-unstable',
		{
			'scrollbar-gutter': 'auto',
		},
	],
];
