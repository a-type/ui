import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { Chip } from './Chip.js';

const meta = {
	title: 'Components/Chip',
	component: Chip,
	argTypes: {},
	args: {
		children: 'Chip',
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
	render(args) {
		return <Chip {...args} />;
	},
};

export const Colors: Story = {
	render() {
		return (
			<div style={{ display: 'flex', gap: '12px' }}>
				<Chip color="gray">Gray</Chip>
				<Chip color="primary">Primary</Chip>
				<Chip color="accent">Accent</Chip>
				<Chip color="attention">Attention</Chip>
				<Chip color="success">Success</Chip>
				<Chip color="lemon">Lemon</Chip>
				<Chip color="leek">Leek</Chip>
				<Chip color="tomato">Tomato</Chip>
				<Chip color="blueberry">Blueberry</Chip>
				<Chip color="eggplant">Eggplant</Chip>
			</div>
		);
	},
};

export const AsButton: Story = {
	render() {
		return (
			<Box gap items="center">
				<Button asChild>
					<Chip color="primary">Clickable Chip</Chip>
				</Button>
				<Chip>Non-clickable Chip</Chip>
			</Box>
		);
	},
};
