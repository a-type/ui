import { Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik';
import { useCallback } from 'react';
import { CheckboxField } from './CheckboxField.js';
import { Form } from './Form.js';
import { NumberStepperField } from './NumberStepperField.js';
import { SubmitButton } from './SubmitButton.js';
import { SwitchField } from './SwitchField.js';
import { TextAreaField, TextField } from './TextField.js';
import { ToggleGroupField } from './ToggleGroupField.js';

export interface FormikFormProps<T extends FormikValues = FormikValues>
	extends FormikConfig<T> {
	className?: string;
}

export { FieldArray } from 'formik';

export function FormikFormRoot<Values extends FormikValues>({
	className,
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
				{(formik) => <Form className={className}>{children(formik)}</Form>}
			</Formik>
		);
	}

	return (
		<Formik<Values> onSubmit={wrappedOnSubmit} {...props}>
			<Form className={className}>{children}</Form>
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
});
