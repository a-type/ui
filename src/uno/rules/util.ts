import { Rule } from 'unocss';
import { PROPS } from '../logic/properties.js';

export const utilRules: Rule[] = [
	[
		/^gutter-bottom$/,
		(_, { theme }) => ({ 'margin-bottom': (theme as any).spacing[2] }),
	],
	[
		/^arrow$/,
		function* (_, ctx) {
			yield {
				fill: `var(${PROPS.BACKGROUND_COLOR.FINAL},var(${PROPS.BACKGROUND_COLOR.INHERITED},var(${PROPS.MODE.WHITE})))`,
				stroke: `var(${PROPS.BORDER_COLOR.ALL.FINAL},var(${PROPS.BORDER_COLOR.ALL.INHERITED},var(${PROPS.MODE.BLACK})))`,
				width: `var(${PROPS.UTILS.ARROW_SIZE})`,
				height: `calc(var(${PROPS.UTILS.ARROW_SIZE}) * 0.5)`,
				position: 'relative',
				'z-index': 0,
			};
			yield {
				[ctx.symbols.selector]: (selector) => `${selector}[data-side="top"]`,
				transform: 'rotate(0deg)',
				bottom: `calc(-1 * var(${PROPS.UTILS.ARROW_SIZE}) / 2 + 1px)`,
			};
			yield {
				[ctx.symbols.selector]: (selector) => `${selector}[data-side="right"]`,
				transform: 'rotate(90deg)',
				left: `calc(-1 * var(${PROPS.UTILS.ARROW_SIZE}) * 0.75)`,
			};
			yield {
				[ctx.symbols.selector]: (selector) => `${selector}[data-side="left"]`,
				transform: 'rotate(-90deg)',
				right: `calc(-1 * var(${PROPS.UTILS.ARROW_SIZE}) * 0.75)`,
			};
			yield {
				[ctx.symbols.selector]: (selector) => `${selector}[data-side="bottom"]`,
				transform: 'rotate(180deg)',
				top: `calc(-1 * var(${PROPS.UTILS.ARROW_SIZE}) / 2)`,
			};
		},
	],
];
