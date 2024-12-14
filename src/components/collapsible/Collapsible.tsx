'use client';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';

export const CollapsibleRoot = CollapsiblePrimitive.Root;
const CollapsibleContentBase = withClassName(
	CollapsiblePrimitive.Content,
	'overflow-hidden',
	'layer-components:[&[data-state=open]]:(animate-radix-collapsible-open-vertical animate-duration-300 animate-ease-springy) layer-components:[&[data-state=closed]]:(animate-radix-collapsible-close-vertical animate-duration-300 animate-ease-springy)',
	'layer-variants:[&[data-horizontal][data-state=open]]:(animate-radix-collapsible-open-horizontal animate-duration-300 animate-ease-springy) layer-variants:[&[data-horizontal][data-state=closed]]:(animate-radix-collapsible-close-horizontal animate-duration-300 animate-ease-springy)',
	'layer-variants:[&[data-both][data-state=open]]:(animate-radix-collapsible-open-both animate-duration-300 animate-ease-springy) layer-variants:[&[data-both][data-state=closed]]:(animate-radix-collapsible-close-both animate-duration-300 animate-ease-springy)',
);
// specifically removing className... it's causing problems?
export const CollapsibleContent = function CollapsibleContent({
	ref,
	horizontal,
	both,
	...props
}: CollapsiblePrimitive.CollapsibleContentProps & {
	horizontal?: boolean;
	both?: boolean;
	ref?: Ref<HTMLDivElement>;
}) {
	return (
		<CollapsibleContentBase
			data-horizontal={horizontal}
			data-both={both}
			{...props}
			ref={ref}
		/>
	);
};
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export const CollapsibleSimple = ({
	horizontal,
	both,
	children,
	...props
}: CollapsiblePrimitive.CollapsibleProps & {
	horizontal?: boolean;
	both?: boolean;
}) => (
	<CollapsibleRoot {...props}>
		<CollapsibleContent horizontal={horizontal} both={both}>
			{children}
		</CollapsibleContent>
	</CollapsibleRoot>
);

export const Collapsible = Object.assign(CollapsibleRoot, {
	Content: CollapsibleContent,
	Trigger: CollapsibleTrigger,
	Simple: CollapsibleSimple,
});
