'use client';

import classNames from 'classnames';
import useMergedRef from '../../hooks/useMergedRef.js';
import {
	ChangeEvent,
	forwardRef,
	HTMLProps,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { inputClassName } from '../input.js';

export interface TextAreaProps
	extends Omit<HTMLProps<HTMLTextAreaElement>, 'ref'> {
	className?: string;
	autoSize?: boolean;
	// if auto-size, pad the height by this many px
	padBottomPixels?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	function TextArea(
		{ autoSize, className, rows, padBottomPixels = 0, onChange, ...rest },
		ref,
	) {
		const innerRef = useRef<HTMLTextAreaElement>(null);
		const finalRef = useMergedRef(innerRef, ref);

		const [innerValue, setInnerValue] = useState('');
		const finalValue = rest.value ?? innerValue;

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

		const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
			setInnerValue((e.target as HTMLTextAreaElement).value);
			if (onChange) {
				onChange(e);
			}
		};

		return (
			<textarea
				ref={finalRef}
				className={classNames(
					inputClassName,
					'layer-components:([font-family:inherit] text-inherit overflow-hidden)',
					{
						'layer-components:[resize:vertical]': !autoSize,
						'layer-components:[resize:none]': autoSize,
					},
					className,
				)}
				rows={autoSize ? 1 : rows}
				onChange={handleChange}
				{...rest}
			/>
		);
	},
);
