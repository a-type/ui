import { Theme } from '@unocss/preset-mini';
import { Rule } from 'unocss';
import { PROPS } from '../logic/properties.js';

export const focusRules: Rule<Theme>[] = [
	[
		/^foc(?:-effect)?(-lg)?$/,
		function* ([, size], { symbols }) {
			yield {
				[symbols.selector]: (selector) =>
					`${selector}:focus-visible:not([data-focus-clicked]), ${selector}[data-focus-visible]`,
				[PROPS.BUILT_IN.RING_COLOR]: `var(${PROPS.USER.FOCUS_COLOR})`,
				[PROPS.BUILT_IN.RING_WIDTH]: size === '-lg' ? '4px' : '2px',
				[PROPS.BUILT_IN.RING_STYLE]: 'solid',
				[PROPS.BUILT_IN
					.RING_SHADOW]: `var(${PROPS.BUILT_IN.RING_INSET}) 0 0 0 var(${PROPS.BUILT_IN.RING_WIDTH}) var(${PROPS.BUILT_IN.RING_COLOR})`,
				outline: 'none',
				'box-shadow': `var(${PROPS.BUILT_IN.RING_OFFSET_SHADOW}), var(${PROPS.BUILT_IN.RING_SHADOW}), var(${PROPS.BUILT_IN.SHADOW})`,
			};
			yield {
				[symbols.selector]: (selector) => `${selector}:focus`,
				outline: 'none',
			};
		},
	],
	[
		/^foc-contained(-lg)?$/,
		function* ([, size], { symbols }) {
			yield {
				[symbols.selector]: (selector) =>
					`${selector}:has(:focus-visible:not([data-focus-clicked])), ${selector}:has([data-focus-visible])`,
				[PROPS.BUILT_IN.RING_COLOR]: `var(${PROPS.USER.FOCUS_COLOR})`,
				[PROPS.BUILT_IN.RING_WIDTH]: size === '-lg' ? '4px' : '2px',
				[PROPS.BUILT_IN.RING_STYLE]: 'solid',
				[PROPS.BUILT_IN
					.RING_SHADOW]: `0 0 0 var(${PROPS.BUILT_IN.RING_WIDTH}) var(${PROPS.BUILT_IN.RING_COLOR})`,
				outline: 'none',
				'box-shadow': `var(${PROPS.BUILT_IN.RING_OFFSET_SHADOW}), var(${PROPS.BUILT_IN.RING_SHADOW})`,
			};
			yield {
				[symbols.selector]: (selector) => `${selector}>*:focus`,
				outline: 'none',
			};
		},
	],
];
