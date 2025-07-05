import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button, P } from './components/index.js';

const meta = {
	title: 'Utility Classes',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const AnchorPosition: Story = {
	render(args) {
		return (
			<div className="w-300px h-full overflow-auto anchor-container border">
				<P>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</P>
				<Button color="primary" className="anchor-demo">
					Button
				</Button>
				<Box
					surface="primary"
					p
					className="fixed anchor-to-demo left-[anchor(right)] top-[anchor(bottom)]"
				>
					Anchored to button
				</Box>
				<Box
					surface="accent"
					p
					className="anchor-to-container fixed right-[anchor(right)] bottom-[anchor(bottom)]"
				>
					Anchored to the outer box
				</Box>
				<P>
					Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
					varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
					magna felis sollicitudin mauris. Integer in mauris eu nibh. Nullam
					mollis. Ut justo. Suspendisse potenti. In eleifend quam a odio. In hac
					habitasse platea dictumst. Maecenas malesuada. Praesent congue erat at
					massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.
					Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in
					faucibus orci luctus
				</P>
			</div>
		);
	},
};
