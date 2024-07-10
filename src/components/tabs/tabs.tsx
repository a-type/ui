import * as Tabs from '@radix-ui/react-tabs';
import { withClassName } from '../../hooks/withClassName.js';
import {
	createContext,
	createRef,
	RefObject,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import { animated, useSpring } from '@react-spring/web';
import clsx from 'clsx';

const TabsContext = createContext<string | null>(null);

export const TabsRoot = (props: Tabs.TabsProps) => {
	return (
		<TabsContext.Provider value={props.value ?? null}>
			<Tabs.Tabs {...props} />
		</TabsContext.Provider>
	);
};

const listStructureClassName = 'flex flex-row justify-center items-start gap-2';

const TabsListEl = withClassName(
	Tabs.List,
	listStructureClassName,
	'relative p-2',
);

const TabsListContext = createContext<HTMLDivElement | null>(null);

export interface TabsListProps extends Tabs.TabsListProps {
	disableIndicator?: boolean;
}

export const TabsList = ({
	children,
	disableIndicator,
	...props
}: TabsListProps) => {
	const [layer, layerRef] = useState<HTMLDivElement | null>(null);
	const selectedValue = useContext(TabsContext);

	return (
		<TabsListContext.Provider value={layer}>
			<TabsListEl {...props}>
				{children}
				{!disableIndicator && !!selectedValue && (
					<div
						ref={layerRef}
						data-purpose="tabs-indicator-layer"
						aria-hidden
						className={clsx(
							listStructureClassName,
							'absolute inset-2 bg-primary-light pointer-events-none',
							// clip-path is used to clip the indicator to only the selected tab using --indicator-left and --indicator-width
							'[clip-path:inset(0_var(--indicator-right)_0_var(--indicator-left)_round_32px)] transition-all duration-200',
						)}
					/>
				)}
			</TabsListEl>
		</TabsListContext.Provider>
	);
};

const TabsTriggerEl = withClassName(
	Tabs.Trigger,
	'flex flex-row items-center justify-center gap-2 color-black py-1 px-4 bg-wash text-md min-w-100px rounded-full transition-colors cursor-pointer select-none border-none font-inherit',
	'hover:(ring-1 ring-primary) focus-visible:(ring-2 ring-primary-dark outline-off bg-primary-wash)',
	// '[&[data-state=active]]:(font-bold bg-primary-light border-primary-light text-black cursor-default hover:bg-primary-light relative z-1)',
);

export interface TabsTriggerProps extends Tabs.TabsTriggerProps {}

export const TabsTrigger = ({ children, ...props }: TabsTriggerProps) => {
	const layerRef = useContext(TabsListContext);
	const selectedValue = useContext(TabsContext);

	useEffect(() => {
		if (layerRef && selectedValue === props.value) {
			const el = layerRef.querySelector('[data-state=active]') as HTMLElement;
			if (el) {
				layerRef.style.setProperty('--indicator-left', `${el.offsetLeft}px`);
				layerRef.style.setProperty(
					'--indicator-right',
					`${layerRef.offsetWidth - (el.offsetLeft + el.offsetWidth)}px`,
				);
			}
		}
	}, [layerRef, selectedValue, props.value]);

	return (
		<>
			<TabsTriggerEl {...props}>{children}</TabsTriggerEl>
			{layerRef &&
				createPortal(
					<TabsTriggerEl value={props.value} className="bg-transparent" asChild>
						<div>{children}</div>
					</TabsTriggerEl>,
					layerRef,
				)}
		</>
	);
};

export const TabsContent = withClassName(Tabs.Content, '');
