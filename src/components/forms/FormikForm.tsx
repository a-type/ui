import { Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik';
import { useCallback } from 'react';
import { CheckboxField } from './CheckboxField.js';
import { EmojiField } from './EmojiField.js';
import { Form } from './Form.js';
import { NumberStepperField } from './NumberStepperField.js';
import { SubmitButton } from './SubmitButton.js';
import { SwitchField } from './SwitchField.js';
import { TextAreaField, TextField } from './TextField.js';
import { ToggleGroupField } from './ToggleGroupField.js';

export interface FormikFormProps<T extends FormikValues = FormikValues>
	extends FormikConfig<T> {
	className?: string;
	style?: React.CSSProperties;
}

export { FieldArray } from 'formik';

export function FormikFormRoot<Values extends FormikValues>({
	className,
	style,
	children,
	onSubmit,
	...props
}: FormikFormProps<Values>) {
	const wrappedOnSubmit = useCallback(
		async (values: Values, bag: FormikHelpers<Values>) => {
			try {
				bag.setSubmitting(true);
				return await onSubmit?.(values, bag);
			} finally {
				bag.setSubmitting(false);
			}
		},
		[onSubmit],
	);

	if (typeof children === 'function') {
		return (
			<Formik<Values> onSubmit={wrappedOnSubmit} {...props}>
				{(formik) => (
					<Form className={className} style={style}>
						{children(formik)}
					</Form>
				)}
			</Formik>
		);
	}

	return (
		<Formik<Values> onSubmit={wrappedOnSubmit} {...props}>
			<Form className={className} style={style}>
				{children}
			</Form>
		</Formik>
	);
}

export const FormikForm = Object.assign(FormikFormRoot, {
	TextField,
	TextAreaField,
	NumberStepperField,
	SubmitButton,
	CheckboxField,
	SwitchField,
	ToggleGroupField,
	EmojiField,
});
