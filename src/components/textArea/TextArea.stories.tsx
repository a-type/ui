import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextArea } from './TextArea.js';

const meta = {
	title: 'Components/TextArea',
	component: TextArea,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
	args: {
		autoSize: true,
	},
};

export const Tall: Story = {
	args: {
		value:
			'This is a tall text area\nit has a lot\n of content!\nas in, quite a bit\nI think',
		autoSize: true,
	},
};

export const Controlled: Story = {
	render() {
		const [value, setValue] = useState('Initial value');
		return <TextArea value={value} onValueChange={setValue} autoSize />;
	},
};

export const ControlledFromOnChange: Story = {
	render() {
		const [value, setValue] = useState('Initial value');
		return (
			<TextArea
				value={value}
				onChange={(ev) => {
					setValue(ev.target.value);
				}}
				autoSize
			/>
		);
	},
};
