'use client';

import classNames from 'clsx';
import {
	ChangeEvent,
	HTMLProps,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import useMergedRef from '../../hooks/useMergedRef.js';
import { useRotatingShuffledValue } from '../../hooks/useRotatingShuffledValue.js';
import { inputClassName } from '../input/index.js';

export interface TextAreaProps
	extends Omit<HTMLProps<HTMLTextAreaElement>, 'ref'> {
	className?: string;
	autoSize?: boolean;
	autoSelect?: boolean;
	// if auto-size, pad the height by this many px
	padBottomPixels?: number;
	placeholders?: string[];
	placeholdersIntervalMs?: number;
	onValueChange?: (value: string) => void;
}

export const TextArea = function TextArea({
	ref,
	autoSize,
	autoSelect,
	onFocus,
	className,
	rows,
	padBottomPixels = 0,
	onChange,
	placeholder,
	placeholders,
	placeholdersIntervalMs = 5000,
	onValueChange,
	...rest
}: TextAreaProps & {
	ref?: React.Ref<HTMLTextAreaElement>;
}) {
	const innerRef = useRef<HTMLTextAreaElement>(null);
	const finalRef = useMergedRef(innerRef, ref);

	const [innerValue, setInnerValue] = useState('');
	const finalValue = rest.value ?? innerValue;

	// TODO: can layout effect be avoided? useEffect shows a flash of the wrong size
	useLayoutEffect(() => {
		if (!autoSize) return;
		const element = innerRef.current;
		if (element) {
			if (element.value !== '' || padBottomPixels) {
				element!.style.height = 'auto';
				const baseHeight = element.scrollHeight;
				element.style.height = baseHeight + padBottomPixels + 'px';
			}
		}
	}, [autoSize, padBottomPixels, finalValue]);

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLTextAreaElement>) => {
			setInnerValue((e.target as HTMLTextAreaElement).value);
			if (onChange) {
				onChange(e);
			}
			if (onValueChange) {
				onValueChange(e.target.value);
			}
		},
		[onChange, onValueChange],
	);

	const handleFocus = useCallback(
		(e: React.FocusEvent<HTMLTextAreaElement>) => {
			if (autoSelect) {
				e.target.select();
			}
			if (onFocus) {
				onFocus(e);
			}
		},
		[autoSelect, onFocus],
	);

	const randomPlaceholder = useRotatingShuffledValue(
		placeholders ?? [],
		placeholdersIntervalMs,
	);

	return (
		<textarea
			ref={finalRef}
			className={classNames(
				inputClassName,
				'layer-components:([font-family:inherit] color-inherit overflow-hidden resize-none)',
				'layer-variants:(rounded-lg px-4 py-4)',
				{
					'layer-components:[resize:vertical]': !autoSize,
					'layer-components:[resize:none]': autoSize,
				},
				className,
			)}
			rows={autoSize ? 1 : rows}
			onChange={handleChange}
			onFocus={handleFocus}
			placeholder={placeholder ?? randomPlaceholder}
			{...rest}
		/>
	);
};
