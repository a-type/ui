import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { withClassName } from '../../hooks/withClassName.js';

export const ToggleGroupRoot = withClassName(
	ToggleGroupPrimitive.Root,
	'layer-components:(inline-flex bg-gray-wash bg-darken-1 rounded-lg gap-sm)',
);
export const ToggleGroupItem = withClassName(
	ToggleGroupPrimitive.Item,
	'layer-components:(rounded-full color-black bg-gray bg-lighten-3 py-sm px-md flex items-center border-transparent border-1 border-solid justify-center cursor-pointer)',
	'layer-components:(hover:bg-lighten-2 active:bg-lighten-2 focus-visible:(ring-4 ring-primary outline-off))',
	'layer-components:[&[data-state=on]]:(bg-primary-light border-default)',
);

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
	Item: ToggleGroupItem,
});
