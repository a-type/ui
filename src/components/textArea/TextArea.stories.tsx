import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea.js';

const meta = {
	title: 'TextArea',
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
