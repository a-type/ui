import {
	TabsListProps,
	Tabs as TabsPrimitive,
	TabsTabProps,
} from '@base-ui/react/tabs';
import clsx from 'clsx';
import { withClassName } from '../../hooks/withClassName.js';
import { Icon } from '../icon/Icon.js';
import { ScrollArea } from '../scrollArea/ScrollArea.js';

export const TabsRoot = withClassName(TabsPrimitive.Root, '');

const StyledTabsList = withClassName(
	TabsPrimitive.List,
	'layer-components:(relative flex flex-row items-start gap-2)',
);

export const TabsTrigger = withClassName(
	TabsPrimitive.Tab,
	'layer-components:(relative z-1 flex flex-row items-center justify-center gap-2 px-lg py-xs)',
	'layer-components:(cursor-pointer select-none transition-all)',
	'layer-components:(text-center text-nowrap text-md font-semibold font-inherit color-gray-ink)',
	'layer-components:(min-h-touch min-w-100px flex-shrink-0)',
	'layer-components:(border rounded-lg bg-transparent border-transparent)',
	'layer-components:hover:[&[data-state=inactive]]:(ring-4 bg-gray-light bg-darken-1 ring-bg)',
	'layer-components:focus-visible:(border bg-darken-1 border-black)',
	'foc',
	'data-[active]:(cursor-default)',
);

export const TabsIndicator = withClassName(
	TabsPrimitive.Indicator,
	'layer-components:([transition-property:transform,width,color] absolute block rounded-lg duration-300 ease-out bg-main-light b-gray-dark)',
	'layer-components:(left-0 top-1/2 z-0 h-full w-[--active-tab-width] translate-x-[calc(var(--active-tab-left,0px)+var(--scroll-area-overflow-x-start,0px))] -translate-y-1/2)',
	'layer-components:(b-1 b-gray-dark)',
);

export interface TabsTriggerProps extends Omit<TabsTabProps, 'color'> {}

export const TabsContent = withClassName(
	TabsPrimitive.Panel,
	'layer-components:(focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray)',
);

const MoreLeftIndicator = () => (
	<Icon
		name="chevron"
		className={clsx(
			'layer-components:(pointer-events-none absolute left-xs top-1/2 z-10 h-4 w-4 rotate-90 text-gray-dark/50 -translate-y-1/2)',
			'layer-components:([--scroll-area-overflow-x-start:inherit] opacity-[calc(round(min(1,calc(var(--scroll-area-overflow-x-start,0px)/10px))))])',
		)}
	/>
);
const MoreRightIndicator = () => (
	<Icon
		name="chevron"
		className={clsx(
			'layer-components:(pointer-events-none absolute right-xs top-1/2 z-10 h-4 w-4 text-gray-dark/50 -translate-y-1/2 -rotate-90)',
			'layer-components:([--scroll-area-overflow-x-end:inherit] opacity-[calc(round(min(1,calc(var(--scroll-area-overflow-x-end,0)/10px))))])',
		)}
	/>
);

export const TabsList = ({
	children,
	className,
	color = 'primary',
	...props
}: TabsListProps & {
	color?: 'gray' | 'primary';
}) => (
	<ScrollArea.Root
		className={clsx(
			`palette-${color}`,
			'layer-components:(border-thin rounded-xl border-solid border-fg)',
			'layer-components:(shadow-sm bg-white)',
			'layer-components:(max-w-full w-max-content overflow-clip)',

			className,
		)}
	>
		<ScrollArea.Viewport direction="horizontal">
			<StyledTabsList {...props}>
				{children}
				<TabsIndicator />
			</StyledTabsList>
			<ScrollArea.ViewportFades />
			<MoreLeftIndicator />
			<MoreRightIndicator />
			<ScrollArea.Scrollbar orientation="horizontal" />
		</ScrollArea.Viewport>
	</ScrollArea.Root>
);

export const Tabs = Object.assign(TabsRoot, {
	List: TabsList,
	Trigger: TabsTrigger,
	Content: TabsContent,
	Indicator: TabsIndicator,
});
