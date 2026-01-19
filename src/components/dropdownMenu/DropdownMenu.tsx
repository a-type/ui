'use client';
import {
	Menu as BaseMenu,
	MenuArrowProps,
	MenuItemProps,
	MenuPopupProps,
	MenuPositionerProps,
	MenuTriggerProps,
} from '@base-ui/react/menu';
import { clsx } from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { PaletteName } from '../../uno/index.js';
import {
	itemClassName,
	itemListClassName,
	popupClassName,
} from '../primitives/menus.js';
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
	popupClassName,
	'layer-components:(min-w-220px)',
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
	'layer-components:(py-1 pl-3 text-sm font-bold leading-6)',
);

const StyledSeparator = withClassName(
	BaseMenu.Separator,
	'layer-components:(m-5px h-1px bg-gray)',
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
	'layer-components:data-[closed]:(scale-0 opacity-0)',
	'layer-components:data-[open]:(scale-100 opacity-100)',
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

export function DropdownMenuTrigger({ ...props }: MenuTriggerProps) {
	return (
		<DropdownTriggerProvider>
			<StyledTrigger {...props} />
		</DropdownTriggerProvider>
	);
}
export const DropdownMenuTriggerIcon = withClassName(
	SlotDiv,
	'layer-components:transition-transform layer-components:[[data-popup-open]>&]:rotate-180',
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
					<div className={itemListClassName}>{children}</div>
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
