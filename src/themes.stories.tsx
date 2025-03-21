import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { useState } from 'react';
import { ActionBar, ActionButton } from './components/actions/index.js';
import { Button } from './components/button/index.js';
import { Card } from './components/card/index.js';
import { Icon } from './components/icon/index.js';
import {
	AvatarList,
	Box,
	Checkbox,
	ColorPicker,
	ContextMenu,
	DateRangePicker,
	Dialog,
	DropdownMenu,
	H1,
	H2,
	H3,
	H4,
	HorizontalList,
	ImageUploader,
	NavBarItem,
	NavBarItemIcon,
	NavBarItemIconWrapper,
	NavBarItemPip,
	NavBarItemText,
	NavBarRoot,
	Note,
	P,
	PageContent,
	PageNav,
	PageRoot,
	Progress,
	Provider,
	ScrollArea,
	TextSkeleton,
	ThemeName,
	ToggleGroup,
	Tooltip,
} from './components/index.js';
import { Input } from './components/input/index.js';
import { Tabs } from './components/tabs/tabs.js';
import { TextArea } from './components/textArea/index.js';
import { useOverrideTheme } from './hooks/useOverrideTheme.js';

const meta = {
	title: 'themes',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
		layout: 'fullscreen',
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

function DemoUI({ className }: { className?: string }) {
	const nextWeek = new Date();
	nextWeek.setDate(nextWeek.getDate() + 7);
	return (
		<PageRoot className={clsx('flex-1', className)}>
			<PageContent>
				<div className={clsx('grid gap-2 grid-cols-2')}>
					<Box gap wrap p>
						<Button color="primary">Primary</Button>
						<Button color="accent">Accent</Button>
						<Button>Default</Button>
						<Button color="contrast">Contrast</Button>
						<Button color="destructive">Destructive</Button>
						<Button color="ghost">Ghost</Button>
						<Button color="ghostAccent">Ghost Accent</Button>
						<Button size="small" color="destructive">
							Destructive Small
						</Button>
						<Button size="small" color="ghostDestructive">
							Ghost Destructive Small
						</Button>
					</Box>
					<Box gap wrap p items="start">
						<Input placeholder="Placeholder" />
						<TextArea placeholder="Placeholder" />
						<Box d="row" gap items="center">
							<Checkbox defaultChecked />
							<span>Checkbox</span>
						</Box>
						<ToggleGroup type="single">
							<ToggleGroup.Item value="1">Toggle 1</ToggleGroup.Item>
							<ToggleGroup.Item value="2">Toggle 2</ToggleGroup.Item>
						</ToggleGroup>
					</Box>
					<Box layout="start center" d="col" gap p className="max-h-200px">
						<ScrollArea>
							<H1>Heading 1</H1>
							<H2>Heading 2</H2>
							<H3>Heading 3</H3>
							<H4>Heading 4</H4>
							<P>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</P>
							<TextSkeleton maxLength={30} />
							<TextSkeleton maxLength={10} />
						</ScrollArea>
					</Box>
					<Box d="col" gap>
						<Card>
							<Card.Main onClick={() => {}}>
								<Card.Title>Card Title</Card.Title>
								<Card.Content>Card Content</Card.Content>
							</Card.Main>
							<Card.Footer>
								<Card.Actions>
									<Button size="small">Action 1</Button>
									<Button size="icon-small" color="ghost">
										<Icon name="placeholder" />
									</Button>
								</Card.Actions>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Main compact onClick={() => {}}>
								<Card.Title>Card Title</Card.Title>
								<Card.Content>Card Content</Card.Content>
							</Card.Main>
							<Card.Footer>
								<Card.Actions>
									<Button size="small">Action 1</Button>
									<Button size="icon-small" color="ghost">
										<Icon name="placeholder" />
									</Button>
								</Card.Actions>
							</Card.Footer>
						</Card>
					</Box>
					<Tabs defaultValue="tab1">
						<Tabs.List>
							<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
							<Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
						</Tabs.List>
						<Tabs.Content value="tab1">Tab 1 Content</Tabs.Content>
						<Tabs.Content value="tab2">Tab 2 Content</Tabs.Content>
					</Tabs>
					<ActionBar>
						<ActionButton>
							<Icon name="placeholder" />
							Hello
						</ActionButton>
						<ActionButton color="primary">
							<Icon name="placeholder" />
							World
						</ActionButton>
						<ActionButton>
							<Icon name="placeholder" />
						</ActionButton>
					</ActionBar>
					<AvatarList count={3}>
						<AvatarList.Item index={0} name="John Doe" />
						<AvatarList.Item index={1} name="Jane Doe" />
						<AvatarList.Item index={2} name="John Smith" />
					</AvatarList>
					<ContextMenu>
						<ContextMenu.Trigger asChild>
							<Tooltip content="Hello World">
								<Button>Hover or right click</Button>
							</Tooltip>
						</ContextMenu.Trigger>
						<ContextMenu.Content>
							<ContextMenu.Arrow />
							<ContextMenu.Item>Item 1</ContextMenu.Item>
							<ContextMenu.Item>Item 2</ContextMenu.Item>
							<ContextMenu.Item>Item 3</ContextMenu.Item>
						</ContextMenu.Content>
					</ContextMenu>
					<Dialog>
						<Dialog.Trigger asChild>
							<Button>Click</Button>
						</Dialog.Trigger>
						<Dialog.Content>
							<Dialog.Title>Hello there</Dialog.Title>
							<Dialog.Description>Im a dialog</Dialog.Description>
							<Dialog.Actions>
								<Dialog.Close>Close</Dialog.Close>
								<Button color="primary">Action</Button>
							</Dialog.Actions>
						</Dialog.Content>
					</Dialog>
					<DateRangePicker
						className="grid-col-span-2"
						value={{
							start: new Date(),
							end: nextWeek,
						}}
						onChange={() => {}}
					/>
					<Progress value={50} className="m-auto" />
					<Box surface="primary" p gap d="col">
						<H1>Primary surface</H1>
						<H2>Primary surface</H2>
						<H3>Primary surface</H3>
						<div>Primary surface</div>
						<Button color="ghost">Ghost</Button>
					</Box>
					<Box surface="accent" p d="col" className="max-h-200px">
						<ScrollArea>
							<H2>Accent surface</H2>
							<H3>Accent surface</H3>
							<P>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</P>
							<P>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</P>
							<P>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</P>
							<TextSkeleton maxLength={30} />
							<TextSkeleton maxLength={10} />
							Accent surface
						</ScrollArea>
					</Box>
					<Box surface="default" p d="col">
						Default surface
					</Box>
					<Box surface="attention" p d="col">
						<H2>Attention surface</H2>
						<H3>Attention surface</H3>
						Attention surface
					</Box>
					<Box>
						<Note>Note note</Note>
					</Box>
					<Box justify="start" items="start">
						<HorizontalList openDirection="down">
							<Button size="small">One</Button>
							<Button size="small">Two</Button>
							<Button size="small">Three</Button>
							<Button size="small">Four</Button>
							<Button size="small">Five</Button>
							<Button size="small">Six</Button>
						</HorizontalList>
					</Box>
					<ImageUploader className="h-200px" value={null} onChange={() => {}} />
					<DropdownMenu>
						<DropdownMenu.Trigger asChild className="m-auto">
							<Button>Dropdown</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Item>Item 1</DropdownMenu.Item>
							<DropdownMenu.Item>Item 2</DropdownMenu.Item>
							<DropdownMenu.Item>Item 3</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu>
				</div>
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
}

export const Default: Story = {
	render() {
		return <DemoUI />;
	},
};

export const Nesting: Story = {
	render() {
		return (
			<Box d="col" p gap>
				<Box d="row" gap surface="primary">
					<Button color="primary">Root theme</Button>
				</Box>
				<DemoUI className="theme-eggplant override-dark flex-1" />
			</Box>
		);
	},
};

export const Override: Story = {
	render() {
		const [theme, setTheme] = useState<ThemeName | null>(null);
		useOverrideTheme(theme);
		return (
			<Provider>
				<Box d="col" p gap>
					<ColorPicker value={theme} onChange={setTheme} />
					<DemoUI />
				</Box>
			</Provider>
		);
	},
};
