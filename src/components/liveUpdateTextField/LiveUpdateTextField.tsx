'use client';

import { debounce } from '@a-type/utils';
import {
	FocusEvent,
	KeyboardEventHandler,
	MouseEventHandler,
	Ref,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Input, InputProps } from '../input/Input.js';
import { TextArea } from '../textArea/TextArea.js';

export type LiveUpdateTextFieldProps = {
	value: string;
	debounceMs?: number;
	onChange: (value: string) => void;
	textArea?: boolean;
	className?: string;
	onFocus?: (ev: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onBlur?: (ev: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	autoComplete?: InputProps['autoComplete'];
	autoFocus?: InputProps['autoFocus'];
	autoSelect?: InputProps['autoSelect'];
	required?: boolean;
	placeholder?: string;
	type?: InputProps['type'];
	id?: string;
	onKeyDown?: KeyboardEventHandler;
	onKeyUp?: KeyboardEventHandler;
	onClick?: MouseEventHandler;
	ref?: Ref<HTMLInputElement | HTMLTextAreaElement>;
};

/**
 * An extension of TextField which keeps a local realtime value in state and
 * periodically reports changes to the parent. Use this to connect
 * to the API and update a value from the field directly.
 *
 * This component is optimistic and will not respond to external changes while focused.
 */
export const LiveUpdateTextField = function LiveUpdateTextField({
	ref,
	value,
	onChange,
	debounceMs = 500,
	onFocus,
	onBlur,
	textArea,
	type,
	...rest
}: LiveUpdateTextFieldProps) {
	const [displayValue, setDisplayValue] = useState(value || '');
	const ignoreUpdates = useRef(false);
	const didChange = useRef(false);

	const handleFocus = useCallback(
		(ev: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			onFocus?.(ev);
			ignoreUpdates.current = true;
		},
		[onFocus],
	);

	const handleBlur = useCallback(
		(ev: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			onBlur?.(ev);
			ignoreUpdates.current = false;
			// immediately send update if the user typed anything.
			// otherwise pull the latest remote value
			if (didChange.current) {
				onChange?.(displayValue);
			} else {
				setDisplayValue(value || '');
			}
			didChange.current = false;
		},
		[onBlur, displayValue, onChange, value],
	);

	useEffect(() => {
		if (ignoreUpdates.current) {
			return;
		}
		setDisplayValue(value || '');
	}, [value]);

	// every once in a while, send an update to parent
	const debouncedOnChange = useMemo(
		() => debounce(onChange || (() => {}), debounceMs),
		[onChange, debounceMs],
	);

	// update local state instantly and parent eventually
	const handleValueChange = useCallback(
		(value: string) => {
			setDisplayValue(value);
			debouncedOnChange(value);
			didChange.current = true;
		},
		[debouncedOnChange],
	);

	if (textArea) {
		return (
			<TextArea
				ref={ref as any}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={displayValue}
				onValueChange={handleValueChange}
				autoSize
				{...rest}
			/>
		);
	} else {
		return (
			<Input
				ref={ref as any}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={displayValue}
				onValueChange={handleValueChange}
				type={type}
				{...rest}
			/>
		);
	}
};
