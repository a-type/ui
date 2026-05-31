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
import menuCls from '../primitives/menus.module.css';
import { ArrowSvg } from '../utility/ArrowSvg.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import cls from './DropdownMenu.module.css';
import { DropdownTriggerProvider } from './DropdownTriggerContext.js';

const StyledContent = withClassName(
	function DropdownMenuContent(props: MenuPopupProps) {
		return <BaseMenu.Popup {...props} />;
	},
	menuCls.popup,
	cls.content,
);

const StyledItemBase = withClassName(BaseMenu.Item, menuCls.item);
export interface DropdownMenuItemProps extends MenuItemProps {
	ref?: Ref<HTMLDivElement>;
}
const StyledItem = ({
	ref: forwardedRef,
	className,
	...props
}: DropdownMenuItemProps) => {
	return (
		<StyledItemBase {...props} className={clsx(className)} ref={forwardedRef} />
	);
};
const StyledCheckboxItem = withClassName(BaseMenu.CheckboxItem, menuCls.item);
const StyledRadioItem = withClassName(BaseMenu.RadioItem, menuCls.item);

const StyledLabel = withClassName('span', menuCls.itemText);

const StyledSeparator = withClassName(BaseMenu.Separator, menuCls.separator);

const StyledItemIndicator = withClassName(
	BaseMenu.CheckboxItemIndicator,
	menuCls.itemIndicator,
);

const StyledArrow = withClassName(
	(props: MenuArrowProps) => (
		<BaseMenu.Arrow {...props}>
			<ArrowSvg />
		</BaseMenu.Arrow>
	),
	menuCls.arrow,
);

const StyledTrigger = withClassName(BaseMenu.Trigger, menuCls.trigger);

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
	menuCls.triggerIcon,
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
					<div className={menuCls.itemList}>{children}</div>
					<StyledArrow />
				</StyledContent>
			</BaseMenu.Positioner>
		</StyledPortal>
	);
};

export const DropdownMenuItemRightSlot = withClassName(
	'div',
	menuCls.itemRightSlot,
);

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
