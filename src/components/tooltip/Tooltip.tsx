import {
	TooltipPopupProps,
	TooltipPositionerProps,
	Tooltip as TooltipPrimitive,
	TooltipTriggerProps,
} from '@base-ui/react/tooltip';
import classNames from 'clsx';
import { ReactElement, ReactNode } from 'react';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { ArrowSvg } from '../utility/ArrowSvg.js';

export interface TooltipContentProps
	extends TooltipPopupProps,
		Omit<TooltipPositionerProps, 'className' | 'style' | 'render'> {
	color?: 'contrast' | 'white' | 'neutral' | 'attention';
}

function Content({
	children,
	className,
	color = 'contrast',
	render,
	side,
	sideOffset,
	align,
	alignOffset,
	anchor,
	disableAnchorTracking,
	sticky,
	arrowPadding,
	collisionAvoidance,
	collisionBoundary,
	collisionPadding,
	positionMethod,
	...props
}: TooltipContentProps) {
	return (
		<TooltipPrimitive.Portal>
			<GroupScaleReset>
				<TooltipPrimitive.Positioner
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
					<TooltipPrimitive.Popup
						render={render}
						className={classNames(
							'layer-components:(relative rounded-sm py-xs px-sm text-sm leading-tight shadow-sm select-none flex transition)',
							'layer-components:data-[instant]:transition-none',
							'layer-components:data-[starting-style]:(opacity-0 scale-95)',
							'layer-components:data-[ending-style]:(opacity-0 scale-95)',
							'layer-components:transform-origin-[var(--transform-origin)]',
							{
								'layer-variants:(bg-black color-white)': color === 'contrast',
								'layer-variants:(bg-white color-black border border-gray)':
									color === 'white' || color === 'neutral',
								'layer-variants:(bg-attention-ink color-white)':
									color === 'attention',
							},
							className,
						)}
						{...props}
					>
						{children}
						<TooltipPrimitive.Arrow className="layer-components:arrow">
							<ArrowSvg />
						</TooltipPrimitive.Arrow>
					</TooltipPrimitive.Popup>
				</TooltipPrimitive.Positioner>
			</GroupScaleReset>
		</TooltipPrimitive.Portal>
	);
}

export const TooltipProvider = TooltipPrimitive.Provider;

export interface TooltipProps
	extends Omit<TooltipTriggerProps, 'content' | 'children'>,
		Pick<TooltipContentProps, 'side' | 'sideOffset' | 'color'> {
	content: ReactNode;
	children?: ReactElement;
	open?: boolean;
	disabled?: boolean;
}

export const Tooltip = Object.assign(
	function Tooltip({
		ref,
		content,
		children,
		open,
		disabled,
		className,
		sideOffset = 12,
		side,
		color,
		...rest
	}: TooltipProps & {
		ref?: React.Ref<HTMLButtonElement>;
	}) {
		return (
			<TooltipPrimitive.Root open={open}>
				{disabled ? (
					children
				) : (
					<TooltipPrimitive.Trigger ref={ref} {...rest} render={children} />
				)}
				<Content
					color={color}
					side={side}
					sideOffset={sideOffset}
					className={className}
				>
					{content}
				</Content>
			</TooltipPrimitive.Root>
		);
	},
	{
		Trigger: TooltipPrimitive.Trigger,
		Content,
		createHandle: TooltipPrimitive.createHandle,
	},
);
