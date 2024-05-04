import classNames from 'clsx';
import {
	ComponentProps,
	ComponentPropsWithRef,
	FocusEvent,
	forwardRef,
	useCallback,
} from 'react';

export const inputClassName = classNames(
	'layer-components:(px-4 py-2 text-md font-sans rounded-lg bg-white select-auto min-w-60px color-black border-default)',
	'layer-components:focus:(outline-none bg-gray2)',
	'layer-components:focus-visible:(outline-none shadow-focus)',
	'layer-components:md:(min-w-120px)',
);

export interface InputProps extends ComponentProps<'input'> {
	variant?: 'default' | 'primary';
	autoSelect?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ className, autoSelect, onFocus, variant = 'default', ...props },
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

	return (
		<input
			{...props}
			onFocus={handleFocus}
			className={classNames(
				inputClassName,
				{
					'rounded-full': variant === 'primary',
				},
				className,
			)}
			ref={ref}
		/>
	);
});
