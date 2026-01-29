import { Theme } from '@unocss/preset-mini';
import { PROPS } from '../logic/properties.js';
import { PreflightConfig } from '../preflights/index.js';

const contrastClamp = 'clamp(0, (0.36 / y - 1) * infinity, 1)';

export function makeThemeColors({
	namedHues,
}: PreflightConfig): Theme['colors'] {
	return {
		none: 'transparent',
		transparent: 'transparent',
		current: 'currentColor',

		black: `var(${PROPS.PALETTE.NAMED_SHADES('high-contrast').INK})`,
		white: `var(${PROPS.PALETTE.NAMED_SHADES('high-contrast').WASH})`,
		wash: `var(${PROPS.PALETTE.GRAY_SHADES.WASH})`,

		// magic tokens
		contrast: `color(from var(${PROPS.BACKGROUND_COLOR.CONTRAST},var(${PROPS.BACKGROUND_COLOR.FINAL},var(${PROPS.BACKGROUND_COLOR.INHERITED},var(${PROPS.MODE.WHITE})))) xyz-d65 ${contrastClamp} ${contrastClamp} ${contrastClamp})`,
		bg: `var(${PROPS.BACKGROUND_COLOR.FINAL}, var(${PROPS.BACKGROUND_COLOR.INHERITED}, transparent))`,
		fg: `var(${PROPS.COLOR.FINAL}, var(${PROPS.COLOR.INHERITED}, var(${PROPS.MODE.BLACK})))`,
		color: `var(${PROPS.COLOR.FINAL}, var(${PROPS.COLOR.INHERITED}, var(${PROPS.MODE.BLACK})))`,
		border: `var(${PROPS.BORDER_COLOR.ALL.FINAL}, var(${PROPS.BORDER_COLOR.ALL.INHERITED}, transparent))`,

		primary: shadesOf(PROPS.PALETTE.NAMED_SHADES('primary')),
		accent: shadesOf(PROPS.PALETTE.NAMED_SHADES('accent')),
		attention: shadesOf(PROPS.PALETTE.NAMED_SHADES('attention')),
		success: shadesOf(PROPS.PALETTE.NAMED_SHADES('success')),

		focus: `var(${PROPS.USER.FOCUS_COLOR})`,

		main: shadesOf(PROPS.PALETTE.SHADES),
		gray: shadesOf(PROPS.PALETTE.GRAY_SHADES),

		...(namedHues
			? Object.fromEntries(
					Object.keys(namedHues).map(([name]) => [
						name,
						shadesOf(PROPS.PALETTE.NAMED_SHADES(name)),
					]),
			  )
			: {}),
	};
}

function shadesOf(entries: typeof PROPS.PALETTE.SHADES) {
	return {
		wash: `var(${entries.WASH})`,
		light: `var(${entries.LIGHT})`,
		DEFAULT: `var(${entries.MID})`,
		dark: `var(${entries.DARK})`,
		ink: `var(${entries.INK})`,
	};
}
