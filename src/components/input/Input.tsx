import {
	Input as BaseInput,
	InputProps as BaseInputProps,
} from '@base-ui/react/input';
import clsx from 'clsx';
import { CSSProperties, Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { useRotatingShuffledValue } from '../../hooks/useRotatingShuffledValue.js';
import { inputInfo } from '../../systems/inputs.js';
import cls from './Input.module.css';

const InputBorder = withClassName('div', cls.inputBorder);

const InnerInput = function InnerInput({
	autoSelect,
	onFocus,
	onBlur,
	className,
	placeholders,
	placeholder,
	placeholdersIntervalMs = 5000,
	onValueChange,

	...props
}: InputProps) {
	const handleFocus: BaseInputProps['onFocus'] = (ev) => {
		if (autoSelect) {
			ev.target.select();
		}
		if (
			inputInfo.lastPointerDown &&
			Date.now() - inputInfo.lastPointerDown < 200
		) {
			ev.currentTarget.setAttribute('data-focus-clicked', 'true');
		} else {
			ev.currentTarget.setAttribute('data-focus-clicked', 'false');
		}
		onFocus?.(ev);
	};
	const handleBlur: BaseInputProps['onBlur'] = (ev) => {
		onBlur?.(ev);
		ev.currentTarget.removeAttribute('data-focus-clicked');
	};
	const randomPlaceholder = useRotatingShuffledValue(
		placeholders ?? [],
		placeholdersIntervalMs,
	);

	return (
		<BaseInput
			placeholder={placeholder ?? randomPlaceholder}
			onFocus={handleFocus}
			onValueChange={onValueChange}
			onBlur={handleBlur}
			className={clsx(cls.input, className)}
			{...props}
		/>
	);
};

export interface InputProps
	extends Omit<BaseInputProps, 'className' | 'style'> {
	autoSelect?: boolean;
	/** Shuffle between random placeholders */
	placeholders?: string[];
	placeholdersIntervalMs?: number;
	borderRef?: React.Ref<HTMLDivElement>;
	startAccessory?: React.ReactNode;
	endAccessory?: React.ReactNode;
	className?: string;
	ref?: Ref<HTMLInputElement>;
	style?: CSSProperties;
}

const InputDefault = function InputDefault({
	className,
	borderRef,
	startAccessory,
	endAccessory,
	style,
	...props
}: InputProps) {
	return (
		<InputBorder ref={borderRef} className={className} style={style}>
			{startAccessory}
			<InnerInput {...props} />
			{endAccessory}
		</InputBorder>
	);
};

export const Input = Object.assign(InputDefault, {
	Border: InputBorder,
	Input: InnerInput,
});
