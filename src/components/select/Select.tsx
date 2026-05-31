import {
	Select as BaseSelect,
	SelectArrowProps,
	SelectIconProps,
	SelectItemIndicatorProps,
	SelectItemProps,
	SelectPopupProps,
	SelectPositionerProps,
	SelectRootProps,
} from '@base-ui/react/select';
import classNames, { clsx } from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { Button, ButtonProps } from '../button/Button.js';
import buttonCls from '../button/Button.module.css';
import { Icon } from '../icon/index.js';
import menuCls from '../primitives/menus.module.css';
import { ArrowSvg } from '../utility/ArrowSvg.js';
import cls from './Select.module.css';

export const SelectItem = ({
	ref: forwardedRef,
	children,
	className,
	...props
}: SelectItemProps & {
	ref?: React.Ref<HTMLDivElement>;
}) => {
	return (
		<SelectItemRoot className={className} {...props} ref={forwardedRef}>
			<SelectItemText>{children}</SelectItemText>
			<SelectItemIndicator />
		</SelectItemRoot>
	);
};

export const SelectItemRoot = withClassName(BaseSelect.Item, menuCls.item);
export const SelectItemIndicatorRoot = withClassName(
	BaseSelect.ItemIndicator,
	menuCls.itemIndicator,
);
export const SelectItemIndicator = (props: SelectItemIndicatorProps) => (
	<SelectItemIndicatorRoot {...props}>
		<Icon name="check" />
	</SelectItemIndicatorRoot>
);
export const SelectItemText = withClassName(BaseSelect.ItemText, '');
export const SelectGroup = BaseSelect.Group;

export const SelectRoot = BaseSelect.Root;
export const selectTriggerClassName = classNames(buttonCls.root, cls.trigger);
export const SelectTriggerBase = withClassName(
	BaseSelect.Trigger,
	selectTriggerClassName,
);
export const UnstyledSelectTrigger = BaseSelect.Trigger;

export type SelectTriggerProps = ButtonProps;
export const SelectTrigger = function SelectTrigger({
	ref,
	children,
	render,
	...props
}: SelectTriggerProps & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<UnstyledSelectTrigger {...props} ref={ref} render={render || <Button />}>
			{children || (
				<>
					<SelectValue />
					<SelectIcon />
				</>
			)}
		</UnstyledSelectTrigger>
	);
};

export const SelectValue = withClassName(BaseSelect.Value, cls.value);
export const SelectGroupLabel = withClassName(
	BaseSelect.GroupLabel,
	menuCls.groupLabel,
	cls.groupLabel,
);
export const SelectSeparator = withClassName(
	BaseSelect.Separator,
	menuCls.separator,
);
export const SelectIcon = ({
	ref: forwardedRef,
	className,
	...props
}: SelectIconProps & {
	ref?: React.Ref<HTMLDivElement>;
}) => {
	return (
		<BaseSelect.Icon
			className={classNames(cls.icon, className)}
			{...props}
			ref={forwardedRef}
		>
			<Icon name="chevron" />
		</BaseSelect.Icon>
	);
};

export const SelectArrow = ({ className, ...props }: SelectArrowProps) => (
	<BaseSelect.Arrow className={clsx(menuCls.arrow, className)} {...props}>
		<ArrowSvg />
	</BaseSelect.Arrow>
);

export const SelectContent = ({
	ref: forwardedRef,
	children,
	className,
	side,
	sideOffset = 8,
	align,
	alignOffset,
	alignItemWithTrigger = true,
	disableAnchorTracking,
	arrowPadding,
	anchor,
	collisionAvoidance,
	collisionBoundary,
	collisionPadding,
	sticky,
	positionMethod,
	...props
}: SelectPopupProps &
	SelectPositionerProps & { ref?: Ref<HTMLDivElement> }) => {
	return (
		<BaseSelect.Portal>
			<BaseSelect.Backdrop />
			<BaseSelect.Positioner
				side={side}
				sideOffset={sideOffset}
				align={align}
				alignOffset={alignOffset}
				alignItemWithTrigger={alignItemWithTrigger}
				disableAnchorTracking={disableAnchorTracking}
				arrowPadding={arrowPadding}
				anchor={anchor}
				collisionAvoidance={collisionAvoidance}
				collisionBoundary={collisionBoundary}
				collisionPadding={collisionPadding}
				sticky={sticky}
				positionMethod={positionMethod}
				className={classNames(cls.positioner)}
			>
				<BaseSelect.Popup
					className={classNames(menuCls.popup, cls.popup, className)}
					{...props}
					ref={forwardedRef}
				>
					<SelectArrow />
					<BaseSelect.ScrollUpArrow className={menuCls.scrollArrow}>
						<Icon name="chevron" style={{ transform: 'rotate(180deg)' }} />
					</BaseSelect.ScrollUpArrow>
					<BaseSelect.List className={menuCls.itemList}>
						{children}
					</BaseSelect.List>
					<BaseSelect.ScrollDownArrow className={menuCls.scrollArrow}>
						<Icon name="chevron" />
					</BaseSelect.ScrollDownArrow>
				</BaseSelect.Popup>
			</BaseSelect.Positioner>
		</BaseSelect.Portal>
	);
};

export interface SelectProps<T extends string = string>
	extends SelectRootProps<T> {}
const SelectBase = SelectRoot;

export const Select = Object.assign(SelectBase, {
	Root: SelectRoot,
	Item: SelectItem,
	Group: SelectGroup,
	Trigger: SelectTrigger,
	Value: SelectValue,
	GroupLabel: SelectGroupLabel,
	Separator: SelectSeparator,
	Icon: SelectIcon,
	Content: SelectContent,
	Arrow: SelectArrow,
	ItemRoot: SelectItemRoot,
	ItemText: SelectItemText,
	ItemIndicator: SelectItemIndicator,
});
