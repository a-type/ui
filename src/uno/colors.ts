export const colorConstants = `
	--dyn-saturation-x-wash: calc(pow(var(--global-saturation, 1), 0.6));
	--dyn-saturation-x-light: calc(pow(var(--global-saturation, 1), 0.05));
	--dyn-saturation-x-dark: calc(pow(var(--global-saturation, 1), 0.01));
	--dyn-saturation-x-ink: calc(pow(var(--global-saturation, 1), 0.2));
`;

const lightness = {
	wash: `calc(1 + 0.45 * var(--dyn-mode-mult, 1))`,
	light: `calc(1 + 0.25 * var(--dyn-mode-mult, 1))`,
	dark: `calc(1 - 0.25 * var(--dyn-mode-mult, 1))`,
	ink: `calc(1 - 0.45 * var(--dyn-mode-mult, 1))`,
};

export const dynamicThemeComputedColors = (name: string) => {
	const hue = {
		wash: `calc(h - 1 * var(--dyn-${name}-hue-rotate, 0) * var(--dyn-${name}-hue-rotate-mult, 1))`,
		light: `calc(h - 0.5 * var(--dyn-${name}-hue-rotate, 0) * var(--dyn-${name}-hue-rotate-mult, 1))`,
		dark: `calc(h + 0.2 * var(--dyn-${name}-hue-rotate, 0) * var(--dyn-${name}-hue-rotate-mult, 1))`,
		ink: `calc(h + 1 * var(--dyn-${name}-hue-rotate, 0) * var(--dyn-${name}-hue-rotate-mult, 1))`,
	};
	return `
	--color-${name}: oklch(calc(90% - 35% * var(--dyn-source-mode-adjust, 0) - (var(--dyn-mode-sign, 1) * var(--dyn-${name}-base-dim, 0%))) calc(var(--dyn-${name}-sat-mult,1) * (35% - 2% * var(--dyn-source-mode-adjust, 0))) var(--dyn-${name}-source, 0));
	--color-${name}-wash: oklch(from var(--color-${name}) calc(l * ${lightness.wash}) calc(var(--dyn-${name}-sat-mult) * (c * var(--dyn-saturation-x-wash, 1) - 0.06)) ${hue.wash});
	--color-${name}-light: oklch(from var(--color-${name}) calc(l * ${lightness.light}) calc(var(--dyn-${name}-sat-mult) * (c * var(--dyn-saturation-x-light, 1) - 0.03)) ${hue.light});
	--color-${name}-dark: oklch(from var(--color-${name}) calc(l * ${lightness.dark}) calc(var(--dyn-${name}-sat-mult) * (c * var(--dyn-saturation-x-dark, 1) + 0.01)) ${hue.dark});
	--color-${name}-ink: oklch(from var(--color-${name}) calc(l * ${lightness.ink}) calc(var(--dyn-${name}-sat-mult) * (c * var(--dyn-saturation-x-ink, 1) + 0.01)) ${hue.ink});

	--color-${name}-gray: oklch(from var(--color-${name}) l calc(c * 0.1 * var(--global-saturation, 1)) h);
	--color-${name}-gray-wash: oklch(from var(--color-${name}-gray) calc(l * ${lightness.wash}) calc(c * 0.9) ${hue.wash});
	--color-${name}-gray-light: oklch(from var(--color-${name}-gray) calc(l * ${lightness.light}) c ${hue.light});
	--color-${name}-gray-dark: oklch(from var(--color-${name}-gray) calc(l * ${lightness.dark}) c ${hue.dark});
	--color-${name}-gray-ink: oklch(from var(--color-${name}-gray) calc(l * ${lightness.ink}) c ${hue.ink});
`;
};

export const dynamicComputedVars = `
${dynamicThemeComputedColors('primary')}
${dynamicThemeComputedColors('accent')}

--color-gray: var(--color-primary-gray);
--color-gray-wash: var(--color-primary-gray-wash);
--color-gray-light: var(--color-primary-gray-light);
--color-gray-dark: var(--color-primary-gray-dark);
--color-gray-ink: var(--color-primary-gray-ink);

--color-wash: var(--color-gray-wash);
--palette-black: var(--color-gray-ink);
--palette-white: oklch(from var(--color-wash) calc(0.999 * var(--dyn-mode-mult,1)) calc(c * var(--global-saturation, 1)) h);
/* A dark-mode only contrast color */
--color-dark-mode-contrast: oklch(from var(--color-gray-ink) l c h / calc(100% * var(--dyn-source-mode-adjust, 0)));
`;

export type DynamicThemeColor = {
	hue: number;
	hueRotate: number;
	hueRotateMult?: number;
	saturationMult?: number;
	dim?: `${number}%`;
};

export function dynamicTheme({
	primary,
	accent,
}: {
	primary: DynamicThemeColor;
	accent: DynamicThemeColor;
}) {
	return `
	${colorConstants}
--dyn-primary-hue-rotate: ${primary.hueRotate};
--dyn-primary-source: ${primary.hue};
--dyn-accent-hue-rotate: ${accent.hueRotate};
--dyn-accent-source: ${accent.hue};
--dyn-primary-hue-rotate-mult: ${primary.hueRotateMult ?? 1};
--dyn-primary-sat-mult: ${primary.saturationMult ?? 1};
--dyn-accent-hue-rotate-mult: ${accent.hueRotateMult ?? 1};
--dyn-accent-sat-mult: ${accent.saturationMult ?? 1};
--dyn-primary-base-dim: ${primary.dim ?? '0%'};
--dyn-accent-base-dim: ${accent.dim ?? '0%'};
${dynamicComputedVars}
	`;
}

export const themeColors = {
	none: 'transparent',
	black: 'var(--color-black)',
	white: 'var(--color-white)',
	wash: 'var(--color-wash)',
	transparent: 'transparent',
	current: 'currentColor',

	// magic tokens
	bg: 'var(--v-bg-altered, var(--v-bg, transparent))',
	fg: 'var(--v-color-altered, var(--v-color, var(--color-black)))',
	color: 'var(--v-color-altered, var(--v-color, var(--color-black)))',
	border: 'var(--v-border-altered, var(--v-border, transparent))',

	attention: {
		DEFAULT: 'var(--color-attention)',
		light: 'var(--color-attention-light)',
		dark: 'var(--color-attention-dark)',
		wash: 'var(--color-attention-wash)',
		ink: 'var(--color-attention-ink)',
	},
	accent: {
		DEFAULT: 'var(--color-accent)',
		light: 'var(--color-accent-light)',
		dark: 'var(--color-accent-dark)',
		wash: 'var(--color-accent-wash)',
		ink: 'var(--color-accent-ink)',
	},
	primary: {
		DEFAULT: 'var(--color-primary)',
		light: 'var(--color-primary-light)',
		dark: 'var(--color-primary-dark)',
		wash: 'var(--color-primary-wash)',
		ink: 'var(--color-primary-ink)',
	},
	gray: {
		DEFAULT: 'var(--color-gray)',
		wash: 'var(--color-gray-wash)',
		light: 'var(--color-gray-light)',
		ink: 'var(--color-gray-ink)',
		blend: 'var(--color-gray-blend)',
		dark: {
			DEFAULT: 'var(--color-gray-dark)',
			blend: 'var(--color-gray-dark-blend)',
		},
	},
	'dark-blend': 'var(--color-dark-blend)',
	'light-blend': 'var(--color-light-blend)',
	overlay: 'var(--color-overlay)',
	'overlay-dark': 'var(--color-overlay-dark)',
	'dark-mode-contrast': 'var(--color-dark-mode-contrast)',
} as const;

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
		` calc(l * (1 + ${level} / 60 * ${sign} * var(--dyn-mode-mult, 1)))` +
		` calc(c * (1 - (${level} * 0.1 * ${sign} * (1 + (1 - var(--global-saturation, 0))))))` +
		` h)`
	);
}
