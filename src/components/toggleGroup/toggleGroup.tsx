import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { withClassName } from '../../hooks/withClassName.js';

export const ToggleGroupRoot = withClassName(
	ToggleGroupPrimitive.Root,
	'inline-flex bg-gray-wash bg-darken-1 rounded-lg gap-sm',
);
export const ToggleGroupItem = withClassName(
	ToggleGroupPrimitive.Item,
	'rounded-full color-black bg-gray-light py-sm px-md flex items-center border-transparent border-1 border-solid justify-center cursor-pointer',
	'hover:bg-darken-1 active:bg-darken-2 focus-visible:(shadow-focus outline-off)',
	'[&[data-state=on]]:(bg-primary-light border-default)',
);

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
	Item: ToggleGroupItem,
});
