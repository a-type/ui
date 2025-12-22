import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { toast } from './toasts.js';

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
								duration: 120_000,
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
							duration: 20_000,
						});
					}}
				>
					Show Success Toast
				</Button>
				<Button
					color="attention"
					onClick={() => {
						toast.error('This is an error toast!', {
							duration: 20_000,
						});
					}}
				>
					Show Error Toast
				</Button>
				<Button
					onClick={() => {
						const { complete } = toast.loading('This is a loading toast!');
						setTimeout(() => {
							complete('Loading complete!', {
								duration: 5000,
								type: 'success',
							});
						}, 5000);
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
								loading:
									'Promise is loading... This text is longer to test animation of transition',
								success: 'Promise resolved!',
								error: 'Promise rejected.',
							},
						);
					}}
				>
					Show Promise Toast
				</Button>
				<Button
					onClick={() => {
						toast('This is a toast with actions!', {
							timeout: 20_000,
							data: {
								actions: [
									{
										label: 'Retry',
										emphasis: 'primary',
										onClick: () => {
											alert('Retry clicked!');
										},
									},
									{
										label: 'Undo',
										emphasis: 'light',
										onClick: () => {
											alert('Undo clicked!');
										},
									},
								],
							},
						});
					}}
				>
					Show Toast with Actions
				</Button>
				<Button
					onClick={() => {
						toast({
							title: 'Rich Toast',
							description: 'This toast has both a title and a description.',
							timeout: 20_000,
						});
					}}
				>
					Show Rich Toast
				</Button>
			</Box>
		);
	},
};
