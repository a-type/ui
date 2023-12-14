import type { Meta, StoryObj } from '@storybook/react';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogActions,
	DialogClose,
	DialogTitle,
} from './Dialog.js';

const meta = {
	title: 'Dialog',
	component: Dialog,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	args: {
		children: (
			<>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent>
					<DialogTitle>Hello world</DialogTitle>
					<DialogActions>
						<DialogClose>Close</DialogClose>
					</DialogActions>
				</DialogContent>
			</>
		),
	},
};
