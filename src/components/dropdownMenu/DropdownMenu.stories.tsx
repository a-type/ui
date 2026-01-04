import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box.js';
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
				<DropdownMenu.Trigger render={<Button />}>Open</DropdownMenu.Trigger>
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

export const Sides: Story = {
	render: (args) => (
		<Box
			col
			gap="xl"
			items="center"
			justify="center"
			full
			p="xl"
			className="mt-200px"
		>
			<DropdownMenu open={args.open}>
				<DropdownMenu.Trigger render={<Button />}>Top</DropdownMenu.Trigger>
				<DropdownMenu.Content side="top">
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 1</DropdownMenu.Label>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 2</DropdownMenu.Label>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu>
			<DropdownMenu open={args.open}>
				<DropdownMenu.Trigger render={<Button />}>Right</DropdownMenu.Trigger>
				<DropdownMenu.Content side="right">
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 1</DropdownMenu.Label>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 2</DropdownMenu.Label>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu>
			<DropdownMenu open={args.open}>
				<DropdownMenu.Trigger render={<Button />}>Left</DropdownMenu.Trigger>
				<DropdownMenu.Content side="left" sideOffset={8}>
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 1</DropdownMenu.Label>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 2</DropdownMenu.Label>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu>
			<DropdownMenu open={args.open}>
				<DropdownMenu.Trigger render={<Button />}>Bottom</DropdownMenu.Trigger>
				<DropdownMenu.Content side="bottom" sideOffset={8}>
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 1</DropdownMenu.Label>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<DropdownMenu.Label>Item 2</DropdownMenu.Label>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu>
		</Box>
	),
};
