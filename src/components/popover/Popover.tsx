import {
	PopoverPopupProps,
	PopoverPositionerProps,
	Popover as PopoverPrimitive,
} from '@base-ui/react/popover';

import { MenuArrowProps } from '@base-ui/react/menu';
import classNames, { clsx } from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { Button, ButtonProps } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import menuCls from '../primitives/menus.module.css';
import { ArrowSvg } from '../utility/ArrowSvg.js';
import cls from './Popover.module.css';

const StyledContent = withClassName(PopoverPrimitive.Popup, menuCls.popup);

const StyledArrow = withClassName(
	(props: MenuArrowProps) => (
		<PopoverPrimitive.Arrow {...props}>
			<ArrowSvg />
		</PopoverPrimitive.Arrow>
	),
	menuCls.arrow,
);

const StyledClose = ({
	className,
	inline,
	...props
}: ButtonProps & {
	inline?: boolean;
}) => (
	<PopoverPrimitive.Close
		render={
			<Button
				emphasis="ghost"
				size="small"
				className={clsx(!inline && cls.close, className)}
				{...props}
			/>
		}
	>
		<Icon name="x" />
	</PopoverPrimitive.Close>
);
// Exports
export const PopoverRoot = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;

export const PopoverContent = function PopoverContent({
	ref,
	children,
	forceMount,
	className,
	align,
	alignOffset,
	side,
	sideOffset = 8,
	anchor,
	disableAnchorTracking,
	sticky,
	arrowPadding,
	collisionAvoidance,
	collisionBoundary,
	collisionPadding,
	positionMethod,
	...props
}: PopoverPopupProps &
	PopoverPositionerProps & {
		forceMount?: boolean;
		ref?: Ref<HTMLDivElement>;
	}) {
	return (
		<PopoverPrimitive.Portal keepMounted={forceMount}>
			<PopoverPrimitive.Positioner
				side={side}
				sideOffset={sideOffset}
				align={align}
				alignOffset={alignOffset}
				anchor={anchor}
				disableAnchorTracking={disableAnchorTracking}
				sticky={sticky}
				arrowPadding={arrowPadding}
				collisionAvoidance={collisionAvoidance}
				collisionBoundary={collisionBoundary}
				collisionPadding={collisionPadding}
				positionMethod={positionMethod}
			>
				<StyledContent
					{...props}
					ref={ref}
					className={classNames(cls.popup, className)}
				>
					{children}
				</StyledContent>
			</PopoverPrimitive.Positioner>
		</PopoverPrimitive.Portal>
	);
};

export const PopoverTitle = withClassName(PopoverPrimitive.Title, cls.title);

export const PopoverDescription = withClassName(
	PopoverPrimitive.Description,
	cls.description,
);

export const Popover = Object.assign(PopoverRoot, {
	Content: PopoverContent,
	Arrow: PopoverArrow,
	Close: PopoverClose,
	Trigger: PopoverTrigger,
	Title: PopoverTitle,
	Description: PopoverDescription,
	createHandle: PopoverPrimitive.createHandle,
});
