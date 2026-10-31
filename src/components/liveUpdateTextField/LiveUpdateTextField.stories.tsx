import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { LiveUpdateTextField } from './LiveUpdateTextField.js';

/**
 * Use `LiveUpdateTextField` with `value` and `onChange` for optimistic, debounced updates. The default debounce is 500ms; set `debounceMs` to change it, or `textArea` for multiline input.
 *
 * External value changes are ignored while focused. Blur sends an edited value immediately, even if a debounced update was already sent.
 */
const meta = {
	title: 'Components/LiveUpdateTextField',
	component: LiveUpdateTextField,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof LiveUpdateTextField>;

export default meta;

type Story = StoryObj<typeof LiveUpdateTextField>;

export const Default: Story = {
	render(args) {
		const [value, setValue] = useState('Initial value');
		return <LiveUpdateTextField {...args} value={value} onChange={setValue} />;
	},
};
