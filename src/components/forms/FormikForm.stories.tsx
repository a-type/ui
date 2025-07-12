import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxField } from './CheckboxField.js';
import { FormikForm } from './FormikForm.js';
import { NumberStepperField } from './NumberStepperField.js';
import { SubmitButton } from './SubmitButton.js';
import { TextField } from './TextField.js';

const meta = {
	title: 'Components/Form',
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
					age: 18,
					tos: false,
				}}
				{...args}
			>
				<TextField name="email" type="email" label="Email" />
				<TextField name="password" type="password" label="Password" />
				<NumberStepperField name="age" label="Age" min={13} max={100} />
				<CheckboxField name="tos" label="I agree" />
				<SubmitButton>Sign up</SubmitButton>
			</FormikForm>
		);
	},
};
