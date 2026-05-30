import { definePreset } from '@arbor-css/core';
import { presetArbor } from '@arbor-css/core/preset-arbor';
import { $userColorHue, $userColorSaturation } from './props.js';

const base = presetArbor({
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
});

const preset = definePreset({
	name: 'a-type',
	extends: [base],
	config: {
		globals: {
			roundness: 0.75,
			baseSpacingSize: '8px',
			baseFontSize: '16px',
			defaultShadowColor: 'rgba(0, 0, 0, 0.05)',
			saturation: 0.5,
		},
	},
	baseMode: () => ({
		action: {
			roundness: 99,
		},
		control: {
			roundness: 2,
		},
	}),
	modeSchema: {},
	mixins: (create, $) => ({
		arrow: create('arrow', {
			definition: (css, { tokens }) => ({
				// TODO: fix typing
				[tokens.size.name as unknown as '']: css`18px`,
				fill: css`
					${[$.mixins.bg.ref, $.system.meta.scheme.trueLight]}
				`,
				stroke: css`
					${[$.mixins.fg.ref, $.system.meta.scheme.trueHeavy]}
				`,
				width: css`
					${tokens.size}
				`,
				height: css`calc(${tokens.size} / 2)`,
				position: 'relative',
				'z-index': 0,
				transform:
					'translate(0, 0) rotate(var(--angle, 0deg)) scale(var(--scale, 1))',
				transition:
					'opacity var(--m-duration) var(--m-easing), transform var(--m-duration) var(--m-easing)',

				'&[data-side="top"]': {
					'--angle': '0deg',
					bottom: css`calc(-1 * ${tokens.size} / 2 + 1px)`,
				},
				'&[data-side="right"]': {
					'--angle': '90deg',
					left: css`calc(-1 * ${tokens.size} * 0.75)`,
				},
				'&[data-side="bottom"]': {
					'--angle': '180deg',
					top: css`calc(-1 * ${tokens.size} / 2)`,
				},
				'&[data-side="left"]': {
					'--angle': '270deg',
					left: css`calc(-1 * ${tokens.size} * 0.75)`,
				},

				'&[data-open]': {
					opacity: 1,
					'--scale': 1,
				},
				'&[data-closed]': {
					opacity: 0,
					'--scale': 0,
				},
			}),
			contributeTokens: {
				size: 'size',
			},
		}),
	}),
});

preset.bundleMode('accent', {
	color: {
		main: preset.$.primitives.color.leek,
	},
});
preset.bundleMode('success', {
	color: {
		main: preset.$.primitives.color.success,
	},
});

preset.bundleMode('attention', {
	color: {
		main: preset.$.primitives.color.attention,
	},
});
preset.bundleMode('neutral', {
	color: {
		main: preset.$.mode.color.neutral,
	},
});
preset.bundleMode('lemon', {
	color: {
		main: preset.$.primitives.color.lemon,
	},
});
preset.bundleMode('leek', {
	color: {
		main: preset.$.primitives.color.leek,
	},
});
preset.bundleMode('tomato', {
	color: {
		main: preset.$.primitives.color.tomato,
	},
});
preset.bundleMode('eggplant', {
	color: {
		main: preset.$.primitives.color.eggplant,
	},
});
preset.bundleMode('blueberry', {
	color: {
		main: preset.$.primitives.color.blueberry,
	},
});

// density and size
preset.bundleMode('dense', {
	density: 1.25,
});
preset.bundleMode('denser', {
	density: 1.5,
});
preset.bundleMode('density-reset', {
	density: 1,
});

preset.bundleMode('heading', {
	text: {
		primary: preset.$.primitives.typography['4xl'],
		secondary: preset.$.primitives.typography['3xl'],
		ambient: preset.$.primitives.typography['xl'],
	},
});
preset.bundleMode('hero', {
	text: {
		primary: preset.$.primitives.typography['6xl'],
		secondary: preset.$.primitives.typography['5xl'],
		ambient: preset.$.primitives.typography['4xl'],
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

export default preset;

export type ColorRangeName = keyof typeof preset.$.primitives.color;
