'use client';

import { Input, InputProps } from '@base-ui/react/input';
import classNames from 'clsx';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import useMergedRef from '../../hooks/useMergedRef.js';
import { useRotatingShuffledValue } from '../../hooks/useRotatingShuffledValue.js';
import { inputClassName } from '../input/index.js';

export interface TextAreaProps extends InputProps {
	className?: string;
	autoSize?: boolean;
	autoSelect?: boolean;
	// if auto-size, pad the height by this many px
	padBottomPixels?: number;
	placeholders?: string[];
	placeholdersIntervalMs?: number;
	rows?: number;
}

type HandleChange = Exclude<InputProps['onValueChange'], undefined>;

export const TextArea = function TextArea({
	ref,
	autoSize,
	autoSelect,
	onFocus,
	className,
	rows,
	padBottomPixels = 0,
	placeholder,
	placeholders,
	placeholdersIntervalMs = 5000,
	onValueChange,
	...rest
}: TextAreaProps & {
	ref?: React.Ref<any>;
}) {
	const innerRef = useRef<any>(null);
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

	const handleValueChange = useCallback<HandleChange>(
		(value, eventDetails) => {
			setInnerValue(value);
			if (onValueChange) {
				onValueChange(value, eventDetails);
			}
		},
		[onValueChange],
	);

	const handleFocus = useCallback<Exclude<InputProps['onFocus'], undefined>>(
		(e) => {
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
		<Input
			render={<textarea rows={autoSize ? 1 : rows} />}
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
			onValueChange={handleValueChange}
			onFocus={handleFocus}
			placeholder={placeholder ?? randomPlaceholder}
			{...rest}
		/>
	);
};
