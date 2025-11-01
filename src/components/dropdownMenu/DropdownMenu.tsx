'use client';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import classNames, { clsx } from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { PaletteName } from '../../uno/logic/color.js';
import { BoxContext } from '../box/Box.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import { DropdownTriggerProvider } from './DropdownTriggerContext.js';

const StyledContent = withClassName(
	function DropdownMenuContent(
		props: DropdownMenuPrimitive.DropdownMenuContentProps,
	) {
		return (
			<BoxContext.Provider value={{ spacingScale: 1 }}>
				<DropdownMenuPrimitive.Content {...props} />
			</BoxContext.Provider>
		);
	},
	'layer-components:(min-w-220px bg-white z-menu shadow-lg rounded-md border border-gray-dark flex flex-col)',
	'layer-components:transform-origin-[var(--radix-dropdown-menu-transform-origin)]',
	'layer-components:[&[data-state=open]]:animate-popover-in',
	'layer-components:[&[data-state=closed]]:animate-popover-out',
	'layer-components:(max-h-[var(--radix-dropdown-menu-content-available-height)])',
	'important:motion-reduce:animate-none',
	'will-change-transform',
);
const itemClassName = classNames(
	'layer-components:(text-md leading-4 color-main-ink flex items-center pr-4 pl-8 py-sm min-h-touch relative text-left select-none cursor-pointer)',
	'layer-components:[&[data-disabled]]:(color-gray-dark bg-white pointer-events-none)',
	'layer-components:focus-visible:(bg-main-light color-black)',
	'layer-components:hover:(bg-main-light color-black)',
	'layer-components:focus:outline-none',
);
const StyledItemBase = withClassName(DropdownMenuPrimitive.Item, itemClassName);
export interface DropdownMenuItemProps
	extends DropdownMenuPrimitive.DropdownMenuItemProps {
	color?: PaletteName;
	ref?: Ref<HTMLDivElement>;
}
const StyledItem = ({
	ref: forwardedRef,
	className,
	color = 'gray',
	...props
}: DropdownMenuItemProps) => {
	return (
		<StyledItemBase
			{...props}
			className={clsx(color && `palette-${color}`, className)}
			ref={forwardedRef}
		/>
	);
};
const StyledCheckboxItem = withClassName(
	DropdownMenuPrimitive.CheckboxItem,
	itemClassName,
);
const StyledRadioItem = withClassName(
	DropdownMenuPrimitive.RadioItem,
	itemClassName,
);

const StyledLabel = withClassName(
	DropdownMenuPrimitive.Label,
	'layer-components:(pl-3 py-1 font-bold text-sm leading-6)',
);

const StyledSeparator = withClassName(
	DropdownMenuPrimitive.Separator,
	'layer-components:(h-1px bg-gray m-5px)',
);

const StyledItemIndicator = withClassName(
	DropdownMenuPrimitive.ItemIndicator,
	'layer-components:(absolute left-0 w-25px inline-flex items-center justify-center)',
);

const StyledArrow = withClassName(
	DropdownMenuPrimitive.Arrow,
	'layer-components:(arrow)',
);

const StyledTrigger = withClassName(
	DropdownMenuPrimitive.Trigger,
	'select-none',
);

const StyledPortal = DropdownMenuPrimitive.Portal;

// Exports
export const DropdownMenuRoot = DropdownMenuPrimitive.Root;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

export function DropdownMenuTrigger(
	props: DropdownMenuPrimitive.DropdownMenuTriggerProps,
) {
	return (
		<DropdownTriggerProvider>
			<StyledTrigger {...props} />
		</DropdownTriggerProvider>
	);
}
export const DropdownMenuTriggerIcon = withClassName(
	SlotDiv,
	'layer-components:[[data-state=open]>&]:rotate-180 layer-components:transition-transform',
);

export const DropdownMenuContent = ({
	children,
	forceMount,
	...props
}: DropdownMenuPrimitive.DropdownMenuContentProps & {
	forceMount?: boolean;
}) => {
	return (
		<StyledPortal forceMount={forceMount}>
			<StyledContent {...props}>
				<div className="layer-components:(overflow-y-auto overflow-unstable max-h-full rounded-md min-h-0)">
					{children}
				</div>
				<StyledArrow />
			</StyledContent>
		</StyledPortal>
	);
};

export const DropdownMenuItemRightSlot = withClassName('div', 'ml-auto pl-md');

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
	Content: DropdownMenuContent,
	Trigger: DropdownMenuTrigger,
	Item: StyledItem,
	CheckboxItem: StyledCheckboxItem,
	RadioGroup: DropdownMenuPrimitive.RadioGroup,
	RadioItem: StyledRadioItem,
	ItemIndicator: StyledItemIndicator,
	Label: StyledLabel,
	Separator: StyledSeparator,
	Arrow: StyledArrow,
	ItemRightSlot: DropdownMenuItemRightSlot,
	TriggerIcon: DropdownMenuTriggerIcon,
});
