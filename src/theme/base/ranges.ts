import {
	ColorEquation,
	ColorEquationTools,
	ColorEvaluationContext,
	oklchBuilder,
	OklchColorEquation,
} from './color.js';
import { PROPS } from './properties.js';

export interface ColorRangeConfig {
	/** 0-360ish, OKLCH "H" hue */
	sourceHue: number;
	/** A computation for lightness at each step - resolve 0-1 */
	lightness: (
		tools: ColorEquationTools,
		details: { step: number; rangeSize: number },
	) => ColorEquation;
	/** A computation for chroma at each step - resolve 0-1 */
	chroma: (
		tools: ColorEquationTools,
		details: { step: number; rangeSize: number },
	) => ColorEquation;
	/** Number of steps */
	size?: number;
	name: (step: number) => string;
	/** Pre-compute steps based on defined properties. */
	context: ColorEvaluationContext;
}

export interface ColorRangeItem {
	equation: OklchColorEquation;
	css: string;
	name: string;
}

export function createColorRange(config: ColorRangeConfig): ColorRangeItem[] {
	const { sourceHue, lightness, chroma, size = 7, name, context } = config;
	const rangeSize = size - 1;
	return new Array(size)
		.fill(0)
		.map((_, i) => {
			return oklchBuilder(($) => ({
				l: $.clamp(
					$.castPercentage(lightness($, { step: i, rangeSize })),
					$.literal('0%'),
					$.literal('100%'),
				),
				c: $.clamp(
					$.multiply(
						$.literal('0.4'),
						chroma($, { step: i, rangeSize }),
						$.literal(
							(ctx) => ctx.appliedProperties[PROPS.LOCAL.SATURATION.NAME],
						),
						$.literal(
							(ctx) => ctx.appliedProperties[PROPS.USER.SATURATION.NAME],
						),
					),
					$.literal('0'),
					$.literal('0.4'),
				),
				h: $.literal(`${sourceHue}`),
			}));
		})
		.map((value, i) => ({
			equation: value,
			css: value.printComputed(context),
			name: name(i),
		}));
}

const defaultRangeItemNames = [
	'ink',
	'darker',
	'dark',
	'DEFAULT',
	'light',
	'lighter',
	'wash',
];

function presetLightnessRange(
	midpoint: number,
	highpoint: number,
	lowpoint: number,
) {
	return function (step: number, rangeSize: number) {
		const halfRange = rangeSize / 2;
		const normalizedStep = step - halfRange;
		const greaterThanHalf = normalizedStep > 0;
		const upperRange = highpoint - midpoint;
		const lowerRange = midpoint - lowpoint;
		return (
			midpoint +
			(normalizedStep / halfRange) * (greaterThanHalf ? upperRange : lowerRange)
		);
	};
}
// chroma: reduced at either end of the range
function presetChromaRange(step: number, rangeSize: number) {
	return 0.1 + Math.sin((step / rangeSize) * Math.PI) * 0.9;
}

export function createColorLightModeRange(
	config: Omit<ColorRangeConfig, 'lightness' | 'chroma' | 'size' | 'name'>,
) {
	const lightness = presetLightnessRange(0.8, 1, 0.2);
	return createColorRange({
		...config,
		size: defaultRangeItemNames.length,
		lightness: ($, { step, rangeSize }) =>
			$.literal(lightness(step, rangeSize)),
		chroma: ($, { step, rangeSize }) =>
			$.literal(presetChromaRange(step, rangeSize)),
		name: (step) => defaultRangeItemNames[step] ?? `step-${step}`,
	});
}

export function createColorDarkModeRange(
	config: Omit<ColorRangeConfig, 'lightness' | 'chroma' | 'size' | 'name'>,
) {
	const lightness = presetLightnessRange(0.8, 0.2, 1);
	return createColorRange({
		...config,
		size: defaultRangeItemNames.length,
		lightness: ($, { step, rangeSize }) =>
			$.literal(lightness(step, rangeSize)),
		chroma: ($, { step, rangeSize }) =>
			$.literal(presetChromaRange(step, rangeSize)),
		name: (step) => defaultRangeItemNames[step] ?? `step-${step}`,
	});
}
