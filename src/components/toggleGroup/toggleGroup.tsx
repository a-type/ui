import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { withClassName } from '../../hooks/withClassName.js';

export const ToggleGroupRoot = withClassName(
	ToggleGroupPrimitive.Root,
	'inline-flex bg-gray-wash bg-darken-1 rounded-lg gap-1',
);
export const ToggleGroupItem = withClassName(
	ToggleGroupPrimitive.Item,
	'rounded-xl color-black bg-gray-light py-sm px-md flex items-center border-none justify-center cursor-pointer hover:bg-darken-1 active:bg-darken-2 focus-visible:(shadow-focus outline-off) [&[data-state=on]]:(bg-primary border-black)',
);

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
	Item: ToggleGroupItem,
});
