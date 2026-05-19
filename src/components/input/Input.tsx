import { $systemProps } from '@arbor-css/core';
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
	'layer-components:(min-w-60px flex-1 select-auto px-0 color-inherit bg-transparent py-control border-none text-secondary font-inherit)',
	'layer-components:placeholder:color-neutral-heavy',
	'layer-components:focus:(outline-none)',
	'layer-components:focus-visible:(outline-none)',
	'layer-components:first:(pl-control rd-l-inherit)',
	'layer-components:last:(pr-control rd-r-inherit)',
);

const inputBorderClassName = clsx(
	'layer-components:(min-w-60px flex flex-row items-center shadow-inset transition-shadow shadow-sm color-neutral-ink bg-neutral-paper gap-xs b-neutral-ink b b rd-control b-solid text-secondary)',
	'layer-components:(w-max-content overflow-clip)',
	'layer-components:[&:has(input:disabled),&:has(textarea:disabled)]:placeholder-neutral-heavy layer-components:[&:has(input:disabled),&:has(textarea:disabled)]:(shadow-none bg-transparent border-neutral)',
	'layer-components:focus-visible:(ring-neutral-ink ring-[4px] ring-inset)',
	'layer-variants:[&:has(input:focus[data-focus-clicked]),&:has(textarea:focus[data-focus-clicked])]:(outline-none bg-lighten-3 ring-main-light ring ring-[4px])',
	'layer-components:[&:has(input:hover),&:has(textarea:hover)]:border-neutral-ink',
	'layer-components:[&>.icon]:mx-sm',
);

function InputBorderImpl({
	style,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	ref?: Ref<HTMLDivElement>;
}) {
	return (
		<div
			{...props}
			style={{
				[$systemProps.globals.shadowSpread.name]: '0',
				...style,
			}}
		/>
	);
}
const InputBorder = withClassName(InputBorderImpl, inputBorderClassName);

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
