import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { ActionBar, ActionButton } from './components/actions/index.js';
import { Button } from './components/button/index.js';
import { Card } from './components/card/index.js';
import { Icon } from './components/icon/index.js';
import {
	AvatarList,
	Box,
	Checkbox,
	DateRangePicker,
	Dialog,
	DropdownMenu,
	ImageUploader,
	NavBarItem,
	NavBarItemIcon,
	NavBarItemIconWrapper,
	NavBarItemPip,
	NavBarItemText,
	NavBarRoot,
	Note,
	PageContent,
	PageNav,
	PageRoot,
	Progress,
	Tooltip,
} from './components/index.js';
import { Input } from './components/input/index.js';
import { Tabs } from './components/tabs/tabs.js';
import { TextArea } from './components/textArea/index.js';

const meta = {
	title: 'themes',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

function DemoUI({ className }: { className?: string }) {
	const nextWeek = new Date();
	nextWeek.setDate(nextWeek.getDate() + 7);
	return (
		<PageRoot>
			<PageContent>
				<div className={clsx('grid gap-2 grid-cols-2', className)}>
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
					</Box>
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
					<Tooltip content="Hello World">
						<Button>Hover me</Button>
					</Tooltip>
					<Dialog>
						<Dialog.Trigger asChild>
							<Button>Click</Button>
						</Dialog.Trigger>
						<Dialog.Content>
							<Dialog.Title>Hello there</Dialog.Title>
							<Dialog.Description>Im a dialog</Dialog.Description>
							<Dialog.Actions>
								<Dialog.Close>Close</Dialog.Close>
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
					<Box surface="primary" p gap>
						<div>Primary surface</div>
						<Button color="ghost">Ghost</Button>
					</Box>
					<Box surface="accent" p>
						Accent surface
					</Box>
					<Box surface="default" p>
						Default surface
					</Box>
					<Box>
						<Note>Note note</Note>
					</Box>
					<ImageUploader className="h-400px" value={null} onChange={() => {}} />
					<DropdownMenu>
						<DropdownMenu.Trigger asChild>
							<Button>Dropdown</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Item>Item 1</DropdownMenu.Item>
							<DropdownMenu.Item>Item 2</DropdownMenu.Item>
							<DropdownMenu.Item>Item 3</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu>
					<Checkbox />
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
