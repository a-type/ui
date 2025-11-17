import { useField } from 'formik';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { Box } from '../box/Box.js';
import { Switch } from '../switch/Switch.js';
import { HorizontalFieldLabel } from './FieldLabel.js';

export interface SwitchFieldProps {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
	id?: string;
}

export function SwitchField({
	name,
	label,
	className,
	required,
	id: providedId,
	...rest
}: SwitchFieldProps) {
	const [props, _, tools] = useField({ name, type: 'checkbox' });
	const id = useIdOrGenerated(providedId);
	return (
		<Box gap="sm" className={className}>
			<Switch
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
