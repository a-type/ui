import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button.js';
import { Popover } from './Popover.js';

const meta = {
	title: 'Popover',
	component: Popover,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	render(args) {
		return (
			<Popover {...args}>
				<Popover.Trigger asChild>
					<Button color="primary" size="small">
						Open Popover
					</Button>
				</Popover.Trigger>
				<Popover.Content className="p-md">
					<Popover.Arrow />
					<p>This is a popover content.</p>
				</Popover.Content>
			</Popover>
		);
	},
};
