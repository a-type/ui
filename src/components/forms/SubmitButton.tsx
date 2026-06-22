import clsx from 'clsx';
import { useFormikContext } from 'formik';
import { Button, ButtonProps } from '../button/Button.js';
import cls from './SubmitButton.module.css';

export function SubmitButton({ className, ...props }: ButtonProps) {
	const { isSubmitting, isValid } = useFormikContext();
	return (
		<Button
			loading={isSubmitting}
			disabled={!isValid}
			emphasis="primary"
			className={clsx(cls.root, className)}
			{...props}
			type="submit"
		/>
	);
}
