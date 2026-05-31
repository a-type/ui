import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../box/Box.js';
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
			<Box col gap>
				<Progress {...args} value={50} max={100} />
				<Progress {...args} value={100} max={100} />
				<Progress {...args} value={0} max={100} />
			</Box>
		);
	},
};

export const Labeled: Story = {
	render(args) {
		return (
			<Box col gap>
				<Progress.Labeled {...args} value={33} max={100} label="Loading..." />
				<Progress.Labeled {...args} value={100} max={100} label="Complete" />
				<Progress.Labeled {...args} value={0} max={100} label="Starting..." />
			</Box>
		);
	},
};
