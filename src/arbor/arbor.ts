import { createArbor } from '@arbor-css/core';
import { $userColorHue, $userColorSaturation } from './props.js';

const arbor = createArbor({});

// const mixins = {
// 	arrow: arbor.context.createMixin('arrow', {
// 		definition: (css, _) => ({
// 			fill: css`${arbor.context.$systemTokens.}`
// 		})
// 	})
// };

const preset = arbor
	.preset({
		color: {
			ranges: {
				lemon: {
					hue: 90.8,
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
					hue: `var(${$userColorHue}, 200)`,
					saturation: `var(${$userColorSaturation}, 100%)`,
				},
			},
			mainColor: 'lemon',
		},
		typography: {
			minSize: '12px',
		},
		global: {
			roundness: 0.75,
			baseSpacingSize: '8px',
			baseFontSize: '16px',
			defaultShadowColor: 'rgba(0, 0, 0, 0.05)',
			saturation: 0.5,
		},
		baseMode: {
			action: {
				roundness: 99,
			},
		},
	})
	.withMode('accent', (preset) => ({
		color: {
			main: preset.primitives.$tokens.color.leek,
		},
	}))
	.withMode('success', (preset) => ({
		color: {
			main: preset.primitives.$tokens.color.success,
		},
	}))
	.withMode('attention', (preset) => ({
		color: {
			main: preset.primitives.$tokens.color.attention,
		},
	}))
	.withMode('neutral', (preset) => ({
		color: {
			main: preset.modes.base.schema.$tokens.color.neutral,
		},
	}))
	.withMode('lemon', (preset) => ({
		color: {
			main: preset.primitives.$tokens.color.lemon,
		},
	}))
	.withMode('leek', (preset) => ({
		color: {
			main: preset.primitives.$tokens.color.leek,
		},
	}))
	.withMode('tomato', (preset) => ({
		color: {
			main: preset.primitives.$tokens.color.tomato,
		},
	}))
	.withMode('eggplant', (preset) => ({
		color: {
			main: preset.primitives.$tokens.color.eggplant,
		},
	}))
	.withMode('blueberry', (preset) => ({
		color: {
			main: preset.primitives.$tokens.color.blueberry,
		},
	}))
	.withMode('dense', () => ({
		density: 1.25,
	}))
	.withMode('denser', () => ({
		density: 1.5,
	}))
	.withMode('density-reset', () => ({
		density: 1,
	}))
	.withMode('contrast', (preset) => ({
		action: {
			primary: {
				color: {
					bg: preset.modes.base.schema.$tokens.color.neutral.ink,
					fg: preset.modes.base.schema.$tokens.color.neutral.paper,
				},
			},
		},
		surface: {
			primary: {
				color: {
					bg: preset.modes.base.schema.$tokens.color.neutral.ink,
					fg: preset.modes.base.schema.$tokens.color.neutral.paper,
				},
			},
		},
	}));

export default preset;

export type ColorRangeName = keyof typeof preset.primitives.$tokens.color;
