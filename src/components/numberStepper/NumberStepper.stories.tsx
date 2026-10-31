import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberStepper } from './NumberStepper.js';

const meta = {
	title: 'Components/NumberStepper',
	component: NumberStepper,
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'`NumberStepper` is controlled with a numeric `value` and `onChange`. ' +
					'Use `increment` for a fixed step or `steps` for a list of allowed values; the current value should be in that list.\n\n' +
					'`min` and `max` disable buttons at the boundaries but do not clamp a step that crosses them.',
			},
		},
		controls: { expanded: true },
	},
} satisfies Meta<typeof NumberStepper>;

export default meta;

type Story = StoryObj<typeof NumberStepper>;

export const Default: Story = {
	args: {
		value: 0,
	},
};
