import {
	Collapsible as BaseCollapsible,
	CollapsiblePanelProps,
	CollapsibleRootProps,
} from '@base-ui/react/collapsible';
import { Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import cls from './Collapsible.module.css';

export const CollapsibleRoot = BaseCollapsible.Root;
const CollapsibleContentBase = withClassName(BaseCollapsible.Panel, cls.root);

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

export const CollapsibleIcon = withClassName('span', cls.icon);

export const Collapsible = Object.assign(CollapsibleRoot, {
	Content: CollapsibleContent,
	Trigger: CollapsibleTrigger,
	Simple: CollapsibleSimple,
	Icon: CollapsibleIcon,
});
