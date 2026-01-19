import {
	AutocompleteArrowProps,
	Autocomplete as BaseAutocomplete,
	AutocompleteGroupProps as BaseAutocompleteGroupProps,
	AutocompleteInputProps as BaseAutocompleteInputProps,
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
import { createContext, ReactNode, useContext } from 'react';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';
import { Button } from '../button/Button.js';
import { Chip, ChipProps } from '../chip/Chip.js';
import { Icon } from '../icon/Icon.js';
import { Input } from '../input/Input.js';
import {
	arrowClassName,
	itemClassName,
	itemListClassName,
	popupClassName,
	separatorClassName,
} from '../primitives/menus.js';
import { ArrowSvg } from '../utility/ArrowSvg.js';
import { SlotDiv } from '../utility/SlotDiv.js';

const ValueContext = createContext<string | number | readonly string[] | null>(
	null,
);

const AutocompleteRoot = (props: BaseAutocompleteRootProps<any>) => {
	return (
		<ValueContext.Provider value={props.value || null}>
			<BaseAutocomplete.Root {...props} />
		</ValueContext.Provider>
	);
};

export interface AutocompleteInputProps extends BaseAutocompleteInputProps {
	ref?: React.Ref<HTMLInputElement>;
	icon?: ReactNode;
	disableCaret?: boolean;
}
const AutocompleteInput = ({
	disableCaret,
	icon,
	...props
}: AutocompleteInputProps) => {
	const valueFromContext = useContext(ValueContext);
	return (
		<BaseAutocomplete.Input
			render={({ ref, className, ...props }, state) => (
				<Input.Border ref={ref} className={className}>
					{icon}
					<Input.Input autoComplete="off" {...props} />
					{(valueFromContext !== null || !disableCaret) && (
						<div className="flex items-center">
							{valueFromContext !== null && <AutocompleteClear />}
							{!disableCaret && (
								<BaseAutocomplete.Trigger
									render={<Button emphasis="ghost" size="small" />}
								>
									<AutocompleteIcon data-open={state.open ? true : undefined} />
								</BaseAutocomplete.Trigger>
							)}
						</div>
					)}
				</Input.Border>
			)}
			{...props}
		/>
	);
};

const AutocompleteIcon = withClassName(
	({ className, ...props }: BaseAutocompleteIconProps) => (
		<BaseAutocomplete.Icon
			{...props}
			className={clsx(
				'icon',
				'layer-components:(flex shrink-0 items-center justify-center transition-transform)',
				'layer-components:data-[open]:(rotate-180)',
				className,
			)}
		>
			<Icon name="chevron" />
		</BaseAutocomplete.Icon>
	),
);

const AutocompletePopup = withClassName(
	BaseAutocomplete.Popup,
	popupClassName,
	'layer-components:(w-[--anchor-width])',
);

const AutocompleteBackdrop = withClassName(
	BaseAutocomplete.Backdrop,
	'layer-components:(fixed inset-0)',
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
	itemListClassName,
	'layer-components:(flex flex-col overscroll-contain outline-none overflow-y-auto overflow-unstable)',
	'layer-components:empty:(p-0)',
);

const AutocompleteEmpty = withClassName(
	BaseAutocomplete.Empty,
	'layer-components:[&:not(:empty)]:(p-sm text-sm color-gray-dark)',
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
			className={clsx(
				'layer-components:(flex flex-col gap-xs overflow-hidden p-sm)',
				className,
			)}
		/>
	);
};

const AutocompleteGroupItemList = withClassName(
	SlotDiv,
	'layer-components:(flex flex-row flex-wrap gap-xs)',
);

const AutocompleteGroupLabel = withClassName(
	BaseAutocomplete.GroupLabel,
	'layer-components:(w-full px-xs text-xs font-medium uppercase color-gray-dark)',
);

const AutocompleteRow: React.FC<BaseAutocompleteRowProps> = withClassName(
	BaseAutocomplete.Row,
	'layer-components:(flex items-center gap-xs)',
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
			className={clsx(
				'palette-primary',
				'layer-composed-2:(bg-white)',
				'layer-composed-2:data-[highlighted]:(ring-2 bg-main-wash ring-primary)',
				className,
			)}
		/>
	);
}

export type AutocompleteClearProps = ButtonProps & {
	ref?: React.Ref<HTMLButtonElement>;
	children?: ReactNode;
};
const AutocompleteClear = ({ children, ...props }: AutocompleteClearProps) => (
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
			items: readonly TItem[];
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
		Input: AutocompleteInput,
		Content: AutocompleteContent,
		List: TypedList,
		Empty: AutocompleteEmpty,
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
