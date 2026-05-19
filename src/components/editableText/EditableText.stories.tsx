import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { EditableText } from './EditableText.js';

const meta = {
	title: 'Components/EditableText',
	component: EditableText,
	argTypes: {},
	args: {
		value: 'Hello, world!',
	},
	parameters: {
		controls: { expanded: true },
		layout: 'centered',
	},
} satisfies Meta<typeof EditableText>;

export default meta;

type Story = StoryObj<typeof EditableText>;

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);
		const [editable, setEditable] = useState(false);
		return (
			<EditableText
				{...args}
				value={value}
				onValueChange={setValue}
				editing={editable}
				onEditingChange={setEditable}
				className="m-auto"
			/>
		);
	},
};

export const Title: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);
		const [editable, setEditable] = useState(false);
		return (
			<EditableText
				{...args}
				value={value}
				onValueChange={setValue}
				editing={editable}
				onEditingChange={setEditable}
				className="m-auto text-primary"
			/>
		);
	},
};
