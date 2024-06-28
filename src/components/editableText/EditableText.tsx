import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Input, inputClassName } from '../input.js';
import clsx from 'clsx';
import { Icon } from '../icon.js';

export interface EditableTextProps {
	value: string;
	onValueChange: (value: string) => void;
	editing?: boolean;
	onEditingChange?: (editing: boolean) => void;
	className?: string;
	id?: string;
	autoSelect?: boolean;
	autoFocus?: boolean;
}

export function EditableText({
	value,
	onValueChange,
	editing,
	onEditingChange,
	className,
	id,
	autoSelect,
	autoFocus,
	...rest
}: EditableTextProps) {
	const [editingInternal, setEditingInternal] = useState(editing || autoFocus);
	const editingFinal = editing ?? editingInternal;
	const setEditingFinal = onEditingChange ?? setEditingInternal;

	const onChange = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			onValueChange(ev.target.value);
		},
		[onValueChange],
	);

	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (editingFinal && inputRef.current) {
			// -10... roughly estimated based on default font.
			inputRef.current.size = Math.max(1, value.length - 5);
			inputRef.current.focus();
		}
	}, [editingFinal, inputRef]);

	if (editingFinal) {
		return (
			<Input
				ref={inputRef}
				value={value}
				onChange={onChange}
				onBlur={() => setEditingFinal(false)}
				className={clsx('layer-variants:font-size-inherit', className)}
				id={id}
				autoSelect={autoSelect}
				{...rest}
			/>
		);
	}

	return (
		<div
			ref={divRef}
			onClick={() => setEditingFinal(true)}
			className={clsx(
				inputClassName,
				'layer-variants:(border-transparent bg-transparent w-auto inline-flex items-center gap-2 font-size-inherit shadow-none)',
				'layer-variants:hover:(bg-gray-blend)',
				'layer-variants:focus-visible:(outline-none bg-gray-dark-blend)',
				'cursor-pointer',
				className,
			)}
			id={id}
			{...rest}
		>
			{value}
			<Icon name="pencil" className="stroke-gray-blend opacity-50" />
		</div>
	);
}
