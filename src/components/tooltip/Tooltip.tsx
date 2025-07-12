'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'clsx';
import { BoxContext } from '../box/Box.js';

export interface TooltipContentProps
	extends TooltipPrimitive.TooltipContentProps {
	color?: 'contrast' | 'white' | 'neutral' | 'attention';
}

function Content({
	children,
	className,
	color = 'contrast',
	...props
}: TooltipPrimitive.TooltipContentProps) {
	return (
		<TooltipPrimitive.Portal>
			<BoxContext.Provider value={{ spacingScale: 1 }}>
				<TooltipPrimitive.Content
					className={classNames(
						'layer-components:(relative rounded-sm py-2 px-3 text-sm leading-tight shadow-sm select-none hidden z-tooltip)',
						'[&[data-state=delayed-open]]:flex',
						'[&[data-state=instant-open]]:flex',
						'layer-components:transform-origin-[var(--radix-tooltip-content-transform-origin)]',
						'layer-components:[&[data-state=delayed-open]]:animate-popover-in',
						{
							'layer-variants:(bg-black color-white)': color === 'contrast',
							'layer-variants:(bg-white color-black)':
								color === 'white' || color === 'neutral',
							'layer-variants:(bg-attention-ink color-white)':
								color === 'attention',
						},
						className,
					)}
					{...props}
				>
					{children}
					<TooltipPrimitive.Arrow className="layer-components:arrow" />
				</TooltipPrimitive.Content>
			</BoxContext.Provider>
		</TooltipPrimitive.Portal>
	);
}

export const TooltipProvider = TooltipPrimitive.Provider;

export interface TooltipProps
	extends Omit<TooltipPrimitive.TooltipTriggerProps, 'content'> {
	content: React.ReactNode;
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
	} & Pick<TooltipContentProps, 'color' | 'sideOffset' | 'side'>) {
		return (
			<TooltipPrimitive.Root open={open}>
				{disabled ? (
					children
				) : (
					<TooltipPrimitive.TooltipTrigger asChild ref={ref} {...rest}>
						{children}
					</TooltipPrimitive.TooltipTrigger>
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
		Trigger: TooltipPrimitive.TooltipTrigger,
		Content,
	},
);
