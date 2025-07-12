import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '../box/Box.js';
import { Masonry } from './masonry.js';

const meta = {
	title: 'Components/Masonry',
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
			<Box
				key={i}
				layout="center center"
				surface="primary"
				border
				style={{ height: size }}
				data-span={spans ? span : undefined}
				onClick={() => setSpan((v) => (v === 1 ? 2 : 1))}
			>
				<div>{size}</div>
			</Box>
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
