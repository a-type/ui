import * as TabsPrimitive from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { withClassName } from '../../hooks/withClassName.js';

export const TabsRoot = withClassName(TabsPrimitive.Root, '');

export const TabsList = withClassName(
	TabsPrimitive.List,
	'layer-components:(flex flex-row items-start gap-2)',
	'layer-components:(border border-thin border-color rounded-xl)',
	'layer-components:(shadow-sm bg-white)',
	'layer-components:(overflow-x-auto overflow-unstable w-max-content max-w-full)',
);

export const TabsTriggerBase = withClassName(
	TabsPrimitive.Trigger,
	'layer-components:(flex flex-row items-center justify-center gap-2 py-xs px-lg)',
	'layer-components:(transition-all cursor-pointer select-none)',
	'layer-components:(text-center text-md font-semibold color-gray-ink font-inherit text-nowrap)',
	'layer-components:(min-w-100px min-h-touch flex-shrink-0)',
	'layer-components:(bg-transparent border border-transparent rounded-lg)',
	'layer-components:hover:[&[data-state=inactive]]:(bg-gray-light bg-darken-1 ring-4 ring-bg)',
	'layer-components:focus-visible:(bg-darken-1 ring-4 ring-accent-dark outline-off border border-black)',
	'[&[data-state=active]]:(cursor-default border-gray-dark relative z-1)',
);

const colorClasses = {
	default: 'layer-variants:[&[data-state=active]]:(bg-gray)',
	primary: 'layer-variants:[&[data-state=active]]:(bg-main-light)',
};

export interface TabsTriggerProps
	extends Omit<TabsPrimitive.TabsTriggerProps, 'color'> {
	color?: 'default' | 'primary';
}

export const TabsTrigger = ({
	className,
	color = 'primary',
	...props
}: TabsTriggerProps) => (
	<TabsTriggerBase
		className={clsx(colorClasses[color], `btn-color-${color}`, className)}
		{...props}
	/>
);

export const TabsContent = withClassName(
	TabsPrimitive.Content,
	'layer-components:(focus:outline-none focus-visible:(outline-none ring-inset ring-2 ring-gray))',
);

export const Tabs = Object.assign(TabsRoot, {
	List: TabsList,
	Trigger: TabsTrigger,
	Content: TabsContent,
});
