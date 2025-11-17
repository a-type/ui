import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { withClassName } from '../../hooks/withClassName.js';

export const ToggleGroupRoot = withClassName(
	ToggleGroupPrimitive.Root,
	'layer-components:(inline-flex bg-main-light/20 rounded-lg gap-sm w-fit)',
);
export const ToggleGroupItem = withClassName(
	ToggleGroupPrimitive.Item,
	'layer-components:(rounded-full text-nowrap transition-all color-black bg-gray/30 py-sm px-md flex items-center border-transparent border-1 border-solid justify-center cursor-pointer)',
	'layer-components:hover:(bg-lighten-2 border-main-ink/20 ring-bg ring-2)',
	'layer-components:active:(bg-darken-1 border-main-ink/30 ring-4)',
	'layer-components:focus-visible:(ring-4 ring-accent outline-off)',
	'layer-components:[&[data-state=on]]:(bg-main border-default shadow-sm hover:border-default)',
);

export type ToggleGroupProps =
	| ToggleGroupPrimitive.ToggleGroupMultipleProps
	| ToggleGroupPrimitive.ToggleGroupSingleProps;
export const ToggleGroup = Object.assign(ToggleGroupRoot, {
	Item: ToggleGroupItem,
});
