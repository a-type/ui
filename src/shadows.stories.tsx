import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { Box } from './components/index.js';

const meta = {
	title: 'shadows',
	argTypes: {
		opacity: {
			control: { type: 'range', min: 0, max: 1, step: 0.1 },
			defaultValue: 0.1,
			description: 'Opacity modifier',
		},
	},
	args: {
		opacity: 0.1,
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<{ opacity: number }>;

export default meta;

type Story = StoryObj<Meta>;

const opacityClasses = [
	'shadow-op-0',
	'shadow-op-10',
	'shadow-op-20',
	'shadow-op-30',
	'shadow-op-40',
	'shadow-op-50',
	'shadow-op-60',
	'shadow-op-70',
	'shadow-op-80',
	'shadow-op-90',
	'shadow-op-100',
];

export const Default: Story = {
	render(args) {
		return (
			<div
				className={clsx(
					'grid grid-cols-4 gap-xl',
					opacityClasses[args.opacity * 10],
				)}
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
