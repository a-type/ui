import * as BaseCombobox from '@base-ui/react/combobox';
import clsx from 'clsx';
import {
	createContext,
	CSSProperties,
	ReactNode,
	Ref,
	RefObject,
	useContext,
	useRef,
	useState,
} from 'react';
import { withClassName } from '../../hooks.js';
import { Button } from '../button/Button.js';
import { ButtonProps } from '../button/index.js';
import { Chip, ChipProps } from '../chip/Chip.js';
import { Icon } from '../icon/Icon.js';
import { Input, InputProps } from '../input/Input.js';
import menuCls from '../primitives/menus.module.css';
import { ArrowSvg } from '../utility/ArrowSvg.js';
import { SlotDiv, SlotDivProps } from '../utility/SlotDiv.js';
import cls from './Combobox.module.css';

export interface ComboboxInputProps
	extends Omit<
		BaseCombobox.ComboboxInputProps,
		'className' | 'style' | 'render'
	> {
	ref?: React.Ref<HTMLInputElement>;
	icon?: ReactNode;
	disableCaret?: boolean;
	disableClear?: boolean;
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export function ComboboxComposedInput({
	open,
	ref,
	className,
	icon,
	children,
	disableCaret,
	disableClear,
	style,
	...props
}: ComboboxInputProps & {
	className?: string;
	ref?: React.Ref<HTMLDivElement>;
	open: boolean;
	disableCaret?: boolean;
	disableClear?: boolean;
	children?: React.ReactNode;
	icon?: React.ReactNode;
	render?: InputProps['render'];
}) {
	const hasValue = !!useContext(ComboboxValueContext);
	const isInChips = useContext(ComboboxChipsContext);

	const clearAndCaret = ((!disableClear && hasValue) || !disableCaret) && (
		<div className={cls.clearAndCaret}>
			{!disableClear && hasValue && <ComboboxClear />}
			{!disableCaret && <ComboboxTrigger open={open} />}
		</div>
	);

	if (isInChips) {
		return (
			<div
				ref={ref}
				className={clsx(cls.chipInputWrapper, className)}
				style={style}
			>
				<BaseCombobox.Combobox.Input
					render={<Input.Input />}
					autoComplete="off"
					className={clsx(cls.chipInput)}
					minLength={3}
					{...props}
				/>
				{clearAndCaret}
				{children}
			</div>
		);
	}

	return (
		<Input.Border ref={ref} className={className} style={style}>
			{icon}
			<BaseCombobox.Combobox.Input
				render={<Input.Input />}
				autoComplete="off"
				minLength={3}
				{...props}
			/>
			{clearAndCaret}
			{children}
		</Input.Border>
	);
}

export const ComboboxValueContext = createContext<any>(null);

const ComboboxCreatableContext = createContext<{
	onCreate?: (value: string) => void;
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

export interface ComboboxProps<
	TItem,
	Multiple extends boolean | undefined = false,
> extends BaseCombobox.ComboboxRootProps<TItem, Multiple> {
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
}: ComboboxProps<any, any>) => {
	const highlightedItemRef = useRef<any>(null);
	const handleItemHighlighted = (
		item: any,
		ev: BaseCombobox.ComboboxRootHighlightEventDetails,
	) => {
		highlightedItemRef.current = item;
		onItemHighlighted?.(item, ev);
	};
	const handleCreate = onCreate
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

	const anchorRef = useRef<HTMLDivElement>(null);

	return (
		<ComboboxAnchorContext.Provider value={anchorRef}>
			<ComboboxCreatableContext.Provider
				value={{
					inputValue,
					onCreate: handleCreate,
					showCreatableItem: canCreate,
				}}
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
		</ComboboxAnchorContext.Provider>
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
			{children ?? <ComboboxIcon data-open={open ? true : undefined} />}
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
	const { onCreate: onInputEnter } = useContext(ComboboxCreatableContext);
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

function ComboboxCreateButton({ onClick, ...props }: ButtonProps) {
	const { onCreate: onInputEnter, inputValue } = useContext(
		ComboboxCreatableContext,
	);
	return (
		<Button
			onClick={(ev) => {
				onInputEnter?.(inputValue);
				onClick?.(ev);
			}}
			{...props}
		/>
	);
}

const ComboboxAnchorContext =
	createContext<RefObject<HTMLDivElement | null> | null>(null);

const ComboboxChipsContext = createContext(false);

function ComboboxChips({
	className,
	...props
}: BaseCombobox.ComboboxChipsProps) {
	const anchorRef = useContext(ComboboxAnchorContext);
	return (
		<ComboboxChipsContext.Provider value={true}>
			<BaseCombobox.Combobox.Chips
				ref={anchorRef || undefined}
				className={clsx(cls.chips, className)}
				render={<Input.Border />}
				{...props}
			/>
		</ComboboxChipsContext.Provider>
	);
}

const ComboboxChipsList = withClassName(SlotDiv, cls.chipsList);

function ComboboxChip({
	className,
	children,
	color = 'gray',
	...props
}: BaseCombobox.ComboboxChipProps & {
	color?: ChipProps['color'];
}) {
	return (
		<BaseCombobox.Combobox.Chip
			render={<Chip color={color} />}
			className={clsx(cls.chip, className)}
			{...props}
		>
			{children}
			<BaseCombobox.Combobox.ChipRemove
				className="@mode-denser"
				render={
					<Button emphasis="ghost" className={cls.chipRemove}>
						<Icon name="x" size={10} />
					</Button>
				}
			/>
		</BaseCombobox.Combobox.Chip>
	);
}

function ComboboxIcon({ className, ...props }: BaseCombobox.ComboboxIconProps) {
	return (
		<BaseCombobox.Combobox.Icon
			{...props}
			className={clsx(cls.icon, className)}
			data-icon
		>
			<Icon name="chevron" />
		</BaseCombobox.Combobox.Icon>
	);
}

const ComboboxPopup = withClassName(
	BaseCombobox.Combobox.Popup,
	menuCls.popup,
	cls.popup,
);

const ComboboxBackdrop = withClassName(
	BaseCombobox.Combobox.Backdrop,
	cls.backdrop,
);

function ComboboxArrow({
	className,
	...props
}: BaseCombobox.ComboboxArrowProps) {
	return (
		<BaseCombobox.Combobox.Arrow
			{...props}
			className={clsx(menuCls.arrow, className)}
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
	const anchorRef = useContext(ComboboxAnchorContext);
	return (
		<BaseCombobox.Combobox.Portal>
			<ComboboxBackdrop />
			<BaseCombobox.Combobox.Positioner
				sideOffset={8}
				anchor={anchorRef}
				{...positioner}
			>
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
			className={clsx(cls.list, className)}
			{...props}
		/>
	);
}

const ComboboxEmpty = withClassName(BaseCombobox.Combobox.Empty, cls.empty);

export interface ComboboxItemProps extends BaseCombobox.ComboboxItemProps {
	ref?: Ref<HTMLDivElement>;
}
function ComboboxItem({ className, children, ...props }: ComboboxItemProps) {
	return (
		<BaseCombobox.Combobox.Item
			{...props}
			className={clsx(menuCls.item, cls.item, className)}
		>
			{children}
			<ComboboxItemIndicator />
		</BaseCombobox.Combobox.Item>
	);
}

const ComboboxItemIndicator = withClassName(
	(props: BaseCombobox.ComboboxItemIndicatorProps) => (
		<BaseCombobox.Combobox.ItemIndicator
			{...props}
			render={({ children: _, ...rest }) => <Icon name="check" {...rest} />}
		/>
	),
	cls.itemIndicator,
);

const ComboboxGroup = withClassName(BaseCombobox.Combobox.Group, cls.group);

const ComboboxGroupItemList = withClassName(SlotDiv, cls.groupItemList);

const ComboboxGroupLabel = withClassName(
	BaseCombobox.Combobox.GroupLabel,
	cls.groupLabel,
);

const ComboboxRow = withClassName(BaseCombobox.Combobox.Row, cls.row);

const ComboboxSeparator = withClassName(
	BaseCombobox.Combobox.Separator,
	menuCls.separator,
);

export interface ComboboxGroupItemProps
	extends Omit<BaseCombobox.ComboboxItemProps, 'render'> {
	ref?: Ref<HTMLDivElement>;
	replace?: BaseCombobox.ComboboxItemProps['render'];
	render?: ChipProps['render'];
	color?: ChipProps['color'];
	emphasis?: ChipProps['emphasis'];
}
function ComboboxGroupItem({
	className,
	replace,
	render,
	color = 'gray',
	emphasis = 'default',
	children,
	...props
}: ComboboxGroupItemProps) {
	return (
		<BaseCombobox.Combobox.Item
			render={
				replace ?? (
					<Button
						render={<Chip render={render} color={color} emphasis={emphasis} />}
					/>
				)
			}
			{...props}
			className={clsx(cls.groupItem, cls.item, className)}
		>
			{children}
			<ComboboxItemIndicator className={cls.itemIndicator} />
		</BaseCombobox.Combobox.Item>
	);
}

export interface ComboboxMultiValueProps
	extends BaseCombobox.ComboboxValueProps,
		Omit<SlotDivProps, 'children'> {}
function ComboboxMultiValue({
	children,
	className,
	...props
}: ComboboxMultiValueProps) {
	return (
		<SlotDiv className={clsx(cls.multiValue, className)} {...props}>
			<BaseCombobox.Combobox.Value>{children}</BaseCombobox.Combobox.Value>
		</SlotDiv>
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

const Details = withClassName(SlotDiv, cls.details);

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
	Chips: ComboboxChips,
	Chip: ComboboxChip,
	ChipsList: ComboboxChipsList,
	CreateButton: ComboboxCreateButton,

	Value: BaseCombobox.Combobox.Value,
	MultiValue: ComboboxMultiValue,
	Positioner: BaseCombobox.Combobox.Positioner,
	Portal: BaseCombobox.Combobox.Portal,
	Backdrop: ComboboxBackdrop,
	Arrow: ComboboxArrow,
	Popup: ComboboxPopup,

	ListItem: ComboboxItem,
	GroupItem: ComboboxGroupItem,

	Unstyled: BaseCombobox.Combobox,
	Details,
};

function createCombobox<TItem>() {
	function TypedRoot(
		props: Omit<ComboboxProps<TItem, false>, 'items'> & {
			items?: readonly TItem[];
		},
	) {
		return <ComboboxRoot {...props} />;
	}
	function TypedMultiRoot(
		props: Omit<ComboboxProps<TItem, true>, 'items'> & {
			items?: readonly TItem[];
		},
	) {
		return <ComboboxRoot multiple {...props} />;
	}
	function TypedList(
		props: Omit<BaseCombobox.ComboboxListProps, 'children'> & {
			children?: ReactNode | ((item: TItem, index: number) => ReactNode);
		},
	) {
		return <ComboboxList {...props} />;
	}
	function TypedItem(
		props: Omit<ComboboxItemProps, 'value'> & {
			value: TItem;
		},
	) {
		return <ComboboxItem {...props} />;
	}
	function TypedValue(
		props: Omit<BaseCombobox.ComboboxValueProps, 'children'> & {
			children?: ReactNode | ((item: TItem | null) => ReactNode);
		},
	) {
		return <BaseCombobox.Combobox.Value {...props} />;
	}
	function TypedMultiValue(
		props: Omit<ComboboxMultiValueProps, 'children'> & {
			children?: ReactNode | ((items: TItem[]) => ReactNode);
		},
	) {
		return <ComboboxMultiValue {...props} />;
	}
	return Object.assign(TypedRoot, {
		...baseSubComponents,
		Multi: TypedMultiRoot,
		Item: TypedItem,
		List: TypedList,
		Value: TypedValue,
		MultiValue: TypedMultiValue,
	});
}

function createComboboxGrouped<TItemGroup extends { items: readonly any[] }>() {
	function TypedRoot(
		props: Omit<ComboboxProps<TItemGroup['items'][number], false>, 'items'> & {
			items?: readonly TItemGroup[];
		},
	) {
		return <ComboboxRoot {...(props as any)} />;
	}
	function TypedMultiRoot(
		props: Omit<ComboboxProps<TItemGroup['items'][number], true>, 'items'> & {
			items?: readonly TItemGroup[];
		},
	) {
		return <ComboboxRoot multiple {...(props as any)} />;
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
	function TypedValue(
		props: Omit<BaseCombobox.ComboboxValueProps, 'children'> & {
			children?:
				| ReactNode
				| ((item: TItemGroup['items'][number] | null) => ReactNode);
		},
	) {
		return <BaseCombobox.Combobox.Value {...props} />;
	}
	function TypedMultiValue(
		props: Omit<ComboboxMultiValueProps, 'children'> & {
			children?:
				| ReactNode
				| ((items: TItemGroup['items'][number][]) => ReactNode);
		},
	) {
		return <ComboboxMultiValue {...props} />;
	}
	return Object.assign(TypedRoot, {
		...baseSubComponents,
		Multi: TypedMultiRoot,
		Item: TypedItem,
		List: TypedList,
		Group: ComboboxGroup,
		GroupList: ComboboxGroupItemList,
		GroupLabel: ComboboxGroupLabel,
		Row: ComboboxRow,
		Value: TypedValue,
		MultiValue: TypedMultiValue,
	});
}

export const Combobox = Object.assign(ComboboxRoot, {
	create: createCombobox,
	createGrouped: createComboboxGrouped,

	...baseSubComponents,
});
