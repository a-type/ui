import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box.js';
import { Tooltip } from './Tooltip.js';

const meta = {
	title: 'Tooltip',
	component: Tooltip,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
	args: {
		content: 'hello world',
		color: 'contrast',
	},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	render: (args) => (
		<Tooltip {...args}>
			<button>Hover me</button>
		</Tooltip>
	),
};

export const Disabled: Story = {
	render: (args) => (
		<Tooltip {...args} disabled>
			<button>Hover me</button>
		</Tooltip>
	),
};

export const Color: Story = {
	render: (args) => (
		<Tooltip {...args}>
			<button>Hover me</button>
		</Tooltip>
	),
	args: {
		color: 'white',
	},
};

export const Customized: Story = {
	render: (args) => (
		<Tooltip
			className="bg-attention"
			{...args}
			content={
				<Box d="col" p>
					Some content
				</Box>
			}
		>
			<button>Hover me</button>
		</Tooltip>
	),
};
