import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'react-hot-toast';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';

const meta = {
	title: 'Components/toasts',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render(args) {
		return (
			<Box col gap>
				<Button
					onClick={() => {
						toast(
							'This is a default toast! With a lot of text. Enough to wrap around.',
							{
								duration: 10_000,
							},
						);
					}}
				>
					Show Default Toast
				</Button>
				<Button
					color="success"
					onClick={() => {
						toast.success('This is a success toast!', {
							duration: 10_000,
						});
					}}
				>
					Show Success Toast
				</Button>
				<Button
					color="attention"
					onClick={() => {
						toast.error('This is an error toast!', {
							duration: 10_000,
						});
					}}
				>
					Show Error Toast
				</Button>
				<Button
					onClick={() => {
						const id = toast.loading('This is a loading toast!');
						setTimeout(() => {
							toast.success('Loading complete!', { id, duration: 5000 });
						}, 3000);
					}}
				>
					Show Loading Toast
				</Button>
				<Button
					onClick={() => {
						toast.promise(
							(async () => {
								await new Promise((resolve) => setTimeout(resolve, 3000));
							})(),
							{
								loading: 'Promise is loading...',
								success: 'Promise resolved!',
								error: 'Promise rejected.',
							},
						);
					}}
				>
					Show Promise Toast
				</Button>
			</Box>
		);
	},
};
