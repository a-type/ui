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
import inputCls from '../input/Input.module.css';
import { Spinner } from '../spinner/Spinner.js';
import cls from './EmojiPicker.module.css';

export const EmojiPickerRoot = withClassName(
	Core.Root,
	'@mode-dense',
	cls.root,
);
export const EmojiPickerSearch = withClassName(
	Core.Search,
	cls.search,
	inputCls.input,
);
export const EmojiPickerViewport = ({
	className,
	...props
}: EmojiPickerViewportProps) => (
	<Box className={clsx(cls.viewport, className)}>
		<Core.Viewport className={cls.viewportInner} {...props} />
	</Box>
);
export const EmojiPickerLoading = withClassName(
	withProps(Core.Loading, {
		children: <Spinner />,
	}),
	cls.loading,
);
export const EmojiPickerEmpty = withClassName(
	withProps(Core.Empty, {
		children: <>No emoji found</>,
	}),
	cls.empty,
);

export const EmojiPickerCategoryHeader = (
	props: EmojiPickerListCategoryHeaderProps,
) => (
	<div className={clsx(cls.categoryHeader, props.className)}>
		{props.category.label}
	</div>
);
export const EmojiPickerRow = withClassName('div', cls.row);
export const EmojiPickerEmoji = withClassName(
	(p: Omit<EmojiPickerListEmojiProps, 'color'>) => (
		<Button
			{...p}
			emphasis="ghost"
			toggled={p.emoji.isActive}
			toggleMode="color"
			size="small"
			aria-label={p.emoji.label}
			forceIconMode
		>
			<Button.Icon>{p.emoji.emoji}</Button.Icon>
		</Button>
	),
	cls.emoji,
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
			className={clsx(cls.list, className)}
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
export const EmojiPickerSkinToneSelector = ({
	className,
	...props
}: BoxProps) => {
	const [_, __, options] = useSkinTone();
	const [skinTone, setSkinTone] = useEmojiSkinTone();

	return (
		<Box d="row" gap className={className} {...props}>
			{options.map((option) => (
				<Button
					key={option.skinTone}
					emphasis="ghost"
					toggled={option.skinTone === skinTone}
					toggleMode="color"
					size="small"
					aria-label={`Skin tone ${option}`}
					className={cls.skinToneButton}
					onClick={() => setSkinTone(option.skinTone)}
					forceIconMode
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
			<EmojiPickerSkinToneSelector className={cls.skinToneSelector} />
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
