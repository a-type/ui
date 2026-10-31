import type { Meta, StoryObj } from '@storybook/react-vite';
import { Lightbox } from './Lightbox.js';

const meta = {
	title: 'Components/Lightbox',
	component: Lightbox,
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'Wrap a single element in `Lightbox` to use it as both the trigger and the enlarged content. ' +
					'`Lightbox.Image` provides image styling.\n\n' +
					'For different trigger and content elements, compose `Lightbox.Root`, `Trigger`, `Portal`, `Overlay`, and `Content` yourself.',
			},
		},
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
