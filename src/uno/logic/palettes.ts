import {
	livePropertyColorContext,
	oklchBuilder,
	OklchColorEquation,
} from './color.js';
import { PROPS } from './properties.js';

export const paletteHues = {
	primary: `var(${PROPS.USER.COLOR.PRIMARY_HUE},91.8)`,
	accent: `var(${PROPS.USER.COLOR.ACCENT_HUE},160.88)`,
	main: `var(${PROPS.PALETTE.MAIN_HUE},var(${PROPS.USER.COLOR.PRIMARY_HUE},91.8))`,

	attention: `var(${PROPS.PALETTE.NAMED_HUE('attention')},30)`,
	success: `var(${PROPS.PALETTE.NAMED_HUE('success')},140)`,

	lemon: `var(${PROPS.PALETTE.NAMED_HUE('lemon')},90.8)`,
	leek: `var(${PROPS.PALETTE.NAMED_HUE('leek')},165.88)`,
	tomato: `var(${PROPS.PALETTE.NAMED_HUE('tomato')},10.51)`,
	blueberry: `var(${PROPS.PALETTE.NAMED_HUE('blueberry')},248.14)`,
	eggplant: `var(${PROPS.PALETTE.NAMED_HUE('eggplant')},280.21)`,
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
	name: string;
	sourceHue: string;
	accentHue: string;
	saturation?: string;
	definitions: ColorLogicalPaletteDefinitions;
	styles: ColorPaletteStyles;
}

export function createColorLogicalPalette({
	sourceHue,
	accentHue,
	saturation,
	name,
}: {
	sourceHue: string;
	accentHue: string;
	saturation?: string;
	name: string;
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
		name,
		sourceHue,
		accentHue,
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

export const defaultPalettes = {
	main: createColorLogicalPalette({
		name: 'main',
		sourceHue: paletteHues.main,
		accentHue: paletteHues.accent,
	}),
	primary: createColorLogicalPalette({
		name: 'primary',
		sourceHue: paletteHues.primary,
		accentHue: paletteHues.accent,
	}),
	accent: createColorLogicalPalette({
		name: 'accent',
		sourceHue: paletteHues.accent,
		accentHue: paletteHues.accent,
	}),
	attention: createColorLogicalPalette({
		name: 'attention',
		sourceHue: paletteHues.attention,
		accentHue: paletteHues.accent,
	}),
	success: createColorLogicalPalette({
		name: 'success',
		sourceHue: paletteHues.success,
		accentHue: paletteHues.accent,
	}),
	gray: createColorLogicalPalette({
		name: 'gray',
		sourceHue: paletteHues.main,
		saturation: graySaturation,
		accentHue: paletteHues.accent,
	}),
	['high-contrast']: createColorLogicalPalette({
		name: 'high-contrast',
		sourceHue: paletteHues.main,
		saturation: highContrastSaturation,
		accentHue: paletteHues.accent,
	}),
};
