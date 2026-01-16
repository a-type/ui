import {
	ContextMenu as BaseContextMenu,
	ContextMenuPopupProps,
} from '@base-ui/react/context-menu';
import classNames from 'clsx';
import { withClassName } from '../../hooks/withClassName.js';
import { GroupScaleReset } from '../../systems/GroupScale.js';

export const ContextMenuRoot = BaseContextMenu.Root;

export const ContextMenuContent = function Content({
	ref,
	className,
	onClick,
	...props
}: ContextMenuPopupProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	return (
		<BaseContextMenu.Portal>
			<BaseContextMenu.Positioner alignOffset={-10}>
				<GroupScaleReset>
					<BaseContextMenu.Popup
						className={classNames(
							'layer-components:(z-menu min-w-120px overflow-hidden border rounded-md shadow-md bg-white border-gray-dark)',
							'layer-components:transform-origin-[var(--transform-origin)]',
							'layer-components:data-[starting-style]:(scale-95 opacity-0)',
							'layer-components:data-[ending-style]:(scale-95 opacity-0)',
							'layer-components:(overflow-y-auto overflow-unstable)',
							'important:motion-reduce:animate-none',
							'layer-components:(max-h-[--available-height] max-w-[--available-width])',
							className,
						)}
						onClick={(ev) => {
							ev.stopPropagation();
							onClick?.(ev);
						}}
						ref={ref}
						{...props}
					/>
				</GroupScaleReset>
			</BaseContextMenu.Positioner>
		</BaseContextMenu.Portal>
	);
};

export const ContextMenuArrow = withClassName(
	BaseContextMenu.Arrow,
	'layer-components:arrow',
);

export const ContextMenuItem = withClassName(
	BaseContextMenu.Item,
	'palette-gray',
	'layer-components:(flex items-center overflow-hidden min-h-touch-large py-sm px-2 relative pl-25px select-none outline-none cursor-pointer)',
	'layer-components:hover:bg-main-light layer-components:[&[data-highlighted=true]]:bg-main-light',
	'layer-components:[&[data-disabled=true]]:(opacity-50 cursor-default) layer-components:disabled:(opacity-50 cursor-default))',
);

export const ContextMenuTrigger = withClassName(BaseContextMenu.Trigger, '');

export const ContextMenu = Object.assign(ContextMenuRoot, {
	Content: ContextMenuContent,
	Arrow: ContextMenuArrow,
	Item: ContextMenuItem,
	Trigger: ContextMenuTrigger,
});
