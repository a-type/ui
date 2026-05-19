import {
	TooltipPopupProps,
	TooltipPositionerProps,
	Tooltip as TooltipPrimitive,
	TooltipTriggerProps,
} from '@base-ui/react/tooltip';
import classNames from 'clsx';
import { ReactElement, ReactNode } from 'react';
import { ArrowSvg } from '../utility/ArrowSvg.js';

export type * from '@base-ui/react/tooltip';

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
						'layer-components:leading-tight layer-components:(relative flex select-none transition shadow-sm px-sm py-xs rd-sm text-ambient)',
						'layer-components:data-[instant]:transition-none',
						'layer-components:start-end:opacity-0 layer-components:start-end:scale-95',
						'layer-components:transform-origin-[var(--transform-origin)]',
						{
							'layer-variants:color-neutral-paper layer-variants:bg-neutral-ink':
								color === 'contrast',
							'layer-variants:border-gray layer-variants:(color-neutral-ink bg-neutral-paper border)':
								color === 'white' || color === 'neutral',
							'layer-variants:bg-attention-ink layer-variants:color-neutral-paper':
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
