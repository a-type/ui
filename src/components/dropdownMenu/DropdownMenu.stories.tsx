import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu.js';
import { Icon } from '../icon.js';

const meta = {
	title: 'DropdownMenu',
	component: DropdownMenu,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
	args: {
		children: (
			<>
				<DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item color="destructive">
						<DropdownMenu.Label>Item 1</DropdownMenu.Label>
						<DropdownMenu.ItemRightSlot>
							<Icon name="flag" />
						</DropdownMenu.ItemRightSlot>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 2</DropdownMenu.Label>
						<DropdownMenu.ItemRightSlot>
							<Icon name="add_person" />
						</DropdownMenu.ItemRightSlot>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</>
		),
	},
};
