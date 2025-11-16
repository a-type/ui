import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import classNames from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { GroupScaleReset } from '../../systems/GroupScale.js';

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
			<GroupScaleReset>
				<ContextMenuPrimitive.Content
					className={classNames(
						'layer-components:(min-w-120px bg-white rounded-md overflow-hidden border-gray-dark border shadow-md z-menu)',
						'layer-components:transform-origin-[var(--radix-context-menu-transform-origin)]',
						'layer-components:[&[data-state=open]]:animate-popover-in',
						'layer-components:[&[data-state=closed]]:animate-popover-out',
						'layer-components:(max-h-[var(--radix-context-menu-content-available-height)] overflow-y-auto overflow-unstable)',
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
			</GroupScaleReset>
		</ContextMenuPrimitive.Portal>
	);
};

export const ContextMenuArrow = withClassName(
	ContextMenuPrimitive.Arrow,
	'layer-components:arrow',
);

export const ContextMenuItem = withClassName(
	ContextMenuPrimitive.Item,
	'palette-gray',
	'layer-components:(flex items-center overflow-hidden min-h-touch-large py-sm px-2 relative pl-25px select-none outline-none cursor-pointer)',
	'layer-components:hover:bg-main-light layer-components:[&[data-highlighted=true]]:bg-main-light',
	'layer-components:[&[data-disabled=true]]:(opacity-50 cursor-default) layer-components:disabled:(opacity-50 cursor-default))',
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
