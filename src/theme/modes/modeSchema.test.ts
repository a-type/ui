import { expect, it } from 'vitest';
import { BaseModeSchema, modeProperties, modeToCss } from './modeSchema.js';

it('exports mode property structure', () => {
	expect(modeProperties).toMatchInlineSnapshot(`
		{
		  "action": {
		    "ancillary": {
		      "bg": "--🎨-action-ancillary-bg",
		      "border": "--🎨-action-ancillary-border",
		      "fg": "--🎨-action-ancillary-fg",
		    },
		    "primary": {
		      "bg": "--🎨-action-primary-bg",
		      "border": "--🎨-action-primary-border",
		      "fg": "--🎨-action-primary-fg",
		    },
		    "secondary": {
		      "bg": "--🎨-action-secondary-bg",
		      "border": "--🎨-action-secondary-border",
		      "fg": "--🎨-action-secondary-fg",
		    },
		  },
		  "control": {
		    "bg": "--🎨-control-bg",
		    "border": "--🎨-control-border",
		    "fg": "--🎨-control-fg",
		  },
		  "surface": {
		    "ancillary": {
		      "bg": "--🎨-surface-ancillary-bg",
		      "border": "--🎨-surface-ancillary-border",
		      "fg": "--🎨-surface-ancillary-fg",
		    },
		    "primary": {
		      "bg": "--🎨-surface-primary-bg",
		      "border": "--🎨-surface-primary-border",
		      "fg": "--🎨-surface-primary-fg",
		    },
		    "secondary": {
		      "bg": "--🎨-surface-secondary-bg",
		      "border": "--🎨-surface-secondary-border",
		      "fg": "--🎨-surface-secondary-fg",
		    },
		  },
		  "text": {
		    "ancillary": {
		      "lineHeight": "--🎨-text-ancillary-lineHeight",
		      "size": "--🎨-text-ancillary-size",
		      "weight": "--🎨-text-ancillary-weight",
		    },
		    "primary": {
		      "lineHeight": "--🎨-text-primary-lineHeight",
		      "size": "--🎨-text-primary-size",
		      "weight": "--🎨-text-primary-weight",
		    },
		    "secondary": {
		      "lineHeight": "--🎨-text-secondary-lineHeight",
		      "size": "--🎨-text-secondary-size",
		      "weight": "--🎨-text-secondary-weight",
		    },
		  },
		}
	`);
});

it('converts a base mode to CSS', () => {
	expect(
		modeToCss({
			control: {
				bg: 'control-bg',
				fg: 'control-fg',
				border: 'control-border',
			},
			action: {
				primary: {
					bg: 'action-primary-bg',
					fg: 'action-primary-fg',
					border: 'action-primary-border',
				},
				secondary: {
					bg: 'action-secondary-bg',
					fg: 'action-secondary-fg',
					border: 'action-secondary-border',
				},
				ancillary: {
					bg: 'action-ancillary-bg',
					fg: 'action-ancillary-fg',
					border: 'action-ancillary-border',
				},
			},
			surface: {
				primary: {
					bg: 'surface-primary-bg',
					fg: 'surface-primary-fg',
					border: 'surface-primary-border',
				},
				secondary: {
					bg: 'surface-secondary-bg',
					fg: 'surface-secondary-fg',
					border: 'surface-secondary-border',
				},
				ancillary: {
					bg: 'surface-ancillary-bg',
					fg: 'surface-ancillary-fg',
					border: 'surface-ancillary-border',
				},
			},
			text: {
				primary: {
					size: 'text-primary-size',
					lineHeight: 'text-primary-lineHeight',
					weight: 'text-primary-weight',
				},
				secondary: {
					size: 'text-secondary-size',
					lineHeight: 'text-secondary-lineHeight',
					weight: 'text-secondary-weight',
				},
				ancillary: {
					size: 'text-ancillary-size',
					lineHeight: 'text-ancillary-lineHeight',
					weight: 'text-ancillary-weight',
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
		  "--🎨-text-ancillary-lineHeight": "text-ancillary-lineHeight",
		  "--🎨-text-ancillary-size": "text-ancillary-size",
		  "--🎨-text-ancillary-weight": "text-ancillary-weight",
		  "--🎨-text-primary-lineHeight": "text-primary-lineHeight",
		  "--🎨-text-primary-size": "text-primary-size",
		  "--🎨-text-primary-weight": "text-primary-weight",
		  "--🎨-text-secondary-lineHeight": "text-secondary-lineHeight",
		  "--🎨-text-secondary-size": "text-secondary-size",
		  "--🎨-text-secondary-weight": "text-secondary-weight",
		}
	`);
});

it('converts a partial mode to CSS', () => {
	expect(
		modeToCss({
			control: {
				bg: 'red',
				fg: 'blue',
				border: 'green',
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
			control: {
				bg: '--example',
			},
		}),
	).toMatchInlineSnapshot(`
		{
		  "--🎨-control-bg": "var(--example)",
		}
	`);
});
