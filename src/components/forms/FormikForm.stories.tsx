import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxField } from './CheckboxField.js';
import { EmojiField } from './EmojiField.js';
import { FormikForm } from './FormikForm.js';
import { NumberStepperField } from './NumberStepperField.js';
import { SubmitButton } from './SubmitButton.js';
import { SwitchField } from './SwitchField.js';
import { TextField } from './TextField.js';
import { ToggleGroupField } from './ToggleGroupField.js';

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
	args: {
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	},
	render({ initialValues: _, ...args }) {
		return (
			<FormikForm
				initialValues={{
					email: '',
					password: '',
					age: 18,
					tos: false,
					newsletter: false,
					plan: 'basic',
					emoji: '',
				}}
				{...args}
			>
				<TextField
					name="email"
					type="email"
					label="Email"
					placeholder="you@example.com"
				/>
				<TextField name="password" type="password" label="Password" />
				<NumberStepperField name="age" label="Age" min={13} max={100} />
				<CheckboxField name="tos" label="I agree" />
				<SwitchField name="newsletter" label="Subscribe to newsletter" />
				<ToggleGroupField
					type="single"
					name="plan"
					label="Select your plan"
					required
				>
					<ToggleGroupField.Item value="basic">Basic</ToggleGroupField.Item>
					<ToggleGroupField.Item value="pro">Pro</ToggleGroupField.Item>
					<ToggleGroupField.Item value="enterprise">
						Enterprise
					</ToggleGroupField.Item>
				</ToggleGroupField>
				<EmojiField name="emoji" label="Favorite Emoji" />
				<SubmitButton>Sign up</SubmitButton>
			</FormikForm>
		);
	},
};
