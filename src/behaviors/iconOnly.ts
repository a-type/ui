/**
 * Encapsulates tools for achieving an "icon only" automatic behavior for controls and other
 * components which support icons alongside text.
 *
 * Often in designs, we want to modify the padding or shape of a component when it is only
 * housing a single icon.
 *
 * We also want to audit the labeling of icon-only elements when used by developers to ensure
 * they are providing an accessible aria-label for screen readers.
 */

import { useRender, UseRenderComponentProps } from '@base-ui/react';
import { clsx } from 'clsx';
import {
	Children,
	forwardRef,
	Fragment,
	ReactNode,
	useCallback,
	useLayoutEffect,
	useRef,
} from 'react';
import { Icon } from '../components/icon/Icon.js';
import useMergedRef from '../hooks/useMergedRef.js';
import cls from './iconOnly.module.css';

/**
 * Assigns data attributes to an element outside React's render flow
 * based on whether we detect icon or label content within the element.
 * This hook does NOT re-render your component when it updates detected
 * content - use CSS selectors on the data attributes to apply styling
 * customizations instead.
 *
 * Attributes applied:
 * - `data-icon-only`: "true" if at least one child element is detected as an icon and no text content is detected, otherwise "false"
 * - `data-has-icon`: "true" if at least one child element is detected as an icon, otherwise "false"
 * - `data-has-label`: "true" if any text content is detected, otherwise "false"
 * - `data-icon-count`: the number of child elements detected as icons
 *
 */
export function useIconOnlyDataAttributes(
	/**
	 * Pass the component's children to preload icon attributes before initial render, too.
	 * This is not as foolproof as the post-render DOM inspection but is important for avoiding
	 * flashes of inconsistency in the majority of use cases.
	 */
	children: ReactNode | undefined,
): {
	ref: React.Ref<HTMLElement>;
	props: any;
	info: {
		hasIconOnly: boolean;
		hasIcon: boolean;
		hasLabel: boolean;
		iconCount: number;
	};
} {
	const nodeRef = useRef<HTMLElement | null>(null);
	const ref = useCallback((node: HTMLElement | null) => {
		if (node) {
			applyPartAttributesAndAuditLabelUsage(node);
		}
	}, []);

	useLayoutEffect(() => {
		const node = nodeRef.current;
		if (node) {
			const mutationObserver = new MutationObserver((entries) => {
				applyPartAttributesAndAuditLabelUsage(entries[0].target as HTMLElement);
			});
			mutationObserver.observe(node, { childList: true, subtree: true });
			return () => mutationObserver.disconnect();
		}
	}, []);

	const preloadedDataAttributes = getPreloadedIconOnlyDataAttributes(children);

	const finalRef = useMergedRef(nodeRef, ref);
	return {
		ref: finalRef,
		props: preloadedDataAttributes,
		info: {
			hasIconOnly: preloadedDataAttributes['data-icon-only'] === 'true',
			hasIcon: preloadedDataAttributes['data-has-icon'] === 'true',
			hasLabel: preloadedDataAttributes['data-has-label'] === 'true',
			iconCount: Number(preloadedDataAttributes['data-icon-count']),
		},
	};
}

function applyPartAttributesAndAuditLabelUsage(rootElement: HTMLElement) {
	// each child node that's not an icon counts as a label
	const registry = {
		icon: 0,
		label: 0,
	};
	rootElement.childNodes.forEach((child) => {
		if (!(child instanceof HTMLElement || child instanceof SVGElement)) {
			return;
		}
		if (child.style.display === 'none' || child.style.width === '0') {
			// skip hidden elements
			return;
		}
		if (child instanceof HTMLElement || child instanceof SVGElement) {
			// best effort heuristic to detect icons we use:
			// - our Flow Icon and the IconWrapper component below both data-icon=true, most reliable
			// - AntD's Icon component has a class of "anticon" (potentially breakable)
			// - General heuristic "icon" class
			if (
				child.dataset.icon === 'true' ||
				child.classList.contains('anticon') ||
				child.classList.contains('icon')
			) {
				registry.icon++;
			}
		}
	});
	if (rootElement.textContent) {
		registry.label++;
	}
	rootElement.setAttribute('data-has-icon', String(registry.icon > 0));
	rootElement.setAttribute('data-has-label', String(registry.label > 0));
	rootElement.setAttribute('data-icon-count', String(registry.icon));
	rootElement.setAttribute(
		'data-icon-only',
		String(registry.icon > 0 && registry.label === 0),
	);

	// audit usage of icon-only and log a warning if aria-label is not provided
	const hasAccessibleLabel =
		rootElement.getAttribute('aria-label') ||
		rootElement.getAttribute('aria-labelledby');
	if (registry.icon > 0 && registry.label === 0 && !hasAccessibleLabel) {
		console.warn(
			'An element with icon-only content is missing an aria-label for screen readers. Please add an aria-label to this element to ensure it is accessible.',
			rootElement,
		);
	}
}

/**
 * Does a best-effort attempt to determine icon-only status of a component by inspecting
 * React children. This is less robust than the post-render inspection of the DOM done later,
 * but can help avoid flashes of inconsistent styling in nearly all cases.
 */
function getPreloadedIconOnlyDataAttributes(children: ReactNode) {
	const childrenUnwrapped = unwrapChildFragments(children);
	const icons = childrenUnwrapped.filter(isIconReactChild);
	const hasIcon = icons.length > 0;
	// assume non-icons are labels - we don't need a label count, so there's not much point in
	// trying to be clever here anyways.
	const hasLabel = childrenUnwrapped.length > icons.length;
	return {
		'data-has-icon': String(hasIcon),
		'data-has-label': String(hasLabel),
		'data-icon-count': String(icons.length),
		'data-icon-only': String(hasIcon && !hasLabel),
	};
}

function isIconReactChild(node: ReactNode) {
	if (typeof node !== 'object' || node === null) {
		return false;
	}
	if ('type' in node) {
		const type = node.type;
		return (
			type === IconWrapper ||
			type === Icon ||
			(node.props as any)?.['data-icon']
		);
	}

	return false;
}

export interface IconWrapperProps extends UseRenderComponentProps<'div'> {}
/**
 * A reusable sub-component which tags arbitrary content as an "icon" for the purposes of `useIconOnlyDataAttributes`.
 * Attach it to your main component's sub-component set so that users can supply custom content which
 * behaves as an icon and triggers the appropriate "icon only" styles when necessary.
 */
export const IconWrapper = forwardRef<HTMLDivElement, IconWrapperProps>(
	function IconWrapper({ className, render, ...props }, ref) {
		return useRender({
			defaultTagName: 'div',
			render,
			ref,
			props: {
				'data-icon': true,
				className: clsx(cls.iconWrapper, className),
				...props,
			},
		});
	},
);

function unwrapChildFragments(children: ReactNode): ReactNode[] {
	const unwrapped: ReactNode[] = [];
	Children.forEach(children, (child) => {
		if (
			child &&
			typeof child === 'object' &&
			'type' in child &&
			child.type === Fragment
		) {
			unwrapped.push(...unwrapChildFragments((child.props as any).children));
		} else {
			unwrapped.push(child);
		}
	});
	return unwrapped;
}
