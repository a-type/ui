import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '../box/Box.js';
import { Button } from '../button/index.js';
import { Icon } from '../icon/index.js';
import {
	Card,
	CardActions,
	CardContent,
	CardFooter,
	cardGridColumns,
	CardImage,
	CardMain,
	CardMenu,
	CardRoot,
	CardTitle,
} from './Card.js';

const meta = {
	title: 'Components/Card',
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
		<div className="row items-stretch">
			<CardRoot {...args} className="min-h-20vh">
				<CardImage
					render={
						<img src="https://resources.biscuits.club/images/pashka.jpg" />
					}
				/>
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
						<Button size="small" color="primary">
							<Icon name="placeholder" />
						</Button>
					</CardActions>
					<CardMenu>
						<Button size="small" emphasis="ghost">
							<Icon name="dots" />
						</Button>
					</CardMenu>
				</CardFooter>
			</CardRoot>
			<CardRoot {...args} className="max-w-300px">
				<CardMain onClick={() => alert('clicked')}>
					<CardTitle>
						Card Title which is very long and would normally wrap
					</CardTitle>
					<CardContent>Other stuff</CardContent>
					<CardContent unstyled>Styling optional</CardContent>
				</CardMain>
				<CardFooter>
					<CardActions>
						<Button size="small">Button</Button>
						<Button size="small" emphasis="ghost">
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
					<Button size="small" emphasis="ghost">
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
					<Button emphasis="ghost">
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
			<CardMain
				render={
					<a href="#here">
						<CardTitle>Card Title</CardTitle>
						<CardContent>Other stuff</CardContent>
					</a>
				}
			/>
			<CardFooter>
				<CardActions>
					<Button size="small">Button</Button>
					<Button emphasis="ghost">
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
			<CardMain
				nonInteractive
				render={
					<button>
						<CardTitle>Card Title</CardTitle>
						<CardContent>Other stuff</CardContent>
					</button>
				}
			/>
			<CardFooter>
				<CardActions>
					<Button size="small">Button</Button>
					<Button emphasis="ghost">
						<Icon name="placeholder" />
					</Button>
				</CardActions>
			</CardFooter>
		</CardRoot>
	),
};

export const Grid: Story = {
	render: () => {
		const [sizes, setSizes] = useState(() =>
			Array.from({ length: 40 }, () => 50 + Math.floor(Math.random() * 300)),
		);
		const remove = (index: number) =>
			setSizes((v) => v.filter((_, i) => i !== index));
		const resize = (index: number) =>
			setSizes((v) => {
				const size = 50 + Math.floor(Math.random() * 300);
				return v.map((s, i) => (i === index ? size : s));
			});
		return (
			<Card.Grid>
				{sizes.map((size, i) => (
					<GridCard
						key={i}
						size={size}
						remove={() => remove(i)}
						resize={() => resize(i)}
					/>
				))}
			</Card.Grid>
		);
	},
};

export const GridCompact: Story = {
	render: () => {
		const [sizes, setSizes] = useState(() =>
			Array.from({ length: 40 }, () => 50 + Math.floor(Math.random() * 300)),
		);
		const remove = (index: number) =>
			setSizes((v) => v.filter((_, i) => i !== index));
		return (
			<Card.Grid columns={cardGridColumns.small}>
				{sizes.map((size, i) => (
					<GridCard key={i} size={size} remove={() => remove(i)} />
				))}
			</Card.Grid>
		);
	},
};

function GridCard({
	size,
	remove,
	resize,
}: {
	size: number;
	remove: () => void;
	resize?: () => void;
}) {
	return (
		<CardRoot style={{ height: size }}>
			<CardMain>
				<CardTitle>{size}</CardTitle>
			</CardMain>
			<CardFooter>
				<CardActions>
					<Button size="small" onClick={remove}>
						Delete
					</Button>
					{resize && (
						<Button size="small" onClick={resize}>
							Resize
						</Button>
					)}
				</CardActions>
			</CardFooter>
		</CardRoot>
	);
}

export const VisuallyFocused: Story = {
	render: () => (
		<CardRoot>
			<CardMain visuallyFocused onClick={() => {}}>
				<CardTitle>Card Title</CardTitle>
				<CardContent>Other stuff</CardContent>
			</CardMain>
			<CardFooter>
				<CardActions>
					<Button size="small">Button</Button>
					<Button emphasis="ghost">
						<Icon name="placeholder" />
					</Button>
				</CardActions>
			</CardFooter>
		</CardRoot>
	),
};

export const CardsInBox: Story = {
	render() {
		return (
			<Box container p gap>
				<CardRoot>
					<CardMain onClick={() => {}}>
						<CardTitle>Card Title</CardTitle>
						<CardContent>Other stuff</CardContent>
					</CardMain>
					<CardFooter>
						<CardActions>
							<Button size="small">Button</Button>
							<Button emphasis="ghost">
								<Icon name="placeholder" />
							</Button>
						</CardActions>
					</CardFooter>
				</CardRoot>
				<CardRoot>
					<CardMain onClick={() => {}}>
						<CardTitle>Card Title</CardTitle>
						<CardContent>Other stuff</CardContent>
					</CardMain>
					<CardFooter>
						<CardActions>
							<Button size="small">Button</Button>
							<Button emphasis="ghost">
								<Icon name="placeholder" />
							</Button>
						</CardActions>
					</CardFooter>
				</CardRoot>
			</Box>
		);
	},
};
