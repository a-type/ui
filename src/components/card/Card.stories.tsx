import type { Meta, StoryObj } from '@storybook/react';
import {
	CardActions,
	CardFooter,
	CardMain,
	CardRoot,
	CardTitle,
} from './Card.js';
import { Button } from '../button.js';
import { Icon } from '../icon.js';

const meta = {
	title: 'Card',
	component: CardRoot,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof CardRoot>;

export default meta;

type Story = StoryObj<typeof CardRoot>;

export const Default: Story = {
	render: () => (
		<CardRoot>
			<CardMain>
				<CardTitle>Card Title</CardTitle>
			</CardMain>
			<CardFooter>
				<CardActions>
					<Button size="small">Button</Button>
					<Button size="icon" color="ghost">
						<Icon name="placeholder" />
					</Button>
				</CardActions>
			</CardFooter>
		</CardRoot>
	),
};
