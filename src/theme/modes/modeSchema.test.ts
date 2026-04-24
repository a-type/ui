import { expect, it } from 'vitest';
import { BaseModeSchema, MODE_PROPS, modeToCss } from './modeSchema.js';

it('exports mode property structure', () => {
	expect(MODE_PROPS).toMatchInlineSnapshot(`
		{
		  "ACTION": {
		    "ANCILLARY": {
		      "BG": {
		        "EVAL": "var(--🎨-action-ancillary-bg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-ancillary-bg",
		        "VAR": "var(--🎨-action-ancillary-bg)",
		      },
		      "BORDER": {
		        "EVAL": "var(--🎨-action-ancillary-border)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-ancillary-border",
		        "VAR": "var(--🎨-action-ancillary-border)",
		      },
		      "FG": {
		        "EVAL": "var(--🎨-action-ancillary-fg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-ancillary-fg",
		        "VAR": "var(--🎨-action-ancillary-fg)",
		      },
		    },
		    "PRIMARY": {
		      "BG": {
		        "EVAL": "var(--🎨-action-primary-bg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-primary-bg",
		        "VAR": "var(--🎨-action-primary-bg)",
		      },
		      "BORDER": {
		        "EVAL": "var(--🎨-action-primary-border)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-primary-border",
		        "VAR": "var(--🎨-action-primary-border)",
		      },
		      "FG": {
		        "EVAL": "var(--🎨-action-primary-fg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-primary-fg",
		        "VAR": "var(--🎨-action-primary-fg)",
		      },
		    },
		    "SECONDARY": {
		      "BG": {
		        "EVAL": "var(--🎨-action-secondary-bg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-secondary-bg",
		        "VAR": "var(--🎨-action-secondary-bg)",
		      },
		      "BORDER": {
		        "EVAL": "var(--🎨-action-secondary-border)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-secondary-border",
		        "VAR": "var(--🎨-action-secondary-border)",
		      },
		      "FG": {
		        "EVAL": "var(--🎨-action-secondary-fg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-action-secondary-fg",
		        "VAR": "var(--🎨-action-secondary-fg)",
		      },
		    },
		  },
		  "CONTROL": {
		    "BG": {
		      "EVAL": "var(--🎨-control-bg)",
		      "FALLBACK": undefined,
		      "MATCH_CONTAINER": [Function],
		      "NAME": "--🎨-control-bg",
		      "VAR": "var(--🎨-control-bg)",
		    },
		    "BORDER": {
		      "EVAL": "var(--🎨-control-border)",
		      "FALLBACK": undefined,
		      "MATCH_CONTAINER": [Function],
		      "NAME": "--🎨-control-border",
		      "VAR": "var(--🎨-control-border)",
		    },
		    "FG": {
		      "EVAL": "var(--🎨-control-fg)",
		      "FALLBACK": undefined,
		      "MATCH_CONTAINER": [Function],
		      "NAME": "--🎨-control-fg",
		      "VAR": "var(--🎨-control-fg)",
		    },
		  },
		  "SURFACE": {
		    "ANCILLARY": {
		      "BG": {
		        "EVAL": "var(--🎨-surface-ancillary-bg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-ancillary-bg",
		        "VAR": "var(--🎨-surface-ancillary-bg)",
		      },
		      "BORDER": {
		        "EVAL": "var(--🎨-surface-ancillary-border)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-ancillary-border",
		        "VAR": "var(--🎨-surface-ancillary-border)",
		      },
		      "FG": {
		        "EVAL": "var(--🎨-surface-ancillary-fg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-ancillary-fg",
		        "VAR": "var(--🎨-surface-ancillary-fg)",
		      },
		    },
		    "PRIMARY": {
		      "BG": {
		        "EVAL": "var(--🎨-surface-primary-bg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-primary-bg",
		        "VAR": "var(--🎨-surface-primary-bg)",
		      },
		      "BORDER": {
		        "EVAL": "var(--🎨-surface-primary-border)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-primary-border",
		        "VAR": "var(--🎨-surface-primary-border)",
		      },
		      "FG": {
		        "EVAL": "var(--🎨-surface-primary-fg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-primary-fg",
		        "VAR": "var(--🎨-surface-primary-fg)",
		      },
		    },
		    "SECONDARY": {
		      "BG": {
		        "EVAL": "var(--🎨-surface-secondary-bg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-secondary-bg",
		        "VAR": "var(--🎨-surface-secondary-bg)",
		      },
		      "BORDER": {
		        "EVAL": "var(--🎨-surface-secondary-border)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-secondary-border",
		        "VAR": "var(--🎨-surface-secondary-border)",
		      },
		      "FG": {
		        "EVAL": "var(--🎨-surface-secondary-fg)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-surface-secondary-fg",
		        "VAR": "var(--🎨-surface-secondary-fg)",
		      },
		    },
		  },
		  "TEXT": {
		    "ANCILLARY": {
		      "LINE_HEIGHT": {
		        "EVAL": "var(--🎨-text-ancillary-line-height)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-ancillary-line-height",
		        "VAR": "var(--🎨-text-ancillary-line-height)",
		      },
		      "SIZE": {
		        "EVAL": "var(--🎨-text-ancillary-size)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-ancillary-size",
		        "VAR": "var(--🎨-text-ancillary-size)",
		      },
		      "WEIGHT": {
		        "EVAL": "var(--🎨-text-ancillary-weight)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-ancillary-weight",
		        "VAR": "var(--🎨-text-ancillary-weight)",
		      },
		    },
		    "PRIMARY": {
		      "LINE_HEIGHT": {
		        "EVAL": "var(--🎨-text-primary-line-height)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-primary-line-height",
		        "VAR": "var(--🎨-text-primary-line-height)",
		      },
		      "SIZE": {
		        "EVAL": "var(--🎨-text-primary-size)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-primary-size",
		        "VAR": "var(--🎨-text-primary-size)",
		      },
		      "WEIGHT": {
		        "EVAL": "var(--🎨-text-primary-weight)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-primary-weight",
		        "VAR": "var(--🎨-text-primary-weight)",
		      },
		    },
		    "SECONDARY": {
		      "LINE_HEIGHT": {
		        "EVAL": "var(--🎨-text-secondary-line-height)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-secondary-line-height",
		        "VAR": "var(--🎨-text-secondary-line-height)",
		      },
		      "SIZE": {
		        "EVAL": "var(--🎨-text-secondary-size)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-secondary-size",
		        "VAR": "var(--🎨-text-secondary-size)",
		      },
		      "WEIGHT": {
		        "EVAL": "var(--🎨-text-secondary-weight)",
		        "FALLBACK": undefined,
		        "MATCH_CONTAINER": [Function],
		        "NAME": "--🎨-text-secondary-weight",
		        "VAR": "var(--🎨-text-secondary-weight)",
		      },
		    },
		  },
		}
	`);
});

it('converts a base mode to CSS', () => {
	expect(
		modeToCss({
			CONTROL: {
				BG: 'control-bg',
				FG: 'control-fg',
				BORDER: 'control-border',
			},
			ACTION: {
				PRIMARY: {
					BG: 'action-primary-bg',
					FG: 'action-primary-fg',
					BORDER: 'action-primary-border',
				},
				SECONDARY: {
					BG: 'action-secondary-bg',
					FG: 'action-secondary-fg',
					BORDER: 'action-secondary-border',
				},
				ANCILLARY: {
					BG: 'action-ancillary-bg',
					FG: 'action-ancillary-fg',
					BORDER: 'action-ancillary-border',
				},
			},
			SURFACE: {
				PRIMARY: {
					BG: 'surface-primary-bg',
					FG: 'surface-primary-fg',
					BORDER: 'surface-primary-border',
				},
				SECONDARY: {
					BG: 'surface-secondary-bg',
					FG: 'surface-secondary-fg',
					BORDER: 'surface-secondary-border',
				},
				ANCILLARY: {
					BG: 'surface-ancillary-bg',
					FG: 'surface-ancillary-fg',
					BORDER: 'surface-ancillary-border',
				},
			},
			TEXT: {
				PRIMARY: {
					SIZE: 'text-primary-size',
					LINE_HEIGHT: 'text-primary-lineHeight',
					WEIGHT: 'text-primary-weight',
				},
				SECONDARY: {
					SIZE: 'text-secondary-size',
					LINE_HEIGHT: 'text-secondary-lineHeight',
					WEIGHT: 'text-secondary-weight',
				},
				ANCILLARY: {
					SIZE: 'text-ancillary-size',
					LINE_HEIGHT: 'text-ancillary-lineHeight',
					WEIGHT: 'text-ancillary-weight',
				},
			},
		} satisfies BaseModeSchema),
	).toMatchInlineSnapshot(`
		{
		  "--🎨-action-ancillary-bg": "action-ancillary-bg",
		  "--🎨-action-ancillary-border": "action-ancillary-border",
		  "--🎨-action-ancillary-fg": "action-ancillary-fg",
		  "--🎨-action-primary-bg": "action-primary-bg",
		  "--🎨-action-primary-border": "action-primary-border",
		  "--🎨-action-primary-fg": "action-primary-fg",
		  "--🎨-action-secondary-bg": "action-secondary-bg",
		  "--🎨-action-secondary-border": "action-secondary-border",
		  "--🎨-action-secondary-fg": "action-secondary-fg",
		  "--🎨-control-bg": "control-bg",
		  "--🎨-control-border": "control-border",
		  "--🎨-control-fg": "control-fg",
		  "--🎨-surface-ancillary-bg": "surface-ancillary-bg",
		  "--🎨-surface-ancillary-border": "surface-ancillary-border",
		  "--🎨-surface-ancillary-fg": "surface-ancillary-fg",
		  "--🎨-surface-primary-bg": "surface-primary-bg",
		  "--🎨-surface-primary-border": "surface-primary-border",
		  "--🎨-surface-primary-fg": "surface-primary-fg",
		  "--🎨-surface-secondary-bg": "surface-secondary-bg",
		  "--🎨-surface-secondary-border": "surface-secondary-border",
		  "--🎨-surface-secondary-fg": "surface-secondary-fg",
		  "--🎨-text-ancillary-line-height": "text-ancillary-lineHeight",
		  "--🎨-text-ancillary-size": "text-ancillary-size",
		  "--🎨-text-ancillary-weight": "text-ancillary-weight",
		  "--🎨-text-primary-line-height": "text-primary-lineHeight",
		  "--🎨-text-primary-size": "text-primary-size",
		  "--🎨-text-primary-weight": "text-primary-weight",
		  "--🎨-text-secondary-line-height": "text-secondary-lineHeight",
		  "--🎨-text-secondary-size": "text-secondary-size",
		  "--🎨-text-secondary-weight": "text-secondary-weight",
		}
	`);
});

it('converts a partial mode to CSS', () => {
	expect(
		modeToCss({
			CONTROL: {
				BG: 'red',
				FG: 'blue',
				BORDER: 'green',
			},
		}),
	).toMatchInlineSnapshot(`
		{
		  "--🎨-control-bg": "red",
		  "--🎨-control-border": "green",
		  "--🎨-control-fg": "blue",
		}
	`);
});

it('converts a CSS var reference to var() syntax', () => {
	expect(
		modeToCss({
			CONTROL: {
				BG: '--example',
			},
		}),
	).toMatchInlineSnapshot(`
		{
		  "--🎨-control-bg": "--example",
		}
	`);
});
