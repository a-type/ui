import type { Meta, StoryObj } from '@storybook/react';
import { FormikForm } from './FormikForm.js';
import { TextField } from './TextField.js';
import { CheckboxField } from './CheckboxField.js';
import { SubmitButton } from './SubmitButton.js';

const meta = {
	title: 'Form',
	component: FormikForm,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof FormikForm>;

export default meta;

type Story = StoryObj<typeof FormikForm>;

export const Default: Story = {
	render({ initialValues, ...args }) {
		return (
			<FormikForm
				initialValues={{
					email: '',
					password: '',
					tos: false,
				}}
				{...args}
			>
				<TextField name="email" type="email" label="Email" />
				<TextField name="password" type="password" label="Password" />
				<CheckboxField name="tos" label="I agree" />
				<SubmitButton>Sign up</SubmitButton>
			</FormikForm>
		);
	},
};
