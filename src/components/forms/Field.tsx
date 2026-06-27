import clsx from 'clsx';
import { ComponentProps } from 'react';
import { SlotDiv } from '../utility/SlotDiv.js';
import cls from './Field.module.css';

export interface FieldRootProps extends ComponentProps<'div'> {
	horizontal?: boolean;
	stretch?: boolean;
}

function FieldRoot({ className, horizontal, ...props }: FieldRootProps) {
	return (
		<SlotDiv
			className={clsx(cls.root, className)}
			data-horizontal={horizontal ? '' : undefined}
			data-stretch={props.stretch ? '' : undefined}
			{...props}
		/>
	);
}

function FieldControl({ className, ...props }: ComponentProps<typeof SlotDiv>) {
	return <SlotDiv className={clsx(cls.control, className)} {...props} />;
}

function FieldLabel({ className, ...props }: ComponentProps<'label'>) {
	return <label className={clsx(cls.label, className)} {...props} />;
}

function FieldDescription({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			className={clsx('@mode-dense', cls.description, className)}
			{...props}
		/>
	);
}

export const Field = Object.assign(FieldRoot, {
	Label: FieldLabel,
	Description: FieldDescription,
	Control: FieldControl,
});
