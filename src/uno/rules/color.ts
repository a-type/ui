import { parseColor } from '@unocss/preset-mini';
import { Rule } from 'unocss';
import { darken, lighten } from '../logic/color.js';

export const colorRules: Rule[] = [
	[
		/^color-(.*)$/,
		(match, { theme }) => {
			if (match[1] === 'inherit') {
				return {
					color: 'var(--v-color-altered,var(--v-color))',
					'--v-color': 'unset',
				};
			}
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}
			return {
				color: parsed.opacity
					? 'rgb(from var(--v-color-altered,var(--v-color)) r g b / var(--v-color-opacity,100%))'
					: 'var(--v-color-altered,var(--v-color))',
				'--v-color': parsed.color,
				'--v-color-opacity': (parsed.opacity || 100) + '%',
			};
		},
	],
	[
		/^color-lighten-(\d+\.?\d*)$/,
		(match, { theme }) => ({
			'--v-color-altered': lighten('var(--v-color,currentColor)', match[1]),
		}),
	],
	[
		/^color-darken-(\d+\.?\d*)$/,
		(match, { theme }) => ({
			'--v-color-altered': darken('var(--v-color,currentColor)', match[1]),
		}),
	],
	[
		/^bg-(.*)$/,
		(match, ctx) => {
			const { theme } = ctx;
			if (match[1] === 'inherit') {
				return {
					'background-color':
						'rgb(from var(--v-bg-altered,var(--v-bg)) r g b / var(--v-bg-opacity,100%))',
					'--v-bg': 'unset',
				};
			}
			if (match[1] === 'transparent') {
				return {
					'background-color': 'transparent',
					'--v-bg': 'unset',
				};
			}
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}

			const base = {
				'background-color': parsed.opacity
					? 'rgb(from var(--v-bg-altered,var(--v-bg)) r g b / var(--v-bg-opacity,100%))'
					: 'var(--v-bg-altered,var(--v-bg))',
				['--v-bg']: parsed.color,
				['--v-bg-opacity']: (parsed.opacity || 100) + '%',
			};

			return base;
		},
		{
			autocomplete: `bg-$colors`,
		},
	],
	[
		/^bg-lighten-(\d+\.?\d*)$/,
		(match, { theme }) => ({
			'--v-bg-altered': lighten('var(--v-bg,var(--mode-white))', match[1]),
		}),
	],
	[
		/^bg-darken-(\d+\.?\d*)$/,
		(match, { theme }) => ({
			'--v-bg-altered': darken('var(--v-bg,var(--mode-white))', match[1]),
		}),
	],
	[
		/^border-(.*)$/,
		(match, { theme }) => {
			if (match[1] === 'none') {
				return undefined;
			}
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}
			const thisColor = parsed.opacity
				? 'rgb(from var(--v-border-altered,var(--v-border)) r g b / var(--v-border-opacity,100%))'
				: 'var(--v-border-altered,var(--v-border))';
			return {
				'border-right-color': directionalBorderFallback('r', thisColor),
				'border-bottom-color': directionalBorderFallback('b', thisColor),
				'border-left-color': directionalBorderFallback('l', thisColor),
				'border-top-color': directionalBorderFallback('t', thisColor),
				'--v-border': parsed.color,
				'--v-border-opacity': (parsed.opacity || 100) + '%',
			};
		},
	],
	[
		/^border-lighten-(\d+\.?\d*)$/,
		(match, { theme }) => ({
			'--v-border-altered': lighten('var(--v-border,currentColor)', match[1]),
		}),
		{
			autocomplete: 'border-lighten-<number>',
		},
	],
	[
		/^border-darken-(\d+\.?\d*)$/,
		(match, { theme }) => ({
			'--v-border-altered': darken('var(--v-border,currentColor)', match[1]),
		}),
		{
			autocomplete: 'border-darken-<number>',
		},
	],
	...['r', 'l', 't', 'b'].flatMap(
		(dir) =>
			[
				[
					new RegExp(`^border-${dir}-(.*)$`),
					(match, { theme }) => {
						if (match[1] === 'none') {
							return undefined;
						}
						const parsed = parseColor(match[1], theme);
						if (!parsed?.color) {
							return undefined;
						}
						const thisColor = parsed.opacity
							? `rgb(from var(--v-border-${dir}-altered,var(--v-border-${dir})) r g b / var(--v-border-${dir}-opacity,100%))`
							: `var(--v-border-${dir}-altered,var(--v-border-${dir}))`;
						return {
							[`border-${dirnames[dir]}-color`]: thisColor,
							[`--v-border-${dir}`]: parsed.color,
							[`--v-border-${dir}-opacity`]: (parsed.opacity || 100) + '%',
						};
					},
				],
				[
					new RegExp(`^border-${dir}-lighten-(\\d+\\.?\\d*)$`),
					(match, { theme }) => ({
						[`--v-border-${dir}-altered`]: lighten(
							`var(--v-border-${dir},currentColor)`,
							match[1],
						),
					}),
				],
				[
					new RegExp(`^border-${dir}-darken-(\\d+\\.?\\d*)$`),
					(match, { theme }) => ({
						[`--v-border-${dir}-altered`]: darken(
							`var(--v-border-${dir},currentColor)`,
							match[1],
						),
					}),
				],
			] as Rule[],
	),
	[
		/^ring-(.*)$/,
		(match, { theme }) => {
			const parsed = parseColor(match[1], theme);
			if (!parsed?.color) {
				return undefined;
			}
			return {
				'--un-ring-color': parsed.opacity
					? 'rgb(from var(--v-ring-altered,var(--v-ring)) r g b / var(--v-ring-opacity,100%))'
					: 'var(--v-ring-altered,var(--v-ring))',
				'--v-ring': parsed.color,
				'--v-ring-opacity': (parsed.opacity || 100) + '%',
			};
		},
	],
	[
		/^ring-lighten-(\d+\.?\d*)$/,
		(match, { theme }) => ({
			'--v-ring-altered': lighten('var(--v-ring,currentColor)', match[1]),
		}),
	],
	[
		/^ring-darken-(\d+\.?\d*)$/,
		(match, { theme }) => ({
			'--v-ring-altered': darken('var(--v-ring,currentColor)', match[1]),
		}),
	],
];

function directionalBorderFallback(side: 't' | 'r' | 'b' | 'l', color: string) {
	return `var(--v-border-${side}-color-altered, var(--v-border-${side}-color, ${color}))`;
}

const dirnames: Record<string, string> = {
	r: 'right',
	l: 'left',
	t: 'top',
	b: 'bottom',
};
