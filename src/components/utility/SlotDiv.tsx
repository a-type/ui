import { Slot } from '@radix-ui/react-slot';
import { HTMLProps } from 'react';

export interface SlotDivProps extends HTMLProps<HTMLDivElement> {
	asChild?: boolean;
}
export const SlotDiv = function SlotDiv({
	ref,
	asChild,
	...rest
}: SlotDivProps) {
	if (asChild) {
		return <Slot ref={ref} {...rest} />;
	}
	return <div ref={ref} {...rest} />;
};
