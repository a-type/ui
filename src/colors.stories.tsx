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
					<Swatch className="bg-primary-old-wash" />
					<Swatch className="bg-primary-old-light" />
					<Swatch className="bg-primary-old" />
					<Swatch className="bg-primary-old-dark" />
					<Swatch className="bg-primary-old-ink" />
				</Box>
				<Box>
					<Swatch className="bg-dyn-primary-wash" />
					<Swatch className="bg-dyn-primary-light" />
					<Swatch className="bg-dyn-primary" />
					<Swatch className="bg-dyn-primary-dark" />
					<Swatch className="bg-dyn-primary-ink" />
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
