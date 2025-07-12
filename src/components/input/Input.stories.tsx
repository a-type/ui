import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { Input } from './Input.js';

const meta = {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		disabled: { control: 'boolean' },
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const ButtonAndInput: Story = {
	render: (args) => (
		<Box gap items="center">
			<Input placeholder="Type something..." {...args} />
			<Button size={args.sizeVariant}>Submit</Button>
		</Box>
	),
};
