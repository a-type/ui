'use client';
import {
	Collapsible as BaseCollapsible,
	CollapsiblePanelProps,
	CollapsibleRootProps,
} from '@base-ui/react/collapsible';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';

export const CollapsibleRoot = BaseCollapsible.Root;
const CollapsibleContentBase = withClassName(
	BaseCollapsible.Panel,
	'overflow-hidden transition-all',
	'data-[horizontal]:w-[--collapsible-panel-width] data-[vertical]:h-[--collapsible-panel-height]',
	'data-[both]:(h-[--collapsible-panel-height] w-[--collapsible-panel-width])',
	'start-end:data-[vertical]:(h-0)',
	'start-end:data-[both]:(h-0 w-0)',
	'start-end:data-[horizontal]:(w-0)',
	'data-[hidden]:[&:not([hidden="until-found"])]:(hidden)',
);
// specifically removing className... it's causing problems?
export const CollapsibleContent = function CollapsibleContent({
	ref,
	horizontal,
	both,
	...props
}: CollapsiblePanelProps & {
	horizontal?: boolean;
	both?: boolean;
	ref?: Ref<HTMLDivElement>;
}) {
	const extraProps: any = {};
	if (horizontal) {
		extraProps['data-horizontal'] = true;
	} else if (both) {
		extraProps['data-both'] = true;
	} else {
		extraProps['data-vertical'] = true;
	}
	return <CollapsibleContentBase {...extraProps} {...props} ref={ref} />;
};
export const CollapsibleTrigger = BaseCollapsible.Trigger;

export const CollapsibleSimple = ({
	horizontal,
	both,
	children,
	...props
}: CollapsibleRootProps & {
	horizontal?: boolean;
	both?: boolean;
}) => (
	<CollapsibleRoot {...props}>
		<CollapsibleContent horizontal={horizontal} both={both}>
			{children}
		</CollapsibleContent>
	</CollapsibleRoot>
);

export const CollapsibleIcon = withClassName(
	'span',
	'layer-components:transition-transform',
	'layer-components:[[data-panel-open]_&]:rotate-180',
);

export const Collapsible = Object.assign(CollapsibleRoot, {
	Content: CollapsibleContent,
	Trigger: CollapsibleTrigger,
	Simple: CollapsibleSimple,
	Icon: CollapsibleIcon,
});
