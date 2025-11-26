import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { useState } from 'react';
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

export const Vertical: Story = {
	args: {
		orientation: 'vertical',
		style: { height: '200px' },
	},
};

export const CustomStyles: Story = {
	args: {
		orientation: 'vertical',
		style: { height: '200px' },
		min: -2,
		max: 2,
		defaultValue: [0],
	},
	render: (args) => {
		const [value, setValue] = useState([0]);
		return (
			<Slider.Root value={value} onValueChange={setValue} {...args}>
				<Slider.Track
					className={clsx({
						'bg-attention': value[0] === -2,
						'bg-attention-light': value[0] === -1,
						'bg-main': value[0] === 0,
						'bg-success-light': value[0] === 1,
						'bg-success': value[0] === 2,
					})}
				/>
				<Slider.Thumb className="w-24px h-24px">
					<div className="text-lg">
						{['😭', '😔', '😐', '😊', '😃'][value[0] + 2]}
					</div>
				</Slider.Thumb>
			</Slider.Root>
		);
	},
};
