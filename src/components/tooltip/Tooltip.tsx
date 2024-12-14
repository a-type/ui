'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'clsx';

function Content({
	children,
	className,
	...props
}: TooltipPrimitive.TooltipContentProps) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				className={classNames(
					'layer-components:(relative rounded-md py-2 px-3 bg-black text-white text-sm leading-tight shadow-sm select-none hidden z-tooltip sm:display-initial)',
					'[&[data-state=delayed-open]]:display-initial',
					'[&[data-state=instant-open]]:display-initial',
					'layer-components:transform-origin-[var(--radix-tooltip-content-transform-origin)]',
					'layer-components:[&[data-state=delayed-open]]:animate-popover-in',
					className,
				)}
				{...props}
			>
				{children}
				<TooltipPrimitive.Arrow className="fill-black" />
			</TooltipPrimitive.Content>
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
		...rest
	}: TooltipProps & {
		ref?: React.Ref<HTMLButtonElement>;
	}) {
		return (
			<TooltipPrimitive.Root open={open}>
				{disabled ? (
					children
				) : (
					<TooltipPrimitive.TooltipTrigger asChild ref={ref} {...rest}>
						{children}
					</TooltipPrimitive.TooltipTrigger>
				)}
				<Content sideOffset={12}>{content}</Content>
			</TooltipPrimitive.Root>
		);
	},
	{
		Trigger: TooltipPrimitive.TooltipTrigger,
		Content,
	},
);
