import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress.js';

const meta = {
	title: 'Components/Progress',
	component: Progress,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
	render(args) {
		return (
			<div className="col">
				<Progress {...args} value={5} max={10} />
				<Progress {...args} value={10} max={10} />
				<Progress {...args} value={0} max={10} />
			</div>
		);
	},
};
