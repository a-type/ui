import { useFormikContext } from 'formik';
import { Button, ButtonProps } from '../button/Button.js';

export function SubmitButton({ className, ...props }: ButtonProps) {
	const { isSubmitting, isValid } = useFormikContext();
	return (
		<Button
			loading={isSubmitting}
			disabled={!isValid}
			emphasis="primary"
			align="end"
			className={className}
			{...props}
			type="submit"
		/>
	);
}
