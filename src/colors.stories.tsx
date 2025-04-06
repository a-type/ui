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
				<Box>
					<Swatch className="bg-primary-wash" />
					<Swatch className="bg-primary-light" />
					<Swatch className="bg-primary" />
					<Swatch className="bg-primary-dark" />
					<Swatch className="bg-primary-ink" />
				</Box>
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
