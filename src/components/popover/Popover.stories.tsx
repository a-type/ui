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
				</Popover.Content>
			</Popover>
		);
	},
};

export const Anchored: Story = {
	render(args) {
		return (
			<div className="layer-components:(relative h-[200px] flex items-center justify-center)">
				<Popover open {...args}>
					<Popover.Anchor>Anchor</Popover.Anchor>
					<Popover.Content className="p-md">
						<Popover.Arrow />
						<Popover.Title>Hello</Popover.Title>
						<Popover.Description>
							This is a popover content anchored to the center of the container.
						</Popover.Description>
					</Popover.Content>
				</Popover>
			</div>
		);
	},
};
