import type { Meta, StoryObj } from '@storybook/react-vite';
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
		defaultValue: 0,
	},
	render: (args) => {
		const [value, setValue] = useState<number>(0);
		return (
			<Slider.Base
				value={value}
				onValueChange={(v) => {
					if (Array.isArray(v)) {
						setValue(v[0]);
					} else {
						setValue(v as number);
					}
				}}
				className={
					value < 0
						? '@mode-attention'
						: value > 0
						? '@mode-success'
						: '@mode-base'
				}
				{...args}
			>
				<Slider.Track
					className={clsx({
						'bg-attention': value === -2,
						'bg-attention-light': value === -1,
						'bg-main': value === 0,
						'bg-success-light': value === 1,
						'bg-success': value === 2,
					})}
				>
					<Slider.Indicator />
					<Slider.Thumb style={{ height: 24, width: 24 }}>
						<div className="text-primary">
							{['😭', '😔', '😐', '😊', '😃'][(value as number) + 2]}
						</div>
					</Slider.Thumb>
				</Slider.Track>
			</Slider.Base>
		);
	},
};

export const WithValue: Story = {
	args: {
		defaultValue: 50,
	},
	render: (args) => (
		<Slider.Root {...args}>
			<Slider.Ui />
			<Slider.Value />
		</Slider.Root>
	),
};
