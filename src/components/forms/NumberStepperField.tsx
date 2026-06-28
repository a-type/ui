import { useField } from 'formik';
import { ReactNode } from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import {
	NumberStepper,
	NumberStepperProps,
} from '../numberStepper/NumberStepper.js';
import { Field } from './Field.js';

export interface NumberStepperFieldProps
	extends Omit<NumberStepperProps, 'value' | 'onChange'> {
	name: string;
	label?: string;
	className?: string;
	id?: string;
	onChange?: (value: number) => void;
	description?: ReactNode;
}

export function NumberStepperField({
	name,
	label,
	className,
	id: providedId,
	onChange,
	description,
	...rest
}: NumberStepperFieldProps) {
	const [_, field, tools] = useField({ name });
	const id = useIdOrGenerated(providedId);
	return (
		<Field className={className} id={id}>
			{label && <Field.Label>{label}</Field.Label>}
			<Field.Control
				render={
					<NumberStepper
						value={field.value}
						onChange={(v) => {
							tools.setValue(v);
							onChange?.(v);
						}}
						{...rest}
					/>
				}
			/>
			{description && <Field.Description>{description}</Field.Description>}
		</Field>
	);
}
