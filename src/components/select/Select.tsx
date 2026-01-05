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
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { Button, ButtonProps } from '../button/Button.js';
import { getButtonClassName } from '../button/classes.js';
import { Icon } from '../icon/index.js';
import { ArrowSvg } from '../utility/ArrowSvg.js';

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

export const SelectItemRoot = withClassName(
	BaseSelect.Item,
	'layer-components:(text-md leading-4 color-black flex items-center flex-row h-36px pr-4 pl-35px min-h-touch-large relative select-none)',
	'layer-components:[&[data-disabled]]:(color-gray pointer-events-none) [&[data-highlighted]]:(outline-none bg-gray-light color-black)',
);
export const SelectItemIndicatorRoot = withClassName(
	BaseSelect.ItemIndicator,
	'layer-components:(absolute left-0 w-25px inline-flex items-center justify-center)',
);
export const SelectItemIndicator = (props: SelectItemIndicatorProps) => (
	<SelectItemIndicatorRoot {...props}>
		<Icon name="check" />
	</SelectItemIndicatorRoot>
);
export const SelectItemText = withClassName(BaseSelect.ItemText, '');
export const SelectGroup = BaseSelect.Group;

export const SelectRoot = BaseSelect.Root;
export const selectTriggerClassName = classNames(
	getButtonClassName({}),
	'layer-components:([all:unset] inline-flex data-[placeholder]:color-gray-dark)',
);
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
		<UnstyledSelectTrigger
			{...props}
			className="layer-components:(font-normal)"
			ref={ref}
			render={render || <Button className="gap-2 font-normal" />}
		>
			{children || (
				<>
					<SelectValue />
					<SelectIcon />
				</>
			)}
		</UnstyledSelectTrigger>
	);
};

export const SelectValue = withClassName(BaseSelect.Value, 'flex flex-row');
export const SelectGroupLabel = withClassName(
	BaseSelect.GroupLabel,
	'px-25px text-xs leading-6 color-black select-none',
);
export const SelectSeparator = withClassName(
	BaseSelect.Separator,
	'h-1px bg-gray-light m-1',
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
			className={classNames('color-inherit ml-auto', className)}
			{...props}
			ref={forwardedRef}
		>
			<Icon name="chevron" className="w-[12px] h-[12px] relative top-1px" />
		</BaseSelect.Icon>
	);
};

export const SelectArrow = ({ className, ...props }: SelectArrowProps) => (
	<BaseSelect.Arrow
		className={clsx('layer-components:arrow', className)}
		{...props}
	>
		<ArrowSvg />
	</BaseSelect.Arrow>
);

const scrollArrowClass = clsx(
	'layer-components:(w-full bg-white z-1 text-center cursor-default select-none rounded-sm h-1rem text-xs flex items-center justify-center)',
	'layer-components:before:(content-empty absolute w-full h-full left-0)',
	'layer-components:data-[direction=up]:data-[side=none]:before:(-top-full)',
	'layer-components:data-[direction=down]:(bottom-0 data-[side=none]:before:(-bottom-full))',
);

const contentStyle = {
	zIndex: 1001,
	'--local-corner-scale': '1',
} as React.CSSProperties;
const viewportStyle = { '--local-corner-scale': '0.9' } as React.CSSProperties;
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
			<GroupScaleReset>
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
					className={classNames(
						'layer-components:(z-1 outline-none select-none)',
						'layer-components:(transform-origin-[--transform-origin])',
					)}
				>
					<SelectArrow
						className={clsx(
							'layer-components:(border-black transition transform)',
							'layer-components:data-[closed]:(opacity-0 scale-0)',
							'layer-components:data-[open]:(opacity-100 scale-100)',
						)}
					/>
					<BaseSelect.Popup
						className={classNames(
							'layer-components:(overflow-hidden bg-white rounded-md border border-solid border border-black shadow-lg bg-clip-padding transition)',
							'layer-components:transform-origin-[var(--transform-origin)]',
							'layer-components:data-[starting-style]:data-[side=bottom]:(opacity-0 translate-y-4px)',
							'layer-components:data-[ending-style]:data-[side=bottom]:(opacity-0 translate-y-4px)',
							'layer-components:data-[starting-style]:data-[side=top]:(opacity-0 translate-y--4px)',
							'layer-components:data-[ending-style]:data-[side=top]:(opacity-0 translate-y-0)',
							'layer-components:data-[starting-style]:data-[side=right]:(opacity-0 translate-x-4px)',
							'layer-components:data-[ending-style]:data-[side=right]:(opacity-0 translate-x-0)',
							'layer-components:data-[starting-style]:data-[side=left]:(opacity-0 translate-x--4px)',
							'layer-components:data-[ending-style]:data-[side=left]:(opacity-0 translate-x-0)',
							'important:motion-reduce:animate-none',
							'layer-components:data-[side=none]:(translate-y-0px min-w-[calc(var(--anchor-width)+2rem)])',
							'layer-components:(min-w-[var(--anchor-width)] max-h-[var(--available-height)])',
							className,
						)}
						style={contentStyle}
						{...props}
						ref={forwardedRef}
					>
						<BaseSelect.ScrollUpArrow className={scrollArrowClass}>
							<Icon name="chevron" className="rotate-180" />
						</BaseSelect.ScrollUpArrow>
						<BaseSelect.List style={viewportStyle}>{children}</BaseSelect.List>
						<BaseSelect.ScrollDownArrow className={scrollArrowClass}>
							<Icon name="chevron" />
						</BaseSelect.ScrollDownArrow>
					</BaseSelect.Popup>
				</BaseSelect.Positioner>
			</GroupScaleReset>
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
