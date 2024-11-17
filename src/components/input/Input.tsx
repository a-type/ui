import classNames from 'clsx';
import {
	ComponentProps,
	FocusEvent,
	forwardRef,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { Slot } from '@radix-ui/react-slot';

export const inputClassName = classNames(
	'layer-components:(px-5 py-[5px] text-md font-sans rounded-full bg-white select-auto min-w-60px color-black border-solid border-1 border-gray-7 shadow-sm-inset)',
	'layer-components:focus:(outline-none bg-gray-1 ring-4	ring-white)',
	'layer-components:focus-visible:(outline-none ring-gray-dark-blend)',
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
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{
		className,
		autoSelect,
		onFocus,
		variant: _,
		asChild,
		placeholders,
		placeholder,
		placeholdersIntervalMs = 5000,
		...props
	},
	ref,
) {
	const handleFocus = useCallback(
		(ev: FocusEvent<HTMLInputElement>) => {
			if (autoSelect) {
				ev.target.select();
			}
			onFocus?.(ev);
		},
		[onFocus, autoSelect],
	);

	const [randomPlaceholder, setRandomPlaceholder] = useState<
		string | undefined
	>(
		placeholders
			? placeholders[Math.floor(Math.random() * placeholders.length)]
			: undefined,
	);
	useEffect(() => {
		if (placeholders) {
			const interval = setInterval(() => {
				setRandomPlaceholder(
					placeholders[Math.floor(Math.random() * placeholders.length)],
				);
			}, placeholdersIntervalMs);
			return () => clearInterval(interval);
		}
	}, [placeholders, placeholdersIntervalMs]);

	const Component = asChild ? Slot : 'input';

	return (
		<Component
			{...props}
			onFocus={handleFocus}
			className={classNames(inputClassName, className)}
			ref={ref}
			placeholder={placeholder ?? randomPlaceholder}
		/>
	);
});
