import {
	Button as BaseButton,
	ButtonProps as BaseButtonProps,
} from '@base-ui/react/button';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import {
	ButtonHTMLAttributes,
	Children,
	Fragment,
	memo,
	ReactNode,
	Ref,
	useCallback,
	useDebugValue,
	useState,
} from 'react';
import { withClassName } from '../../hooks.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { PaletteName } from '../../uno/index.js';
import { DropdownMenuTriggerIcon } from '../dropdownMenu/DropdownMenu.js';
import { useIsDropdownTrigger } from '../dropdownMenu/DropdownTriggerContext.js';
import { IconLoadingProvider } from '../icon/IconLoadingContext.js';
import { Icon } from '../icon/index.js';
import { Spinner } from '../spinner/index.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import { getButtonClassName } from './classes.js';

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		Pick<BaseButtonProps, 'render' | 'focusableWhenDisabled'> {
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
	disableIconMode,
	disableDropdownTriggerIcon,
	ref,
	...props
}: ButtonProps) {
	const isFormSubmitting = false;
	const isSubmitLoading =
		'type' in props && props.type === 'submit' && isFormSubmitting;
	const isLoading = loading || isSubmitLoading;

	const childArray = childArrayWithoutFragments(children);
	const iconChildCount = childArray.filter(isIconChild).length;
	const hasLabelChild = childArray.length > iconChildCount;

	useDebugValue(
		`Children introspection: Icons: ${iconChildCount}, Label: ${hasLabelChild}, Total: ${childArray.length}`,
	);

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
		'data-has-label': hasLabelChild,
		'data-has-icon': iconChildCount > 0,
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

	return (
		<IconLoadingProvider value={isLoading}>
			<BaseButton {...buttonProps}>
				<AnimatePresence>
					{isLoading && (
						<motion.div
							key="spinner"
							initial={{ width: 0, marginLeft: '-0.5rem' }}
							animate={{ width: 'auto', marginLeft: 0 }}
							exit={{ width: 0, marginLeft: '-0.5rem' }}
							className={clsx(
								'my-auto inline-block flex flex-shrink-0 overflow-hidden',
								'[[data-has-icon=true]_&]:hidden',
							)}
							data-default-loader
						>
							<Spinner size={15} className="inline-block h-1em w-1em" />
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
					<IconLoadingProvider value={false}>
						<DropdownMenuTriggerIcon render={<Icon name="chevron" />} />
					</IconLoadingProvider>
				)}
			</BaseButton>
		</IconLoadingProvider>
	);
}
ButtonRoot.displayName = 'Button';

export const ButtonToggleIndicator = memo(function ToggleIndicator({
	value,
}: {
	value: boolean;
}) {
	return (
		<Icon
			aria-hidden
			name="check"
			className="w-0 transition-width"
			style={{
				width: value ? '15px' : 0,
				marginRight: !value ? '-0.25rem' : 0,
				marginLeft: !value ? '-0.25rem' : 0,
			}}
			loading={false}
		/>
	);
});

// allows custom icons to trigger icon button behavior
export const ButtonIcon = withClassName(SlotDiv, 'icon flex flex-shrink-0');
ButtonIcon.displayName = 'ButtonIcon';

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
	const iconNodes: (HTMLElement | SVGElement)[] = [];
	button.childNodes.forEach((child) => {
		if (!(child instanceof HTMLElement || child instanceof SVGElement)) return;
		if (child.style.display === 'none' || child.style.width === '0') return; // skip hidden elements
		if (
			(child instanceof HTMLElement || child instanceof SVGElement) &&
			child.classList.contains('icon')
		) {
			registry.icon++;
			iconNodes.push(child);
		} else if (child.hasAttribute('data-default-loader')) {
			// skip default loader
		} else {
			registry.label++;
		}
	});
	if (button.textContent) {
		const iconText = iconNodes.map((n) => n.textContent).join('');
		const labelText = button.textContent.replace(iconText, '').trim();
		if (labelText.length > 0) registry.label++;
	}
	button.setAttribute('data-has-icon', String(registry.icon > 0));
	button.setAttribute('data-has-label', String(registry.label > 0));
	button.setAttribute('data-icon-count', String(registry.icon));
}

function isIconChild(child: ReactNode): boolean {
	if (typeof child !== 'object' || child === null) return false;
	if ('type' in child) {
		const type = child.type;
		if (
			type === ButtonIcon ||
			type === 'ButtonIcon' ||
			(type as any).displayName === 'ButtonIcon'
		)
			return true;
		if (
			type === Icon ||
			type === 'Icon' ||
			(type as any).displayName === 'Icon'
		)
			return true;
	}
	return false;
}

function childArrayWithoutFragments(children: ReactNode): ReactNode[] {
	const topArray = Children.toArray(children);
	return topArray.flatMap((child) => {
		if (typeof child === 'object' && child !== null && 'type' in child) {
			if ((child as any).type === Fragment) {
				return childArrayWithoutFragments((child as any).props.children);
			}
		}
		return [child];
	});
}
