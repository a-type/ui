import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/index.js';
import { ContextMenu } from './contextMenu.js';

const meta = {
	title: 'Components/ContextMenu',
	component: ContextMenu,
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'Wrap a target in `ContextMenu.Trigger` and put `ContextMenu.Item` elements inside `ContextMenu.Content`. ' +
					'Use `onSelect` on items to handle actions.\n\n' +
					'The menu opens from the context-menu gesture, renders in a portal, and stops click propagation from its content.',
			},
		},
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
