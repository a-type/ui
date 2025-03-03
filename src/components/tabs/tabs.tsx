import * as TabsPrimitive from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { withClassName } from '../../hooks/withClassName.js';

export const TabsRoot = withClassName(TabsPrimitive.Root, '');

export const TabsList = withClassName(
	TabsPrimitive.List,
	'flex flex-row flex-wrap py-2 px-2 items-start gap-2',
);

export const TabsTriggerBase = withClassName(
	TabsPrimitive.Trigger,
	'layer-components:(flex flex-row items-center cursor-pointer justify-center gap-2 color-black py-1 px-5 bg-wash text-md min-w-100px rounded-lg border-default font-semibold text-gray-darkBlend border-gray-dark transition-all cursor-pointer select-none font-sans flex-shrink-0 shadow-sm)',
	'layer-components:hover:(bg-darken-1 ring-4 ring-bg)',
	'layer-components:focus-visible:(bg-darken-3 ring-6 ring-bg outline-off)',
	'[&[data-state=active]]:(bg-[var(--bg)] font-semibold text-black cursor-default hover:bg-darken-1 relative z-1)',
);

const colorClasses = {
	default: 'layer-variants:([--bg:var(--color-white)])',
	primary: 'layer-variants:([--bg:var(--color-primary-light)])',
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

export const TabsContent = withClassName(TabsPrimitive.Content, '');

export const Tabs = Object.assign(TabsRoot, {
	List: TabsList,
	Trigger: TabsTrigger,
	Content: TabsContent,
});
