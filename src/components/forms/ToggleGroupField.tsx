import { useField } from 'formik';
import { ReactNode } from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { ToggleGroup, ToggleGroupProps } from '../toggleGroup/toggleGroup.js';
import { Field } from './Field.js';

export type ToggleGroupFieldProps<Value extends string> = Omit<
	ToggleGroupProps<Value>,
	'style' | 'className'
> & {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
	style?: React.CSSProperties;
	id?: string;
	type?: 'single' | 'multiple';
	description?: ReactNode;
};

function ToggleGroupFieldDefault({
	name,
	label,
	required,
	className,
	style,
	type = 'single',
	multiple,
	description,
	id: providedId,
	...props
}: ToggleGroupFieldProps<string>) {
	const id = useIdOrGenerated(providedId);
	const [fieldProps, _, tools] = useField({ name, required, ...props });

	return (
		<Field id={id} className={className} style={style}>
			{label && <Field.Label>{label}</Field.Label>}
			<Field.Control
				render={
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
					/>
				}
			/>
			{description && <Field.Description>{description}</Field.Description>}
		</Field>
	);
}

export const ToggleGroupField = Object.assign(ToggleGroupFieldDefault, {
	Item: ToggleGroup.Item,
});
