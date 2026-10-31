import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../box/Box.js';
import { Progress } from './Progress.js';

const meta = {
	title: 'Components/Progress',
	component: Progress,
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'Pass `value` and optionally `max` to `Progress` to show completion; `max` defaults to 100. ' +
					'Use `Progress.Labeled` with a `label` for a visible label and value.\n\n' +
					'The `Root`, `Track`, `Indicator`, `Label`, and `Value` parts are available for custom composition.',
			},
		},
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
