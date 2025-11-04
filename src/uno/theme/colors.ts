import { Theme } from '@unocss/preset-mini';
import { palettes } from '../logic/palettes.js';

const contrastClamp = 'clamp(0, (0.36 / y - 1) * infinity, 1)';

export const colors = {
	none: 'transparent',
	transparent: 'transparent',
	current: 'currentColor',

	black: palettes.highContrast.styles.ink,
	white: palettes.highContrast.styles.wash,
	wash: palettes.gray.styles.wash,

	// magic tokens
	contrast: `color(from var(--l-contrast-bg,var(--v-bg-altered,var(--v-bg,var(--mode-white)))) xyz-d65 ${contrastClamp} ${contrastClamp} ${contrastClamp})`,
	bg: 'var(--v-bg-altered, var(--v-bg, transparent))',
	fg: 'var(--v-color-altered, var(--v-color, var(--mode-black)))',
	color: 'var(--v-color-altered, var(--v-color, var(--mode-black)))',
	border: 'var(--v-border-altered, var(--v-border, transparent))',

	primary: palettes.primary.styles,
	accent: palettes.accent.styles,
	attention: palettes.attention.styles,
	success: palettes.success.styles,

	main: palettes.main.styles,

	gray: palettes.gray.styles,
} satisfies Record<string, string | Theme['colors']>;
