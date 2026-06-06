import { definePreset } from '@arbor-css/core';
import {
	ArborPresetConfig,
	compileSingleColor,
	presetArbor,
} from '@arbor-css/core/preset-arbor';
import { $userColorHue, $userColorSaturation } from './props.js';

const defaultColors = {
	ranges: {
		lemon: {
			hue: 86,
		},
		leek: {
			hue: 165.88,
		},
		tomato: {
			hue: 10.51,
		},
		blueberry: {
			hue: 248.14,
		},
		eggplant: {
			hue: 280.21,
		},
		attention: {
			hue: 30,
		},
		success: {
			hue: 140,
		},
		user: {
			hue: 0,
		},
	},
	mainColor: 'lemon',
};

export type DefaultColorRangeName = keyof typeof defaultColors.ranges;

export type ATypeConfig<
	TColors extends DefaultColorRangeName = DefaultColorRangeName,
> = ArborPresetConfig<TColors> & {
	roundActions?: boolean;
	roundControls?: boolean;
};

export function presetAtype<
	TColors extends DefaultColorRangeName = DefaultColorRangeName,
>(config?: ATypeConfig<TColors>) {
	const base = presetArbor({
		...config,
		color: {
			...config?.color,
			ranges: {
				...defaultColors.ranges,
				...config?.color?.ranges,
			},
			mainColor: config?.color?.mainColor || defaultColors.mainColor,
		},
		typography: {
			minSize: '10px',
			minWeight: 200,
			maxWeight: 600,
			weightStep: 15,
			baseWeight: 400,
			...config?.typography,
		},
		globals: {
			baseFontSize: '16px',
			baseSpacingSize: '8px',
			roundness: 0.75,
			saturation: 0.5,
			defaultShadowColor: 'rgba(0, 0, 0, 0.05)',
			...config?.globals,
		},
	});

	const preset = definePreset({
		name: 'a-type',
		extends: [base],
		baseMode: ($) => ({
			color: {
				accent: $.mode.primitive.color.leek,
			},
			action: {
				roundness: config?.roundActions ? 99 : undefined,
			},
			control: {
				roundness: config?.roundControls ? 1.25 : undefined,
			},
			user: {
				hue: 0,
				saturation: 1,
			},
			primitive: {
				color: {
					user: compileSingleColor(
						{
							hue: $.mode.user.hue,
							saturation: $.mode.user.saturation,
						},
						$.mode.global,
					),
				},
			},
		}),
		modeSchema: {
			color: {
				accent: base.modeSchema.color.main,
			},
			user: {
				hue: {
					purpose: 'other',
					description: 'A user-input hue value',
				},
				saturation: {
					purpose: 'scalar',
					description: 'A user-input saturation value between 0 and 1',
				},
			},
		},
		functions: (create, $) => ({
			focusRing: create('focus-ring', {
				parameters: [
					{
						name: 'width',
						fallback: '2px',
					},
				],
				definition: (css, width) =>
					css`0 0 0 ${width} ${$.mode.color.main.heavy}`,
			}),
		}),
	});

	preset.bundleMode('accent', {
		color: {
			main: preset.$.mode.color.accent,
		},
	});
	preset.bundleMode('success', {
		color: {
			main: preset.$.mode.primitive.color.success,
		},
	});
	preset.bundleMode('attention', {
		color: {
			main: preset.$.mode.primitive.color.attention,
		},
	});
	preset.bundleMode('neutral', {
		color: {
			main: preset.$.mode.color.neutral,
		},
	});
	preset.bundleMode('user', {
		user: {
			hue: `var(${$userColorHue}, 200)`,
			saturation: `var(${$userColorSaturation}, 1)`,
		},
		color: {
			main: preset.$.mode.primitive.color.user,
		},
	});

	const allColorNames = new Set<DefaultColorRangeName>([
		...(Object.keys(defaultColors.ranges) as DefaultColorRangeName[]),
		...(config?.color?.ranges
			? (Object.keys(config.color.ranges) as DefaultColorRangeName[])
			: []),
	]);
	for (const colorName of allColorNames) {
		preset.bundleMode(colorName, {
			color: {
				main: preset.$.mode.primitive.color[colorName],
				// avoid assigning leek to both main and accent
				accent:
					colorName === 'leek'
						? preset.$.mode.primitive.color.lemon
						: undefined,
			},
		});
	}

	// density and size
	preset.bundleMode('dense', {
		global: {
			density: 1.25,
		},
	});
	preset.bundleMode('denser', {
		global: {
			density: 1.5,
		},
	});
	preset.bundleMode('density-reset', {
		global: {
			density: 1,
		},
	});

	preset.bundleMode('heading', {
		text: {
			primary: preset.$.mode.primitive.typography['4xl'],
			secondary: preset.$.mode.primitive.typography['3xl'],
			ambient: preset.$.mode.primitive.typography['xl'],
		},
	});
	preset.bundleMode('hero', {
		text: {
			primary: preset.$.mode.primitive.typography['6xl'],
			secondary: preset.$.mode.primitive.typography['5xl'],
			ambient: preset.$.mode.primitive.typography['4xl'],
		},
	});

	preset.bundleMode('contrast', {
		action: {
			primary: {
				bg: preset.$.mode.color.neutral.ink,
				fg: preset.$.mode.color.neutral.paper,
			},
		},
		surface: {
			primary: {
				bg: preset.$.mode.color.neutral.ink,
				fg: preset.$.mode.color.neutral.paper,
			},
		},
	});

	return preset;
}

export default presetAtype;
