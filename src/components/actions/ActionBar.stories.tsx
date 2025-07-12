import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box.js';
import { Icon } from '../icon/Icon.js';
import { ActionBar } from './ActionBar.js';
import { ActionButton } from './ActionButton.js';

const meta = {
	title: 'Components/ActionBar',
	component: ActionBar,
	argTypes: {},
	args: {
		children: [
			<ActionButton key="1">
				<Icon name="plus" />
				Add
			</ActionButton>,
			<ActionButton key="2">
				<Icon name="pencil" />
				Edit
			</ActionButton>,
			<ActionButton key="3" color="accent">
				<Icon name="globe" />
				Publish
			</ActionButton>,
			<ActionButton key="3">
				<Icon name="placeholder" />
				Overflow 1
			</ActionButton>,
			<ActionButton key="4">
				<Icon name="placeholder" />
				Overflow 2
			</ActionButton>,
			<ActionButton key="5" toggled>
				<Icon name="placeholder" />
				Overflow 3
			</ActionButton>,
		],
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof ActionBar>;

export default meta;

type Story = StoryObj<typeof ActionBar>;

export const Default: Story = {};

export const OnBackground: Story = {
	render: (args) => {
		return (
			<Box surface="accent" overflow="hidden">
				<ActionBar {...args} />
			</Box>
		);
	},
};
