import {
	ContextMenu as BaseContextMenu,
	ContextMenuPopupProps,
} from '@base-ui/react/context-menu';
import classNames from 'clsx';
import { withClassName } from '../../hooks/withClassName.js';
import menuCls from '../primitives/menus.module.css';

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
				<BaseContextMenu.Popup
					className={classNames(
						menuCls.popup,

						className,
					)}
					onClick={(ev) => {
						ev.stopPropagation();
						onClick?.(ev);
					}}
					ref={ref}
					{...props}
				/>
			</BaseContextMenu.Positioner>
		</BaseContextMenu.Portal>
	);
};

export const ContextMenuArrow = withClassName(
	BaseContextMenu.Arrow,
	menuCls.arrow,
);

export const ContextMenuItem = withClassName(
	BaseContextMenu.Item,
	'@mode-gray',
	menuCls.item,
);

export const ContextMenuTrigger = withClassName(BaseContextMenu.Trigger, '');

export const ContextMenu = Object.assign(ContextMenuRoot, {
	Content: ContextMenuContent,
	Arrow: ContextMenuArrow,
	Item: ContextMenuItem,
	Trigger: ContextMenuTrigger,
});
