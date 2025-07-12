import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import classNames from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { BoxContext } from '../box/Box.js';

export const ContextMenuRoot = ContextMenuPrimitive.Root;

export const ContextMenuContent = function Content({
	ref,
	className,
	onClick,
	...props
}: ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	return (
		<ContextMenuPrimitive.Portal>
			<BoxContext.Provider value={{ spacingScale: 1 }}>
				<ContextMenuPrimitive.Content
					className={classNames(
						'layer-components:(min-w-120px bg-white rounded-sm overflow-hidden p-1 border-gray-dark border shadow-md z-menu)',
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
					alignOffset={-10}
					{...props}
				/>
			</BoxContext.Provider>
		</ContextMenuPrimitive.Portal>
	);
};

export const ContextMenuArrow = withClassName(
	ContextMenuPrimitive.Arrow,
	'layer-components:(arrow)',
);

export const ContextMenuItem = withClassName(
	ContextMenuPrimitive.Item,
	'layer-components:(flex items-center py-1 px-2 relative pl-25px select-none outline-none cursor-pointer rounded-sm)',
	'layer-components:[&:first-of-type]:rounded-t-md',
	'layer-components:[&:last-of-type]:rounded-b-md',
	'layer-components:(hover:bg-gray-light [&[data-highlighted=true]]:bg-gray-light [&[data-disabled=true]]:(opacity-50 cursor-default) disabled:(opacity-50 cursor-default))',
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
