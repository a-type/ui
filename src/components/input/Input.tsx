import { Slot } from '@radix-ui/react-slot';
import classNames from 'clsx';
import {
	ChangeEvent,
	ComponentPropsWithRef,
	FocusEvent,
	useCallback,
} from 'react';
import { useRotatingShuffledValue } from '../../hooks/useRotatingShuffledValue.js';

export const inputClassName = classNames(
	'layer-components:(px-5 py-1.25 text-md font-inherit rounded-lg bg-white select-auto min-w-60px color-black border-solid border-width-thin border-gray-dark shadow-sm-inset)',
	'layer-components:focus:(outline-none bg-lighten-3 ring-4	ring-white)',
	'layer-components:focus-visible:(outline-none ring-gray)',
	'layer-components:disabled:(bg-transparent border-gray placeholder-gray-dark shadow-none)',
	'layer-components:md:(min-w-120px)',
	'layer-variants:[&[data-size="small"]]:(px-md py-xs text-sm rounded-md min-w-40px)',
);

export interface InputProps extends ComponentPropsWithRef<'input'> {
	autoSelect?: boolean;
	asChild?: boolean;
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
	asChild,
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

	const Component = asChild ? Slot : 'input';

	return (
		<Component
			onFocus={handleFocus}
			onChange={handleChange}
			className={classNames(inputClassName, className)}
			placeholder={placeholder ?? randomPlaceholder}
			data-size={sizeVariant ?? 'default'}
			{...props}
		/>
	);
};
