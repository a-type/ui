import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorModeToggle } from './ColorModeToggle.js';

/**
 * `ColorModeToggle` offers system, light, and dark modes. By default it uses the shared color mode and persists explicit choices in local storage.
 *
 * Pass `value` and `onValueChange` to manage the selection yourself; providing the callback replaces the default update.
 */
const meta = {
	title: 'Components/ColorModeToggle',
	component: ColorModeToggle,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof ColorModeToggle>;

export default meta;

type Story = StoryObj<typeof ColorModeToggle>;

export const Default: Story = {};
