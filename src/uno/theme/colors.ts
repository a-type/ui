import {
	createColorRange,
	paletteHues,
	whiteBlackRange,
} from '../logic/color.js';

const contrastClamp = 'clamp(0, (0.36 / y - 1) * infinity, 1)';

export const colors = {
	none: 'transparent',
	transparent: 'transparent',
	current: 'currentColor',

	black: whiteBlackRange.ink,
	white: whiteBlackRange.wash,
	wash: createColorRange(paletteHues.primary, {
		saturation: '3%',
	}).wash,
	contrast: `color(from var(--l-contrast-bg,var(--v-bg-altered,var(--v-bg,var(--mode-white)))) xyz-d65 ${contrastClamp} ${contrastClamp} ${contrastClamp})`,

	// magic tokens
	bg: 'var(--v-bg-altered, var(--v-bg, transparent))',
	fg: 'var(--v-color-altered, var(--v-color, var(--mode-black)))',
	color: 'var(--v-color-altered, var(--v-color, var(--mode-black)))',
	border: 'var(--v-border-altered, var(--v-border, transparent))',

	primary: createColorRange(paletteHues.primary),
	accent: createColorRange(paletteHues.accent),
	attention: createColorRange(paletteHues.attention),
	success: createColorRange(paletteHues.success),

	main: createColorRange(paletteHues.main),

	gray: createColorRange(paletteHues.primary, { saturation: '5%' }),
} as const;
