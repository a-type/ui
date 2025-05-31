'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import classNames from 'clsx';
import { Ref } from 'react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
	/**
	 * The checked visual state. Prominent mode means the checked version is visually
	 * emphasized to the user. Faded means the checked version is visually de-emphasized.
	 * Prominent is appropriate when the user's attention should be drawn to the 'on' state,
	 * while faded is appropriate when a checked state means the item is 'done,' like in a task list.
	 */
	checkedMode?: 'prominent' | 'faded';
	ref?: Ref<HTMLButtonElement>;
}

export function CheckboxRoot({
	className,
	checkedMode = 'prominent',
	...props
}: CheckboxProps) {
	return (
		<CheckboxPrimitive.Root
			{...props}
			className={classNames(
				'layer-components:(w-28px h-28px flex-shrink-0 relative bg-white border-default transition rounded-lg shadow-sm)',
				'layer-components:focus-visible:(outline-off shadow-focus)',
				checkedMode === 'faded'
					? 'layer-components:[&[data-state=checked]]:(bg-primary animate-checkbox-fade animate-forwards)'
					: 'layer-components:[&[data-state=checked]]:(bg-primary border-primary-dark)',
				'layer-components:[&:hover:not(:disabled)]:shadow-[0_0_0_1px_var(--color-black)]',
				'layer-components:[&:disabled]:(bg-transparent border-gray-light shadow-none)',
				className,
			)}
		/>
	);
}

export function CheckboxIndicator({
	children,
	className,
	...props
}: CheckboxPrimitive.CheckboxIndicatorProps) {
	return (
		<CheckboxPrimitive.Indicator
			className={classNames(
				'absolute center translate-[-50%] color-black',
				className,
			)}
			{...props}
		>
			{children ?? <CheckIcon width={18} height={18} />}
		</CheckboxPrimitive.Indicator>
	);
}

export const Checkbox = Object.assign(
	function Checkbox(props: CheckboxProps) {
		return (
			<CheckboxRoot {...props}>
				<CheckboxIndicator />
			</CheckboxRoot>
		);
	},
	{
		Root: CheckboxRoot,
		Indicator: CheckboxIndicator,
	},
);
