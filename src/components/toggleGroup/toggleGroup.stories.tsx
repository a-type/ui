import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleGroup } from './toggleGroup.js';

/**
 * Use `ToggleGroup` with `ToggleGroup.Item` children, each with a `value`. The controlled `value` and `onValueChange` use an array, even for single selection.
 *
 * Set `multiple` to allow more than one item to be selected.
 */
const meta = {
	title: 'Components/ToggleGroup',
	component: ToggleGroup,
	argTypes: {
		multiple: {
			type: 'boolean',
		},
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
	render(args) {
		return (
			<ToggleGroup {...args}>
				<ToggleGroup.Item>Option 1</ToggleGroup.Item>
				<ToggleGroup.Item>Option 2</ToggleGroup.Item>
				<ToggleGroup.Item>Option 3</ToggleGroup.Item>
			</ToggleGroup>
		);
	},
};
