import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { setColorMode, useColorMode } from './colorMode.js';
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
	Select,
	TextSkeleton,
	ToggleGroup,
	Tooltip,
} from './components/index.js';
import { Input } from './components/input/index.js';
import { Tabs } from './components/tabs/tabs.js';
import { TextArea } from './components/textArea/index.js';
import { useOverrideTheme } from './hooks/useOverrideTheme.js';
import { PaletteName, PROPS } from './uno/index.js';

const meta = {
	title: 'Theme Demo',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
		layout: 'fullscreen',
	},
	tags: [],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export function DemoUI({ className }: { className?: string }) {
	const nextWeek = new Date();
	nextWeek.setDate(nextWeek.getDate() + 7);
	return (
		<PageRoot data-testid="demo" className={clsx('flex-1', className)}>
			<PageContent>
				<div className={clsx('grid grid-cols-2 gap-2')}>
					<Box gap wrap p>
						<Button color="primary" emphasis="primary">
							Primary
						</Button>
						<Button color="accent" emphasis="primary">
							Accent
						</Button>
						<Button>Default</Button>
						<Button emphasis="contrast">Contrast</Button>
						<Button color="attention" emphasis="primary">
							Destructive
						</Button>
						<Button emphasis="ghost">Ghost</Button>
						<Button color="accent" emphasis="ghost">
							Ghost Accent
						</Button>
						<Button size="small" color="attention" emphasis="primary">
							Destructive Small
						</Button>
						<Button size="small" color="attention" emphasis="ghost">
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
						<ToggleGroup defaultValue={['1']}>
							<ToggleGroup.Item value="1">Toggle 1</ToggleGroup.Item>
							<ToggleGroup.Item value="2">Toggle 2</ToggleGroup.Item>
						</ToggleGroup>
					</Box>
					<Box
						layout="start safe-center"
						d="col"
						gap
						p
						className="max-h-200px"
						overflow="auto-y"
					>
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
									<Button size="small" emphasis="ghost">
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
									<Button size="small" emphasis="ghost">
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
						<ContextMenu.Trigger render={<Tooltip content="Hello World" />}>
							<Button>Hover or right click</Button>
						</ContextMenu.Trigger>
						<ContextMenu.Content>
							<ContextMenu.Item>Item 1</ContextMenu.Item>
							<ContextMenu.Item>Item 2</ContextMenu.Item>
							<ContextMenu.Item>Item 3</ContextMenu.Item>
						</ContextMenu.Content>
					</ContextMenu>
					<DropdownMenu>
						<DropdownMenu.Trigger render={<Button />} className="m-auto">
							Dropdown
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Item>Item 1</DropdownMenu.Item>
							<DropdownMenu.Item>Item 2</DropdownMenu.Item>
							<DropdownMenu.Item>Item 3</DropdownMenu.Item>
							<DropdownMenu.Item disabled>Disabled Item</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>Item 4</DropdownMenu.Item>
							<DropdownMenu.Item>Item 5</DropdownMenu.Item>
							<DropdownMenu.Item>Item 6</DropdownMenu.Item>
							<DropdownMenu.Item>
								With icon
								<DropdownMenu.ItemRightSlot>
									<Icon name="flag" />
								</DropdownMenu.ItemRightSlot>
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu>
					<Select value="1" itemToStringLabel={(i) => `Item ${i}`}>
						<Select.Trigger />
						<Select.Content>
							<Select.Item value="1">Item 1</Select.Item>
							<Select.Item value="2">Item 2</Select.Item>
							<Select.Item value="3">Item 3</Select.Item>
							<Select.Item value="4">Item 4</Select.Item>
							<Select.Item value="5">Item 5</Select.Item>
							<Select.Item value="6">Item 6</Select.Item>
							<Select.Item value="7">Item 7</Select.Item>
							<Select.Item value="8">Item 8</Select.Item>
							<Select.Item value="9">Item 9</Select.Item>
							<Select.Item value="10">Item 10</Select.Item>
						</Select.Content>
					</Select>
					<Dialog>
						<Dialog.Trigger render={<Button />}>Click</Dialog.Trigger>
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
					<Box surface color="primary" p gap d="col">
						<H1>Primary surface</H1>
						<H2>Primary surface</H2>
						<H3>Primary surface</H3>
						<div>Primary surface</div>
						<Button emphasis="ghost">Ghost</Button>
					</Box>
					<Box
						surface
						color="accent"
						p
						d="col"
						className="max-h-200px"
						overflow="auto-y"
					>
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
					</Box>
					<Box surface p d="col">
						Default surface
					</Box>
					<Box surface color="attention" p d="col">
						<H2>Attention surface</H2>
						<H3>Attention surface</H3>
						Attention surface
						<Button emphasis="ghost">Ghost</Button>
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
					<NavBarItem active>
						<NavBarItemIconWrapper>
							<NavBarItemIcon name="book" />
						</NavBarItemIconWrapper>
						<NavBarItemText>Item 2</NavBarItemText>
						<NavBarItemPip />
					</NavBarItem>
					<NavBarItem color="gray">
						<NavBarItemIconWrapper>
							<NavBarItemIcon render={<Icon name="book" />} />
						</NavBarItemIconWrapper>
						<NavBarItemText>Neutral</NavBarItemText>
					</NavBarItem>
					<NavBarItem color="gray" active>
						<NavBarItemIconWrapper>
							<NavBarItemIcon render={<Icon name="book" />} />
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
				<Box d="row" gap surface color="primary">
					<Button color="primary">Root theme</Button>
				</Box>
				<DemoUI className="palette-eggplant override-dark flex-1" />
			</Box>
		);
	},
};

export const Override: Story = {
	render() {
		const [theme, setTheme] = useState<PaletteName | null>(null);
		useOverrideTheme(theme);
		const colorMode = useColorMode();
		return (
			<Provider>
				<Box d="col" gap>
					<Box gap p>
						<ColorPicker value={theme} onChange={setTheme} />
						<Select
							value={colorMode}
							onValueChange={(v) => setColorMode(v as any)}
						>
							<Select.Trigger />
							<Select.Content>
								<Select.Item value="system">System</Select.Item>
								<Select.Item value="light">Light</Select.Item>
								<Select.Item value="dark">Dark</Select.Item>
							</Select.Content>
						</Select>
					</Box>
					<DemoUI />
				</Box>
			</Provider>
		);
	},
};

export const Custom: Story = {
	render() {
		const [theme, setTheme] = useState({
			[PROPS.USER.COLOR.PRIMARY_HUE]: 70,
			[PROPS.USER.COLOR.ACCENT_HUE]: 290,
			[PROPS.USER.SATURATION]: 0.5,
			[PROPS.USER.BORDER_SCALE]: 1.5,
			[PROPS.USER.SPACING_SCALE]: 1,
			[PROPS.USER.CORNER_SCALE]: 1,
		});
		const reroll = () => {
			setTheme({
				[PROPS.USER.COLOR.PRIMARY_HUE]: Math.floor(Math.random() * 360),
				[PROPS.USER.COLOR.ACCENT_HUE]: Math.floor(Math.random() * 360),
				[PROPS.USER.SATURATION]: Math.random(),
				[PROPS.USER.BORDER_SCALE]: Math.random() * 2,
				[PROPS.USER.SPACING_SCALE]: Math.random() * 2,
				[PROPS.USER.CORNER_SCALE]: Math.random() * 1.25,
			});
		};
		return (
			<Box d="col" gap items="start" style={theme as any}>
				<Button onClick={reroll}>Reroll</Button>
				<DemoUI className="theme" />
			</Box>
		);
	},
};

export const Trippy: Story = {
	render() {
		const ref = useRef<HTMLDivElement>(null);
		const values = useRef({
			primarySource: 0,
			accentSource: 180,
			saturation: 0.5,
			borderScale: 2,
			spacingScale: 0.5,
			cornerScale: 0.5,
		});
		const dt = 1000;
		setInterval(() => {
			const current = ref.current;
			if (!current) return;
			values.current.primarySource =
				(values.current.primarySource + dt / 100) % 360;
			values.current.accentSource =
				(values.current.accentSource + dt / 50) % 360;
			values.current.saturation =
				0.5 + 0.5 * Math.sin((Date.now() / 100000) * Math.PI * 2);
			values.current.borderScale =
				1.5 + 1.5 * Math.sin((Date.now() / 20000) * Math.PI * 2);
			values.current.spacingScale =
				1 + Math.sin((Date.now() / 50000) * Math.PI * 2);
			values.current.cornerScale = 1 + Math.sin(Date.now() / 3000);
			current.style.setProperty(
				PROPS.USER.COLOR.PRIMARY_HUE,
				values.current.primarySource.toString(),
			);
			current.style.setProperty(
				PROPS.USER.COLOR.ACCENT_HUE,
				values.current.accentSource.toString(),
			);
			current.style.setProperty(
				PROPS.USER.SATURATION,
				values.current.saturation.toString(),
			);
			current.style.setProperty(
				PROPS.USER.BORDER_SCALE,
				values.current.borderScale.toString(),
			);
			current.style.setProperty(
				PROPS.USER.SPACING_SCALE,
				values.current.spacingScale.toString(),
			);
			current.style.setProperty(
				PROPS.USER.CORNER_SCALE,
				values.current.cornerScale.toString(),
			);
		}, dt);
		return (
			<div ref={ref}>
				<DemoUI className="theme" />
			</div>
		);
	},
};
