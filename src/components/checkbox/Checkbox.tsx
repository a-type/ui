import {
	Checkbox as BaseCheckbox,
	CheckboxIndicatorProps,
	CheckboxRootProps,
} from '@base-ui/react/checkbox';
import classNames from 'clsx';
import { Ref } from 'react';
import { Icon } from '../icon/Icon.js';
import cls from './Checkbox.module.css';

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
			className={classNames(cls.root, className)}
			data-checked-mode={checkedMode}
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
			className={classNames(cls.indicator, className)}
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
