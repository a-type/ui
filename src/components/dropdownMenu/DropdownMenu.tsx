'use client';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import classNames, { clsx } from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';

const StyledContent = withClassName(
	DropdownMenuPrimitive.Content,
	'min-w-220px bg-white z-menu shadow-lg rounded-lg border-default',
	'layer-components:transform-origin-[var(--radix-dropdown-menu-transform-origin)]',
	'layer-components:[&[data-state=open]]:animate-popover-in',
	'layer-components:[&[data-state=closed]]:animate-popover-out',
	'layer-components:(max-h-[var(--radix-dropdown-menu-content-available-height)])',
	'important:motion-reduce:animate-none',
	'will-change-transform',
);
const itemClassName = classNames(
	'layer-components:(text-md leading-4 color-black flex items-center pr-4 pl-8 py-2 relative text-left select-none cursor-pointer)',
	'layer-components:[&[data-disabled]]:(color-black pointer-events-none)',
	'layer-components:focus-visible:(bg-gray-light bg-darken-0.5 color-black)',
	'layer-components:focus:outline-none',
);
const StyledItemBase = withClassName(DropdownMenuPrimitive.Item, itemClassName);
export interface DropdownMenuItemProps
	extends DropdownMenuPrimitive.DropdownMenuItemProps {
	color?: 'default' | 'destructive';
	ref?: Ref<HTMLDivElement>;
}
const StyledItem = ({
	ref: forwardedRef,
	className,
	color,
	...props
}: DropdownMenuItemProps) => {
	return (
		<StyledItemBase
			{...props}
			className={clsx(
				color === 'destructive' &&
					'layer-variants:(text-attention-dark hover:bg-attention-wash focus-visible:bg-attention-wash)',
				className,
			)}
			ref={forwardedRef}
		/>
	);
};
const StyledCheckboxItem = withClassName(
	DropdownMenuPrimitive.CheckboxItem,
	itemClassName,
);
const StyledRadioItem = withClassName(
	DropdownMenuPrimitive.RadioItem,
	itemClassName,
);

const StyledLabel = withClassName(
	DropdownMenuPrimitive.Label,
	'pl-3 py-1 font-bold text-sm leading-6 color-gray-dark',
);

const StyledSeparator = withClassName(
	DropdownMenuPrimitive.Separator,
	'h-1px bg-gray5 m-5px',
);

const StyledItemIndicator = withClassName(
	DropdownMenuPrimitive.ItemIndicator,
	'absolute left-0 w-25px inline-flex items-center justify-center',
);

const StyledArrow = withClassName(
	DropdownMenuPrimitive.Arrow,
	'fill-white stroke-black stroke-1',
);

const StyledTrigger = withClassName(
	DropdownMenuPrimitive.Trigger,
	'select-none',
);

const StyledPortal = DropdownMenuPrimitive.Portal;

// Exports
export const DropdownMenuRoot = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = StyledTrigger;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

export const DropdownMenuContent = ({
	children,
	forceMount,
	...props
}: DropdownMenuPrimitive.DropdownMenuContentProps & {
	forceMount?: boolean;
}) => {
	return (
		<StyledPortal forceMount={forceMount}>
			<StyledContent {...props}>
				<div className="overflow-hidden rounded-lg">{children}</div>
				<StyledArrow />
			</StyledContent>
		</StyledPortal>
	);
};

export const DropdownMenuItemRightSlot = withClassName('div', 'ml-auto');

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
	Content: DropdownMenuContent,
	Trigger: StyledTrigger,
	Item: StyledItem,
	CheckboxItem: StyledCheckboxItem,
	RadioGroup: DropdownMenuPrimitive.RadioGroup,
	RadioItem: StyledRadioItem,
	ItemIndicator: StyledItemIndicator,
	Label: StyledLabel,
	Separator: StyledSeparator,
	Arrow: StyledArrow,
	ItemRightSlot: DropdownMenuItemRightSlot,
});
