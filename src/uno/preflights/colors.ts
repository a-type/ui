import {
	ColorLogicalPalette,
	createColorLogicalPalette,
	defaultPalettes,
	graySaturation,
	highContrastSaturation,
} from '../logic/palettes.js';
import { PROPS } from '../logic/properties.js';
import { preflight } from './_util.js';
import { UserPreflightOptions } from './user.js';

export interface ColorPreflightOptions {
	namedHues?: UserPreflightOptions['namedHues'];
}

function paletteColors(
	shades: (typeof PROPS)['PALETTE']['SHADES'],
	palette: ColorLogicalPalette,
) {
	return `
${shades.WASH}: ${palette.styles.wash};
${shades.LIGHT}: ${palette.styles.light};
${shades.MID}: ${palette.styles.DEFAULT};
${shades.DARK}: ${palette.styles.dark};
${shades.INK}: ${palette.styles.ink};
	`;
}

function paletteClass(
	name: string,
	palette: ColorLogicalPalette,
	{
		mainHue,
		saturation = 1,
		lightnessSpread = 1,
	}: {
		// false to inherit from parent
		mainHue?: string | string | boolean;
		saturation?: number | string;
		lightnessSpread?: number | string;
	} = {},
) {
	return `.palette-${name}, .theme-${name} {
${PROPS.PALETTE.NAME}: ${name};
${
	mainHue === false
		? ''
		: `${PROPS.PALETTE.MAIN_HUE}: var(${
				mainHue || PROPS.USER.COLOR.NAMED_HUE(name)
		  });`
}
${PROPS.PALETTE.SATURATION}: ${saturation};
${PROPS.PALETTE.LIGHTNESS_SPREAD}: ${lightnessSpread};
${paletteColors(PROPS.PALETTE.SHADES, palette)}
${/* every palette defines its grays, too */ ''}
${paletteColors(PROPS.PALETTE.GRAY_SHADES, defaultPalettes.gray)}
}
`;
}

function toNamedPalettes(namedHues: ColorPreflightOptions['namedHues']) {
	return Object.fromEntries(
		Object.entries(namedHues || {}).map(([name, config]) => [
			name,
			createColorLogicalPalette({
				name,
				sourceHue: config.sourceHue.toString(),
				saturation: config.saturation?.toString(),
			}),
		]),
	);
}

export function palettePropertyReset(options: ColorPreflightOptions) {
	return [
		paletteColors(
			PROPS.PALETTE.NAMED_SHADES('primary'),
			defaultPalettes.primary,
		),
		paletteColors(PROPS.PALETTE.NAMED_SHADES('accent'), defaultPalettes.accent),
		paletteColors(PROPS.PALETTE.SHADES, defaultPalettes.main),
		paletteColors(PROPS.PALETTE.GRAY_SHADES, defaultPalettes.gray),
		paletteColors(
			PROPS.PALETTE.NAMED_SHADES('high-contrast'),
			defaultPalettes['high-contrast'],
		),
		...Object.entries(toNamedPalettes(options.namedHues)).map(
			([name, palette]) =>
				paletteColors(PROPS.PALETTE.NAMED_SHADES(name), palette),
		),
	].join('\n');
}

export const colorPreflight = (options: ColorPreflightOptions) =>
	preflight({
		getCSS: () => {
			const namedPalettes = toNamedPalettes(options.namedHues || {});

			return `
${paletteClass('primary', defaultPalettes.primary, {
	mainHue: PROPS.USER.COLOR.PRIMARY_HUE,
})}
${paletteClass('accent', defaultPalettes.accent, {
	mainHue: PROPS.USER.COLOR.ACCENT_HUE,
})}

${Object.entries(namedPalettes)
	// User-provided named hues -> .palette-xxx classes
	.map(([name, palette]) => paletteClass(name, palette))
	.join('\n')}

${/* useful to reset from gray, I guess? */ ''}
.palette-main {
	${PROPS.PALETTE.SATURATION}: 1;
	${paletteColors(PROPS.PALETTE.SHADES, defaultPalettes.main)}
}

${paletteClass('gray', defaultPalettes.gray, {
	saturation: graySaturation,
	mainHue: false,
})}

${paletteClass('high-contrast', defaultPalettes['high-contrast'], {
	saturation: highContrastSaturation,
	lightnessSpread: 10,
	mainHue: false,
})}

body {
	${PROPS.PALETTE.NAME}: 'primary';
	${PROPS.COLOR.INHERITED}: ${defaultPalettes['high-contrast'].styles.ink};
	color: var(${PROPS.COLOR.INHERITED});
	${PROPS.BACKGROUND_COLOR.INHERITED}: ${defaultPalettes['gray'].styles.wash};
	background-color: var(${PROPS.BACKGROUND_COLOR.INHERITED});
	${PROPS.PALETTE.MAIN_HUE}: var(${PROPS.USER.COLOR.PRIMARY_HUE});
	${paletteColors(PROPS.PALETTE.SHADES, defaultPalettes.primary)}
	${paletteColors(PROPS.PALETTE.GRAY_SHADES, defaultPalettes.gray)}
}

${[
	PROPS.COLOR,
	PROPS.BACKGROUND_COLOR,
	PROPS.BORDER_COLOR.ALL,
	PROPS.BORDER_COLOR.TOP,
	PROPS.BORDER_COLOR.RIGHT,
	PROPS.BORDER_COLOR.BOTTOM,
	PROPS.BORDER_COLOR.LEFT,
	PROPS.RING_COLOR,
]
	.map((propGroup) => propertyDefinitions(propGroup))
	.join('\n')}
`;
		},
	});

function propertyDefinitions(propGroup: {
	INHERITED: string;
	FINAL: string;
	OPACITY: string;
}) {
	return `@property ${propGroup.FINAL} { syntax: "*"; inherits: false; }
@property ${propGroup.INHERITED} { syntax: "*"; inherits: true; }
@property ${propGroup.OPACITY} { syntax: "<percentage>"; inherits: false; }
`;
}
