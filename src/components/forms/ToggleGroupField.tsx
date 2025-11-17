import { useField } from 'formik';
import { ToggleGroup, ToggleGroupProps } from '../toggleGroup/toggleGroup.js';
import { FieldLabel } from './FieldLabel.js';
import { FieldRoot } from './TextField.js';

export type ToggleGroupFieldProps = ToggleGroupProps & {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
	id?: string;
};

function ToggleGroupFieldDefault({
	name,
	label,
	required,
	className,
	id,
	...props
}: ToggleGroupFieldProps) {
	const [fieldProps, _, tools] = useField({ name, ...props });

	return (
		<FieldRoot>
			{label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
			<ToggleGroup
				{...fieldProps}
				onValueChange={(v: any) => tools.setValue(v)}
				{...props}
				id={id}
				className={className}
			/>
		</FieldRoot>
	);
}

export const ToggleGroupField = Object.assign(ToggleGroupFieldDefault, {
	Item: ToggleGroup.Item,
});
