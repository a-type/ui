import {
	AutocompleteArrowProps,
	Autocomplete as BaseAutocomplete,
	AutocompleteGroupProps as BaseAutocompleteGroupProps,
	AutocompleteItemProps as BaseAutocompleteItemProps,
	AutocompleteListProps as BaseAutocompleteListProps,
	AutocompletePopupProps as BaseAutocompletePopupProps,
	AutocompletePositionerProps as BaseAutocompletePositionerProps,
	AutocompleteRootProps as BaseAutocompleteRootProps,
} from '@base-ui/react/autocomplete';
import { ButtonProps } from '@base-ui/react/button';
import {
	ComboboxIconProps as BaseAutocompleteIconProps,
	ComboboxRowProps as BaseAutocompleteRowProps,
} from '@base-ui/react/combobox';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';
import { Button } from '../button/Button.js';
import { Chip, ChipProps } from '../chip/Chip.js';
import {
	comboboxBackdropClassName,
	ComboboxComposedInput,
	comboboxEmptyClassName,
	comboboxGroupClassName,
	comboboxGroupItemClassName,
	comboboxGroupItemListClassName,
	comboboxGroupLabelClassName,
	comboboxIconClassName,
	ComboboxInputProps,
	comboboxListClassName,
	comboboxPopupClassName,
	comboboxRowClassName,
	ComboboxValueContext,
} from '../combobox/Combobox.js';
import { Icon } from '../icon/Icon.js';
import {
	arrowClassName,
	itemClassName,
	separatorClassName,
} from '../primitives/menus.js';
import { ArrowSvg } from '../utility/ArrowSvg.js';
import { SlotDiv } from '../utility/SlotDiv.js';

const AutocompleteRoot = (props: BaseAutocompleteRootProps<any>) => {
	return (
		<ComboboxValueContext.Provider value={props.value || null}>
			<BaseAutocomplete.Root {...props} />
		</ComboboxValueContext.Provider>
	);
};

export interface AutocompleteInputProps extends ComboboxInputProps {
	ref?: React.Ref<HTMLInputElement>;
	icon?: ReactNode;
	disableCaret?: boolean;
	disableClear?: boolean;
	children?: ReactNode;
}
const AutocompleteInput = ({
	disableCaret,
	icon,
	children,
	disableClear,
	...outerProps
}: AutocompleteInputProps) => {
	return (
		<BaseAutocomplete.Input
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
};

export const AutocompleteIcon = withClassName(
	({ className, ...props }: BaseAutocompleteIconProps) => (
		<BaseAutocomplete.Icon
			{...props}
			className={clsx(comboboxIconClassName, className)}
		>
			<Icon name="chevron" />
		</BaseAutocomplete.Icon>
	),
);

const AutocompletePopup = withClassName(
	BaseAutocomplete.Popup,
	comboboxPopupClassName,
);

const AutocompleteBackdrop = withClassName(
	BaseAutocomplete.Backdrop,
	comboboxBackdropClassName,
);

const AutocompleteArrow = ({ className, ...props }: AutocompleteArrowProps) => (
	<BaseAutocomplete.Arrow
		{...props}
		className={clsx(arrowClassName, className)}
	>
		<ArrowSvg />
	</BaseAutocomplete.Arrow>
);

export interface AutocompletePopoupProps extends BaseAutocompletePopupProps {
	positioner?: BaseAutocompletePositionerProps;
	ref?: React.Ref<HTMLDivElement>;
	arrow?: boolean;
}
const AutocompleteContent = ({
	positioner,
	arrow,
	children,
	...props
}: AutocompletePopoupProps) => {
	return (
		<BaseAutocomplete.Portal>
			<AutocompleteBackdrop />
			<BaseAutocomplete.Positioner sideOffset={8} {...positioner}>
				<AutocompletePopup {...props}>
					{arrow && <AutocompleteArrow />}
					{children}
				</AutocompletePopup>
			</BaseAutocomplete.Positioner>
		</BaseAutocomplete.Portal>
	);
};

const AutocompleteList = withClassName(
	BaseAutocomplete.List,
	comboboxListClassName,
);

const AutocompleteEmpty = withClassName(
	BaseAutocomplete.Empty,
	comboboxEmptyClassName,
);

export interface AutocompleteItemProps extends BaseAutocompleteItemProps {
	ref?: React.Ref<HTMLDivElement>;
	color?: PaletteName;
}
const AutocompleteItem = ({
	className,
	color = 'gray',
	...props
}: AutocompleteItemProps) => (
	<BaseAutocomplete.Item
		className={clsx(color && `palette-${color}`, itemClassName, className)}
		{...props}
	/>
);
const AutocompleteGroup = ({
	className,
	...props
}: BaseAutocompleteGroupProps & { ref?: React.Ref<HTMLDivElement> }) => {
	return (
		<BaseAutocomplete.Group
			{...props}
			className={clsx(comboboxGroupClassName, className)}
		/>
	);
};

const AutocompleteGroupItemList = withClassName(
	SlotDiv,
	comboboxGroupItemListClassName,
);

const AutocompleteGroupLabel = withClassName(
	BaseAutocomplete.GroupLabel,
	comboboxGroupLabelClassName,
);

const AutocompleteRow: React.FC<BaseAutocompleteRowProps> = withClassName(
	BaseAutocomplete.Row,
	comboboxRowClassName,
);

const AutocompleteSeparator = withClassName(
	BaseAutocomplete.Separator,
	separatorClassName,
);

export interface AutocompleteGroupItemProps
	extends Omit<BaseAutocompleteItemProps, 'render'> {
	ref?: React.Ref<HTMLDivElement>;
	replace?: BaseAutocompleteItemProps['render'];
	render?: ChipProps['render'];
}
function AutocompleteGroupItem({
	className,
	replace,
	render,
	...props
}: AutocompleteGroupItemProps) {
	return (
		<BaseAutocomplete.Item
			render={replace ?? <Button render={<Chip render={render} />} />}
			{...props}
			className={clsx(comboboxGroupItemClassName, className)}
		/>
	);
}

export type AutocompleteClearProps = ButtonProps & {
	ref?: React.Ref<HTMLButtonElement>;
	children?: ReactNode;
};
export const AutocompleteClear = ({
	children,
	...props
}: AutocompleteClearProps) => (
	<BaseAutocomplete.Clear
		render={<Button emphasis="ghost" size="small" />}
		{...props}
	>
		{children ?? <Icon name="x" />}
	</BaseAutocomplete.Clear>
);

const baseSubComponents = {
	useFilter: BaseAutocomplete.useFilter,

	Input: AutocompleteInput,
	Content: AutocompleteContent,
	Empty: AutocompleteEmpty,
	List: AutocompleteList,
	Item: AutocompleteItem,
	Group: AutocompleteGroup,
	GroupLabel: AutocompleteGroupLabel,
	GroupList: AutocompleteGroupItemList,
	Row: AutocompleteRow,
	Separator: AutocompleteSeparator,
	Clear: AutocompleteClear,

	Positioner: BaseAutocomplete.Positioner,
	Portal: BaseAutocomplete.Portal,
	Popup: AutocompletePopup,
	Backdrop: AutocompleteBackdrop,

	ListItem: AutocompleteItem,
	GroupItem: AutocompleteGroupItem,

	Unstyled: BaseAutocomplete,
};

function createAutocomplete<TItem>() {
	function TypedRoot(
		props: Omit<BaseAutocompleteRootProps<TItem>, 'items'> & {
			items?: readonly TItem[];
		},
	) {
		return <AutocompleteRoot {...(props as any)} />;
	}
	function TypedList(
		props: Omit<BaseAutocompleteListProps, 'children'> & {
			children?: ReactNode | ((item: TItem, index: number) => ReactNode);
		},
	) {
		return <AutocompleteList {...props} />;
	}
	return Object.assign(TypedRoot, {
		...baseSubComponents,
		List: TypedList,
		Item: AutocompleteItem,
	});
}

function createAutocompleteGrouped<
	TItemGroup extends { items: readonly any[] },
>() {
	function TypedRoot(
		props: Omit<
			BaseAutocompleteRootProps<TItemGroup['items'][number]>,
			'items'
		> & {
			items: TItemGroup[];
		},
	) {
		return <AutocompleteRoot {...(props as any)} />;
	}
	function TypedList(
		props: Omit<BaseAutocompleteListProps, 'children'> & {
			children?:
				| ReactNode
				| ((group: TItemGroup, groupIndex: number) => ReactNode);
		},
	) {
		return <AutocompleteList {...props} />;
	}

	return Object.assign(TypedRoot, {
		...baseSubComponents,
		Content: AutocompleteContent,
		Item: AutocompleteGroupItem,
		Input: AutocompleteInput,
		List: TypedList,
		Group: AutocompleteGroup,
		GroupLabel: AutocompleteGroupLabel,
		GroupList: AutocompleteGroupItemList,
		Empty: AutocompleteEmpty,
		Row: AutocompleteRow,
	});
}

export const Autocomplete = Object.assign(AutocompleteRoot, {
	create: createAutocomplete,
	createGrouped: createAutocompleteGrouped,

	...baseSubComponents,
});
