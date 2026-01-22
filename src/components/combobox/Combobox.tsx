import { ButtonProps } from '@base-ui/react/button';
import * as BaseCombobox from '@base-ui/react/combobox';
import clsx from 'clsx';
import {
	createContext,
	ReactNode,
	Ref,
	useContext,
	useRef,
	useState,
} from 'react';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';
import { Button } from '../button/Button.js';
import { Chip, ChipProps } from '../chip/Chip.js';
import { Icon } from '../icon/Icon.js';
import { Input, InputProps } from '../input/Input.js';
import {
	arrowClassName,
	itemClassName,
	itemListClassName,
	popupClassName,
	separatorClassName,
} from '../primitives/menus.js';
import { ArrowSvg } from '../utility/ArrowSvg.js';
import { SlotDiv } from '../utility/SlotDiv.js';

export const comboboxPopupClassName = clsx(
	popupClassName,
	'layer-components:w-[--anchor-width]',
);

export const comboboxBackdropClassName = clsx(
	'layer-components:(fixed inset-0)',
);

export const comboboxListClassName = clsx(
	itemListClassName,
	'layer-components:(flex flex-col overscroll-contain outline-none overflow-y-auto overflow-unstable)',
	'layer-components:empty:(p-0)',
);

export const comboboxIconClassName = clsx(
	'icon',
	'layer-components:(flex shrink-0 items-center justify-center transition-transform)',
	'layer-components:data-[open]:(rotate-180)',
);

export const comboboxEmptyClassName = clsx(
	'layer-components:[&:not(:empty)]:(p-sm text-sm color-gray-dark)',
);

export const comboboxGroupClassName = clsx(
	'layer-components:(flex flex-col gap-xs overflow-hidden p-sm)',
);

export const comboboxGroupItemListClassName = clsx(
	'layer-components:(flex flex-row flex-wrap gap-xs)',
);

export const comboboxGroupLabelClassName = clsx(
	'layer-components:(w-full px-xs text-xs font-medium uppercase color-gray-dark)',
);

export const comboboxRowClassName = clsx(
	'layer-components:(flex items-center gap-xs)',
);

export const comboboxGroupItemClassName = clsx(
	'layer-composed-2:(bg-white)',
	'layer-composed-2:data-[highlighted]:(ring-2 bg-main-wash ring-primary)',
);

export interface ComboboxInputProps
	extends Omit<BaseCombobox.ComboboxInputProps, 'className' | 'render'> {
	ref?: React.Ref<HTMLInputElement>;
	icon?: ReactNode;
	disableCaret?: boolean;
	disableClear?: boolean;
	children?: ReactNode;
	className?: string;
}

export function ComboboxComposedInput({
	open,
	ref,
	className,
	icon,
	children,
	disableCaret,
	disableClear,
	...props
}: ComboboxInputProps & {
	className?: string;
	ref?: React.Ref<HTMLInputElement>;
	open: boolean;
	disableCaret?: boolean;
	disableClear?: boolean;
	children?: React.ReactNode;
	icon?: React.ReactNode;
	render?: InputProps['render'];
}) {
	const hasValue = !!useContext(ComboboxValueContext);
	return (
		<Input.Border ref={ref} className={className}>
			{icon}
			<Input.Input autoComplete="off" {...props} />
			{((!disableClear && hasValue) || !disableCaret) && (
				<div className="flex items-center">
					{!disableClear && hasValue && <ComboboxClear />}
					{!disableCaret && <ComboboxTrigger open={open} />}
				</div>
			)}
			{children}
		</Input.Border>
	);
}

export const ComboboxValueContext = createContext<any>(null);

const ComboboxCreatableContext = createContext<{
	onInputEnter?: (value: string) => void;
	inputValue: string;
	showCreatableItem?: boolean;
}>({
	inputValue: '',
});

const createableSymbol = Symbol('combobox-creatable');
function makeCreatableItem(input: string) {
	const item: any = {
		[createableSymbol]: true,
		value: input,
		label: input,
		key: input,
		id: input,
	};
	return item;
}
function isCreatableItem(item: any): item is { value: string; label: string } {
	return !!item?.[createableSymbol];
}
function getCreateableItem(value: any) {
	if (isCreatableItem(value)) {
		return value;
	}
	if (Array.isArray(value)) {
		return value.find((v) => isCreatableItem(v));
	}
	return null;
}
function matchItem(
	items: readonly any[],
	itemToStringLabel: ((item: any) => string) | undefined,
	input: string | number | readonly string[],
) {
	return items.find((item) => {
		const label = itemToStringLabel
			? itemToStringLabel(item)
			: item?.label || item?.value || '';
		return label.toLowerCase() === input.toString().trim().toLowerCase();
	});
}

export interface ComboboxProps<TItem>
	extends BaseCombobox.ComboboxRootProps<TItem> {
	onCreate?: (value: string) => void;
	showCreatableItem?: boolean;
}
const ComboboxRoot = ({
	onCreate,
	items: userItems,
	onItemHighlighted,
	itemToStringLabel: userItemToStringLabel,
	inputValue: userInputValue,
	onInputValueChange: userOnInputValueChange,
	onValueChange: userOnValueChange,
	showCreatableItem,
	...props
}: ComboboxProps<any>) => {
	const highlightedItemRef = useRef<any>(null);
	const handleItemHighlighted = (
		item: any,
		ev: BaseCombobox.ComboboxRootHighlightEventDetails,
	) => {
		highlightedItemRef.current = item;
		onItemHighlighted?.(item, ev);
	};
	const onInputEnter = onCreate
		? (value: string) => {
				if (highlightedItemRef.current) return;
				onCreate(value);
		  }
		: undefined;

	const [internalInputValue, setInternalInputValue] = useState(
		userInputValue || props.defaultInputValue || '',
	);

	const inputValue = (
		userInputValue === undefined ? internalInputValue : userInputValue
	).toString();
	const canCreate = !!(
		showCreatableItem &&
		onCreate &&
		inputValue &&
		!matchItem(userItems ?? [], userItemToStringLabel, inputValue)
	);
	const items = canCreate
		? userItems
			? [...userItems, makeCreatableItem(inputValue)]
			: [makeCreatableItem(inputValue)]
		: userItems;

	return (
		<ComboboxCreatableContext.Provider
			value={{ inputValue, onInputEnter, showCreatableItem: canCreate }}
		>
			<ComboboxValueContext.Provider value={props.value || null}>
				<BaseCombobox.Combobox.Root
					{...props}
					items={items}
					inputValue={userInputValue}
					itemToStringLabel={userItemToStringLabel}
					onInputValueChange={(value, ev) => {
						if (userInputValue === undefined) {
							setInternalInputValue(value);
						}
						userOnInputValueChange?.(value, ev);
					}}
					onValueChange={(value, ev) => {
						const creatable = getCreateableItem(value);
						if (creatable) {
							onCreate?.(creatable.value);
							if (value === creatable) {
								return;
							}
							if (Array.isArray(value)) {
								value = value.filter((v) => v !== creatable);
							}
						}

						userOnValueChange?.(value, ev);
					}}
					onItemHighlighted={handleItemHighlighted}
				/>
			</ComboboxValueContext.Provider>
		</ComboboxCreatableContext.Provider>
	);
};

function ComboboxTrigger({
	children,
	open,
	...props
}: BaseCombobox.ComboboxTriggerProps & {
	open?: boolean;
}) {
	return (
		<BaseCombobox.Combobox.Trigger
			render={<Button emphasis="ghost" size="small" />}
			{...props}
		>
			{children ?? <ComboboxIcon data-open={open} />}
		</BaseCombobox.Combobox.Trigger>
	);
}

function ComboboxInput({
	disableCaret,
	disableClear,
	icon,
	children,
	onKeyDown: userOnKeyDown,
	...outerProps
}: ComboboxInputProps) {
	const { onInputEnter } = useContext(ComboboxCreatableContext);
	const handleKeyDown: ComboboxInputProps['onKeyDown'] = (ev) => {
		if (ev.key === 'Enter' && onInputEnter) {
			onInputEnter(ev.currentTarget.value);
		}
		userOnKeyDown?.(ev);
	};
	return (
		<BaseCombobox.Combobox.Input
			onKeyDown={handleKeyDown}
			render={(props, state) => (
				<ComboboxComposedInput
					{...props}
					open={state.open}
					disableCaret={disableCaret}
					disableClear={disableClear}
					icon={icon}
				>
					{children}
				</ComboboxComposedInput>
			)}
			{...outerProps}
		/>
	);
}

function ComboboxIcon({ className, ...props }: BaseCombobox.ComboboxIconProps) {
	return (
		<BaseCombobox.Combobox.Icon
			{...props}
			className={clsx(comboboxIconClassName, className)}
		>
			<Icon name="chevron" />
		</BaseCombobox.Combobox.Icon>
	);
}

const ComboboxPopup = withClassName(
	BaseCombobox.Combobox.Popup,
	comboboxPopupClassName,
);

const ComboboxBackdrop = withClassName(
	BaseCombobox.Combobox.Backdrop,
	comboboxBackdropClassName,
);

function ComboboxArrow({
	className,
	...props
}: BaseCombobox.ComboboxArrowProps) {
	return (
		<BaseCombobox.Combobox.Arrow
			{...props}
			className={clsx(arrowClassName, className)}
		>
			<ArrowSvg />
		</BaseCombobox.Combobox.Arrow>
	);
}

export interface ComboboxPopupProps extends BaseCombobox.ComboboxPopupProps {
	positioner?: BaseCombobox.ComboboxPositionerProps;
	ref?: Ref<HTMLDivElement>;
	arrow?: boolean;
}
function ComboboxContent({
	positioner,
	arrow,
	children,
	...props
}: ComboboxPopupProps) {
	return (
		<BaseCombobox.Combobox.Portal>
			<ComboboxBackdrop />
			<BaseCombobox.Combobox.Positioner sideOffset={8} {...positioner}>
				<ComboboxPopup {...props}>
					{arrow && <ComboboxArrow />}
					{children}
				</ComboboxPopup>
			</BaseCombobox.Combobox.Positioner>
		</BaseCombobox.Combobox.Portal>
	);
}

function ComboboxList({ className, ...props }: BaseCombobox.ComboboxListProps) {
	return (
		<BaseCombobox.Combobox.List
			className={clsx(comboboxListClassName, className)}
			{...props}
		/>
	);
}

const ComboboxEmpty = withClassName(
	BaseCombobox.Combobox.Empty,
	comboboxEmptyClassName,
);

export interface ComboboxItemProps extends BaseCombobox.ComboboxItemProps {
	ref?: Ref<HTMLDivElement>;
	color?: PaletteName;
}
function ComboboxItem({
	className,
	color = 'gray',
	...props
}: ComboboxItemProps) {
	return (
		<BaseCombobox.Combobox.Item
			{...props}
			className={clsx(color && `palette-${color}`, itemClassName, className)}
		/>
	);
}

const ComboboxGroup = withClassName(
	BaseCombobox.Combobox.Group,
	comboboxGroupClassName,
);

const ComboboxGroupItemList = withClassName(
	SlotDiv,
	comboboxGroupItemListClassName,
);

const ComboboxGroupLabel = withClassName(
	BaseCombobox.Combobox.GroupLabel,
	comboboxGroupLabelClassName,
);

const ComboboxRow = withClassName(
	BaseCombobox.Combobox.Row,
	comboboxRowClassName,
);

const ComboboxSeparator = withClassName(
	BaseCombobox.Combobox.Separator,
	separatorClassName,
);

export interface ComboboxGroupItemProps
	extends Omit<BaseCombobox.ComboboxItemProps, 'render'> {
	ref?: Ref<HTMLDivElement>;
	replace?: BaseCombobox.ComboboxItemProps['render'];
	render?: ChipProps['render'];
}
function ComboboxGroupItem({
	className,
	replace,
	render,
	...props
}: ComboboxGroupItemProps) {
	return (
		<BaseCombobox.Combobox.Item
			render={replace ?? <Button render={<Chip render={render} />} />}
			{...props}
			className={clsx(comboboxGroupItemClassName, className)}
		/>
	);
}

export type ComboboxClearProps = ButtonProps & {
	ref?: Ref<HTMLButtonElement>;
	children?: ReactNode;
};
function ComboboxClear({ children, ...props }: ComboboxClearProps) {
	return (
		<BaseCombobox.Combobox.Clear
			render={<Button emphasis="ghost" size="small" />}
			{...props}
		>
			{children ?? <Icon name="x" />}
		</BaseCombobox.Combobox.Clear>
	);
}

const baseSubComponents = {
	useFilter: BaseCombobox.Combobox.useFilter,

	makeCreatableItem,
	isCreatableItem,

	Input: ComboboxInput,
	Content: ComboboxContent,
	Empty: ComboboxEmpty,
	List: ComboboxList,
	Item: ComboboxItem,
	Group: ComboboxGroup,
	GroupItemList: ComboboxGroupItemList,
	GroupLabel: ComboboxGroupLabel,
	Row: ComboboxRow,
	Separator: ComboboxSeparator,
	ItemGroup: ComboboxGroupItem,
	Icon: ComboboxIcon,
	Clear: ComboboxClear,

	Positioner: BaseCombobox.Combobox.Positioner,
	Portal: BaseCombobox.Combobox.Portal,
	Backdrop: ComboboxBackdrop,
	Arrow: ComboboxArrow,
	Popup: ComboboxPopup,

	ListItem: ComboboxItem,
	GroupItem: ComboboxGroupItem,

	Unstyled: BaseCombobox.Combobox,
};

function createCombobox<TItem>() {
	function TypedRoot(
		props: Omit<ComboboxProps<TItem>, 'items'> & {
			items?: readonly TItem[];
		},
	) {
		return <ComboboxRoot {...(props as any)} />;
	}
	function TypedList(
		props: Omit<BaseCombobox.ComboboxListProps, 'children'> & {
			children?: ReactNode | ((item: TItem, index: number) => ReactNode);
		},
	) {
		return <ComboboxList {...(props as any)} />;
	}
	function TypedItem(
		props: Omit<ComboboxItemProps, 'value'> & {
			value: TItem;
		},
	) {
		return <ComboboxItem {...(props as any)} />;
	}
	return Object.assign(TypedRoot, {
		...baseSubComponents,
		Item: TypedItem,
		List: TypedList,
	});
}

function createComboboxGrouped<TItemGroup extends { items: readonly any[] }>() {
	function TypedRoot(
		props: Omit<ComboboxProps<TItemGroup['items'][number]>, 'items'> & {
			items?: readonly TItemGroup[];
		},
	) {
		return <ComboboxRoot {...(props as any)} />;
	}
	function TypedList(
		props: Omit<BaseCombobox.ComboboxListProps, 'children'> & {
			children?: ReactNode | ((item: TItemGroup, index: number) => ReactNode);
		},
	) {
		return <ComboboxList {...(props as any)} />;
	}
	function TypedItem(
		props: Omit<ComboboxGroupItemProps, 'value'> & {
			value: TItemGroup['items'][number];
		},
	) {
		return <ComboboxGroupItem {...(props as any)} />;
	}
	return Object.assign(TypedRoot, {
		...baseSubComponents,
		Item: TypedItem,
		List: TypedList,
		Group: ComboboxGroup,
		GroupList: ComboboxGroupItemList,
		GroupLabel: ComboboxGroupLabel,
		Row: ComboboxRow,
	});
}

export const Combobox = Object.assign(ComboboxRoot, {
	create: createCombobox,
	createGrouped: createComboboxGrouped,

	...baseSubComponents,
});
