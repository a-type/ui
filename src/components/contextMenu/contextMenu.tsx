import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import classNames from 'clsx';

export const ContextMenuRoot = ContextMenuPrimitive.Root;

export const ContextMenuContent = forwardRef<
	HTMLDivElement,
	ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(function Content({ className, onClick, ...props }, ref) {
	return (
		<ContextMenuPrimitive.Portal>
			<ContextMenuPrimitive.Content
				className={classNames(
					'layer-components:(min-w-120px bg-white rounded-md border-default overflow-hidden p-2 shadow-md z-menu)',
					'layer-components:transform-origin-[var(--radix-context-menu-transform-origin)]',
					'layer-components:[&[data-state=open]]:animate-popover-in',
					'layer-components:[&[data-state=closed]]:animate-popover-out',
					'layer-components:(max-h-[var(--radix-context-menu-content-available-height)] overflow-y-auto)',
					'important:motion-reduce:animate-none',
					className,
				)}
				onClick={(ev) => {
					ev.stopPropagation();
					onClick?.(ev);
				}}
				ref={ref}
				{...props}
			/>
		</ContextMenuPrimitive.Portal>
	);
});

export const ContextMenuArrow = withClassName(
	ContextMenuPrimitive.Arrow,
	'fill-white',
);

export const ContextMenuItem = withClassName(
	ContextMenuPrimitive.Item,
	'flex items-center py-1 px-2 relative pl-25px select-none outline-none cursor-pointer',
	'hover:bg-gray2 [&[data-highlighted=true]]:bg-gray2 [&[data-disabled=true]]:(opacity-50 cursor-default) disabled:(opacity-50 cursor-default)',
);

export const ContextMenuTrigger = withClassName(
	ContextMenuPrimitive.Trigger,
	'',
);

export const ContextMenu = Object.assign(ContextMenuRoot, {
	Content: ContextMenuContent,
	Arrow: ContextMenuArrow,
	Item: ContextMenuItem,
	Trigger: ContextMenuTrigger,
});
