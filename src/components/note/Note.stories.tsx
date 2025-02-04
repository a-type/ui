import type { Meta, StoryObj } from '@storybook/react';
import { Note } from './Note.js';

const meta = {
	title: 'Note',
	component: Note,

	args: {
		children: 'This is a note',
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Note>;

export default meta;

type Story = StoryObj<typeof Note>;

export const Default: Story = {};
