import {
	Input as BaseInput,
	InputProps as BaseInputProps,
} from '@base-ui/react/input';
import clsx from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { useRotatingShuffledValue } from '../../hooks/useRotatingShuffledValue.js';
import { inputInfo } from '../../systems/inputs.js';

export const inputClassName = clsx(
	'layer-components:(min-w-60px flex-1 select-auto border-none px-0 py-1.25 text-md font-inherit bg-transparent)',
	'layer-components:md:(min-w-120px)',
	'layer-components:placeholder:(color-gray-dark)',
	'layer-components:focus:(outline-none)',
	'layer-components:focus-visible:(outline-none)',
	'layer-components:first:(rounded-l-inherit pl-md)',
	'layer-components:last:(rounded-r-inherit pr-md)',
);

const inputBorderClassName = clsx(
	'layer-components:(flex flex-row items-center gap-xs border-1 rounded-lg border-solid text-md shadow-sm shadow-inset transition-shadow color-black bg-white border-gray-dark)',
	'layer-components:(w-max-content overflow-clip)',
	'layer-components:[&:has(input:disabled),&:has(textarea:disabled)]:(shadow-none bg-transparent border-gray placeholder-gray-dark)',
	'layer-components:[&:has(input:focus-visible),&:has(textarea:focus-visible)]:(outline-none ring ring-4 ring-accent)',
	'layer-variants:[&:has(input:focus[data-focus-clicked]),&:has(textarea:focus[data-focus-clicked])]:(outline-none ring ring-4 bg-lighten-3 ring-main-light)',
	'layer-components:[&:has(input:hover),&:has(textarea:hover)]:(border-black)',
	'layer-components:[&>.icon]:(mx-sm)',
);

const InputBorder = withClassName('div', inputBorderClassName);

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
			className={clsx(inputClassName, className)}
			{...props}
		/>
	);
};

export interface InputProps extends Omit<BaseInputProps, 'className'> {
	autoSelect?: boolean;
	/** Shuffle between random placeholders */
	placeholders?: string[];
	placeholdersIntervalMs?: number;
	borderRef?: React.Ref<HTMLDivElement>;
	startAccessory?: React.ReactNode;
	endAccessory?: React.ReactNode;
	className?: string;
	ref?: Ref<HTMLInputElement>;
}

const InputDefault = function InputDefault({
	className,
	borderRef,
	startAccessory,
	endAccessory,
	...props
}: InputProps) {
	return (
		<InputBorder ref={borderRef} className={className}>
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
