import type { Meta, StoryObj } from '@storybook/react';
import { Lightbox } from './Lightbox.js';

const meta = {
	title: 'Components/Lightbox',
	component: Lightbox,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Lightbox>;

export default meta;

type Story = StoryObj<typeof Lightbox>;

export const Default: Story = {
	render(args) {
		return (
			<Lightbox {...args}>
				<Lightbox.Image
					src="https://resources.biscuits.club/images/pashka.jpg"
					alt="Sample"
				/>
			</Lightbox>
		);
	},
};
