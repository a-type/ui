import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { Input } from '../input/Input.js';
import { ScrollArea } from './ScrollArea.js';

const meta = {
	title: 'Components/ScrollArea',
	argTypes: {
		direction: {
			control: { type: 'select' },
			options: ['vertical', 'horizontal', 'both'],
		},
	},
	args: {
		direction: 'vertical',
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<{ direction: 'vertical' | 'horizontal' | 'both' }>;

export default meta;

type Story = StoryObj<{ direction: 'vertical' | 'horizontal' | 'both' }>;

export const Default: Story = {
	render({ direction }) {
		return (
			<ScrollArea
				direction={direction}
				style={{ height: '200px', width: '400px' }}
			>
				<ScrollArea.Content
					className={clsx(
						direction === 'horizontal' && 'w-10000px',
						direction === 'both' && 'w-800px',
					)}
				>
					<Content />
				</ScrollArea.Content>
			</ScrollArea>
		);
	},
};

export const ConstraintTest: Story = {
	render({ direction }) {
		return (
			<ScrollArea direction={direction} className="h-300px w-300px">
				<ScrollArea.Content>
					<Box gap>
						<Input placeholder="Test input" />
						<Button>Submit</Button>
					</Box>
					<Content />
				</ScrollArea.Content>
			</ScrollArea>
		);
	},
};

function Content() {
	return (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
				Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
				sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
				a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
				molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
				Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
				a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
				tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
				Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit
				sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
				ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede
				pellentesque fermentum. Maecenas adipiscing ante non diam sollicitudin
				ornare. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
				euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consectetur.
				Vivamus fermentum nibh in augue. Praesent a lacus at urna consequat
				rhoncus. Morbi dapibus sapien vel ante. Aliquam erat volutpat.
				Pellentesque sagittis ligula eget metus. Vestibulum commodo. Ut rhoncus
				gravida arcu.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
				Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
				sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
				a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
				molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
				Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
				a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
				tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
				Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit
				sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
				ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede
				pellentesque fermentum. Maecenas adipiscing ante non diam sollicitudin
				ornare. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
				euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consectetur.
				Vivamus fermentum nibh in augue. Praesent a lacus at urna consequat
				rhoncus. Morbi dapibus sapien vel ante. Aliquam erat volutpat.
				Pellentesque sagittis ligula eget metus. Vestibulum commodo. Ut rhoncus
				gravida arcu.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
				Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
				sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
				a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
				molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
				Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
				a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
				tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
				Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit
				sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
				ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede
				pellentesque fermentum. Maecenas adipiscing ante non diam sollicitudin
				ornare. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
				euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consectetur.
				Vivamus fermentum nibh in augue. Praesent a lacus at urna consequat
				rhoncus. Morbi dapibus sapien vel ante. Aliquam erat volutpat.
				Pellentesque sagittis ligula eget metus. Vestibulum commodo. Ut rhoncus
				gravida arcu.
			</p>
		</>
	);
}
