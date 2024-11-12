import * as TabsPrimitive from '@radix-ui/react-tabs';
import { withClassName } from '../../hooks/withClassName.js';

export const TabsRoot = withClassName(TabsPrimitive.Root, '');

export const TabsList = withClassName(
	TabsPrimitive.List,
	'flex flex-row flex-wrap py-2 px-2 items-start gap-2',
);

export const TabsTrigger = withClassName(
	TabsPrimitive.Trigger,
	'layer-components:(flex flex-row items-center justify-center gap-2 color-black py-1 px-5 bg-wash text-md min-w-100px rounded-full border border-1 font-semibold text-gray-7 border-gray-7 border-solid transition-colors cursor-pointer select-none font-sans flex-shrink-0)',
	'hover:bg-primary-light focus-visible:(focus-ring focus-ring-primary-dark outline-off bg-primary-light border-primary-dark) [&[data-state=active]]:(font-semibold bg-primary-light border-primary-light text-black cursor-default hover:bg-primary-light relative z-1)',
);

export const TabsContent = withClassName(TabsPrimitive.Content, '');

export const Tabs = Object.assign(TabsRoot, {
	List: TabsList,
	Trigger: TabsTrigger,
	Content: TabsContent,
});
