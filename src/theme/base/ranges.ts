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
	context?: ColorEvaluationContext;
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
	'paper',
];

function presetLightnessRange({ dir = 1, base = 0.1, scale = 1.2 } = {}) {
	return function ($: ColorEquationTools, step: number, rangeSize: number) {
		const inverseStep = rangeSize - step;
		const stepToUse = dir > 0 ? step : inverseStep;
		// inverse cosine curve
		const curve = $.subtract(
			$.literal(1),
			$.divide(
				$.add(
					$.fn('cos', $.literal((stepToUse / rangeSize) * (Math.PI * scale))),
					$.literal(1),
				),
				$.literal(2),
			),
		);

		return $.add($.literal(base), curve);
	};
}
// chroma: reduced at either end of the range
function presetChromaRange(
	$: ColorEquationTools,
	step: number,
	rangeSize: number,
	lift = 0,
) {
	return $.add(
		$.literal(0.1 + lift),
		$.multiply(
			$.fn(
				'pow',
				$.fn(
					'sin',
					$.add(
						$.multiply(
							// nudge the chroma upward a bit at the top end / down at the bottom end
							$.literal(step / rangeSize),
							$.literal('PI'),
							$.literal(0.8),
						),
						$.literal(0.5),
					),
				),
				$.literal(2),
			),
			$.literal(0.7),
		),
	);
}

export function createColorLightModeRange(
	config: Omit<ColorRangeConfig, 'lightness' | 'chroma' | 'size' | 'name'>,
) {
	const lightness = presetLightnessRange({ dir: 1, base: 0.4 });
	return createColorRange({
		...config,
		size: defaultRangeItemNames.length,
		lightness: ($, { step, rangeSize }) => lightness($, step, rangeSize),
		chroma: ($, { step, rangeSize }) => presetChromaRange($, step, rangeSize),
		name: (step) => defaultRangeItemNames[step] ?? `step-${step}`,
	});
}

export function createColorDarkModeRange(
	config: Omit<ColorRangeConfig, 'lightness' | 'chroma' | 'size' | 'name'>,
) {
	const lightness = presetLightnessRange({ dir: -1, base: 0.3, scale: 0.8 });
	return createColorRange({
		...config,
		size: defaultRangeItemNames.length,
		lightness: ($, { step, rangeSize }) => lightness($, step, rangeSize),
		chroma: ($, { step, rangeSize }) =>
			presetChromaRange($, step, rangeSize, 0.05),
		name: (step) => defaultRangeItemNames[step] ?? `step-${step}`,
	});
}
