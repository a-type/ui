import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/Button.js';
import { Popover } from './Popover.js';

/**
 * Compose `Popover` with `Popover.Trigger` and `Popover.Content`; add `Title`, `Description`, and `Close` as appropriate. The trigger can render a custom button through `render`.
 *
 * Content is portaled and accepts positioning props such as `side` and `align`. Add `Popover.Arrow` explicitly if desired.
 */
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
				<Popover.Content style={{ padding: 'var(--m-sp-md)' }}>
					<Popover.Arrow />
					<Popover.Title>Hello</Popover.Title>
					<Popover.Description>This is a popover content.</Popover.Description>
					<Popover.Close />
				</Popover.Content>
			</Popover>
		);
	},
};
