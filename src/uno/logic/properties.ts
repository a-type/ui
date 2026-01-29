export const PROPS = {
	USER: {
		COLOR: {
			PRIMARY_HUE: '--u-c-primary-hue',
			ACCENT_HUE: '--u-c-accent-hue',
			NAMED_HUE: (name: string) => `--u-c-${name}-hue`,
			NAMED_ACCENT_HUE: (name: string) => `--u-c-${name}-accent-hue`,
		},
		SATURATION: '--u-saturation',
		SHADOW_SPREAD: '--u-shadow-spread',
		CORNER_SCALE: '--u-corner-scale',
		SPACING_SCALE: '--u-spacing-scale',
		BORDER_SCALE: '--u-border-scale',
		FONTS: {
			DEFAULT: '--u-font-default',
			SANS: '--u-font-sans',
			SERIF: '--u-font-serif',
			TITLE: '--u-font-title',
		},
		FOCUS_COLOR: '--u-focus-color',
	},

	PALETTE: {
		NAME: '--p-name',
		MAIN_HUE: '--p-main-hue',
		SATURATION: '--p-saturation',
		LIGHTNESS_SPREAD: '--p-lightness-spread',
		NAMED_HUE: (name: string) => `--p-${name}-hue`,

		SHADES: {
			WASH: '--p-shade-wash',
			LIGHT: '--p-shade-light',
			MID: '--p-shade-mid',
			DARK: '--p-shade-dark',
			INK: '--p-shade-ink',
		},

		GRAY_SHADES: {
			WASH: '--p-gray-shade-wash',
			LIGHT: '--p-gray-shade-light',
			MID: '--p-gray-shade-mid',
			DARK: '--p-gray-shade-dark',
			INK: '--p-gray-shade-ink',
		},

		NAMED_SHADES: (name: string) => ({
			WASH: `--p-${name}-shade-wash`,
			LIGHT: `--p-${name}-shade-light`,
			MID: `--p-${name}-shade-mid`,
			DARK: `--p-${name}-shade-dark`,
			INK: `--p-${name}-shade-ink`,
		}),
	},

	MODE: {
		BLACK: '--m-black',
		WHITE: '--m-white',
		MULT: '--m-mult',
		L_NEUTRAL: '--m-l-neutral',
		L_RANGE_UP: '--m-l-range-up',
		L_RANGE_DOWN: '--m-l-range-down',
		S_NEUTRAL: '--m-s-neutral',
		S_RANGE_UP: '--m-s-range-up',
		S_RANGE_DOWN: '--m-s-range-down',
	},

	COLOR: {
		INHERITED: '--v-c-i',
		FINAL: '--v-c',
		OPACITY: '--v-c-op',
	},
	BACKGROUND_COLOR: {
		INHERITED: '--v-bg-l',
		FINAL: '--v-bg',
		OPACITY: '--v-bg-op',
		// special token for assigning a bg color for contrast calc
		CONTRAST: '--v-bg-contrast',
	},
	BORDER_COLOR: {
		ALL: {
			INHERITED: '--v-bd-c-i',
			FINAL: '--v-bd-c',
			OPACITY: '--v-bd-c-op',
		},
		TOP: {
			INHERITED: '--v-bd-t-c-i',
			FINAL: '--v-bd-t-c',
			OPACITY: '--v-bd-t-c-op',
		},
		RIGHT: {
			INHERITED: '--v-bd-r-c-i',
			FINAL: '--v-bd-r-c',
			OPACITY: '--v-bd-r-c-op',
		},
		BOTTOM: {
			INHERITED: '--v-bd-b-c-i',
			FINAL: '--v-bd-b-c',
			OPACITY: '--v-bd-b-c-op',
		},
		LEFT: {
			INHERITED: '--v-bd-l-c-i',
			FINAL: '--v-bd-l-c',
			OPACITY: '--v-bd-l-c-op',
		},
	},
	RING_COLOR: {
		INHERITED: '--v-ring-c-i',
		FINAL: '--v-ring-c',
		OPACITY: '--v-ring-c-op',
	},
	ACCENT_COLOR: {
		INHERITED: '--v-accent-c-i',
		FINAL: '--v-accent-c',
		OPACITY: '--v-accent-c-op',
	},
	PLACEHOLDER_COLOR: {
		INHERITED: '--v-ph-c-i',
		FINAL: '--v-ph-c',
		OPACITY: '--v-ph-c-op',
	},

	LOCALS: {
		CORNER_SCALE: '--l-corner-scale',
		SPACING_SCALE: '--l-spacing-scale',
	},

	UTILS: {
		SHADOW_Y_MULT: '--t-shadow-y-mult',
		ARROW_SIZE: '--t-arrow-size',
	},

	BUILT_IN: {
		RING_COLOR: '--un-ring-color',
		SHADOW_INSET: '--un-shadow-inset',
		SHADOW_COLOR: '--un-shadow-color',
		SHADOW_OPACITY: '--un-shadow-opacity',
		SHADOW: '--un-shadow',
		RING_WIDTH: '--un-ring-width',
		RING_STYLE: '--un-ring-style',
		RING_OFFSET_SHADOW: '--un-ring-offset-shadow',
		RING_SHADOW: '--un-ring-shadow',
		RING_INSET: '--un-ring-inset',
	},
};
