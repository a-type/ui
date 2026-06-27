import { useField } from 'formik';
import { ReactNode } from 'react';
import { ToggleGroup, ToggleGroupProps } from '../toggleGroup/toggleGroup.js';
import { Field } from './Field.js';

export type ToggleGroupFieldProps<Value extends string> =
	ToggleGroupProps<Value> & {
		name: string;
		label?: string;
		required?: boolean;
		className?: string;
		id?: string;
		type?: 'single' | 'multiple';
		description?: ReactNode;
	};

function ToggleGroupFieldDefault({
	name,
	label,
	required,
	className,
	type = 'single',
	multiple,
	description,
	id,
	...props
}: ToggleGroupFieldProps<string>) {
	const [fieldProps, _, tools] = useField({ name, required, ...props });

	return (
		<Field>
			{label && <Field.Label htmlFor={id}>{label}</Field.Label>}
			<Field.Control>
				<ToggleGroup
					{...fieldProps}
					onValueChange={(v) => {
						if (multiple || type === 'multiple') {
							tools.setValue(v);
						} else {
							tools.setValue(v[0]);
						}
					}}
					multiple={multiple || type === 'multiple'}
					{...props}
					id={id}
					className={className}
					aria-describedby={description ? `${id}-description` : undefined}
				/>
			</Field.Control>
			{description && (
				<Field.Description id={`${id}-description`}>
					{description}
				</Field.Description>
			)}
		</Field>
	);
}

export const ToggleGroupField = Object.assign(ToggleGroupFieldDefault, {
	Item: ToggleGroup.Item,
});
