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

const content = (spans?: boolean) =>
	Array.from({ length: 100 }, (_, i) => {
		const size = 100 + Math.floor(Math.random() * 100);
		let span = undefined;
		if (spans) {
			if (Math.random() < 0.1) {
				span = 2;
			} else if (Math.random() < 0.03) {
				span = 3;
			}
		}

		return (
			<div
				key={i}
				className="bg-gray-5 rounded-lg"
				style={{ height: size }}
				data-span={span}
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
