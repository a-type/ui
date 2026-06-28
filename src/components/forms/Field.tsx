import clsx from 'clsx';
import {
	ComponentProps,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import useMergedRef from '../../hooks/useMergedRef.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import cls from './Field.module.css';

export interface FieldRootProps extends ComponentProps<'div'> {
	horizontal?: boolean;
	stretch?: boolean;
	reverse?: boolean;
	/**
	 * This ID will be passed to Control, and Label will be associated.
	 */
	id?: string;
}

const FieldContext = createContext<{ id?: string; events: EventTarget }>({
	events: new EventTarget(),
});

function FieldRoot({
	className,
	horizontal,
	stretch,
	reverse,
	id,
	...props
}: FieldRootProps) {
	const [events] = useState(() => new EventTarget());
	return (
		<FieldContext.Provider value={{ id, events }}>
			<SlotDiv
				className={clsx(cls.root, className)}
				data-horizontal={horizontal ? '' : undefined}
				data-stretch={stretch ? '' : undefined}
				data-reverse={reverse ? '' : undefined}
				{...props}
			/>
		</FieldContext.Provider>
	);
}

function FieldControl({
	className,
	ref,
	...props
}: ComponentProps<typeof SlotDiv>) {
	const innerRef = useRef<HTMLElement>(null);
	const finalRef = useMergedRef(ref, innerRef);
	const { id, events } = useContext(FieldContext);

	useEffect(() => {
		if (!id) return;

		function onDescriptionVisible(event: CustomEvent) {
			if (event.detail === true) {
				innerRef.current?.setAttribute('aria-describedby', `${id}-description`);
			} else {
				innerRef.current?.removeAttribute('aria-describedby');
			}
		}

		events.addEventListener(
			'description-visible',
			onDescriptionVisible as EventListener,
		);
		return () => {
			events.removeEventListener(
				'description-visible',
				onDescriptionVisible as EventListener,
			);
		};
	}, [events, id]);

	return (
		<SlotDiv
			className={clsx(cls.control, className)}
			id={id}
			ref={finalRef}
			{...props}
		/>
	);
}

function FieldLabel({ className, ...props }: ComponentProps<'label'>) {
	const { id } = useContext(FieldContext);
	return (
		<label className={clsx(cls.label, className)} htmlFor={id} {...props} />
	);
}

function FieldDescription({ className, ...props }: ComponentProps<'div'>) {
	const { id, events } = useContext(FieldContext);

	useEffect(() => {
		events.dispatchEvent(
			new CustomEvent('description-visible', { detail: true }),
		);
		return () => {
			events.dispatchEvent(
				new CustomEvent('description-visible', { detail: false }),
			);
		};
	}, [events]);
	return (
		<div
			className={clsx('@mode-dense', cls.description, className)}
			id={id ? `${id}-description` : undefined}
			{...props}
		/>
	);
}

export const Field = Object.assign(FieldRoot, {
	Label: FieldLabel,
	Description: FieldDescription,
	Control: FieldControl,
});
