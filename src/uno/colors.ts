export const colorConstants = `
	--dyn-saturation-x-wash: calc(pow(var(--global-saturation, 1), 0.2));
	--dyn-saturation-x-light: calc(pow(var(--global-saturation, 1), 0.05));
	--dyn-saturation-x-dark: calc(pow(var(--global-saturation, 1), 0.1));
	--dyn-saturation-x-ink: calc(pow(var(--global-saturation, 1), 0.2));
`;

export const dynamicThemeComputedColors = (name: string) => `
	--color-${name}: oklch(calc(90% - 25% * var(--dyn-source-mode-adjust, 0)) calc(40% - 2% * var(--dyn-source-mode-adjust, 0)) var(--dyn-${name}-source, 0));
	--color-${name}-wash: oklch(from var(--color-${name}) calc(l + 0.2 * var(--dyn-mode-mult, 1)) calc(c * var(--dyn-saturation-x-wash, 1) - 0.12 * var(--dyn-mode-sign, 1)) calc(h - 5 * var(--dyn-${name}-hue-rotate, 0)));
	--color-${name}-light: oklch(from var(--color-${name}) calc(l + 0.008 * var(--dyn-mode-mult, 1)) calc(c * var(--dyn-saturation-x-light, 1) - 0.03 * var(--dyn-mode-sign, 1)) calc(h - 0.5 * var(--dyn-${name}-hue-rotate, 0)));
	--color-${name}-dark: oklch(from var(--color-${name}) calc(l - 0.26 * var(--dyn-mode-mult, 1)) calc(c * var(--dyn-saturation-x-dark, 1) + 0.01 * var(--dyn-mode-sign, 1)) calc(h + 0.2 * var(--dyn-${name}-hue-rotate, 0)));
	--color-${name}-ink: oklch(from var(--color-${name}) calc(l - 0.45 * var(--dyn-mode-mult, 1)) calc(c * var(--dyn-saturation-x-ink, 1) + 0.01 * var(--dyn-mode-sign, 1)) calc(h + 1 * var(--dyn-${name}-hue-rotate, 0)));

	--color-${name}-gray: oklch(from var(--color-${name}) l calc(c * 0.5) h);
	--color-${name}-gray-wash: oklch(from var(--color-${name}-wash) l calc(c * 0.5) h);
	--color-${name}-gray-light: oklch(from var(--color-${name}-light) l calc(c * 0.5) h);
	--color-${name}-gray-dark: oklch(from var(--color-${name}-dark) l calc(c * 0.5) h);
	--color-${name}-gray-ink: oklch(from var(--color-${name}-ink) l calc(c * 0.5) h);
`;

export type DynamicThemeColor = {
	source: string;
	hue: number;
	hueRotate: number;
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

		${dynamicThemeComputedColors('primary')}
		${dynamicThemeComputedColors('accent')}

		--color-gray: var(--color-primary-gray);
		--color-gray-wash: var(--color-primary-gray-wash);
		--color-gray-light: var(--color-primary-gray-light);
		--color-gray-dark: var(--color-primary-gray-dark);
		--color-gray-ink: var(--color-primary-gray-ink);

		--color-wash: var(--color-gray-wash);
	`;
}
