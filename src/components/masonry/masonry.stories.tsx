import type { Meta, StoryObj } from '@storybook/react';
import { Masonry } from './masonry.js';
import { useState } from 'react';

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

const randomSpan = () => {
	let span = 1;
	if (Math.random() < 0.1) {
		span = 2;
	} else if (Math.random() < 0.03) {
		span = 3;
	}
	return span;
};

const content = (spans?: boolean) =>
	Array.from({ length: 100 }, (_, i) => {
		const size = 100 + Math.floor(Math.random() * 100);
		const [span, setSpan] = useState(randomSpan);

		return (
			<div
				key={i}
				className="bg-gray-5 rounded-lg"
				style={{ height: size }}
				data-span={spans ? span : undefined}
				onClick={() => setSpan((v) => (v === 1 ? 2 : 1))}
			>
				{size}
			</div>
		);
	});

export const Default: Story = {
	render(props) {
		return <Masonry {...props}>{content()}</Masonry>;
	},
};

export const WithSpan: Story = {
	render(props) {
		return <Masonry {...props}>{content(true)}</Masonry>;
	},
};
