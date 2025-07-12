import type { Meta, StoryObj } from '@storybook/react';
import { EmojiPicker } from './EmojiPicker.js';

const meta = {
	title: 'Components/EmojiPicker',
	component: EmojiPicker,
	argTypes: {},
	parameters: {
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
