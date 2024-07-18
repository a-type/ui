import type { Meta, StoryObj } from '@storybook/react';
import {
	CardActions,
	CardContent,
	CardFooter,
	CardImage,
	CardMain,
	CardMenu,
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
	render: (args) => (
		<div className="col items-stretch">
			<CardRoot {...args} className="min-h-20vh">
				<CardImage asChild>
					<img src="https://resources.biscuits.club/images/pashka.jpg" />
				</CardImage>
				<CardMain onClick={() => alert('clicked')}>
					<CardTitle>Card Title</CardTitle>
					<CardContent>
						Other stuff you'd have on a card. Maybe a time?
					</CardContent>
					<CardContent>More things, if you want.</CardContent>
				</CardMain>
				<CardFooter>
					<CardActions>
						<Button size="small">Button</Button>
						<Button size="icon" color="ghost">
							<Icon name="placeholder" />
						</Button>
					</CardActions>
					<CardMenu>
						<Button size="icon" color="ghost">
							<Icon name="dots" />
						</Button>
					</CardMenu>
				</CardFooter>
			</CardRoot>
			<CardRoot {...args}>
				<CardMain onClick={() => alert('clicked')}>
					<CardTitle>
						Card Title which is very long and would normally wrap
					</CardTitle>
					<CardContent>Other stuff</CardContent>
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
		</div>
	),
};

export const Compact: Story = {
	render: () => (
		<CardRoot>
			<CardMain compact>
				<CardTitle>Card Title</CardTitle>
				<CardContent>Other stuff</CardContent>
				<CardContent>More things, if you want.</CardContent>
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

export const NonInteractive: Story = {
	render: () => (
		<CardRoot>
			<CardMain>
				<CardTitle>Card Title</CardTitle>
				<CardContent>Other stuff</CardContent>
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

export const AsChild: Story = {
	render: () => (
		<CardRoot>
			<CardMain asChild>
				<a href="#here">
					<CardTitle>Card Title</CardTitle>
					<CardContent>Other stuff</CardContent>
				</a>
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

export const AsChildNonInteractive: Story = {
	render: () => (
		<CardRoot>
			<CardMain asChild nonInteractive>
				<button>
					<CardTitle>Card Title</CardTitle>
					<CardContent>Other stuff</CardContent>
				</button>
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
