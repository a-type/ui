import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch.js';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	argTypes: {
		checked: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	render(args) {
		return <Switch {...args} />;
	},
};
