'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import classNames from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';

const StyledContent = withClassName(
	PopoverPrimitive.Content,
	'layer-components:(rounded-xl min-w-120px bg-white z-menu shadow-lg border-default op-0 hidden max-w-90vw)',
	'will-change-transform',
	'layer-components:transform-origin-[var(--radix-popover-transform-origin)]',
	'layer-components:[&[data-state=open]]:animate-popover-in',
	'layer-components:[&[data-state=closed]]:animate-popover-out',
	'important:motion-reduce:animate-none',
	'layer-components:(max-h-[var(--radix-popover-content-available-height)])',
	'layer-components:[&[data-state=open]]:(opacity-100 flex flex-col)',
	'layer-components:[&[data-state=closed]]:pointer-events-none',
);

const StyledArrow = withClassName(
	PopoverPrimitive.Arrow,
	'layer-components:(fill-white stroke-black)',
);

const StyledClose = withClassName(
	PopoverPrimitive.Close,
	'layer-components:([all:unset] [font-family:inherit] rounded-lg h-25px w-25px inline-flex items-center justify-center color-dark-blend absolute top-5px right-5px hover:bg-light-blend focus:shadow-focus)',
);

// Exports
export const PopoverRoot = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;
export const PopoverAnchor = PopoverPrimitive.Anchor;

export const PopoverContent = function PopoverContent({
	ref,
	children,
	forceMount,
	disableBlur,
	className,
	radius = 'default',
	padding = 'default',
	...props
}: PopoverPrimitive.PopoverContentProps & {
	radius?: 'none' | 'default' | 'md';
	padding?: 'none' | 'default';
	forceMount?: boolean;
	disableBlur?: boolean;
	ref?: Ref<HTMLDivElement>;
}) {
	return (
		<PopoverPrimitive.Portal forceMount={forceMount}>
			<StyledContent
				{...props}
				forceMount={forceMount}
				ref={ref}
				className={classNames(
					{
						'layer-variants:important:p-0': padding === 'none',
						'layer-variants:p-5': padding === 'default',
						'layer-variants:rounded-none': radius === 'none',
						'layer-variants:rounded-lg': radius === 'default',
						'layer-variants:rounded-md': radius === 'md',
					},
					className,
				)}
			>
				{children}
			</StyledContent>
		</PopoverPrimitive.Portal>
	);
};

export const Popover = Object.assign(PopoverRoot, {
	Content: PopoverContent,
	Arrow: PopoverArrow,
	Close: PopoverClose,
	Trigger: PopoverTrigger,
	Anchor: PopoverAnchor,
});
