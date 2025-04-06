import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './components/index.js';

const meta = {
	title: 'colors',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render() {
		return (
			<Box d="col">
				<Range className="theme-lemon" />
				<Range className="theme-leek" />
				<Range className="theme-tomato" />
				<Range className="theme-eggplant" />
				<Range className="theme-blueberry" />
				<Range className="theme-salt" />
			</Box>
		);
	},
};

function Swatch({ className }: { className?: string }) {
	return (
		<div
			className={className}
			style={{
				width: '100px',
				height: '100px',
			}}
		/>
	);
}

function Range({ className }: { className?: string }) {
	return (
		<Box className={className}>
			<Swatch className="bg-primary-wash" />
			<Swatch className="bg-primary-light" />
			<Swatch className="bg-primary" />
			<Swatch className="bg-primary-dark" />
			<Swatch className="bg-primary-ink" />
		</Box>
	);
}
