import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../index.js';
import { TextSkeleton } from './skeletons.js';

const meta = {
	title: 'Components/TextSkeleton',
	component: TextSkeleton,
	argTypes: {
		maxLength: {
			control: { type: 'number' },
			description: 'Maximum length of the random skeleton text',
		},
	},
	args: {
		maxLength: 20,
	},
	parameters: {
		docs: {
			description: {
				component:
					'Use `TextSkeleton` as a placeholder for text while content loads. ' +
					'Pass `maxLength` to influence its randomly chosen width, which stays fixed for that mount.\n\n' +
					'Provide loading status separately for assistive technology.',
			},
		},
		controls: { expanded: true },
	},
} satisfies Meta<typeof TextSkeleton>;

export default meta;

type Story = StoryObj<typeof TextSkeleton>;

export const Default: Story = {
	render(args) {
		return <TextSkeleton {...args} />;
	},
};

export const OnBackground: Story = {
	render(args) {
		return (
			<Box col gap p color="attention" surface layout="start center">
				<TextSkeleton {...args} />
				<TextSkeleton {...args} />
				<TextSkeleton {...args} />
			</Box>
		);
	},
};
