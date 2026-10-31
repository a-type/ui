import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch.js';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	argTypes: {
		checked: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
	parameters: {
		docs: {
			description: {
				component:
					'Use `Switch` for an on/off setting, with an associated label. ' +
					'Control it with `checked` and `onCheckedChange`, or provide `defaultChecked`.\n\n' +
					'The default includes a thumb; use `Switch.Root` and `Switch.Thumb` for custom composition.',
			},
		},
		controls: { expanded: true },
	},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	render(args) {
		return <Switch {...args} />;
	},
};
