import { definePreset } from '@arbor-css/core';
import { compileSingleColor, presetArbor } from '@arbor-css/core/preset-arbor';
import { $userColorHue, $userColorSaturation } from './props.js';

const colorConfig = {
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

const base = presetArbor({
	color: colorConfig,
	typography: {
		minSize: '12px',
	},
	globals: {
		baseFontSize: '16px',
		baseSpacingSize: '8px',
		roundness: 0.75,
		saturation: 0.5,
		defaultShadowColor: 'rgba(0, 0, 0, 0.05)',
	},
});

const preset = definePreset({
	name: 'a-type',
	extends: [base],
	baseMode: ($) => ({
		action: {
			roundness: 99,
		},
		control: {
			roundness: 1.25,
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
});

preset.bundleMode('accent', {
	color: {
		main: preset.$.mode.primitive.color.leek,
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
preset.bundleMode('lemon', {
	color: {
		main: preset.$.mode.primitive.color.lemon,
	},
});
preset.bundleMode('leek', {
	color: {
		main: preset.$.mode.primitive.color.leek,
	},
});
preset.bundleMode('tomato', {
	color: {
		main: preset.$.mode.primitive.color.tomato,
	},
});
preset.bundleMode('eggplant', {
	color: {
		main: preset.$.mode.primitive.color.eggplant,
	},
});
preset.bundleMode('blueberry', {
	color: {
		main: preset.$.mode.primitive.color.blueberry,
	},
});
preset.bundleMode('user', {
	user: {
		hue: `var(${$userColorHue}, 200)`,
		saturation: `var(${$userColorSaturation}, 0.5)`,
	},
	color: {
		main: preset.$.mode.primitive.color.user,
	},
});

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

export default preset;

export type ColorRangeName = keyof typeof preset.$.mode.primitive.color;
