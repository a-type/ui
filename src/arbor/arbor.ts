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
			roundness: 1.25,
		},
	}),
	modeSchema: {},
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
