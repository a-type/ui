import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box.js';
import { Button } from '../button/index.js';
import { Tooltip } from './Tooltip.js';

const meta: Meta = {
	title: 'Components/Tooltip',
	component: Tooltip,
	argTypes: {
		color: {
			control: 'select',
			options: ['contrast', 'white', 'neutral', 'attention'],
		},
	},
	parameters: {
		controls: { expanded: true },
	},
	args: {
		content: 'hello world',
		color: 'contrast',
	},
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	render: (args) => (
		<Tooltip open {...args}>
			<Button>Hover me</Button>
		</Tooltip>
	),
};

export const Disabled: Story = {
	render: (args) => (
		<Tooltip {...args}>
			<Button>Hover me</Button>
		</Tooltip>
	),
	args: {
		disabled: true,
	},
};

export const Color: Story = {
	render: (args) => (
		<Tooltip open {...args}>
			<Button>Hover me</Button>
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
			open
			{...args}
			content={
				<Box d="col" p>
					Some content
				</Box>
			}
		>
			<Button>Hover me</Button>
		</Tooltip>
	),
};
