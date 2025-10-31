import { Rule } from 'unocss';

export const utilRules: Rule[] = [
	[
		/^gutter-bottom$/,
		(_, { theme }) => ({ 'margin-bottom': (theme as any).spacing[2] }),
	],
	[
		/^arrow$/,
		function* (_, ctx) {
			yield {
				fill: 'var(--v-bg-altered,var(--v-bg))',
				stroke: 'var(--v-border-altered,var(--v-border))',
				width: 'var(--arrow-size)',
				height: 'calc(var(--arrow-size) * 0.5)',
				position: 'relative',
				'z-index': 0,
			};
			yield {
				[ctx.symbols.selector]: (selector) => `span:has(${selector}):after`,
				content: '""',
				position: 'absolute',
				top: '0',
				left: '1.5px',
				right: '1.5px',
				height: '1px',
				background: 'var(--v-bg-altered,var(--v-bg))',
			};
		},
	],
];
