import {
	PopoverPopupProps,
	PopoverPositionerProps,
	Popover as PopoverPrimitive,
} from '@base-ui/react/popover';

import { MenuArrowProps } from '@base-ui/react/menu';
import classNames, { clsx } from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { Button, ButtonProps } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { popupClassName } from '../primitives/menus.js';
import { ArrowSvg } from '../utility/ArrowSvg.js';

const StyledContent = withClassName(PopoverPrimitive.Popup, popupClassName);

const StyledArrow = withClassName(
	(props: MenuArrowProps) => (
		<PopoverPrimitive.Arrow {...props}>
			<ArrowSvg />
		</PopoverPrimitive.Arrow>
	),
	'layer-components:(arrow)',
	'layer-components:data-[closed]:(scale-0 opacity-0)',
	'layer-components:data-[open]:(scale-100 opacity-100)',
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
				className={clsx(
					!inline && 'layer-composed:(absolute right-sm top-sm)',
					className,
				)}
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
	radius = 'default',
	padding = 'default',
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
		radius?: 'none' | 'default' | 'md';
		padding?: 'none' | 'default';
		forceMount?: boolean;
		ref?: Ref<HTMLDivElement>;
	}) {
	return (
		<PopoverPrimitive.Portal keepMounted={forceMount}>
			<GroupScaleReset>
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
						className={classNames(
							{
								'layer-variants:important:p-0': padding === 'none',
								'layer-variants:p-md': padding === 'default',
								'layer-variants:rounded-none': radius === 'none',
								'layer-variants:rounded-lg': radius === 'default',
								'layer-variants:rounded-md': radius === 'md',
							},
							className,
						)}
					>
						{children}
					</StyledContent>
				</PopoverPrimitive.Positioner>
			</GroupScaleReset>
		</PopoverPrimitive.Portal>
	);
};

export const PopoverTitle = withClassName(
	PopoverPrimitive.Title,
	'layer-components:(m-0 mb-sm text-md font-semibold)',
);

export const PopoverDescription = withClassName(
	PopoverPrimitive.Description,
	'layer-components:(m-0 text-sm text-gray-dark)',
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
