import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { useIsKeyboardOpen } from '../../hooks.js';

export interface HideWhileKeyboardOpenProps
	extends HTMLAttributes<HTMLDivElement> {
	asChild?: boolean;
}

export const HideWhileKeyboardOpen = function HideWhileKeyboardOpen({
	ref,
	asChild,
	className,
	...rest
}: HideWhileKeyboardOpenProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	const isKeyboardOpen = useIsKeyboardOpen();

	const Comp = asChild ? Slot : 'div';

	return (
		<Comp
			ref={ref}
			className={clsx(isKeyboardOpen && 'layer-responsive:hidden', className)}
			{...rest}
		/>
	);
};
