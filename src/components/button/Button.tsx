import {
	Button as BaseButton,
	ButtonProps as BaseButtonProps,
} from '@base-ui/react/button';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { ButtonHTMLAttributes, memo, Ref } from 'react';
import {
	IconWrapper,
	useIconOnlyDataAttributes,
} from '../../behaviors/iconOnly.js';
import { withClassName } from '../../hooks.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { DropdownMenuTriggerIcon } from '../dropdownMenu/DropdownMenu.js';
import { useIsDropdownTrigger } from '../dropdownMenu/DropdownTriggerContext.js';
import { IconLoadingProvider } from '../icon/IconLoadingContext.js';
import { Icon } from '../icon/index.js';
import { Spinner } from '../spinner/index.js';
import cls from './Button.module.css';

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		Pick<BaseButtonProps, 'render' | 'focusableWhenDisabled'> {
	emphasis?: 'primary' | 'default' | 'ghost' | 'light' | 'unstyled';
	size?: 'default' | 'small' | 'wrapper';
	toggled?: boolean;
	toggleMode?: 'color-and-indicator' | 'color' | 'indicator' | 'state-only';
	visuallyDisabled?: boolean;
	loading?: boolean;
	visuallyFocused?: boolean;
	disableIconMode?: boolean;
	forceIconMode?: boolean;
	ref?: Ref<HTMLButtonElement>;
	disableDropdownTriggerIcon?: boolean;
	disableDefaultLoadingIndicator?: boolean;
	/**
	 * Shortcuts for @mode-* classes.
	 */
	color?: 'primary' | 'accent' | 'success' | 'attention';
}

export function ButtonRoot({
	className,
	emphasis = 'default',
	color,
	size,
	toggled,
	toggleMode = 'color-and-indicator',
	visuallyDisabled,
	visuallyFocused,
	loading,
	children,
	disabled,
	disableIconMode,
	forceIconMode,
	disableDropdownTriggerIcon,
	disableDefaultLoadingIndicator,
	ref,
	...props
}: ButtonProps) {
	const isFormSubmitting = false;
	const isSubmitLoading =
		'type' in props && props.type === 'submit' && isFormSubmitting;
	const isLoading = loading || isSubmitLoading;

	const iconOnlyTools = useIconOnlyDataAttributes(children);

	const isDropdownTriggerFromContext = useIsDropdownTrigger();
	const isDropdownTrigger =
		!disableDropdownTriggerIcon &&
		!iconOnlyTools.info.hasIconOnly &&
		isDropdownTriggerFromContext;

	const finalRef = useMergedRef(ref, iconOnlyTools.ref);

	const buttonProps = {
		ref: finalRef,
		...iconOnlyTools.props,
		disabled: disabled || isLoading,
		'data-input-border-flush': true,
		'data-disabled': visuallyDisabled,
		'data-focus-visible': visuallyFocused ? true : undefined,
		'data-size': size,
		'data-loading': isLoading,
		'data-dropdown-trigger': isDropdownTrigger ? true : undefined,
		tabIndex: visuallyDisabled ? -1 : undefined,
		'data-toggleable': toggled !== undefined,
		'data-disable-icon-mode': disableIconMode,
		'data-force-icon-mode': forceIconMode,
		'data-emphasis': emphasis,
		className: clsx(
			emphasis === 'unstyled' ? cls.unstyled : cls.root,
			emphasis === 'ghost' && '@mode-bold',
			size === 'small' ? '@mode-dense' : '',
			color ? `@mode-${color}` : '',
			className,
		),
		...props,
	};
	// set state when toggleable
	if (toggled !== undefined) {
		buttonProps['aria-pressed'] = !!toggled;
	}

	return (
		<IconLoadingProvider value={isLoading}>
			<BaseButton {...buttonProps}>
				<AnimatePresence>
					{isLoading && !disableDefaultLoadingIndicator && (
						<motion.div
							key="spinner"
							initial={{ width: 0, marginLeft: '-0.5rem' }}
							animate={{ width: 'auto', marginLeft: 0 }}
							exit={{ width: 0, marginLeft: '-0.5rem' }}
							className={cls.defaultSpinner}
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
			className={cls.toggleIndicator}
			data-open={!!value}
			loading={false}
		/>
	);
});

// allows custom icons to trigger icon button behavior
export const ButtonIcon = withClassName(IconWrapper, 'icon', cls.icon);
ButtonIcon.displayName = 'ButtonIcon';

export const Button = Object.assign(ButtonRoot, {
	ToggleIndicator: ButtonToggleIndicator,
	Icon: ButtonIcon,
});
