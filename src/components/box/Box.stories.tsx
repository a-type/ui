import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button.js';
import { Box } from './Box.js';

const meta = {
	title: 'Box',
	component: Box,
	argTypes: {
		border: {
			type: 'boolean',
			defaultValue: false,
		},
		surface: {
			type: 'boolean',
			defaultValue: false,
		},
	},
	args: {
		children: (
			<>
				<Button color="primary">Primary</Button>
				<Button color="accent">Accent</Button>
				<Button>Default</Button>
			</>
		),
		p: 'md',
		gap: 'md',
		border: true,
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {};

export const NestedContainers: Story = {
	render(args) {
		return (
			<Box {...args} container direction="col">
				<Box {...args} container>
					<Box {...args}>
						<Button>Button</Button>
						<Button>Button</Button>
					</Box>
					<Box {...args}>
						<Button>Button</Button>
						<Button>Button</Button>
					</Box>
				</Box>
				<Box {...args}>
					<Button>Button</Button>
					<Button>Button</Button>
				</Box>
			</Box>
		);
	},
};
