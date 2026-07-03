import { useField } from 'formik';
import { ReactNode } from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import {
	NumberStepper,
	NumberStepperProps,
} from '../numberStepper/NumberStepper.js';
import { Field } from './Field.js';

export interface NumberStepperFieldProps
	extends Omit<
		NumberStepperProps,
		'value' | 'onChange' | 'className' | 'style'
	> {
	name: string;
	label?: string;
	className?: string;
	style?: React.CSSProperties;
	id?: string;
	onChange?: (value: number) => void;
	description?: ReactNode;
}

export function NumberStepperField({
	name,
	label,
	className,
	style,
	id: providedId,
	onChange,
	description,
	...rest
}: NumberStepperFieldProps) {
	const [props, field, tools] = useField({ name });
	const id = useIdOrGenerated(providedId);
	return (
		<Field className={className} style={style} id={id}>
			{label && <Field.Label>{label}</Field.Label>}
			<Field.Control
				render={(composed) => (
					<>
						<input type="hidden" {...props} {...composed} />
						<NumberStepper
							value={field.value}
							onChange={(v) => {
								tools.setValue(v);
								onChange?.(v);
							}}
							{...rest}
						/>
					</>
				)}
			/>
			{description && <Field.Description>{description}</Field.Description>}
		</Field>
	);
}
