import { Slot } from '@radix-ui/react-slot';
import { forwardRef, HTMLProps } from 'react';

export interface SlotDivProps extends HTMLProps<HTMLDivElement> {
	asChild?: boolean;
}
export const SlotDiv = forwardRef<any, SlotDivProps>(function SlotDiv(
	{ asChild, ...rest },
	ref,
) {
	if (asChild) {
		return <Slot ref={ref} {...rest} />;
	}
	return <div ref={ref} {...rest} />;
});
