import * as Tabs from '@radix-ui/react-tabs';
import { withClassName } from '../../hooks/withClassName.js';

export const TabsRoot = withClassName(Tabs.Root, '');

export const TabsList = withClassName(
	Tabs.List,
	'flex flex-row py-2 px-2 justify-center items-start gap-2',
);

export const TabsTrigger = withClassName(
	Tabs.Trigger,
	'flex flex-row items-center justify-center gap-2 color-black py-1 px-4 bg-wash text-md font-bold min-w-100px rounded-full border-none transition-colors cursor-pointer select-none',
	'hover:bg-primary-light focus-visible:(shadow-focus outline-off) [&[data-state=active]]:(bg-primary-dark text-white cursor-default hover:bg-primary-dark relative z-1)',
);

export const TabsContent = withClassName(Tabs.Content, '');
