'use client';
import {
	Menu as BaseMenu,
	MenuArrowProps,
	MenuItemProps,
	MenuPopupProps,
	MenuPositionerProps,
	MenuTriggerProps,
} from '@base-ui/react/menu';
import classNames, { clsx } from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { PaletteName } from '../../uno/index.js';
import { ArrowSvg } from '../utility/ArrowSvg.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import { DropdownTriggerProvider } from './DropdownTriggerContext.js';

const StyledContent = withClassName(
	function DropdownMenuContent(props: MenuPopupProps) {
		return (
			<GroupScaleReset>
				<BaseMenu.Popup {...props} />
			</GroupScaleReset>
		);
	},
	'layer-components:(min-w-220px bg-white z-menu shadow-lg rounded-md border border-black flex flex-col transition)',
	'layer-components:transform-origin-[var(--transform-origin)]',

	'layer-components:data-[starting-style]:data-[side=bottom]:(opacity-0 translate-y-4px)',
	'layer-components:data-[ending-style]:data-[side=bottom]:(opacity-0 translate-y-4px)',
	'layer-components:data-[starting-style]:data-[side=top]:(opacity-0 translate-y--4px)',
	'layer-components:data-[ending-style]:data-[side=top]:(opacity-0 translate-y-0)',
	'layer-components:data-[starting-style]:data-[side=right]:(opacity-0 translate-x-4px)',
	'layer-components:data-[ending-style]:data-[side=right]:(opacity-0 translate-x-0)',
	'layer-components:data-[starting-style]:data-[side=left]:(opacity-0 translate-x--4px)',
	'layer-components:data-[ending-style]:data-[side=left]:(opacity-0 translate-x-0)',

	'important:motion-reduce:animate-none',
	'will-change-transform',
);
const itemClassName = classNames(
	'layer-components:(text-md leading-4 color-main-ink flex items-center pr-4 pl-8 py-sm min-h-touch-large relative text-left select-none cursor-pointer)',
	'layer-components:[&[data-disabled]]:(color-gray-dark bg-white pointer-events-none)',
	'layer-components:focus-visible:(bg-main-light color-black)',
	'layer-components:hover:(bg-main-light color-black)',
	'layer-components:focus:outline-none',
);
const StyledItemBase = withClassName(BaseMenu.Item, itemClassName);
export interface DropdownMenuItemProps extends MenuItemProps {
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
const StyledCheckboxItem = withClassName(BaseMenu.CheckboxItem, itemClassName);
const StyledRadioItem = withClassName(BaseMenu.RadioItem, itemClassName);

const StyledLabel = withClassName(
	'span',
	'layer-components:(pl-3 py-1 font-bold text-sm leading-6)',
);

const StyledSeparator = withClassName(
	BaseMenu.Separator,
	'layer-components:(h-1px bg-gray m-5px)',
);

const StyledItemIndicator = withClassName(
	BaseMenu.CheckboxItemIndicator,
	'layer-components:(absolute left-0 w-25px inline-flex items-center justify-center)',
);

const StyledArrow = withClassName(
	(props: MenuArrowProps) => (
		<BaseMenu.Arrow {...props}>
			<ArrowSvg />
		</BaseMenu.Arrow>
	),
	'layer-components:(arrow)',
	'layer-components:data-[closed]:(opacity-0 scale-0)',
	'layer-components:data-[open]:(opacity-100 scale-100)',
);

const StyledTrigger = withClassName(BaseMenu.Trigger, 'select-none');

const StyledPortal = BaseMenu.Portal;

// Exports
export const DropdownMenuRoot = BaseMenu.Root;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = BaseMenu.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

export function DropdownMenuTrigger({
	asChild,
	...props
}: MenuTriggerProps & { asChild?: boolean }) {
	return (
		<DropdownTriggerProvider>
			<StyledTrigger
				render={asChild ? (props.children as React.JSX.Element) : undefined}
				{...props}
			/>
		</DropdownTriggerProvider>
	);
}
export const DropdownMenuTriggerIcon = withClassName(
	SlotDiv,
	'layer-components:[[data-popup-open]>&]:rotate-180 layer-components:transition-transform',
);

export const DropdownMenuContent = ({
	children,
	forceMount,
	keepMounted,
	side,
	sideOffset = 8,
	align,
	alignOffset,
	anchor,
	arrowPadding = 2,
	collisionAvoidance,
	collisionBoundary,
	collisionPadding,
	sticky,
	positionMethod,
	...props
}: MenuPopupProps &
	MenuPositionerProps & {
		/** @deprecated - use keepMounted */
		forceMount?: boolean;
		keepMounted?: boolean;
	}) => {
	return (
		<StyledPortal keepMounted={keepMounted ?? forceMount}>
			<BaseMenu.Positioner
				sideOffset={sideOffset}
				side={side}
				align={align}
				alignOffset={alignOffset}
				anchor={anchor}
				arrowPadding={arrowPadding}
				collisionAvoidance={collisionAvoidance}
				collisionBoundary={collisionBoundary}
				collisionPadding={collisionPadding}
				sticky={sticky}
				positionMethod={positionMethod}
			>
				<StyledContent {...props}>
					<div className="layer-components:(overflow-y-auto overflow-x-hidden overflow-unstable max-h-full rounded-md min-h-0)">
						{children}
					</div>
					<StyledArrow />
				</StyledContent>
			</BaseMenu.Positioner>
		</StyledPortal>
	);
};

export const DropdownMenuItemRightSlot = withClassName('div', 'ml-auto pl-md');

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
	Content: DropdownMenuContent,
	Trigger: DropdownMenuTrigger,
	Item: StyledItem,
	CheckboxItem: StyledCheckboxItem,
	RadioGroup: BaseMenu.RadioGroup,
	RadioItem: StyledRadioItem,
	ItemIndicator: StyledItemIndicator,
	Label: StyledLabel,
	Separator: StyledSeparator,
	Arrow: StyledArrow,
	ItemRightSlot: DropdownMenuItemRightSlot,
	TriggerIcon: DropdownMenuTriggerIcon,
	createHandle: BaseMenu.createHandle,
});
