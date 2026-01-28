import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import {
	ToggleGroup as ToggleGroupPrimitive,
	ToggleGroupProps,
} from '@base-ui/react/toggle-group';
import { withClassName } from '../../hooks/withClassName.js';

const ToggleGroupRoot = withClassName(
	ToggleGroupPrimitive,
	'layer-components:(w-fit inline-flex gap-sm rounded-lg bg-main-light/20)',
);
export const ToggleGroupItem = withClassName(
	TogglePrimitive,
	'layer-components:(flex cursor-pointer items-center justify-center border-1 rounded-lg border-solid px-md py-sm text-nowrap transition-all color-black bg-gray/30 border-transparent)',
	'layer-components:hover:(ring-2 bg-lighten-2 border-main-ink/20 ring-bg)',
	'layer-components:active:(ring-4 bg-darken-1 border-main-ink/30)',
	'layer-components:focus-visible:(outline-off ring-4 ring-accent)',
	'layer-components:data-[pressed]:(border-default shadow-sm bg-main hover:border-default)',
);

export type { ToggleGroupProps };
export const ToggleGroup = Object.assign(ToggleGroupRoot, {
	Item: ToggleGroupItem,
});
