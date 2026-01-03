import {
	PopoverPopupProps,
	PopoverPositionerProps,
	Popover as PopoverPrimitive,
} from '@base-ui/react/popover';

import { MenuArrowProps } from '@base-ui/react/menu';
import classNames from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { ArrowSvg } from '../utility/ArrowSvg.js';

const StyledContent = withClassName(
	PopoverPrimitive.Popup,
	'layer-components:(rounded-lg min-w-120px bg-white shadow-lg max-w-90vw border border-black transition)',
	'will-change-transform',
	'layer-components:transform-origin-[var(--transform-origin)]',
	'layer-components:data-[starting-style]:(opacity-0 scale-95 translate-y-4px)',
	'layer-components:data-[ending-style]:(opacity-0 scale-95 translate-y-4px)',
	'important:motion-reduce:transition-none',
	'layer-components:(max-h-[--available-height] max-w-[--available-width])',
);

const StyledArrow = withClassName(
	(props: MenuArrowProps) => (
		<PopoverPrimitive.Arrow {...props}>
			<ArrowSvg />
		</PopoverPrimitive.Arrow>
	),
	'layer-components:(arrow)',
	'layer-components:data-[closed]:(opacity-0 scale-0)',
	'layer-components:data-[open]:(opacity-100 scale-100)',
);

const StyledClose = withClassName(
	PopoverPrimitive.Close,
	'layer-components:([all:unset] [font-family:inherit] rounded-lg h-25px w-25px inline-flex items-center justify-center color-gray-dark/80 absolute top-5px right-5px hover:bg-lightBlend focus:shadow-focus)',
);

// Exports
export const PopoverRoot = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;
export const PopoverAnchor = PopoverPrimitive.Handle;

export const PopoverContent = function PopoverContent({
	ref,
	children,
	forceMount,
	disableBlur,
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
		disableBlur?: boolean;
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
	'layer-components:(text-md font-semibold m-0 mb-sm)',
);

export const PopoverDescription = withClassName(
	PopoverPrimitive.Description,
	'layer-components:(text-sm text-gray-dark m-0)',
);

export const Popover = Object.assign(PopoverRoot, {
	Content: PopoverContent,
	Arrow: PopoverArrow,
	Close: PopoverClose,
	Trigger: PopoverTrigger,
	Anchor: PopoverAnchor,
	Title: PopoverTitle,
	Description: PopoverDescription,
	createHandle: PopoverPrimitive.createHandle,
});
