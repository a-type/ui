import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/index.js';
import { ContextMenu } from './contextMenu.js';

const meta = {
	title: 'Components/ContextMenu',
	component: ContextMenu,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
	render(args) {
		return (
			<ContextMenu {...args}>
				<ContextMenu.Trigger>
					<Button>Right Click Me</Button>
				</ContextMenu.Trigger>
				<ContextMenu.Content>
					<ContextMenu.Item onSelect={() => alert('Item 1 selected')}>
						Item 1
					</ContextMenu.Item>
					<ContextMenu.Item onSelect={() => alert('Item 2 selected')}>
						Item 2
					</ContextMenu.Item>
					<ContextMenu.Item onSelect={() => alert('Item 3 selected')}>
						Item 3
					</ContextMenu.Item>
				</ContextMenu.Content>
			</ContextMenu>
		);
	},
};
