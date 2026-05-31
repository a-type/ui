import {
	TabsListProps,
	Tabs as TabsPrimitive,
	TabsTabProps,
} from '@base-ui/react/tabs';
import clsx from 'clsx';
import { withClassName } from '../../hooks/withClassName.js';
import { Icon } from '../icon/Icon.js';
import { ScrollArea } from '../scrollArea/ScrollArea.js';
import cls from './tabs.module.css';

export const TabsRoot = withClassName(TabsPrimitive.Root, '');

const StyledTabsList = withClassName(TabsPrimitive.List, cls.styledList);

export const TabsTrigger = withClassName(TabsPrimitive.Tab, cls.trigger);

export const TabsIndicator = withClassName(
	TabsPrimitive.Indicator,
	cls.indicator,
);

export interface TabsTriggerProps extends Omit<TabsTabProps, 'color'> {}

export const TabsContent = withClassName(TabsPrimitive.Panel, cls.content);

const MoreLeftIndicator = () => (
	<Icon name="chevron" className={cls.moreLeftIcon} />
);
const MoreRightIndicator = () => (
	<Icon name="chevron" className={cls.moreRightIcon} />
);

export const TabsList = ({
	children,
	className,
	color = 'primary',
	...props
}: TabsListProps & {
	color?: 'gray' | 'primary';
}) => (
	<ScrollArea.Root className={clsx(`palette-${color}`, cls.list, className)}>
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
	Unstyled: TabsPrimitive,
});
