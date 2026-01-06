import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar.js';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	render(args) {
		return <Avatar {...args} />;
	},
};

export const WithImage: Story = {
	args: {
		imageSrc: 'https://i.pravatar.cc/300',
		name: 'John Doe',
	},
};

export const WithName: Story = {
	args: {
		name: 'Jane Smith',
	},
};

export const FailedImage: Story = {
	args: {
		imageSrc: 'http://localhost:3333/nonexistent.jpg',
		name: 'Fallback User',
	},
};

export const Empty: Story = {
	args: {
		name: undefined,
		imageSrc: undefined,
	},
};
