import { css, definePreset } from '@arbor-css/core';
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
			neutralSaturation: 0.2,
		},
		leek: {
			hue: 165.88,
			neutralSaturation: 0.2,
		},
		tomato: {
			hue: 10.51,
			neutralSaturation: 0.2,
		},
		blueberry: {
			hue: 248.14,
			neutralSaturation: 0.2,
		},
		eggplant: {
			hue: 280.21,
			neutralSaturation: 0.2,
		},
		attention: {
			hue: 30,
			neutralSaturation: 0.2,
		},
		success: {
			hue: 140,
			neutralSaturation: 0.2,
		},
		user: {
			hue: `var(${$userColorHue})`,
			neutralSaturation: `var(${$userColorSaturation})`,
		},
	},
	mainColor: 'lemon',
};

export type DefaultColorRangeName = keyof typeof defaultColors.ranges;

export type ATypeConfig<
	TColors extends DefaultColorRangeName = DefaultColorRangeName,
> = Partial<ArborPresetConfig<TColors>> & {
	mainColor?: TColors;
	defaultAccentColor?: TColors;
	fallbackAccentColor?: TColors;
	roundActions?: boolean;
	roundControls?: boolean;
};

export function presetAtype<
	TColors extends DefaultColorRangeName = DefaultColorRangeName,
>(config?: ATypeConfig<TColors>) {
	const defaultAccent = config?.defaultAccentColor || 'leek';
	const fallbackAccent = config?.fallbackAccentColor || 'lemon';
	const base = presetArbor({
		...config,
		color: {
			globalSaturation: 0.5,
			...config?.color,
			ranges: {
				...defaultColors.ranges,
				...config?.color?.ranges,
			},
			mainColor:
				config?.mainColor ||
				config?.color?.mainColor ||
				defaultColors.mainColor,
		},
		typography: {
			defaultFontSize: '16px',
			minFontSize: '12px',
			minWeight: 200,
			maxWeight: 600,
			baseWeight: 400,
			lineHeightStep: 0.125,
			minLineHeight: 1,
			roundToPixel: true,
			...config?.typography,
		},
		space: {
			baseSize: '8px',
			roundToPixel: true,
			...config?.space,
		},
		shape: {
			roundness: 1.5,
			...config?.shape,
		},
		shadow: {
			defaultColor: 'rgba(0, 0, 0, 0.05)',
			...config?.shadow,
		},
		keyframes: {
			fadeInUp: (css, $) => css`
				from {
					opacity: 0;
					transform: translateY(${$.mode.space.sm});
				}
				to {
					opacity: 1;
					transform: translateY(0);
				}
			`,
			fadeInLeft: (css, $) => css`
				from {
					opacity: 0;
					transform: translateX(-${$.mode.space.sm});
				}
				to {
					opacity: 1;
					transform: translateX(0);
				}
			`,
			fadeInRight: (css, $) => css`
				from {
					opacity: 0;
					transform: translateX(${$.mode.space.sm});
				}
				to {
					opacity: 1;
					transform: translateX(0);
				}
			`,
			fadeOutUp: (css, $) => css`
				from {
					opacity: 1;
					transform: translateY(0);
				}
				to {
					opacity: 0;
					transform: translateY(-${$.mode.space.sm});
				}
			`,
			fadeOutLeft: (css, $) => css`
				from {
					opacity: 1;
					transform: translateX(0);
				}
				to {
					opacity: 0;
					transform: translateX(-${$.mode.space.sm});
				}
			`,
			fadeOutRight: (css, $) => css`
				from {
					opacity: 1;
					transform: translateX(0);
				}
				to {
					opacity: 0;
					transform: translateX(${$.mode.space.sm});
				}
			`,
			fadeOutDown: (css, $) => css`
				from {
					opacity: 1;
					transform: translateY(0);
				}
				to {
					opacity: 0;
					transform: translateY(${$.mode.space.sm});
				}
			`,
			fadeOut: (css) => css`
				from {
					opacity: 1;
				}
				to {
					opacity: 0;
				}
			`,
			fadeIn: (css) => css`
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			`,
			spin: (css) => css`
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			`,
			...config?.keyframes,
		},
	});

	const preset = definePreset({
		name: 'a-type',
		extends: [base],
		baseMode: ($) => ({
			color: {
				accent: $.mode.color.palette[defaultAccent],
				palette: {
					user: compileSingleColor(
						{
							hue: $.mode.user.hue,
							saturation: $.mode.user.saturation,
						},
						$.mode.global,
					),
				},
			},
			action: {
				roundness: config?.roundActions === false ? undefined : 2,

				light: {
					bg: $.mode.color.main.light,
					fg: $.mode.global.trueHeavyColor,
					border: css`
						${$.mode.action.light.borderWidth} ${$.mode.action.light
							.borderStyle} ${$.mode.action.light.borderColor}
					`,
					borderColor: $.mixins.fg.ref,
					borderStyle: 'solid',
					borderWidth: '1px',
				},
				primary: {
					borderColor: $.mixins.fg.ref,
				},
				secondary: {
					borderColor: $.mixins.fg.ref,
				},
			},
			control: {
				roundness: config?.roundControls ? 2 : undefined,
				padding: {
					block: $.mode.space.sm,
				},
			},
			surface: {
				roundness: 1,
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
			action: {
				light: base.modeSchema.action.primary,
			},
		},
		mixins: (create, $) => {
			return {
				actionLight: create('action-light', {
					definition: (css) => css`
						${base.mixins.bg.apply({ '--color': $.mode.action.light.bg })}
						${base.mixins.fg.apply({ '--color': $.mode.action.light.fg })}
						${base.mixins.borderColor.apply({
							'--color': $.mode.action.light.borderColor,
						})}
						border-width: ${$.mode.action.light.borderWidth};
						border-style: ${$.mode.action.light.borderStyle};
						border-radius: ${$.mode.action.radius};
						padding: ${$.mode.action.padding.$root};
					`,
				}),
				hover: create('hover', {
					definition: (css) => css`
						@media (hover: hover) and (pointer: fine) {
							&:hover {
								${base.mixins.bgHeavier.apply({ '--step': 1 })}
								${base.mixins.ring.apply({
									'--ring': base.functions.ring.compute({
										'--color': $.mixins.bg.ref,
										'--size': '4px',
									}),
								})}

								&[data-emphasis="primary"] {
									${base.mixins.bgLighter.apply({ '--step': 1 })}
								}
							}
						}
					`,
				}),
				focus: create('focus', {
					definition: (css) => css`
						&:focus {
							outline: none;
						}
						&:focus-visible,
						&[data-focus-visible='true'] {
							${base.mixins.bgLighter.apply({ '--step': 1 })}
							${base.mixins.ring.apply({
								'--ring': base.functions.ring.compute({
									'--color': $.mode.color.main.heavy,
									'--size': '2px',
								}),
							})}

							&[data-emphasis="primary"] {
								${base.mixins.bgLighter.apply({ '--step': 2 })}
							}
						}
					`,
				}),
				active: create('active', {
					definition: (css) => css`
						&:active {
							${base.mixins.bgHeavier.apply({ '--step': 2 })}

							&[data-emphasis="primary"] {
								${base.mixins.bgLighter.apply({ '--step': 2 })}
							}
						}
					`,
				}),
				disabled: create('disabled', {
					definition: (css) => css`
						&&:disabled,
						&&[data-disabled='true'] {
							cursor: default;
							box-shadow: none;
							${base.mixins.bgDesaturated.apply({ '--step': 8 })}
							${base.mixins.fgFaded.apply({
								'--opacity': 0.65,
								'--source': $.mode.color.neutral.ink,
							})}
						}
					`,
				}),
			};
		},
		functions: (create, $) => ({
			focusRing: create('focus-ring', {
				parameters: [
					{
						name: '--width',
						fallback: '2px',
					},
				],
				definition: (css, width) =>
					css`0 0 0 ${width} ${$.mode.color.main.heavy}`,
			}),
		}),
	});

	preset.bundleMode('primary', {
		color: {
			main: preset.$.mode.color.palette[config?.mainColor ?? 'lemon'] as any,
		},
	});
	preset.bundleMode('accent', {
		color: {
			main: preset.$.mode.color.accent,
		},
	});
	preset.bundleMode('success', {
		color: {
			main: preset.$.mode.color.palette.success,
		},
	});
	preset.bundleMode('attention', {
		color: {
			main: preset.$.mode.color.palette.attention,
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
			main: preset.$.mode.color.palette.user,
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
				main: preset.$.mode.color.palette[colorName],
				// avoid assigning leek to both main and accent
				accent: (colorName === defaultAccent
					? preset.$.mode.color.palette[fallbackAccent]
					: preset.$.mode.color.palette[defaultAccent]) as any,
			},
		});
	}

	// density and size
	preset.bundleMode('dense', {
		global: {
			space: {
				density: 1.25,
			},
			typography: {
				size: 0.825,
			},
		},
	});
	preset.bundleMode('denser', {
		global: {
			space: {
				density: 1.5,
			},
			typography: {
				minFontSize: '10px',
				size: 0.75,
			},
		},
	});
	preset.bundleMode('normal', {
		global: {
			space: {
				density: 1,
			},
			typography: {
				size: 1,
				minFontSize: '12px',
			},
		},
	});
	preset.bundleMode('loose', {
		global: {
			space: {
				density: 0.75,
			},
			typography: {
				size: 1.125,
			},
		},
	});

	preset.bundleMode('heading', {
		global: {
			typography: {
				size: 1.25,
				baseWeight: 500,
			},
		},
	});
	preset.bundleMode('hero', {
		global: {
			typography: {
				size: 2,
				fontSizeScaleBase: 2,
			},
			space: {
				density: 0.5,
			},
		},
	});
	preset.bundleMode('bold', {
		global: {
			typography: {
				minWeight: 200,
				maxWeight: 800,
				baseWeight: 450,
			},
			shape: {
				lineWidth: 2,
			},
		},
	});

	return preset;
}

export default presetAtype;
