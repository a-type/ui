'use client';

import {
	Checkbox as BaseCheckbox,
	CheckboxIndicatorProps,
	CheckboxRootProps,
} from '@base-ui/react/checkbox';
import classNames from 'clsx';
import { Ref } from 'react';
import { Icon } from '../icon/Icon.js';

export interface CheckboxProps extends CheckboxRootProps {
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
		<BaseCheckbox.Root
			{...props}
			className={classNames(
				'layer-components:(relative block h-28px w-28px flex-shrink-0 cursor-pointer transition shadow-sm bg-neutral-paper b border rd-lg)',
				'layer-components:focus:outline-none',
				'layer-components:focus-visible:(ring-neutral-ink ring-[2px] ring-offset)',
				checkedMode === 'faded'
					? 'layer-components:data-[checked]:(animate-checkbox-fade animate-forwards bg-main)'
					: 'layer-components:data-[checked]:(bg-main border-main-ink)',
				'layer-components:[&:hover:not(:disabled)]:(bg-lighten-2 ring-bg ring-[2px])',
				'layer-components:[&:active:not(:disabled)]:(bg-darken-1 ring-[4px])',
				'layer-components:[&:disabled]:(shadow-none bg-transparent border-neutral-light)',
				className,
			)}
		/>
	);
}

export function CheckboxIndicator({
	children,
	className,
	...props
}: CheckboxIndicatorProps) {
	return (
		<BaseCheckbox.Indicator
			className={classNames(
				'absolute left-1/2 top-1/2 color-neutral-ink -translate-1/2',
				className,
			)}
			{...props}
		>
			{children ?? <Icon name="check" size={16} />}
		</BaseCheckbox.Indicator>
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
