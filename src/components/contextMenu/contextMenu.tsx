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
							'layer-components:start-end:(scale-95 opacity-0)',
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
	'layer-components:(relative min-h-touch-large flex cursor-pointer select-none items-center overflow-hidden px-2 py-sm pl-25px outline-none)',
	'layer-components:[&[data-highlighted=true]]:bg-main-light layer-components:hover:bg-main-light',
	'layer-components:disabled:cursor-default) layer-components:[&[data-disabled=true]]:(cursor-default opacity-50) layer-components:disabled:(opacity-50)',
);

export const ContextMenuTrigger = withClassName(BaseContextMenu.Trigger, '');

export const ContextMenu = Object.assign(ContextMenuRoot, {
	Content: ContextMenuContent,
	Arrow: ContextMenuArrow,
	Item: ContextMenuItem,
	Trigger: ContextMenuTrigger,
});
