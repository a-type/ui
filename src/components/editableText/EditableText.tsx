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
import { Input } from '../input/index.js';
import inputCls from '../input/Input.module.css';
import cls from './EditableText.module.css';

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
				className={clsx(cls.input, className)}
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
			className={clsx(inputCls.input, cls.button, className)}
			id={id}
			{...rest}
		>
			{value}
			<Icon name="pencil" className={cls.icon} />
		</button>
	);
}
