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
				[ctx.symbols.selector]: (selector) => `${selector}:after`,
				content: '""',
				position: 'absolute',
				top: '0',
				left: '1.5px',
				right: '1.5px',
				height: '1px',
				background: 'var(--v-bg-altered,var(--v-bg))',
			};
			yield {
				[ctx.symbols.selector]: (selector) => `${selector}[data-side="top"]`,
				transform: 'rotate(0deg)',
				bottom: 'calc(-1 * var(--arrow-size) / 2)',
			};
			yield {
				[ctx.symbols.selector]: (selector) => `${selector}[data-side="right"]`,
				transform: 'rotate(90deg)',
				left: 'calc(-1 * var(--arrow-size) * 0.75)',
			};
			yield {
				[ctx.symbols.selector]: (selector) => `${selector}[data-side="left"]`,
				transform: 'rotate(-90deg)',
				right: 'calc(-1 * var(--arrow-size) * 0.75)',
			};
			yield {
				[ctx.symbols.selector]: (selector) => `${selector}[data-side="bottom"]`,
				transform: 'rotate(180deg)',
				top: 'calc(-1 * var(--arrow-size) / 2)',
			};
		},
	],
];
