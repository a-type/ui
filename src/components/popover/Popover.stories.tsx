import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button.js';
import { Popover } from './Popover.js';

const meta: Meta = {
	title: 'Components/Popover',
	component: Popover,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	render(args) {
		return (
			<Popover {...args}>
				<Popover.Trigger render={<Button color="primary" size="small" />}>
					Open Popover
				</Popover.Trigger>
				<Popover.Content className="p-md">
					<Popover.Arrow />
					<Popover.Title>Hello</Popover.Title>
					<Popover.Description>This is a popover content.</Popover.Description>
					<Popover.Close />
				</Popover.Content>
			</Popover>
		);
	},
};
