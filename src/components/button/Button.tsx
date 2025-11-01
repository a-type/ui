import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import {
	ButtonHTMLAttributes,
	Children,
	memo,
	ReactNode,
	Ref,
	useCallback,
	useState,
} from 'react';
import { withClassName } from '../../hooks.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { PaletteName } from '../../uno/logic/color.js';
import { DropdownMenuTriggerIcon } from '../dropdownMenu/DropdownMenu.js';
import { useIsDropdownTrigger } from '../dropdownMenu/DropdownTriggerContext.js';
import { IconLoadingProvider } from '../icon/IconLoadingContext.js';
import { Icon } from '../icon/index.js';
import { Spinner } from '../spinner/index.js';
import { getButtonClassName } from './classes.js';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: PaletteName;
	emphasis?:
		| 'primary'
		| 'default'
		| 'ghost'
		| 'contrast'
		| 'light'
		| 'unstyled';
	size?: 'default' | 'small';
	toggled?: boolean;
	toggleMode?: 'color-and-indicator' | 'color' | 'indicator' | 'state-only';
	align?: 'start' | 'stretch' | 'end';
	visuallyDisabled?: boolean;
	loading?: boolean;
	asChild?: boolean;
	visuallyFocused?: boolean;
	disableIconMode?: boolean;
	ref?: Ref<HTMLButtonElement>;
	disableDropdownTriggerIcon?: boolean;
}

export function ButtonRoot({
	className,
	color,
	emphasis = 'default',
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
	disableIconMode,
	disableDropdownTriggerIcon,
	ref,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : 'button';

	const isFormSubmitting = false;
	const isSubmitLoading = props.type === 'submit' && isFormSubmitting;
	const isLoading = loading || isSubmitLoading;

	const childArray = Children.toArray(children);
	const iconChildCount = childArray.filter(isIconChild).length;
	const hasLabelChild = childArray.length > iconChildCount;

	const isDropdownTriggerFromContext = useIsDropdownTrigger();
	const isDropdownTrigger =
		!disableDropdownTriggerIcon &&
		hasLabelChild &&
		isDropdownTriggerFromContext;

	const finalRef = useMergedRef(useAnnotateWithChildParts(), ref);

	const buttonProps = {
		ref: finalRef,
		...props,
		disabled: disabled || isLoading,
		'data-disabled': visuallyDisabled,
		'data-focus': visuallyFocused,
		'data-size': size,
		'data-loading': isLoading,
		'data-has-label': hasLabelChild || undefined,
		'data-icon-count': iconChildCount > 0 ? iconChildCount : undefined,
		'data-dropdown-trigger': isDropdownTrigger ? true : undefined,
		tabIndex: visuallyDisabled ? -1 : undefined,
		className: clsx(
			getButtonClassName({
				color,
				emphasis,
				size,
				toggleable:
					toggled !== undefined &&
					(toggleMode === 'color' || toggleMode === 'color-and-indicator'),
				align,
				disableIconMode,
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

	return (
		<IconLoadingProvider value={isLoading}>
			<Comp {...buttonProps}>
				<AnimatePresence>
					{isLoading && (
						<motion.div
							key="spinner"
							initial={{ width: 0, marginLeft: '-0.5rem' }}
							animate={{ width: 'auto', marginLeft: 0 }}
							exit={{ width: 0, marginLeft: '-0.5rem' }}
							className={clsx(
								'flex-shrink-0 inline-block overflow-hidden my-auto flex',
								'[[data-has-icon=true]>&]:hidden',
							)}
							data-default-loader
						>
							<Spinner size={15} className="inline-block w-1em h-1em" />
						</motion.div>
					)}
				</AnimatePresence>
				{toggled !== undefined &&
					(toggleMode === 'indicator' ||
						toggleMode === 'color-and-indicator') && (
						<ButtonToggleIndicator value={toggled} />
					)}
				{children}
				{isDropdownTrigger && (
					<DropdownMenuTriggerIcon asChild>
						<Icon name="chevron" />
					</DropdownMenuTriggerIcon>
				)}
			</Comp>
		</IconLoadingProvider>
	);
}

export const ButtonToggleIndicator = memo(function ToggleIndicator({
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

// allows custom icons to trigger icon button behavior
export const ButtonIcon = withClassName('div', 'icon flex-shrink-0 flex');

export const Button = Object.assign(ButtonRoot, {
	ToggleIndicator: ButtonToggleIndicator,
	Icon: ButtonIcon,
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
	if (button.textContent) {
		registry.label++;
	}
	button.setAttribute('data-has-icon', String(registry.icon > 0));
	button.setAttribute('data-has-label', String(registry.label > 0));
	button.setAttribute('data-icon-count', String(registry.icon));
}

function isIconChild(child: ReactNode): boolean {
	if (typeof child !== 'object' || child === null) return false;
	if ('type' in child) {
		const type = (child as any).type;
		if (type === ButtonIcon) return true;
		if (type === Icon) return true;
		if (typeof type === 'function' && type.displayName === 'Icon') return true;
	}
	return false;
}
