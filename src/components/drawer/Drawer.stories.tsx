import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/index.js';
import { H1, P } from '../typography/index.js';
import {
	Drawer,
	DrawerActions,
	DrawerClose,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
} from './Drawer.js';

const meta: any = {
	title: 'Components/Drawer',
	component: Drawer,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof Drawer>;

function DummyContent() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<H1>Some content</H1>
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
				porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula
				accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi.
			</P>
			<Button disabled color="primary">
				Click me
			</Button>
		</div>
	);
}

export const Default: Story = {
	args: {
		children: (
			<>
				<DrawerTrigger render={<Button />}>Open</DrawerTrigger>
				<DrawerContent>
					<DrawerTitle>Hello world</DrawerTitle>
					<DummyContent />
					<DrawerActions>
						<DrawerClose />
						<Button emphasis="primary">Accept</Button>
					</DrawerActions>
				</DrawerContent>
			</>
		),
	},
};

export const NoDefaultClose: Story = {
	args: {
		children: (
			<>
				<DrawerTrigger render={<Button />}>Open</DrawerTrigger>
				<DrawerContent disableDefaultClose>
					<DrawerTitle>No default close</DrawerTitle>
					<DummyContent />
					<DrawerActions>
						<DrawerClose />
					</DrawerActions>
				</DrawerContent>
			</>
		),
	},
};
