import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './components/index.js';

const meta = {
	title: 'System/Shadows',
	args: {
		opacity: 0.1,
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<{ opacity: number }>;

export default meta;

type Story = StoryObj<Meta>;

export const Default: Story = {
	render(args) {
		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					gap: 'var(--m-spacing-xl)',
				}}
			>
				<Box surface border p elevated="sm">
					Small Shadow
				</Box>
				<Box surface border p elevated="md">
					Medium Shadow
				</Box>
				<Box surface border p elevated="lg">
					Large Shadow
				</Box>
				<Box surface border p elevated="xl">
					Extra Large Shadow
				</Box>
				<Box surface border p elevated="-sm">
					Small Inset Shadow
				</Box>
				<Box surface border p elevated="-md">
					Medium Inset Shadow
				</Box>
				<Box surface border p elevated="-lg">
					Large Inset Shadow
				</Box>
				<Box surface border p elevated="-xl">
					Extra Large Inset Shadow
				</Box>
				<Box surface border p elevated="sm-up">
					Small Shadow Up
				</Box>
				<Box surface border p elevated="md-up">
					Medium Shadow Up
				</Box>
				<Box surface border p elevated="lg-up">
					Large Shadow Up
				</Box>
				<Box surface border p elevated="xl-up">
					Extra Large Shadow Up
				</Box>
				<Box surface border p elevated="-sm-up">
					Small Inset Shadow Up
				</Box>
				<Box surface border p elevated="-md-up">
					Medium Inset Shadow Up
				</Box>
				<Box surface border p elevated="-lg-up">
					Large Inset Shadow Up
				</Box>
				<Box surface border p elevated="-xl-up">
					Extra Large Inset Shadow Up
				</Box>
			</div>
		);
	},
};
