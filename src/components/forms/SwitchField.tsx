import { useField } from 'formik';
import { ReactNode } from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { Switch } from '../switch/Switch.js';
import { Field } from './Field.js';

export interface SwitchFieldProps {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
	id?: string;
	description?: ReactNode;
}

export function SwitchField({
	name,
	label,
	className,
	required,
	id: providedId,
	description,
	...rest
}: SwitchFieldProps) {
	const [props, _, tools] = useField({ name, required, type: 'checkbox' });
	const id = useIdOrGenerated(providedId);
	return (
		<Field horizontal className={className} id={id}>
			<Field.Control
				render={
					<Switch
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
