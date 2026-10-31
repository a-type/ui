import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch.js';

/**
 * Use `Switch` for an on/off setting, with an associated label. Control it with `checked` and `onCheckedChange`, or provide `defaultChecked`.
 *
 * The default includes a thumb; use `Switch.Root` and `Switch.Thumb` for custom composition.
 */
const meta = {
	title: 'Components/Switch',
	component: Switch,
	argTypes: {
		checked: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
	parameters: {
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
