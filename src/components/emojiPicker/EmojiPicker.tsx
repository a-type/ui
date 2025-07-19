import clsx from 'clsx';
import {
	EmojiPicker as Core,
	EmojiPickerListCategoryHeaderProps,
	EmojiPickerListEmojiProps,
	EmojiPickerListProps,
	EmojiPickerRootProps,
	EmojiPickerViewportProps,
	useSkinTone,
} from 'frimousse';
import { withClassName, withProps } from '../../hooks.js';
import { useLocalStorage } from '../../hooks/useStorage.js';
import { Box, BoxProps } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { inputClassName } from '../input/Input.js';
import { Spinner } from '../spinner/Spinner.js';

export const EmojiPickerRoot = withClassName(
	Core.Root,
	'layer-components:(isolate flex flex-col w-fit h-368px gap-sm)',
);
export const EmojiPickerSearch = withClassName(
	Core.Search,
	'layer-components:(z-10)',
	inputClassName,
);
export const EmojiPickerViewport = ({
	className,
	...props
}: EmojiPickerViewportProps) => (
	<Box className="flex-1 min-h-0 overflow-hidden rounded-md bg-white">
		<Core.Viewport
			className="layer-components:(relative outline-hidden)"
			{...props}
		/>
	</Box>
);
export const EmojiPickerLoading = withClassName(
	withProps(Core.Loading, {
		children: <Spinner />,
	}),
	'layer-compoennts:(absolute inset-0 flex items-center justify-center bg-inherit)',
);
export const EmojiPickerEmpty = withClassName(
	withProps(Core.Empty, {
		children: <>No emoji found</>,
	}),
	'layer-components:(absolute inset-0 flex items-center justify-center bg-inherit color-gray-dark text-xs)',
);

export const EmojiPickerCategoryHeader = (
	props: EmojiPickerListCategoryHeaderProps,
) => (
	<div
		className={clsx(
			'layer-components:(bg-inherit px-md py-sm text-xs font-semibold text-gray-dark sticky top-0)',
			props.className,
		)}
	>
		{props.category.label}
	</div>
);
export const EmojiPickerRow = withClassName(
	'div',
	'layer-components:(scroll-my-xs px-xs)',
);
export const EmojiPickerEmoji = withClassName(
	(p: EmojiPickerListEmojiProps) => (
		<Button
			{...p}
			color="ghost"
			toggled={p.emoji.isActive}
			toggleMode="color"
			size="small"
			aria-label={p.emoji.label}
			className="text-lg p-xs"
		>
			<Button.Icon>{p.emoji.emoji}</Button.Icon>
		</Button>
	),
	'',
);

const defaultListComponents = {
	CategoryHeader: EmojiPickerCategoryHeader,
	Row: EmojiPickerRow,
	Emoji: EmojiPickerEmoji,
};

export const EmojiPickerList = ({
	className,
	components,
}: EmojiPickerListProps) => {
	return (
		<Core.List
			className={clsx('layer-components:(select-none pb-md)', className)}
			components={
				components
					? {
							...defaultListComponents,
							...components,
					  }
					: defaultListComponents
			}
		/>
	);
};

export const useEmojiSkinTone = () =>
	useLocalStorage<SkinTone | undefined>('emoji-skin-tone', undefined, false);

export type SkinTone = ReturnType<typeof useSkinTone>[0];
export const EmojiPickerSkinToneSelector = (props: BoxProps) => {
	const [_, __, options] = useSkinTone();
	const [skinTone, setSkinTone] = useEmojiSkinTone();

	return (
		<Box d="row" gap {...props}>
			{options.map((option) => (
				<Button
					key={option.skinTone}
					color="ghost"
					toggled={option.skinTone === skinTone}
					toggleMode="color"
					size="small"
					aria-label={`Skin tone ${option}`}
					className="text-md p-xs"
					onClick={() => setSkinTone(option.skinTone)}
				>
					<Button.Icon>{option.emoji}</Button.Icon>
				</Button>
			))}
		</Box>
	);
};

export interface EmojiPickerProps
	extends Omit<EmojiPickerRootProps, 'emoji' | 'onEmojiSelect'> {
	onValueChange: (value: string, label: string) => void;
}
const EmojiPickerPrefab = ({ onValueChange, ...props }: EmojiPickerProps) => {
	const [skinTone] = useEmojiSkinTone();
	return (
		<EmojiPickerRoot
			{...props}
			onEmojiSelect={(emoji) => onValueChange(emoji.emoji, emoji.label)}
			skinTone={skinTone}
		>
			<EmojiPickerSearch />
			<EmojiPickerViewport>
				<EmojiPickerList />
				<EmojiPickerLoading />
				<EmojiPickerEmpty />
			</EmojiPickerViewport>
			<EmojiPickerSkinToneSelector className="mr-auto" />
		</EmojiPickerRoot>
	);
};

export const EmojiPicker = Object.assign(EmojiPickerPrefab, {
	Root: EmojiPickerRoot,
	Search: EmojiPickerSearch,
	Viewport: EmojiPickerViewport,
	List: EmojiPickerList,
	Loading: EmojiPickerLoading,
	Empty: EmojiPickerEmpty,
	CategoryHeader: EmojiPickerCategoryHeader,
	Row: EmojiPickerRow,
	Emoji: EmojiPickerEmoji,
});
