import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../index.js';
import { TextSkeleton } from './skeletons.js';

const meta = {
	title: 'Components/TextSkeleton',
	component: TextSkeleton,
	argTypes: {
		maxLength: {
			control: { type: 'number' },
			description: 'Maximum length of the random skeleton text',
		},
	},
	args: {
		maxLength: 20,
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof TextSkeleton>;

export default meta;

type Story = StoryObj<typeof TextSkeleton>;

export const Default: Story = {
	render(args) {
		return <TextSkeleton {...args} />;
	},
};

export const OnBackground: Story = {
	render(args) {
		return (
			<Box col gap p surface="attention" layout="start center">
				<TextSkeleton {...args} />
				<TextSkeleton {...args} />
				<TextSkeleton {...args} />
			</Box>
		);
	},
};
