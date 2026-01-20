import classNames, { clsx } from 'clsx';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { withClassName } from '../../hooks.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { Input, InputProps } from '../input/Input.js';

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

function TextAreaInput({
	ref,
	autoSize = true,
	padBottomPixels = 0,
	onValueChange,
	className,
	rows,
	...rest
}: TextAreaProps) {
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

	return (
		<Input.Input
			render={<textarea rows={autoSize ? 1 : rows} />}
			ref={finalRef}
			className={classNames(
				'layer-composed:([font-family:inherit] overflow-hidden color-inherit)',
				'layer-composed:py-md',
				{
					'layer-variants:[resize:vertical]': !autoSize,
					'layer-variants:resize-none': autoSize,
				},
				className,
			)}
			onValueChange={handleValueChange}
			{...rest}
		/>
	);
}

const TextAreaBorder = withClassName(
	Input.Border,
	clsx('layer-composed:rounded-lg'),
);

const TextAreaDefault = function TextArea({
	className,
	...rest
}: TextAreaProps & {
	ref?: React.Ref<any>;
}) {
	return (
		<TextAreaBorder className={className}>
			<TextAreaInput {...rest} />
		</TextAreaBorder>
	);
};

export const TextArea = Object.assign(TextAreaDefault, {
	Border: TextAreaBorder,
	Input: TextAreaInput,
});
