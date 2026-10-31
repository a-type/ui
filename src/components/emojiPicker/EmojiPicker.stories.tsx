import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmojiPicker } from './EmojiPicker.js';

const meta = {
	title: 'Components/EmojiPicker',
	component: EmojiPicker,
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'Use `EmojiPicker` with `onValueChange`, which receives the emoji and its label. ' +
					'An optional `onClear` adds a clear action.\n\n' +
					'The prefab includes search and skin-tone controls; the skin-tone choice is stored in local storage. ' +
					'Use the exposed parts for a custom picker.',
			},
		},
		controls: { expanded: true },
	},
} satisfies Meta<typeof EmojiPicker>;

export default meta;

type Story = StoryObj<typeof EmojiPicker>;

export const Default: Story = {
	render(args) {
		return <EmojiPicker {...args} />;
	},
};
