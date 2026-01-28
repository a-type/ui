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
	'layer-components:(relative flex flex-row items-start gap-2)',
	'layer-components:(border-thin rounded-xl border-solid border-fg)',
	'layer-components:(shadow-sm bg-white)',
	'layer-components:(max-w-full w-max-content overflow-y-clip overflow-x-auto overflow-unstable)',
);

export const TabsTrigger = withClassName(
	TabsPrimitive.Tab,
	'layer-components:(relative z-1 flex flex-row items-center justify-center gap-2 px-lg py-xs)',
	'layer-components:(cursor-pointer select-none transition-all)',
	'layer-components:(text-center text-nowrap text-md font-semibold font-inherit color-gray-ink)',
	'layer-components:(min-h-touch min-w-100px flex-shrink-0)',
	'layer-components:(border rounded-lg bg-transparent border-transparent)',
	'layer-components:hover:[&[data-state=inactive]]:(ring-4 bg-gray-light bg-darken-1 ring-bg)',
	'layer-components:focus-visible:(outline-off border ring-4 bg-darken-1 border-black ring-accent)',
	'data-[active]:(cursor-default)',
);

export const TabsIndicator = withClassName(
	TabsPrimitive.Indicator,
	'layer-components:([transition-property:transform,width,color] absolute block rounded-lg duration-300 ease-out bg-main-light b-gray-dark)',
	'layer-components:(left-0 top-1/2 z-0 h-full w-[--active-tab-width] translate-x-[--active-tab-left] -translate-y-1/2)',
	'layer-components:(b-1 b-gray-dark)',
);

export interface TabsTriggerProps extends Omit<TabsTabProps, 'color'> {}

export const TabsContent = withClassName(
	TabsPrimitive.Panel,
	'layer-components:(focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray)',
);

export const TabsList = ({
	children,
	className,
	color = 'primary',
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
