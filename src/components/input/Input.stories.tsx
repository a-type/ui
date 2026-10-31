import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { Input } from './Input.js';

const meta = {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		disabled: { control: 'boolean' },
	},
	parameters: {
		docs: {
			description: {
				component:
					'`Input` is a styled text input. Use `value` and `onValueChange` for a controlled value, ' +
					'and `startAccessory` or `endAccessory` for content inside its border.\n\n' +
					'`autoSelect` selects text on focus; `placeholders` can rotate placeholder text. ' +
					'Associate the input with a label, or use a form field.',
			},
		},
		controls: { expanded: true },
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const ButtonAndInput: Story = {
	render: (args) => (
		<Box gap items="center">
			<Input placeholder="Type something..." {...args} />
			<Button>Submit</Button>
		</Box>
	),
};

export const WithAccessories: Story = {
	render: (args) => (
		<Input.Border>
			<Icon name="search" />
			<Input.Input placeholder="Search..." {...args} />
			<Button emphasis="ghost">
				<Icon name="arrowRight" />
			</Button>
		</Input.Border>
	),
};

export const NestedInBoxes: Story = {
	render: (args) => (
		<Box p border rounded>
			<Box p border rounded>
				<Input placeholder="Type something..." {...args} />
			</Box>
		</Box>
	),
};
