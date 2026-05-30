import { fractionToText } from '@a-type/utils';
import classNames from 'clsx';
import { ReactNode } from 'react';
import { Button } from '../button/index.js';
import { Icon } from '../icon/Icon.js';
import cls from './NumberStepper.module.css';

export interface NumberStepperProps {
	value: number;
	onChange: (value: number) => void;
	highlightChange?: boolean;
	steps?: number[];
	increment?: number;
	renderValue?: (value: number) => ReactNode;
	className?: string;
	disabled?: boolean;
	min?: number;
	max?: number;
	id?: string;
	defaultValue?: number;
}

export function NumberStepper({
	value,
	onChange,
	highlightChange,
	steps,
	increment: incrementAmount = 1,
	renderValue = fractionToText,
	className,
	disabled,
	min,
	max,
	defaultValue,
	...rest
}: NumberStepperProps) {
	const index = steps?.indexOf(value) ?? 0;

	const increment = () => {
		if (steps) {
			if (index === steps.length - 1) {
				return;
			}
			onChange(steps[index + 1]);
		} else {
			onChange(value + incrementAmount);
		}
	};

	const decrement = () => {
		if (steps) {
			if (index === 0) {
				return;
			}
			onChange(steps[index - 1]);
		} else {
			onChange(value - incrementAmount);
		}
	};

	const canIncrement =
		!disabled &&
		(steps ? index < steps.length - 1 : true) &&
		(max === undefined || value < max);
	const canDecrement =
		!disabled &&
		(steps ? index > 0 : true) &&
		(min === undefined || value > min);

	const highlighted = highlightChange && value !== (defaultValue ?? 0);

	return (
		<div
			className={classNames(
				cls.root,
				{
					'@mode-accent': highlighted,
				},
				className,
			)}
			data-disabled={disabled ? true : undefined}
			data-emphasis={highlighted ? 'primary' : 'secondary'}
			{...rest}
		>
			<Button
				emphasis="ghost"
				onClick={decrement}
				disabled={!canDecrement}
				aria-label="Decrement value"
			>
				<Icon name="minus" />
			</Button>
			<div className={cls.value}>{renderValue(value)}</div>
			<Button
				emphasis="ghost"
				onClick={increment}
				disabled={!canIncrement}
				aria-label="Increment value"
			>
				<Icon name="plus" />
			</Button>
		</div>
	);
}
