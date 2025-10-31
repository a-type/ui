import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Button } from '../button/index.js';
import { Card } from '../card/Card.js';
import { Icon } from '../icon/index.js';
import { Input } from '../input/index.js';
import {
	NavBarItem,
	NavBarItemIcon,
	NavBarItemIconWrapper,
	NavBarItemPip,
	NavBarItemText,
	NavBarRoot,
} from '../navBar/index.js';
import { Switch } from '../switch/Switch.js';
import { PageContent } from './PageContent.js';
import { PageNav } from './PageNav.js';
import { PageNowPlaying } from './PageNowPlaying.js';
import { PageRoot } from './PageRoot.js';

const meta = {
	title: 'Components/Layouts',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
		layout: 'fullscreen',
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => {
		const [content, setContent] = useState(true);
		const toggleContent = () => setContent((prev) => !prev);
		return (
			<PageRoot className="bg-primary-wash">
				<PageContent>
					<div className="text-center">
						<h1 className="text-3xl font-bold">Hello, World!</h1>
						<p className="text-lg">This is a simple page layout.</p>
					</div>
					<Switch checked={content} onCheckedChange={toggleContent} />
					{content && (
						<Card.Grid>
							{new Array(100).fill(null).map((_, i) => (
								<Card key={i}>
									<Card.Main />
								</Card>
							))}
						</Card.Grid>
					)}
					<PageNowPlaying>Now playing</PageNowPlaying>
				</PageContent>
				<PageNav>
					<NavBarRoot>
						<NavBarItem>
							<NavBarItemIconWrapper>
								<NavBarItemIcon name="cart" />
							</NavBarItemIconWrapper>
							<NavBarItemText>Item 1 long</NavBarItemText>
						</NavBarItem>
						<NavBarItem active={true}>
							<NavBarItemIconWrapper>
								<NavBarItemIcon asChild>
									<Icon name="book" />
								</NavBarItemIcon>
							</NavBarItemIconWrapper>
							<NavBarItemText>Item 2</NavBarItemText>
							<NavBarItemPip />
						</NavBarItem>
						<NavBarItem color="gray" active={true}>
							<NavBarItemIconWrapper>
								<NavBarItemIcon asChild>
									<Icon name="book" />
								</NavBarItemIcon>
							</NavBarItemIconWrapper>
							<NavBarItemText>Neutral</NavBarItemText>
							<NavBarItemPip />
						</NavBarItem>
					</NavBarRoot>
				</PageNav>
			</PageRoot>
		);
	},
};

export const ManualWidth: Story = {
	render: () => {
		return (
			<PageRoot className="bg-primary-wash">
				<PageContent className="max-w-300px">
					<div className="text-center">
						<h1 className="text-3xl font-bold">Hello, World!</h1>
						<p className="text-lg">This is a simple page layout.</p>
					</div>
					<Card.Grid>
						{new Array(100).fill(null).map((_, i) => (
							<Card key={i}>
								<Card.Main />
							</Card>
						))}
					</Card.Grid>
				</PageContent>
				<PageNav>
					<NavBarRoot>
						<NavBarItem>
							<NavBarItemIconWrapper>
								<NavBarItemIcon name="cart" />
							</NavBarItemIconWrapper>
							<NavBarItemText>Item 1 long</NavBarItemText>
						</NavBarItem>
						<NavBarItem active={true}>
							<NavBarItemIconWrapper>
								<NavBarItemIcon asChild>
									<Icon name="book" />
								</NavBarItemIcon>
							</NavBarItemIconWrapper>
							<NavBarItemText>Item 2</NavBarItemText>
							<NavBarItemPip />
						</NavBarItem>
						<NavBarItem color="neutral" active={true}>
							<NavBarItemIconWrapper>
								<NavBarItemIcon asChild>
									<Icon name="book" />
								</NavBarItemIcon>
							</NavBarItemIconWrapper>
							<NavBarItemText>Neutral</NavBarItemText>
							<NavBarItemPip />
						</NavBarItem>
					</NavBarRoot>
				</PageNav>
			</PageRoot>
		);
	},
};

export const WithoutNav: Story = {
	render: () => (
		<PageRoot className="w-full h-full">
			<PageContent>
				<div className="text-center">
					<h1 className="text-3xl font-bold">Hello, World!</h1>
					<p className="text-lg">This is a simple page layout.</p>
					<Card.Grid>
						{new Array(100).fill(null).map((_, i) => (
							<Card key={i}>
								<Card.Main />
							</Card>
						))}
					</Card.Grid>
				</div>
				<PageNowPlaying>Now playing</PageNowPlaying>
			</PageContent>
		</PageRoot>
	),
};

export const WithVirtualKeyboard: Story = {
	render() {
		const [keyboard, setKeyboard] = useState(false);

		useEffect(() => {
			if (keyboard) {
				document.body.style.setProperty(
					'--mock-virtual-keyboard-height',
					'300px',
				);
			} else {
				document.body.style.removeProperty('--mock-virtual-keyboard-height');
			}
		}, [keyboard]);

		return (
			<PageRoot className="w-full h-full">
				<PageContent>
					<div className="text-center">
						<h1 className="text-3xl font-bold">Hello, World!</h1>
						<p className="text-lg">This is a simple page layout.</p>
					</div>
					<PageNowPlaying keepAboveKeyboard>
						<Button onClick={() => setKeyboard((v) => !v)}>
							Toggle fake kb
						</Button>
						<Input />
					</PageNowPlaying>
				</PageContent>
				<PageNav>
					<NavBarRoot>
						<NavBarItem>
							<NavBarItemIconWrapper>
								<NavBarItemIcon name="cart" />
							</NavBarItemIconWrapper>
							<NavBarItemText>Item 1 long</NavBarItemText>
						</NavBarItem>
						<NavBarItem active={true}>
							<NavBarItemIconWrapper>
								<NavBarItemIcon asChild>
									<Icon name="book" />
								</NavBarItemIcon>
							</NavBarItemIconWrapper>
							<NavBarItemText>Item 2</NavBarItemText>
							<NavBarItemPip />
						</NavBarItem>
					</NavBarRoot>
				</PageNav>
				<div className="fixed bottom-0 h-[var(--mock-virtual-keyboard-height,0)] bg-black w-full transition-height left-0 right-0" />
			</PageRoot>
		);
	},
};
