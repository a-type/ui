import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox.js';

/**
 * Use `Checkbox` with a label and, when controlled, `checked` and `onCheckedChange`. Set `checkedMode="faded"` to de-emphasize checked items, such as completed tasks.
 *
 * For custom composition, use `Checkbox.Root` and `Checkbox.Indicator`.
 */
const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
