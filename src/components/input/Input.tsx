import { Input as BaseUIInput } from '@base-ui/react/input';
import classNames from 'clsx';
import {
	ChangeEvent,
	ComponentPropsWithRef,
	FocusEvent,
	useCallback,
} from 'react';
import { useRotatingShuffledValue } from '../../hooks/useRotatingShuffledValue.js';

export const inputClassName = classNames(
	'layer-components:(min-w-60px select-auto border-width-thin rounded-lg border-solid px-5 py-1.25 text-md font-inherit shadow-sm shadow-inset transition-shadow color-black bg-white border-gray-dark)',
	'layer-components:focus:(outline-none ring-4 bg-lighten-3 ring-white)',
	'layer-components:focus-visible:(outline-none ring-4 ring-accent)',
	'layer-components:disabled:(shadow-none bg-transparent border-gray placeholder-gray-dark)',
	'layer-components:md:(min-w-120px)',
	'layer-variants:[&[data-size="small"]]:(min-w-40px rounded-md px-md py-xs text-sm)',
);

export interface InputProps extends ComponentPropsWithRef<'input'> {
	autoSelect?: boolean;
	/** Shuffle between random placeholders */
	placeholders?: string[];
	placeholdersIntervalMs?: number;
	onValueChange?: (value: string) => void;
	sizeVariant?: 'default' | 'small';
}

export const Input = function Input({
	className,
	autoSelect,
	onFocus,
	onChange,
	onValueChange,
	placeholders,
	placeholder,
	placeholdersIntervalMs = 5000,
	sizeVariant,
	...props
}: InputProps) {
	const handleFocus = useCallback(
		(ev: FocusEvent<HTMLInputElement>) => {
			if (autoSelect) {
				ev.target.select();
			}
			onFocus?.(ev);
		},
		[onFocus, autoSelect],
	);

	const handleChange = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			onValueChange?.(ev.target.value);
			onChange?.(ev);
		},
		[onChange, onValueChange],
	);

	const randomPlaceholder = useRotatingShuffledValue(
		placeholders ?? [],
		placeholdersIntervalMs,
	);

	return (
		<BaseUIInput
			onFocus={handleFocus}
			onChange={handleChange}
			className={classNames(inputClassName, className)}
			placeholder={placeholder ?? randomPlaceholder}
			data-size={sizeVariant ?? 'default'}
			{...props}
		/>
	);
};
