import type { Meta, StoryObj } from '@storybook/react';
import { ColorModeToggle } from './ColorModeToggle.js';

const meta = {
	title: 'ColorModeToggle',
	component: ColorModeToggle,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof ColorModeToggle>;

export default meta;

type Story = StoryObj<typeof ColorModeToggle>;

export const Default: Story = {};
