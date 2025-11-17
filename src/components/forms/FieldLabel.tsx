import { withClassName } from '../../hooks.js';

export const FieldLabel = withClassName(
	'label',
	'inline-flex flex-col gap-xs text-sm font-bold color-gray-ink ml-md',
);

export const HorizontalFieldLabel = withClassName(
	'label',
	'inline-flex flex-row items-center gap-sm text-sm color-gray-ink',
);
