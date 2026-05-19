import { withClassName } from '../../hooks.js';

export const FieldLabel = withClassName(
	'label',
	'font-bold inline-flex flex-col color-neutral-ink ml-md gap-xs text-ambient',
);

export const HorizontalFieldLabel = withClassName(
	'label',
	'inline-flex flex-row items-center color-neutral-ink gap-sm text-ambient',
);
