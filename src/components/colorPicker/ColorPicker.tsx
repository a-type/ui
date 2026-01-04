import { SelectTriggerProps } from '@base-ui/react/select';
import classNames, { clsx } from 'clsx';
import { ReactNode } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { PaletteName, paletteNames } from '../../uno/index.js';
import { Button } from '../button/index.js';
import { Select } from '../select/Select.js';

export interface ColorPickerProps
	extends Omit<SelectTriggerProps, 'value' | 'onChange' | 'color'> {
	value: PaletteName | null;
	onChange: (value: PaletteName) => void;
	showGray?: boolean;
}

export function ColorPicker({
	value,
	onChange,
	showGray,
	className,
	nativeButton: _,
	...rest
}: ColorPickerProps) {
	const resolvedValue =
		value && paletteNames.includes(value) ? (value as PaletteName) : 'lemon';

	return (
		<Select
			value={resolvedValue}
			onValueChange={(v) => {
				onChange(v as PaletteName);
			}}
		>
			<Select.Trigger
				className={clsx('layer-composed:p-sm', className)}
				{...(rest as any)}
			>
				<Button.Icon render={<ColorSwatch value={resolvedValue} />} />
			</Select.Trigger>
			<Select.Content className="z-[calc(var(--z-dialog)+1)]">
				<Select.Item value="lemon">
					<ColorSwatch value="lemon" />
					<ItemLabel>Lemon</ItemLabel>
				</Select.Item>
				<Select.Item value="tomato">
					<ColorSwatch value="tomato" />
					<ItemLabel>Tomato</ItemLabel>
				</Select.Item>
				<Select.Item value="leek">
					<ColorSwatch value="leek" />
					<ItemLabel>Leek</ItemLabel>
				</Select.Item>
				<Select.Item value="blueberry">
					<ColorSwatch value="blueberry" />
					<ItemLabel>Blueberry</ItemLabel>
				</Select.Item>
				<Select.Item value="eggplant">
					<ColorSwatch value="eggplant" />
					<ItemLabel>Eggplant</ItemLabel>
				</Select.Item>
				{showGray && (
					<Select.Item value="gray">
						<ColorSwatch value="gray" />
						<ItemLabel>Salt</ItemLabel>
					</Select.Item>
				)}
			</Select.Content>
		</Select>
	);
}

const ItemLabel = withClassName('span', 'sr-only');

export function ColorSwatch({
	value,
	children,
	className,
	...rest
}: {
	value: PaletteName;
	children?: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={classNames(
				'bg-main w-16px h-16px rounded-sm',
				`palette-${value ?? 'lemon'}`,
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
}
