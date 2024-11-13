import { Slot } from '@radix-ui/react-slot';
import { useIsKeyboardOpen } from '../../hooks.js';
import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface HideWhileKeyboardOpenProps
	extends HTMLAttributes<HTMLDivElement> {
	asChild?: boolean;
}

export const HideWhileKeyboardOpen = forwardRef<
	HTMLDivElement,
	HideWhileKeyboardOpenProps
>(function HideWhileKeyboardOpen({ asChild, className, ...rest }, ref) {
	const isKeyboardOpen = useIsKeyboardOpen();

	const Comp = asChild ? Slot : 'div';

	return (
		<Comp
			ref={ref}
			className={clsx(isKeyboardOpen && 'layer-responsive:hidden', className)}
			{...rest}
		/>
	);
});
