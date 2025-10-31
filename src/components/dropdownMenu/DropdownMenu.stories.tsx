import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/index.js';
import { DropdownMenu } from './DropdownMenu.js';

const meta = {
	title: 'Components/DropdownMenu',
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
				<DropdownMenu.Trigger asChild>
					<Button>Open</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item color="attention">
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
