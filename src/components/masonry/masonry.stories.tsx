import type { Meta, StoryObj } from '@storybook/react';
import { Masonry } from './masonry.js';

const meta = {
	title: 'Masonry',
	component: Masonry,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Masonry>;

export default meta;

type Story = StoryObj<typeof Masonry>;

const sizes = Array.from({ length: 100 }, (_, i) => {
	const size = 100 + Math.floor(Math.random() * 100);
	return (
		<div key={i} className="bg-gray-5 rounded-lg" style={{ height: size }}>
			{size}
		</div>
	);
});

export const Default: Story = {
	render(props) {
		return <Masonry {...props}>{sizes}</Masonry>;
	},
};
