import { useFormikContext } from 'formik';
import { Button, ButtonProps } from '../button/Button.js';

export function SubmitButton({ nativeButton: _, ...props }: ButtonProps) {
	const { isSubmitting, isValid } = useFormikContext();
	return (
		<Button
			loading={isSubmitting}
			disabled={!isValid}
			color="primary"
			emphasis="primary"
			{...props}
			type="submit"
		/>
	);
}
