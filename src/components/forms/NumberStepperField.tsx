import { useField } from 'formik';
import { withClassName } from '../../hooks.js';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import {
	NumberStepper,
	NumberStepperProps,
} from '../numberStepper/NumberStepper.js';
import { FieldLabel } from './FieldLabel.js';
import cls from './NumberStepperField.module.css';

export interface NumberStepperFieldProps
	extends Omit<NumberStepperProps, 'value' | 'onChange'> {
	name: string;
	label?: string;
	className?: string;
	id?: string;
	onChange?: (value: number) => void;
}

export function NumberStepperField({
	name,
	label,
	className,
	id: providedId,
	onChange,
	...rest
}: NumberStepperFieldProps) {
	const [_, field, tools] = useField({ name });
	const id = useIdOrGenerated(providedId);
	return (
		<FieldRoot className={className}>
			{label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
			<NumberStepper
				value={field.value}
				onChange={(v) => {
					tools.setValue(v);
					onChange?.(v);
				}}
				id={id}
				{...rest}
			/>
		</FieldRoot>
	);
}

const FieldRoot = withClassName('div', cls.root);
