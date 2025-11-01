import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker.js';

const meta = {
	title: 'Components/ColorPicker',
	component: ColorPicker,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof ColorPicker>;

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
	render(args) {
		return <ColorPicker {...args} />;
	},
};
