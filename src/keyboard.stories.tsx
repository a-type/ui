import type { Meta, StoryObj } from '@storybook/react';
import { Input, TextArea } from './components/index.js';
import { useVirtualKeyboardBehavior } from './hooks/useVirtualKeyboardBehavior.js';

const meta = {
	title: 'Virtual Keyboard Test',
	argTypes: {},
	parameters: {
		controls: { expanded: false },
		layout: 'fullscreen',
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render(args) {
		useVirtualKeyboardBehavior('overlay');
		return (
			<>
				<div className="h-screen flex flex-col">
					<div className="flex flex-grow flex-col items-center justify-center p-lg">
						Focus the inputs below to see how the virtual keyboard behavior
						works.
					</div>
					<Input className="w-full" />
					<TextArea className="w-full" />
				</div>
			</>
		);
	},
};
