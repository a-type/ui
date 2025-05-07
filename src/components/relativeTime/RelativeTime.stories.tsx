import type { Meta, StoryObj } from '@storybook/react';
import { RelativeTime } from './RelativeTime.js';

const meta = {
	title: 'RelativeTime',
	component: RelativeTime,
	argTypes: {},
	args: {
		value: Date.now() + 60 * 1000 * 2,
		abbreviate: false,
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof RelativeTime>;

export default meta;

type Story = StoryObj<typeof RelativeTime>;

export const Default: Story = {};
