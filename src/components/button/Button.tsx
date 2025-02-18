import { Slot } from '@radix-ui/react-slot';
import classNames from 'clsx';
import { ButtonHTMLAttributes, memo, Ref } from 'react';
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
	size?: 'default' | 'small' | 'icon' | 'icon-small';
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
	const buttonProps = {
		ref: ref,
		...props,
		disabled: disabled || loading,
		'data-disabled': visuallyDisabled,
		'data-focus': visuallyFocused,
		'data-size': size,
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

	if (asChild) {
		// avoid rendering loading spinner with asChild
		return <Comp {...buttonProps}>{children}</Comp>;
	}

	return (
		<Comp {...buttonProps}>
			{loading && <Spinner size={16} className="inline-block w-1em h-1em" />}
			{toggled !== undefined &&
				(toggleMode === 'indicator' ||
					toggleMode === 'color-and-indicator') && (
					<ToggleIndicator value={toggled} />
				)}
			{children}
		</Comp>
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
