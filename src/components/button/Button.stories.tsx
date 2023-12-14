import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.js';

const meta = {
	title: 'Button',
	component: Button,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
