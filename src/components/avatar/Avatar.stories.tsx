import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar.js';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'Pass `name` and optionally `imageSrc` to `Avatar`. It falls back to the first initial, or a profile icon when both are absent.\n\n' +
					'For overlapping avatars, use `AvatarList` with a `count` and an `index` on each `AvatarList.Item`.',
			},
		},
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
