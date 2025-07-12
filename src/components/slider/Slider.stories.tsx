import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider.js';

const meta = {
	title: 'Components/Slider',
	component: Slider,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {};
