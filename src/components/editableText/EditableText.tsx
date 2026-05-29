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
				className={clsx(
					'layer-variants:[&_input]:font-size-inherit',
					className,
				)}
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
				inputCls.input,
				'layer-composed:(w-auto inline-flex items-center text-left shadow-none color-inherit bg-transparent p-control gap-sm border-transparent rd-control font-size-inherit)',
				'layer-composed:hover:(bg-main-light/80)',
				'layer-composed:focus:outline-none',
				'layer-composed:focus-visible:(bg-main-light/80)',
				'cursor-pointer',
				className,
			)}
			id={id}
			{...rest}
		>
			{value}
			<Icon name="pencil" className="opacity-80 stroke-main-heavy" />
		</button>
	);
}
