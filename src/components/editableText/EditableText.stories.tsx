import type { Meta, StoryObj } from '@storybook/react';
import { EditableText } from './EditableText.js';
import { useState } from 'react';

const meta = {
	title: 'EditableText',
	component: EditableText,
	argTypes: {},
	args: {
		value: 'Hello, world!',
	},
	parameters: {
		controls: { expanded: true },
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
				className="text-2xl"
			/>
		);
	},
};
