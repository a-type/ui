import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { LiveUpdateTextField } from './LiveUpdateTextField.js';

const meta = {
	title: 'Components/LiveUpdateTextField',
	component: LiveUpdateTextField,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof LiveUpdateTextField>;

export default meta;

type Story = StoryObj<typeof LiveUpdateTextField>;

export const Default: Story = {
	render(args) {
		const [value, setValue] = useState('Initial value');
		return <LiveUpdateTextField {...args} value={value} onChange={setValue} />;
	},
};
