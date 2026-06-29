import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { Chip } from './Chip.js';

const meta = {
	title: 'Components/Chip',
	component: Chip,
	args: {
		children: 'Chip',
		emphasis: 'default',
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
				<Chip className="@mode-neutral">Gray</Chip>
				<Chip>Primary</Chip>
				<Chip className="@mode-accent">Accent</Chip>
				<Chip className="@mode-attention">Attention</Chip>
				<Chip className="@mode-success">Success</Chip>
				<Chip className="@mode-lemon">Lemon</Chip>
				<Chip className="@mode-leek">Leek</Chip>
				<Chip className="@mode-tomato">Tomato</Chip>
				<Chip className="@mode-blueberry">Blueberry</Chip>
				<Chip className="@mode-eggplant">Eggplant</Chip>
			</div>
		);
	},
};

export const AsButton: Story = {
	render(args) {
		return (
			<Box gap items="center">
				<Chip render={<Button />} emphasis="primary">
					Clickable Chip
				</Chip>
				<Chip {...args}>Non-clickable Chip</Chip>
			</Box>
		);
	},
};
