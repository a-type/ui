import { useField } from 'formik';
import { withClassName } from '../../hooks.js';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { Checkbox } from '../checkbox/index.js';

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
	const [props, _, tools] = useField({ name, type: 'checkbox' });
	const id = useIdOrGenerated(providedId);
	return (
		<FieldRoot className={className}>
			<Checkbox
				{...props}
				checked={props.checked}
				onCheckedChange={(v) => {
					tools.setValue(!!v);
				}}
				{...rest}
			/>
			{label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
		</FieldRoot>
	);
}

const FieldRoot = withClassName(
	'div',
	'layer-components:(flex flex-row gap-2)',
);

const FieldLabel = withClassName(
	'label',
	'layer-components:(inline-flex flex-col gap-1 text-md font-normal text-dark-blend mt-2px)',
);
