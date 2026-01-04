import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { useIsKeyboardOpen } from '../../hooks.js';
import { SlotDiv } from './SlotDiv.js';

export interface HideWhileKeyboardOpenProps
	extends HTMLAttributes<HTMLDivElement> {}

export const HideWhileKeyboardOpen = function HideWhileKeyboardOpen({
	ref,
	className,
	...rest
}: HideWhileKeyboardOpenProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	const isKeyboardOpen = useIsKeyboardOpen();

	return (
		<SlotDiv
			ref={ref}
			className={clsx(isKeyboardOpen && 'layer-responsive:hidden', className)}
			{...rest}
		/>
	);
};
