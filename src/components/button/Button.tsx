import classNames from 'clsx';
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { Spinner } from '../spinner.js';
import { getButtonClassName } from './classes.js';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?:
		| 'primary'
		| 'default'
		| 'ghost'
		| 'destructive'
		| 'ghostDestructive'
		| 'accent'
		| 'contrast';
	size?: 'default' | 'small' | 'icon';
	toggled?: boolean;
	align?: 'start' | 'stretch' | 'end';
	visuallyDisabled?: boolean;
	loading?: boolean;
	asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(
		{
			className,
			color,
			size,
			toggled,
			align,
			visuallyDisabled,
			loading,
			children,
			disabled,
			asChild,
			...props
		},
		ref,
	) {
		const Comp = asChild ? Slot : 'button';
		const buttonProps = {
			ref: ref,
			...props,
			disabled: disabled || loading,
			'data-disabled': visuallyDisabled,
			tabIndex: visuallyDisabled ? -1 : undefined,
			className: classNames(
				getButtonClassName({ color, size, toggled, align }),
				className,
			),
		};

		if (asChild) {
			// avoid rendering loading spinner with asChild
			return <Comp {...buttonProps}>{children}</Comp>;
		}

		return (
			<Comp {...buttonProps}>
				{loading && <Spinner size={16} className="inline-block w-1em h-1em" />}
				{children}
			</Comp>
		);
	},
);
