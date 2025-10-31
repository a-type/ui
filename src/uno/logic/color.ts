export function globalColor(
	l: string | number,
	c: string | number,
	h: string | number,
) {
	return `oklch(${clampedPercent(`calc(${l})`)} ${clampedPercent(
		`calc(var(--l-saturation,1) * var(--global-saturation) * (${c}))`,
	)} ${h})`;
}

export function clampedPercent(value: string | number) {
	return `clamp(0%, ${value}, 100%)`;
}

export const paletteHues = {
	primary: 'var(--p-primary-hue,91.8)',
	accent: 'var(--p-accent-hue,160.88)',
	main: 'var(--l-main-hue,var(--p-primary-hue,91.8))',
	attention: 'var(--p-attention-hue,30)',
	success: 'var(--p-success-hue,140)',
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
] as const;
export type PaletteName = (typeof paletteNames)[number];

export function createColorRange(
	sourceHue: string,
	{
		saturation,
	}: {
		saturation?: string;
	} = {},
) {
	return {
		wash: globalColor(
			`var(--mode-l-neutral) + (var(--mode-l-range-up) * var(--mode-mult,1))`,
			saturation ??
				`var(--mode-s-neutral) + (var(--mode-s-range-up) * var(--mode-mult,1))`,
			sourceHue,
		),
		light: globalColor(
			`var(--mode-l-neutral) + (var(--mode-l-range-up) * 0.5 * var(--mode-mult,1))`,
			saturation ??
				`var(--mode-s-neutral) + (var(--mode-s-range-up) * 0.5 * var(--mode-mult,1))`,
			sourceHue,
		),
		DEFAULT: globalColor(
			`var(--mode-l-neutral)`,
			saturation ?? `var(--mode-s-neutral)`,
			sourceHue,
		),
		dark: globalColor(
			`var(--mode-l-neutral) - (var(--mode-l-range-down) * 0.5 * var(--mode-mult,1))`,
			saturation ??
				`var(--mode-s-neutral) - (var(--mode-s-range-down) * 0.5 * var(--mode-mult,1))`,
			sourceHue,
		),
		ink: globalColor(
			`var(--mode-l-neutral) - (var(--mode-l-range-down) * var(--mode-mult,1))`,
			saturation ??
				`var(--mode-s-neutral) - (var(--mode-s-range-down) * var(--mode-mult,1))`,
			sourceHue,
		),
	};
}

export const whiteBlackRange = createColorRange(paletteHues.primary, {
	saturation: '0.5%',
});

export function lighten(base: string, level: string) {
	return mod(base, level, 1);
}

export function darken(base: string, level: string) {
	return mod(base, level, -1);
}

function mod(base: string, level: string, sign: number) {
	return (
		`oklch(from ` +
		base +
		` calc(l * (1 + ${level} / 30 * ${sign} * var(--mode-mult, 1)))` +
		` calc(c * (1 - (${level} * 0.1 * ${sign} * (1 + (1 - var(--global-saturation, 0))))))` +
		` h)`
	);
}
