'use client';

import { useField, useFormikContext } from 'formik';
import {
	ComponentProps,
	InputHTMLAttributes,
	KeyboardEvent,
	Ref,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import { withClassName } from '../../hooks.js';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { Input } from '../input/Input.js';
import { TextArea, TextAreaProps } from '../textArea/TextArea.js';
import { FieldLabel } from './FieldLabel.js';

export type TextFieldProps = {
	name: string;
	label?: string;
	required?: boolean;
	type?: InputHTMLAttributes<HTMLInputElement>['type'];
	className?: string;
	placeholder?: string;
	autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete'];
	autoFocus?: InputHTMLAttributes<HTMLInputElement>['autoFocus'];
	autoFocusDelay?: number;
	inputRef?: Ref<HTMLInputElement>;
	inputClassName?: string;
} & ComponentProps<typeof Input>;

const emptyRef = (() => {}) as any;

export const TextField = function TextField({
	ref,
	name,
	label,
	className,
	autoFocusDelay,
	autoFocus,
	inputRef,
	onChange,
	onFocus,
	onBlur,
	id: providedId,
	inputClassName,
	...rest
}: TextFieldProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	const [props] = useField({
		name,
		onChange,
		onFocus,
		onBlur,
	});
	const innerInputRef = useRef<HTMLInputElement>(null);
	const id = useIdOrGenerated(providedId);

	useEffect(() => {
		if (autoFocusDelay) {
			setTimeout(() => {
				if (innerInputRef.current) innerInputRef.current.focus();
			}, autoFocusDelay);
		}
	}, [autoFocusDelay]);

	return (
		<FieldRoot className={className} ref={ref}>
			{label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
			<Input
				{...props}
				{...rest}
				id={id}
				autoFocus={autoFocus}
				className={inputClassName}
				ref={useMergedRef(innerInputRef, inputRef || emptyRef)}
			/>
		</FieldRoot>
	);
};

export type TextAreaFieldProps = {
	name: string;
	label?: string;
	required?: boolean;
	rows?: number;
	disabled?: boolean;
	className?: string;
	inputRef?: Ref<HTMLTextAreaElement>;
	submitOnEnter?: boolean;
	textAreaClassName?: string;
} & TextAreaProps;

export function TextAreaField({
	name,
	label,
	className,
	inputRef,
	onKeyDown,
	submitOnEnter,
	id: providedId,
	textAreaClassName,
	...rest
}: TextAreaFieldProps) {
	const [props] = useField(name);
	const { submitForm } = useFormikContext();
	const onKeyDownInner = useCallback(
		(e: KeyboardEvent<HTMLTextAreaElement>) => {
			if (submitOnEnter && e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault();
				submitForm();
			}
			onKeyDown?.(e);
		},
		[submitOnEnter, onKeyDown, submitForm],
	);
	const id = useIdOrGenerated(providedId);

	return (
		<FieldRoot className={className}>
			{label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
			<TextArea
				ref={inputRef}
				{...props}
				{...rest}
				className={textAreaClassName}
				id={id}
				onKeyDown={onKeyDownInner}
			/>
		</FieldRoot>
	);
}

export const FieldRoot = withClassName(
	'div',
	'flex flex-col items-stretch gap-xs self-stretch',
);
