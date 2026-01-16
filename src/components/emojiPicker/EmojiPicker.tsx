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
import { Icon } from '../icon/Icon.js';
import { inputClassName } from '../input/Input.js';
import { Spinner } from '../spinner/Spinner.js';

export const EmojiPickerRoot = withClassName(
	Core.Root,
	'layer-components:(isolate flex flex-col w-fit h-368px gap-sm)',
);
export const EmojiPickerSearch = withClassName(
	Core.Search,
	'layer-components:(z-10 min-w-80px)',
	inputClassName,
);
export const EmojiPickerViewport = ({
	className,
	...props
}: EmojiPickerViewportProps) => (
	<Box
		className={clsx(
			'layer-components:(min-h-0 flex-1 overflow-hidden rounded-md bg-white)',
			className,
		)}
	>
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
	'layer-components:(absolute inset-0 flex items-center justify-center bg-inherit)',
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
			'layer-components:(sticky top-0 px-md py-sm text-xs font-semibold color-gray-dark bg-inherit)',
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
	(p: Omit<EmojiPickerListEmojiProps, 'color'>) => (
		<Button
			{...p}
			emphasis="ghost"
			toggled={p.emoji.isActive}
			toggleMode="color"
			size="small"
			aria-label={p.emoji.label}
			className="p-xs text-lg"
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
					emphasis="ghost"
					toggled={option.skinTone === skinTone}
					toggleMode="color"
					size="small"
					aria-label={`Skin tone ${option}`}
					className="p-xs text-md"
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
	onClear?: () => void;
}
const EmojiPickerPrefab = ({
	onValueChange,
	onClear,
	...props
}: EmojiPickerProps) => {
	const [skinTone] = useEmojiSkinTone();
	return (
		<EmojiPickerRoot
			{...props}
			onEmojiSelect={(emoji) => onValueChange(emoji.emoji, emoji.label)}
			skinTone={skinTone}
		>
			<Box col gap items="start" full="width">
				<EmojiPickerSearch />
				{onClear && (
					<Button emphasis="ghost" size="small" onClick={() => onClear()}>
						<Icon name="x" />
						Clear selection
					</Button>
				)}
			</Box>
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
