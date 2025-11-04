import {
	livePropertyColorContext,
	oklchBuilder,
	OklchColorEquation,
} from './color.js';

export const paletteHues = {
	primary: 'var(--p-primary-hue,91.8)',
	accent: 'var(--p-accent-hue,160.88)',
	main: 'var(--l-main-hue,var(--p-primary-hue,91.8))',

	attention: 'var(--p-attention-hue,30)',
	success: 'var(--p-success-hue,140)',

	lemon: 'var(--p-lemon-hue,90.8)',
	leek: 'var(--p-leek-hue,165.88)',
	tomato: 'var(--p-tomato-hue,10.51)',
	blueberry: 'var(--p-blueberry-hue,248.14)',
	eggplant: 'var(--p-eggplant-hue,280.21)',
};

export const paletteNames = [
	'primary',
	'accent',
	'attention',
	'success',
	'lemon',
	'leek',
	'tomato',
	'blueberry',
	'eggplant',
	'gray',
	'high-contrast',
] as const;
export type PaletteName = (typeof paletteNames)[number];

export interface ColorLogicalPaletteDefinitions {
	wash: OklchColorEquation;
	light: OklchColorEquation;
	default: OklchColorEquation;
	dark: OklchColorEquation;
	ink: OklchColorEquation;
}
export interface ColorPaletteStyles {
	wash: string;
	light: string;
	DEFAULT: string;
	dark: string;
	ink: string;
	[key: string]: string;
}

export interface ColorLogicalPalette {
	sourceHue: string;
	saturation?: string;
	definitions: ColorLogicalPaletteDefinitions;
	styles: ColorPaletteStyles;
}

export function createColorLogicalPalette({
	sourceHue,
	saturation,
}: {
	sourceHue: string;
	saturation?: string;
}): ColorLogicalPalette {
	const definitions = {
		wash: oklchBuilder(($) => ({
			l: $.clamp(
				$.add(
					$.literal((ctx) => ctx.mode.lNeutral),
					$.multiply(
						$.literal((ctx) => ctx.mode.lRangeUp),
						$.literal((ctx) => ctx.mode.mult),
						$.literal((ctx) => ctx.localLightnessSpread),
					),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			c: $.clamp(
				$.multiply(
					$.literal(() => saturation ?? '1'),
					$.literal((ctx) => ctx.localSaturation),
					$.literal((ctx) => ctx.globalSaturation),
					$.add(
						$.literal((ctx) => ctx.mode.sNeutral),
						$.multiply(
							$.literal((ctx) => ctx.mode.sRangeUp),
							$.literal((ctx) => ctx.mode.mult),
						),
					),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			h: $.literal((ctx) => ctx.sourceHue),
		})),
		light: oklchBuilder(($) => ({
			l: $.clamp(
				$.add(
					$.literal((ctx) => ctx.mode.lNeutral),
					$.multiply(
						$.literal((ctx) => ctx.mode.lRangeUp),
						$.literal(() => '0.5'),
						$.literal((ctx) => ctx.mode.mult),
						$.literal((ctx) => ctx.localLightnessSpread),
					),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			c: $.clamp(
				$.multiply(
					$.literal(() => saturation ?? '1'),
					$.literal((ctx) => ctx.localSaturation),
					$.literal((ctx) => ctx.globalSaturation),
					$.add(
						$.literal((ctx) => ctx.mode.sNeutral),
						$.multiply(
							$.literal((ctx) => ctx.mode.sRangeUp),
							$.literal(() => '0.75'),
							$.literal((ctx) => ctx.mode.mult),
						),
					),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			h: $.literal((ctx) => ctx.sourceHue),
		})),
		default: oklchBuilder(($) => ({
			l: $.literal((ctx) => ctx.mode.lNeutral),
			c: $.clamp(
				$.multiply(
					$.literal(() => saturation ?? '1'),
					$.literal((ctx) => ctx.localSaturation),
					$.literal((ctx) => ctx.globalSaturation),
					$.literal((ctx) => ctx.mode.sNeutral),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			h: $.literal((ctx) => ctx.sourceHue),
		})),
		dark: oklchBuilder(($) => ({
			l: $.clamp(
				$.subtract(
					$.literal((ctx) => ctx.mode.lNeutral),
					$.multiply(
						$.literal((ctx) => ctx.mode.lRangeDown),
						$.literal(() => '0.35'),
						$.literal((ctx) => ctx.mode.mult),
						$.literal((ctx) => ctx.localLightnessSpread),
					),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			c: $.clamp(
				$.multiply(
					$.literal(() => saturation ?? '1'),
					$.literal((ctx) => ctx.localSaturation),
					$.literal((ctx) => ctx.globalSaturation),
					$.subtract(
						$.literal((ctx) => ctx.mode.sNeutral),
						$.multiply(
							$.literal((ctx) => ctx.mode.sRangeDown),
							$.literal(() => '0.5'),
							$.literal((ctx) => ctx.mode.mult),
						),
					),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			h: $.literal((ctx) => ctx.sourceHue),
		})),
		ink: oklchBuilder(($) => ({
			l: $.clamp(
				$.subtract(
					$.literal((ctx) => ctx.mode.lNeutral),
					$.multiply(
						$.literal((ctx) => ctx.mode.lRangeDown),
						$.literal(() => '1'),
						$.literal((ctx) => ctx.mode.mult),
						$.literal((ctx) => ctx.localLightnessSpread),
					),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			c: $.clamp(
				$.multiply(
					$.literal(() => saturation ?? '1'),
					$.literal((ctx) => ctx.localSaturation),
					$.literal((ctx) => ctx.globalSaturation),
					$.subtract(
						$.literal((ctx) => ctx.mode.sNeutral),
						$.multiply(
							$.literal((ctx) => ctx.mode.sRangeDown),
							$.literal(() => '1'),
							$.literal((ctx) => ctx.mode.mult),
						),
					),
				),
				$.literal(() => '0%'),
				$.literal(() => '100%'),
			),
			h: $.literal((ctx) => ctx.sourceHue),
		})),
	};
	return {
		sourceHue,
		saturation,
		definitions,
		styles: createPaletteStyles(sourceHue, definitions),
	};
}

export interface ColorPaletteStyles {
	wash: string;
	light: string;
	DEFAULT: string;
	dark: string;
	ink: string;
}

function createPaletteStyles(
	sourceHue: string,
	definitions: ColorLogicalPaletteDefinitions,
): ColorPaletteStyles {
	const ctx = livePropertyColorContext(sourceHue);
	return {
		wash: definitions.wash.print(ctx),
		light: definitions.light.print(ctx),
		DEFAULT: definitions.default.print(ctx),
		dark: definitions.dark.print(ctx),
		ink: definitions.ink.print(ctx),
	};
}

export const graySaturation = '0.15';
export const highContrastSaturation = '0.04';

export const palettes = {
	main: createColorLogicalPalette({ sourceHue: paletteHues.main }),
	primary: createColorLogicalPalette({ sourceHue: paletteHues.primary }),
	accent: createColorLogicalPalette({ sourceHue: paletteHues.accent }),
	attention: createColorLogicalPalette({ sourceHue: paletteHues.attention }),
	success: createColorLogicalPalette({ sourceHue: paletteHues.success }),
	gray: createColorLogicalPalette({
		sourceHue: paletteHues.main,
		saturation: graySaturation,
	}),
	highContrast: createColorLogicalPalette({
		sourceHue: paletteHues.main,
		saturation: highContrastSaturation,
	}),

	lemon: createColorLogicalPalette({ sourceHue: paletteHues.lemon }),
	leek: createColorLogicalPalette({ sourceHue: paletteHues.leek }),
	tomato: createColorLogicalPalette({ sourceHue: paletteHues.tomato }),
	blueberry: createColorLogicalPalette({ sourceHue: paletteHues.blueberry }),
	eggplant: createColorLogicalPalette({ sourceHue: paletteHues.eggplant }),
};
