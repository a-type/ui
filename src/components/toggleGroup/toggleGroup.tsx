import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import {
	ToggleGroup as ToggleGroupPrimitive,
	ToggleGroupProps,
} from '@base-ui/react/toggle-group';
import { withClassName } from '../../hooks/withClassName.js';

const ToggleGroupRoot = withClassName(
	ToggleGroupPrimitive,
	'layer-components:(w-fit inline-flex bg-main-light/20 gap-sm rd-lg)',
);
export const ToggleGroupItem = withClassName(
	TogglePrimitive,
	'layer-components:(flex cursor-pointer items-center justify-center text-nowrap transition color-neutral-ink bg-neutral/30 px-action py-action border-transparent b rd-lg b-solid border-solid)',
	'layer-components:hover:(bg-l-2 ring-bg ring-[2px] border-main-ink/20)',
	'layer-components:active:(bg-l-1 ring-[4px] border-main-ink/30)',
	'layer-components:focus:outline-none',
	'layer-components:focus-visible:(ring-neutral-ink ring-[2px])',
	'layer-components:data-[pressed]:(shadow-sm bg-main border-neutral-ink hover:b)',
);

export type { ToggleGroupProps };
export const ToggleGroup = Object.assign(ToggleGroupRoot, {
	Item: ToggleGroupItem,
});
