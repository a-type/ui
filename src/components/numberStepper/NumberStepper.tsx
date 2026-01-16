import { fractionToText } from '@a-type/utils';
import classNames from 'clsx';
import { ReactNode } from 'react';
import { Button } from '../button/index.js';
import { Icon } from '../icon/Icon.js';

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

	return (
		<div
			className={classNames(
				'layer-components:(w-min-content flex flex-shrink-0 items-center overflow-hidden border rounded-lg border-solid shadow-sm bg-white border-gray-dark)',
				disabled &&
					'layer-variants:(shadow-none bg-transparent border-gray-dark/80)',
				{
					'layer-variants:(color-black bg-accent-wash)':
						!!highlightChange && value !== 1,
				},
				className,
			)}
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
			<div className="w-80px text-center">{renderValue(value)}</div>
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
