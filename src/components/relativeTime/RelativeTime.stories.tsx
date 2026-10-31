import type { Meta, StoryObj } from '@storybook/react-vite';
import { RelativeTime } from './RelativeTime.js';

/**
 * Pass a timestamp in milliseconds as `value` to display a relative time. Use `abbreviate` for shorter units or `disableRelativeText` to omit "ago" and "from now".
 *
 * The text updates every minute; `countdownSeconds` updates once per second for future times less than a minute away.
 */
const meta = {
	title: 'Components/RelativeTime',
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
