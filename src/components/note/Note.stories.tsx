import type { Meta, StoryObj } from '@storybook/react-vite';
import { Note } from './Note.js';

/**
 * `Note` renders its children in a folded-note surface. Use `Note.Input` for an editable, auto-sizing text area inside it.
 *
 * `Note.Input` is the input itself rather than a complete labeled field, so provide a label when editing.
 */
const meta = {
	title: 'Components/Note',
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

export const Editable: Story = {
	render(args) {
		return (
			<Note {...args}>
				<Note.Input />
			</Note>
		);
	},
};
