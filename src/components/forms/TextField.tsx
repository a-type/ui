import clsx from 'clsx';
import { useField, useFormikContext } from 'formik';
import {
	InputHTMLAttributes,
	KeyboardEvent,
	ReactNode,
	Ref,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { Input, InputProps } from '../input/Input.js';
import { TextArea, TextAreaProps } from '../textArea/TextArea.js';
import { Field } from './Field.js';
import cls from './TextField.module.css';

export type TextFieldProps = {
	name: string;
	label?: string;
	autoFocus?: InputHTMLAttributes<HTMLInputElement>['autoFocus'];
	autoFocusDelay?: number;
	inputRef?: Ref<HTMLInputElement>;
	inputClassName?: string;
	ref?: Ref<HTMLDivElement>;
	description?: ReactNode;
} & Omit<InputProps, 'ref'>;

const emptyRef = (() => {}) as any;

export const TextField = function TextField({
	ref,
	name,
	label,
	className,
	style,
	autoFocusDelay,
	autoFocus,
	inputRef,
	onChange,
	onFocus,
	onBlur,
	id: providedId,
	inputClassName,
	description,
	...rest
}: TextFieldProps) {
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
		<Field className={className} style={style} stretch ref={ref} id={id}>
			{label && <Field.Label>{label}</Field.Label>}
			<Field.Control
				render={
					<Input
						{...props}
						{...rest}
						autoFocus={autoFocus}
						className={clsx(cls.input, inputClassName)}
						ref={useMergedRef(innerInputRef, inputRef || emptyRef)}
					/>
				}
			/>
			{description && <Field.Description>{description}</Field.Description>}
		</Field>
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
	description?: ReactNode;
	ref?: Ref<HTMLDivElement>;
} & Omit<TextAreaProps, 'ref'>;

export function TextAreaField({
	name,
	label,
	className,
	style,
	inputRef,
	onKeyDown,
	submitOnEnter,
	id: providedId,
	textAreaClassName,
	description,
	ref,
	...rest
}: TextAreaFieldProps) {
	const [props] = useField(name);
	const { submitForm } = useFormikContext();
	const onKeyDownInner = useCallback(
		(e: KeyboardEvent<HTMLInputElement>) => {
			if (submitOnEnter && e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault();
				submitForm();
			}
			onKeyDown?.(e as any);
		},
		[submitOnEnter, onKeyDown, submitForm],
	);
	const id = useIdOrGenerated(providedId);

	return (
		<Field stretch className={className} style={style} ref={ref} id={id}>
			{label && <Field.Label>{label}</Field.Label>}
			<Field.Control
				render={
					<TextArea
						ref={inputRef as any}
						{...props}
						{...rest}
						className={clsx(cls.input, textAreaClassName)}
						onKeyDown={onKeyDownInner}
					/>
				}
			/>
			{description && <Field.Description>{description}</Field.Description>}
		</Field>
	);
}
