import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from './marquee.js';

const meta = {
	title: 'Components/Marquee',
	component: Marquee,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Marquee>;

export default meta;

type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
	render(params) {
		return (
			<Marquee {...params}>
				<Marquee.Item>
					<img src="https://resources.biscuits.club/images/pashka.jpg" />
				</Marquee.Item>
				<Marquee.Item className="flex items-center justify-center bg-primary-wash color-primary-dark text-lg">
					Hello, world
				</Marquee.Item>
				<Marquee.Item
					render={
						<img src="https://resources.biscuits.club/images/pashka.jpg" />
					}
				/>
			</Marquee>
		);
	},
};
