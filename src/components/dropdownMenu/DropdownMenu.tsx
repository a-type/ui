'use client';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import classNames, { clsx } from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { BoxContext } from '../box/Box.js';

const StyledContent = withClassName(
	function DropdownMenuContent(
		props: DropdownMenuPrimitive.DropdownMenuContentProps,
	) {
		return (
			<BoxContext.Provider value={{ spacingScale: 1 }}>
				<DropdownMenuPrimitive.Content {...props} />
			</BoxContext.Provider>
		);
	},
	'layer-components:(min-w-220px bg-white z-menu shadow-lg rounded-md border border-gray-dark)',
	'layer-components:transform-origin-[var(--radix-dropdown-menu-transform-origin)]',
	'layer-components:[&[data-state=open]]:animate-popover-in',
	'layer-components:[&[data-state=closed]]:animate-popover-out',
	'layer-components:(max-h-[var(--radix-dropdown-menu-content-available-height)])',
	'important:motion-reduce:animate-none',
	'will-change-transform',
);
const itemClassName = classNames(
	'layer-components:(text-md leading-4 color-black flex items-center pr-4 pl-8 py-2 relative text-left select-none cursor-pointer)',
	'layer-components:[&[data-disabled]]:(color-gray-dark pointer-events-none)',
	'layer-components:focus-visible:(bg-gray bg-lighten-3 color-black)',
	'layer-components:hover:(bg-gray bg-lighten-3 color-black)',
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
					'layer-variants:(color-attention-dark hover:bg-attention-light focus-visible:bg-attention-light)',
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
	'layer-components:(pl-3 py-1 font-bold text-sm leading-6)',
);

const StyledSeparator = withClassName(
	DropdownMenuPrimitive.Separator,
	'layer-components:(h-1px bg-gray m-5px)',
);

const StyledItemIndicator = withClassName(
	DropdownMenuPrimitive.ItemIndicator,
	'layer-components:(absolute left-0 w-25px inline-flex items-center justify-center)',
);

const StyledArrow = withClassName(
	DropdownMenuPrimitive.Arrow,
	'layer-components:(arrow)',
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
				<div className="overflow-hidden rounded-md">{children}</div>
				<StyledArrow />
			</StyledContent>
		</StyledPortal>
	);
};

export const DropdownMenuItemRightSlot = withClassName('div', 'ml-auto pl-md');

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
