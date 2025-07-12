import clsx from 'clsx';
import {
	ChangeEvent,
	FocusEvent,
	KeyboardEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Icon } from '../icon/index.js';
import { Input, inputClassName } from '../input/index.js';

export interface EditableTextProps {
	value: string;
	onValueChange: (value: string) => void;
	editing?: boolean;
	onEditingChange?: (editing: boolean) => void;
	className?: string;
	id?: string;
	autoSelect?: boolean;
	autoFocus?: boolean;
	onFocus?: (ev: FocusEvent) => void;
	onBlur?: (ev: FocusEvent) => void;
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (ev: KeyboardEvent) => void;
	onKeyUp?: (ev: KeyboardEvent) => void;
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
	onBlur,
	onChange,
	onKeyDown,
	...rest
}: EditableTextProps) {
	const [editingInternal, setEditingInternal] = useState(editing || autoFocus);
	const editingFinal = editing ?? editingInternal;
	const setEditingFinal = onEditingChange ?? setEditingInternal;

	const handleChange = useCallback(
		(ev: ChangeEvent<HTMLInputElement>) => {
			onValueChange(ev.target.value);
			onChange?.(ev);
		},
		[onValueChange, onChange],
	);

	const handleKeyDown = useCallback(
		(ev: KeyboardEvent<HTMLInputElement>) => {
			if (ev.key === 'Enter') {
				setEditingFinal(false);
			}
			onKeyDown?.(ev);
		},
		[setEditingFinal, onKeyDown],
	);

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (editingFinal && inputRef.current) {
			// -10... roughly estimated based on default font.
			inputRef.current.size = Math.max(1, value.length - 5);
			inputRef.current.focus();
		}
	}, [editingFinal, inputRef]);

	const handleBlur = useCallback(
		(ev: FocusEvent<HTMLInputElement>) => {
			setEditingFinal(false);
			onBlur?.(ev);
		},
		[setEditingFinal, onBlur],
	);

	if (editingFinal) {
		return (
			<Input
				ref={inputRef}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				className={clsx('layer-variants:font-size-inherit', className)}
				id={id}
				autoSelect={autoSelect}
				onKeyDown={handleKeyDown}
				{...rest}
			/>
		);
	}

	return (
		<button
			onClick={() => setEditingFinal(true)}
			className={clsx(
				inputClassName,
				'layer-variants:(border-transparent bg-transparent w-auto inline-flex items-center gap-2 font-size-inherit color-inherit shadow-none text-left)',
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
		</button>
	);
}
