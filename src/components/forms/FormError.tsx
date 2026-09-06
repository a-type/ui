import { FormikErrors, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { Text, TypographyProps } from '../typography/typography.js';

export interface FormErrorProps extends TypographyProps {
	/**
	 * Filter to a single field
	 */
	fieldName?: string;
	/**
	 * When to show an error, paired with fieldName.
	 */
	condition?: 'touched' | 'always' | 'dirty';
	/**
	 * Connect to an HTML input to also display native
	 * HTML validation errors.
	 */
	inputId?: string;
}

export function FormError({
	fieldName,
	condition = 'touched',
	inputId,
	...rest
}: FormErrorProps) {
	const { errors, touched, dirty } = useFormikContext<any>();
	const nativeError = useNativeError(inputId);

	if (condition === 'dirty' && !dirty) {
		return null;
	}

	if (fieldName) {
		const error = nativeError || errors[fieldName];
		if (error) {
			if (condition === 'touched' && !touched[fieldName]) {
				return null;
			}
			return (
				<Text emphasis="ambient" color="attention" {...rest}>
					<FormErrorFormatted error={error} />
				</Text>
			);
		}
		return null;
	}

	const errorMessages = Object.values(errors)
		.flat()
		.filter((e): e is string | FormikErrors<any> => !!e)
		.concat(nativeError ? [nativeError] : []);

	if (errorMessages.length === 0) {
		return null;
	}

	return (
		<Text emphasis="ambient" color="attention" {...rest}>
			<FormErrorFormatted error={errorMessages} />
		</Text>
	);
}

function FormErrorFormatted({
	error,
}: {
	error?:
		| string
		| FormikErrors<any>
		| string[]
		| FormikErrors<any>[]
		| (string | FormikErrors<any>)[];
}) {
	if (typeof error === 'string') {
		return <span>{error}</span>;
	} else if (Array.isArray(error)) {
		return (
			<span>
				{error.map((err, index) => (
					<FormErrorFormatted key={index} error={err} />
				))}
			</span>
		);
	} else if (typeof error === 'object' && error !== null) {
		return (
			<span>
				{Object.entries(error).map(([, err], index) => (
					<span key={index}>
						<FormErrorFormatted error={err} />
						{index < Object.entries(error).length - 1 ? ', ' : ''}
					</span>
				))}
			</span>
		);
	}
	return null;
}

function useNativeError(inputId?: string) {
	const [nativeError, setNativeError] = useState<string | null>(null);

	useEffect(() => {
		if (!inputId) return;

		const input = document.getElementById(inputId) as HTMLInputElement | null;
		if (!input) {
			return;
		}

		function handleInput() {
			if (input?.validity.valid) {
				setNativeError(null);
			} else {
				setNativeError(input?.validationMessage ?? 'Validation error');
			}
		}

		input.addEventListener('input', handleInput);

		return () => {
			input.removeEventListener('input', handleInput);
		};
	}, [inputId]);

	return nativeError;
}
