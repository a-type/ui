import { useField } from 'formik';
import { ReactNode } from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { Checkbox } from '../checkbox/index.js';
import { Field } from './Field.js';

export interface CheckboxFieldProps {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
	id?: string;
	description?: ReactNode;
}

export function CheckboxField({
	name,
	label,
	className,
	required,
	id: providedId,
	description,
	...rest
}: CheckboxFieldProps) {
	const [props, _, tools] = useField({ name, required, type: 'checkbox' });
	const id = useIdOrGenerated(providedId);
	return (
		<Field horizontal className={className} id={id}>
			<Field.Control
				render={
					<Checkbox
						{...props}
						checked={props.checked}
						onCheckedChange={(v) => {
							tools.setValue(!!v);
						}}
						{...rest}
					/>
				}
			/>
			{label && <Field.Label>{label}</Field.Label>}
			{description && <Field.Description>{description}</Field.Description>}
		</Field>
	);
}
