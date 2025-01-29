import { Slot } from '@radix-ui/react-slot';
import classNames from 'clsx';
import { ChangeEvent, ComponentProps, FocusEvent, useCallback } from 'react';
import { useRotatingShuffledValue } from '../../hooks/useRotatingShuffledValue.js';

export const inputClassName = classNames(
	'layer-components:(px-5 py-1.25 text-md font-sans rounded-xl bg-white select-auto min-w-60px color-black border-solid border border-gray-5 shadow-sm-inset)',
	'layer-components:focus:(outline-none bg-gray-1 ring-4	ring-white)',
	'layer-components:focus-visible:(outline-none ring-gray-dark-blend)',
	'layer-components:disabled:(bg-transparent border-gray-5 placeholder-gray-7 shadow-none)',
	'layer-components:md:(min-w-120px)',
);

export interface InputProps extends ComponentProps<'input'> {
	/** @deprecated */
	variant?: 'default' | 'primary';
	autoSelect?: boolean;
	asChild?: boolean;
	/** Shuffle between random placeholders */
	placeholders?: string[];
	placeholdersIntervalMs?: number;
	onValueChange?: (value: string) => void;
}

export const Input = function Input({
	ref,
	className,
	autoSelect,
	onFocus,
	onChange,
	onValueChange,
	variant: _,
	asChild,
	placeholders,
	placeholder,
	placeholdersIntervalMs = 5000,
	...props
}: InputProps & {
	ref?: React.Ref<HTMLInputElement>;
}) {
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
			{...props}
			onFocus={handleFocus}
			onChange={handleChange}
			className={classNames(inputClassName, className)}
			ref={ref}
			placeholder={placeholder ?? randomPlaceholder}
		/>
	);
};
