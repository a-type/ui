import {
	TabsListProps,
	Tabs as TabsPrimitive,
	TabsTabProps,
} from '@base-ui/react/tabs';
import clsx from 'clsx';
import { withClassName } from '../../hooks/withClassName.js';

export const TabsRoot = withClassName(TabsPrimitive.Root, '');

const StyledTabsList = withClassName(
	TabsPrimitive.List,
	'layer-components:(flex flex-row items-start gap-2 relative)',
	'layer-components:(border-solid border-thin border-fg rounded-xl)',
	'layer-components:(shadow-sm bg-white)',
	'layer-components:(overflow-x-auto overflow-y-clip overflow-unstable w-max-content max-w-full)',
);

export const TabsTrigger = withClassName(
	TabsPrimitive.Tab,
	'layer-components:(flex flex-row items-center justify-center gap-2 py-xs px-lg relative z-1)',
	'layer-components:(transition-all cursor-pointer select-none)',
	'layer-components:(text-center text-md font-semibold color-gray-ink font-inherit text-nowrap)',
	'layer-components:(min-w-100px min-h-touch flex-shrink-0)',
	'layer-components:(bg-transparent border border-transparent rounded-lg)',
	'layer-components:hover:[&[data-state=inactive]]:(bg-gray-light bg-darken-1 ring-4 ring-bg)',
	'layer-components:focus-visible:(bg-darken-1 ring-4 ring-accent outline-off border border-black)',
	'data-[active]:(cursor-default)',
);

export const TabsIndicator = withClassName(
	TabsPrimitive.Indicator,
	'layer-components:(absolute block [transition-property:transform,width,color] duration-300 ease-out rounded-full b-gray-dark bg-main-light)',
	'layer-components:(left-0 top-1/2 translate-x-[--active-tab-left] -translate-y-1/2 w-[--active-tab-width] h-full z-0)',
	'layer-components:(b-1 b-gray-dark)',
);

export interface TabsTriggerProps extends Omit<TabsTabProps, 'color'> {}

export const TabsContent = withClassName(
	TabsPrimitive.Panel,
	'layer-components:(focus:outline-none focus-visible:(outline-none ring-inset ring-2 ring-gray))',
);

export const TabsList = ({
	children,
	className,
	color = 'gray',
	...props
}: TabsListProps & {
	color?: 'gray' | 'primary';
}) => (
	<StyledTabsList {...props} className={clsx(`palette-${color}`, className)}>
		{children}
		<TabsIndicator />
	</StyledTabsList>
);

export const Tabs = Object.assign(TabsRoot, {
	List: TabsList,
	Trigger: TabsTrigger,
	Content: TabsContent,
	Indicator: TabsIndicator,
});
