import { parseColor } from '@unocss/preset-mini/utils';
import { Rule, symbols } from 'unocss';
import { darken, lighten } from '../logic/color.js';
import { PROPS } from '../logic/properties.js';

export const colorRules: Rule[] = [
	[
		/^color-(.*)$/,
		(match, { theme }) => {
			if (match[1] === 'inherit') {
				return {
					color: `var(${PROPS.COLOR.FINAL},var(${PROPS.COLOR.INHERITED}))`,
					[PROPS.COLOR.INHERITED]: 'unset',
				};
			}
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}
			return {
				color: parsed.opacity
					? `rgb(from var(${PROPS.COLOR.FINAL},var(${PROPS.COLOR.INHERITED})) r g b / var(${PROPS.COLOR.OPACITY},100%))`
					: `var(${PROPS.COLOR.FINAL},var(${PROPS.COLOR.INHERITED}))`,
				[PROPS.COLOR.INHERITED]: parsed.color,
				[PROPS.COLOR.OPACITY]: (parsed.opacity || 100) + '%',
			};
		},
		{
			autocomplete: `color-$colors`,
		},
	],
	[
		/^color-l(?:ighten)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.COLOR.FINAL]: lighten(
				`var(${PROPS.COLOR.INHERITED},currentColor)`,
				match[1],
			),
		}),
		{
			autocomplete: 'color-(l|lighten)-<number>',
		},
	],
	[
		/^color-d(?:arken)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.COLOR.FINAL]: darken(
				`var(${PROPS.COLOR.INHERITED},currentColor)`,
				match[1],
			),
		}),
		{
			autocomplete: 'color-(d|darken)-<number>',
		},
	],
	[
		/^bg-(.*)$/,
		(match, ctx) => {
			const { theme } = ctx;
			if (match[1] === 'inherit') {
				return {
					'background-color': `rgb(from var(${PROPS.BACKGROUND_COLOR.FINAL},var(${PROPS.BACKGROUND_COLOR.INHERITED})) r g b / var(${PROPS.BACKGROUND_COLOR.OPACITY},100%))`,
					[PROPS.BACKGROUND_COLOR.INHERITED]: 'unset',
				};
			}
			if (match[1] === 'transparent') {
				return {
					'background-color': 'transparent',
					[PROPS.BACKGROUND_COLOR.INHERITED]: 'unset',
				};
			}
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}

			const base = {
				'background-color': parsed.opacity
					? `rgb(from var(${PROPS.BACKGROUND_COLOR.FINAL},var(${PROPS.BACKGROUND_COLOR.INHERITED})) r g b / var(${PROPS.BACKGROUND_COLOR.OPACITY},100%))`
					: `var(${PROPS.BACKGROUND_COLOR.FINAL},var(${PROPS.BACKGROUND_COLOR.INHERITED}))`,
				[PROPS.BACKGROUND_COLOR.INHERITED]: parsed.color,
				[PROPS.BACKGROUND_COLOR.OPACITY]: (parsed.opacity || 100) + '%',
			};

			return base;
		},
		{
			autocomplete: `bg-$colors`,
		},
	],
	[
		/^bg-l(?:ighten)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.BACKGROUND_COLOR.FINAL]: lighten(
				`var(${PROPS.BACKGROUND_COLOR.INHERITED},var(${PROPS.MODE.WHITE}))`,
				match[1],
			),
		}),
		{
			autocomplete: 'bg-(l|lighten)-<number>',
		},
	],
	[
		/^bg-d(?:arken)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.BACKGROUND_COLOR.FINAL]: darken(
				`var(${PROPS.BACKGROUND_COLOR.INHERITED},var(${PROPS.MODE.WHITE}))`,
				match[1],
			),
		}),
		{
			autocomplete: 'bg-(d|darken)-<number>',
		},
	],
	[
		/^(?:border|b)-(.*)$/,
		function* (match, { theme, symbols }) {
			if (match[1] === 'none') {
				return undefined;
			}
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}
			const thisColor = parsed.opacity
				? `rgb(from var(${PROPS.BORDER_COLOR.ALL.FINAL},var(${PROPS.BORDER_COLOR.ALL.INHERITED})) r g b / var(${PROPS.BORDER_COLOR.ALL.OPACITY},100%))`
				: `var(${PROPS.BORDER_COLOR.ALL.FINAL},var(${PROPS.BORDER_COLOR.ALL.INHERITED}))`;
			yield {
				[symbols.selector]: (selector) => `:where(${selector})`,
				[PROPS.BORDER_COLOR.RIGHT
					.INHERITED]: `var(${PROPS.BORDER_COLOR.RIGHT.FINAL},var(${PROPS.BORDER_COLOR.RIGHT.INHERITED},${thisColor}))`,
				'border-right-color': `var(${PROPS.BORDER_COLOR.RIGHT.FINAL},var(${PROPS.BORDER_COLOR.RIGHT.INHERITED},${thisColor}))`,
				[PROPS.BORDER_COLOR.LEFT
					.INHERITED]: `var(${PROPS.BORDER_COLOR.LEFT.FINAL},var(${PROPS.BORDER_COLOR.LEFT.INHERITED},${thisColor}))`,
				'border-left-color': `var(${PROPS.BORDER_COLOR.LEFT.FINAL},var(${PROPS.BORDER_COLOR.LEFT.INHERITED},${thisColor}))`,
				[PROPS.BORDER_COLOR.TOP
					.INHERITED]: `var(${PROPS.BORDER_COLOR.TOP.FINAL},var(${PROPS.BORDER_COLOR.TOP.INHERITED},${thisColor}))`,
				'border-top-color': `var(${PROPS.BORDER_COLOR.TOP.FINAL},var(${PROPS.BORDER_COLOR.TOP.INHERITED},${thisColor}))`,
				[PROPS.BORDER_COLOR.BOTTOM
					.INHERITED]: `var(${PROPS.BORDER_COLOR.BOTTOM.FINAL},var(${PROPS.BORDER_COLOR.BOTTOM.INHERITED},${thisColor}))`,
				'border-bottom-color': `var(${PROPS.BORDER_COLOR.BOTTOM.FINAL},var(${PROPS.BORDER_COLOR.BOTTOM.INHERITED},${thisColor}))`,
			};
			yield {
				[PROPS.BORDER_COLOR.ALL.INHERITED]: parsed.color,
				[PROPS.BORDER_COLOR.ALL.OPACITY]: (parsed.opacity || 100) + '%',
			};
		},
		{
			autocomplete: `(border|b)-$colors`,
		},
	],
	[
		/^(?:border|b)-l(?:ighten)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.BORDER_COLOR.ALL.FINAL]: lighten(
				`var(${PROPS.BORDER_COLOR.ALL.INHERITED},currentColor)`,
				match[1],
			),
		}),
		{
			autocomplete: '(border|b)-l(?:ighten)?-<number>',
		},
	],
	[
		/^(?:border|b)-d(?:arken)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.BORDER_COLOR.ALL.FINAL]: darken(
				`var(${PROPS.BORDER_COLOR.ALL.INHERITED},currentColor)`,
				match[1],
			),
		}),
		{
			autocomplete: '(border|b)-(d|darken)-<number>',
		},
	],
	...(<const>['RIGHT', 'LEFT', 'TOP', 'BOTTOM']).flatMap((DIR) => {
		const shorthand = DIR[0].toLowerCase();
		return [
			[
				new RegExp(`^(?:border-|b-)${shorthand}-(.*)$`),
				(match, { theme }) => {
					if (match[1] === 'none') {
						return undefined;
					}
					const parsed = parseColor(match[1], theme);
					if (!parsed?.color) {
						return undefined;
					}
					const thisColor = parsed.opacity
						? `rgb(from var(${PROPS.BORDER_COLOR[DIR].FINAL},var(${PROPS.BORDER_COLOR[DIR].INHERITED})) r g b / var(${PROPS.BORDER_COLOR[DIR].OPACITY},100%))`
						: `var(${PROPS.BORDER_COLOR[DIR].FINAL},var(${PROPS.BORDER_COLOR[DIR].INHERITED}))`;
					return {
						[`border-${dirnames[DIR]}-color`]: thisColor,
						[`${PROPS.BORDER_COLOR[DIR].INHERITED}`]: parsed.color,
						[`${PROPS.BORDER_COLOR[DIR].OPACITY}`]:
							(parsed.opacity || 100) + '%',
					};
				},
				{
					autocomplete: `b-${shorthand}-$colors`,
				},
			],
			[
				new RegExp(`^(?:border|b)-${shorthand}-l(?:ighten)?-(\\d+\\.?\\d*)$`),
				(match) => ({
					[`${PROPS.BORDER_COLOR[DIR].FINAL}`]: lighten(
						`var(${PROPS.BORDER_COLOR[DIR].INHERITED},currentColor)`,
						match[1],
					),
				}),
				{
					autocomplete: `(?:border|b)-${shorthand}-(l|lighten)-<number>`,
				},
			],
			[
				new RegExp(`^(?:border|b)-${shorthand}-d(?:arken)?-(\\d+\\.?\\d*)$`),
				(match) => ({
					[`${PROPS.BORDER_COLOR[DIR].FINAL}`]: darken(
						`var(${PROPS.BORDER_COLOR[DIR].INHERITED},currentColor)`,
						match[1],
					),
				}),
				{
					autocomplete: `(border|b)${shorthand}-(d|darken)-<number>`,
				},
			],
		] as Rule[];
	}),
	[
		/^ring-(.*)$/,
		(match, { theme }) => {
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}
			return {
				[PROPS.BUILT_IN.RING_COLOR]: parsed.opacity
					? `rgb(from var(${PROPS.RING_COLOR.FINAL},var(${PROPS.RING_COLOR.INHERITED})) r g b / var(${PROPS.RING_COLOR.OPACITY},100%))`
					: `var(${PROPS.RING_COLOR.FINAL},var(${PROPS.RING_COLOR.INHERITED}))`,
				[PROPS.RING_COLOR.INHERITED]: parsed.color,
				[PROPS.RING_COLOR.OPACITY]: (parsed.opacity || 100) + '%',
			};
		},
		{
			autocomplete: `ring-$colors`,
		},
	],
	[
		/^ring-l(:?ighten)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.RING_COLOR.FINAL]: lighten(
				`var(${PROPS.RING_COLOR.INHERITED},currentColor)`,
				match[1],
			),
		}),
		{
			autocomplete: 'ring-(l|lighten)-<number>',
		},
	],
	[
		/^ring-d(?:arken)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.RING_COLOR.FINAL]: darken(
				`var(${PROPS.RING_COLOR.INHERITED},currentColor)`,
				match[1],
			),
		}),
		{
			autocomplete: 'ring-(d|darken)-<number>',
		},
	],
	[
		/^placeholder-(.*)$/,
		function* (match, { theme }) {
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return;
			}
			yield {
				[symbols.selector]: (selector) => `${selector}::placeholder`,
				color: parsed.opacity
					? `rgb(from var(${PROPS.PLACEHOLDER_COLOR.FINAL},var(${PROPS.PLACEHOLDER_COLOR.INHERITED})) r g b / var(${PROPS.PLACEHOLDER_COLOR.OPACITY},100%))`
					: `var(${PROPS.PLACEHOLDER_COLOR.FINAL},var(${PROPS.PLACEHOLDER_COLOR.INHERITED}))`,
				[PROPS.PLACEHOLDER_COLOR.INHERITED]: parsed.color,
				[PROPS.PLACEHOLDER_COLOR.OPACITY]: (parsed.opacity || 100) + '%',
			};
		},
		{
			autocomplete: `placeholder-$colors`,
		},
	],
	[
		/^placeholder-l(?:ighten)?-(\d+\.?\d*)$/,
		function* (match) {
			yield {
				[symbols.selector]: (selector) => `${selector}::placeholder`,
				[PROPS.PLACEHOLDER_COLOR.FINAL]: lighten(
					`var(${PROPS.PLACEHOLDER_COLOR.INHERITED},currentColor)`,
					match[1],
				),
			};
		},
		{
			autocomplete: 'placeholder-(l|lighten)-<number>',
		},
	],
	[
		/^placeholder-d(?:arken)?-(\d+\.?\d*)$/,
		function* (match) {
			yield {
				[symbols.selector]: (selector) => `${selector}::placeholder`,
				[PROPS.PLACEHOLDER_COLOR.FINAL]: darken(
					`var(${PROPS.PLACEHOLDER_COLOR.INHERITED},currentColor)`,
					match[1],
				),
			};
		},
		{
			autocomplete: 'placeholder-(d|darken)-<number>',
		},
	],
	[
		/^accent-(.*)$/,
		(match, { theme }) => {
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}
			return {
				'accent-color': parsed.opacity
					? `rgb(from var(${PROPS.ACCENT_COLOR.FINAL},var(${PROPS.ACCENT_COLOR.INHERITED})) r g b / var(${PROPS.ACCENT_COLOR.OPACITY},100%))`
					: `var(${PROPS.ACCENT_COLOR.FINAL},var(${PROPS.ACCENT_COLOR.INHERITED}))`,
				[PROPS.ACCENT_COLOR.INHERITED]: parsed.color,
				[PROPS.ACCENT_COLOR.OPACITY]: (parsed.opacity || 100) + '%',
			};
		},
		{
			autocomplete: `accent-$colors`,
		},
	],
	[
		/^accent-l(?:ighten)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.ACCENT_COLOR.FINAL]: lighten(
				`var(${PROPS.ACCENT_COLOR.INHERITED},currentColor)`,
				match[1],
			),
		}),
		{
			autocomplete: 'accent-(l|lighten)-<number>',
		},
	],
	[
		/^accent-d(?:arken)?-(\d+\.?\d*)$/,
		(match) => ({
			[PROPS.ACCENT_COLOR.FINAL]: darken(
				`var(${PROPS.ACCENT_COLOR.INHERITED},currentColor)`,
				match[1],
			),
		}),
		{
			autocomplete: 'accent-(d|darken)-<number>',
		},
	],
];

const dirnames: Record<string, string> = {
	RIGHT: 'right',
	LEFT: 'left',
	TOP: 'top',
	BOTTOM: 'bottom',
};
