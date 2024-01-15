import { useFormikContext } from 'formik';

export { useField } from 'formik';

function useSubmit() {
	const { submitForm, isSubmitting } = useFormikContext();

	return [submitForm, isSubmitting] as const;
}
