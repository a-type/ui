import { Slot } from '@radix-ui/react-slot';
import classNames from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import {
	ButtonHTMLAttributes,
	Children,
	memo,
	Ref,
	useCallback,
	useState,
} from 'react';
import useMergedRef from '../../hooks/useMergedRef.js';
import { IconLoadingProvider } from '../icon/IconLoadingContext.js';
import { Icon } from '../icon/index.js';
import { Spinner } from '../spinner/index.js';
import { getButtonClassName } from './classes.js';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?:
		| 'primary'
		| 'default'
		| 'ghost'
		| 'destructive'
		| 'ghostDestructive'
		| 'ghostAccent'
		| 'accent'
		| 'contrast'
		| 'unstyled';
	size?: 'default' | 'small';
	toggled?: boolean;
	toggleMode?: 'color-and-indicator' | 'color' | 'indicator' | 'state-only';
	align?: 'start' | 'stretch' | 'end';
	visuallyDisabled?: boolean;
	loading?: boolean;
	asChild?: boolean;
	visuallyFocused?: boolean;
	ref?: Ref<HTMLButtonElement>;
}

export function Button({
	className,
	color,
	size,
	toggled,
	toggleMode = 'color-and-indicator',
	align,
	visuallyDisabled,
	visuallyFocused,
	loading,
	children,
	disabled,
	asChild,
	ref,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : 'button';

	const isFormSubmitting = false;
	const isSubmitLoading = props.type === 'submit' && isFormSubmitting;
	const isLoading = loading || isSubmitLoading;

	const finalRef = useMergedRef(useAnnotateWithChildParts(), ref);

	const buttonProps = {
		ref: finalRef,
		...props,
		disabled: disabled || isLoading,
		'data-disabled': visuallyDisabled,
		'data-focus': visuallyFocused,
		'data-size': size,
		'data-loading': isLoading,
		tabIndex: visuallyDisabled ? -1 : undefined,
		className: classNames(
			getButtonClassName({
				color,
				size,
				toggleable:
					toggled !== undefined &&
					(toggleMode === 'color' || toggleMode === 'color-and-indicator'),
				align,
			}),
			className,
		),
	};
	// set state when toggleable
	if (toggled !== undefined) {
		buttonProps['aria-pressed'] = !!toggled;
	}

	// for asChild, no need to do the rest of this stuff.
	if (asChild) {
		// avoid rendering loading spinner with asChild
		return <Comp {...buttonProps}>{children}</Comp>;
	}

	// wrap and inspect children
	let hasLabel = false;
	let hasIcon = false;
	const wrappedChildren = Children.toArray(children).map((child, index) => {
		if (child && typeof child === 'object' && 'type' in child) {
			const isIcon = child.type === Icon || child.type;
			if (isIcon) {
				hasIcon = true;
				return child; // return icon as is
			}
		}

		hasLabel = true; // mark that we have a label

		if ((!!child && typeof child === 'string') || typeof child === 'number') {
			return (
				<span key={`text-${index}`} data-auto-wrapped-label className="flex">
					{child}
				</span>
			);
		}
		return child;
	});

	return (
		<IconLoadingProvider value={isLoading}>
			<Comp
				{...buttonProps}
				data-has-icon={String(hasIcon || isLoading)}
				data-has-label={String(hasLabel)}
			>
				<AnimatePresence>
					{isLoading && !hasIcon && (
						<motion.div
							key="spinner"
							initial={{ width: 0, marginLeft: '-0.5rem' }}
							animate={{ width: 'auto', marginLeft: 0 }}
							exit={{ width: 0, marginLeft: '-0.5rem' }}
							className="flex-shrink-0 inline-block overflow-hidden my-auto flex"
						>
							<Spinner size={15} className="inline-block w-1em h-1em" />
						</motion.div>
					)}
				</AnimatePresence>
				{toggled !== undefined &&
					(toggleMode === 'indicator' ||
						toggleMode === 'color-and-indicator') && (
						<ToggleIndicator value={toggled} />
					)}
				{wrappedChildren}
			</Comp>
		</IconLoadingProvider>
	);
}

const ToggleIndicator = memo(function ToggleIndicator({
	value,
}: {
	value: boolean;
}) {
	return (
		<Icon
			aria-hidden
			name="check"
			className="transition-width w-0 ml--1"
			style={{
				width: value ? '15px' : 0,
			}}
		/>
	);
});

function useAnnotateWithChildParts() {
	const mutationObserver = useState(() => {
		if (typeof window === 'undefined') return null!;
		return new MutationObserver((entries) => {
			applyPartAttributes(entries[0].target as HTMLButtonElement);
		});
	})[0];

	const ref = useCallback(
		(node: HTMLButtonElement | null) => {
			if (node && mutationObserver) {
				mutationObserver.disconnect();
				mutationObserver.observe(node, { childList: true, subtree: true });
				applyPartAttributes(node);
			} else if (mutationObserver) {
				mutationObserver.disconnect();
			}
		},
		[mutationObserver],
	);

	return ref;
}

function applyPartAttributes(button: HTMLButtonElement) {
	// each child node that's not an icon counts as a label
	const registry = {
		icon: 0,
		label: 0,
	};
	button.childNodes.forEach((child) => {
		if (!(child instanceof HTMLElement || child instanceof SVGElement)) return;
		if (child.style.display === 'none' || child.style.width === '0') return; // skip hidden elements
		if (
			(child instanceof HTMLElement || child instanceof SVGElement) &&
			child.classList.contains('icon')
		) {
			registry.icon++;
		} else {
			registry.label++;
		}
	});
	button.setAttribute('data-has-icon', String(registry.icon > 0));
	button.setAttribute('data-has-label', String(registry.label > 0));
	button.setAttribute('data-icon-count', String(registry.icon));
}
