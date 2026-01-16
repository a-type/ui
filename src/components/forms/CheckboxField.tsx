import { useField } from 'formik';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { Box } from '../box/Box.js';
import { Checkbox } from '../checkbox/index.js';
import { HorizontalFieldLabel } from './FieldLabel.js';

export interface CheckboxFieldProps {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
	id?: string;
}

export function CheckboxField({
	name,
	label,
	className,
	required,
	id: providedId,
	...rest
}: CheckboxFieldProps) {
	const [props, _, tools] = useField({ name, required, type: 'checkbox' });
	const id = useIdOrGenerated(providedId);
	return (
		<Box gap="sm" className={className}>
			<Checkbox
				{...props}
				checked={props.checked}
				onCheckedChange={(v) => {
					tools.setValue(!!v);
				}}
				id={id}
				{...rest}
			/>
			{label && (
				<HorizontalFieldLabel htmlFor={id}>{label}</HorizontalFieldLabel>
			)}
		</Box>
	);
}
