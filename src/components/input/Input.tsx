import classNames from 'clsx';
import {
	ComponentProps,
	ComponentPropsWithRef,
	FocusEvent,
	forwardRef,
	useCallback,
} from 'react';
import { Slot } from '@radix-ui/react-slot';

export const inputClassName = classNames(
	'layer-components:(px-5 py-[5px] text-md font-sans rounded-full bg-white select-auto min-w-60px color-black border-default shadow-sm-inset)',
	'layer-components:focus:(outline-none bg-gray-1 ring-4	ring-white)',
	'layer-components:focus-visible:(outline-none ring-gray-dark-blend)',
	'layer-components:md:(min-w-120px)',
);

export interface InputProps extends ComponentProps<'input'> {
	/** @deprecated */
	variant?: 'default' | 'primary';
	autoSelect?: boolean;
	asChild?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ className, autoSelect, onFocus, variant: _, asChild, ...props },
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

	const Component = asChild ? Slot : 'input';

	return (
		<Component
			{...props}
			onFocus={handleFocus}
			className={classNames(inputClassName, className)}
			ref={ref}
		/>
	);
});
