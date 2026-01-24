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
	'layer-components:(relative h-36px min-h-touch-large flex flex-row select-none items-center pl-35px pr-4 text-md leading-4 color-black)',
	'[&[data-highlighted]]:(outline-none color-black bg-gray-light) layer-components:[&[data-disabled]]:(pointer-events-none color-gray)',
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
	'select-none px-25px text-xs leading-6 color-black',
);
export const SelectSeparator = withClassName(
	BaseSelect.Separator,
	'm-1 h-1px bg-gray-light',
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
			className={classNames('ml-auto color-inherit', className)}
			{...props}
			ref={forwardedRef}
		>
			<Icon name="chevron" className="relative top-1px h-[12px] w-[12px]" />
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
	'layer-components:(z-1 h-1rem w-full flex cursor-default select-none items-center justify-center rounded-sm text-center text-xs bg-white)',
	'layer-components:before:(absolute left-0 h-full w-full content-empty)',
	'layer-components:data-[direction=up]:data-[side=none]:before:(-top-full)',
	'layer-components:data-[direction=down]:(bottom-0 data-[side=none]:before:-bottom-full)',
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
						'layer-components:(z-1 select-none outline-none)',
						'layer-components:(transform-origin-[--transform-origin])',
					)}
				>
					<SelectArrow
						className={clsx(
							'layer-components:(transform transition border-black)',
							'layer-components:data-[closed]:(scale-0 opacity-0)',
							'layer-components:data-[open]:(scale-100 opacity-100)',
						)}
					/>
					<BaseSelect.Popup
						className={classNames(
							'layer-components:(overflow-hidden border border rounded-md border-solid bg-clip-padding shadow-lg transition bg-white border-black)',
							'layer-components:transform-origin-[var(--transform-origin)]',
							'layer-components:data-[starting-style]:data-[side=bottom]:(translate-y-4px opacity-0)',
							'layer-components:data-[ending-style]:data-[side=bottom]:(translate-y-4px opacity-0)',
							'layer-components:data-[starting-style]:data-[side=top]:(translate-y--4px opacity-0)',
							'layer-components:data-[ending-style]:data-[side=top]:(translate-y-0 opacity-0)',
							'layer-components:data-[starting-style]:data-[side=right]:(translate-x-4px opacity-0)',
							'layer-components:data-[ending-style]:data-[side=right]:(translate-x-0 opacity-0)',
							'layer-components:data-[starting-style]:data-[side=left]:(translate-x--4px opacity-0)',
							'layer-components:data-[ending-style]:data-[side=left]:(translate-x-0 opacity-0)',
							'important:motion-reduce:animate-none',
							'layer-components:data-[side=none]:(min-w-[calc(var(--anchor-width)+2rem)] translate-y-0px)',
							'layer-components:(max-h-[var(--available-height)] min-w-[var(--anchor-width)])',
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
