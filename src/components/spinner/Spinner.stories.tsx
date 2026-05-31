import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner.js';

const meta = {
	title: 'Components/Spinner',
	component: Spinner,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Small: Story = {
	args: {
		size: 20,
		thickness: 4,
	},
};

export const Large: Story = {
	args: {
		size: 80,
		thickness: 12,
	},
};
