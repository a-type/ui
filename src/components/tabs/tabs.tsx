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
	'layer-components:(flex flex-row items-center justify-center gap-2 color-black py-1 px-5 bg-wash text-md min-w-100px rounded-lg border-default font-semibold text-gray-8 border-gray-8 transition-colors cursor-pointer select-none font-sans flex-shrink-0 shadow-sm)',
	'layer-components:hover:bg-[var(--hover)]',
	'layer-components:focus-visible:(focus-ring focus-ring-[var(--focus)] outline-off)',
	'[&[data-state=active]]:(font-semibold bg-[var(--focus,var(--hover))] text-black cursor-default hover:bg-[var(--hover)] relative z-1)',
);

const colorClasses = {
	default:
		'layer-variants:([--bg:var(--color-white)] [--hover:var(--color-gray-3)] [--focus:var(--color-gray-4)] [--active:var(--color-gray-4)])',
	primary:
		'layer-variants:([--bg:var(--color-primary-light)] [--hover:var(--color-primary)] [--focus:var(--color-primary)] [--active:var(--color-primary)])',
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
