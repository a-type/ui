import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/index.js';
import { Input } from '../input/Input.js';
import { H1, P } from '../typography/index.js';
import { Drawer } from './Drawer.js';

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
			<Input placeholder="Type something..." />
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
				porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula
				accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi.
			</P>
			<Input placeholder="Type something..." />
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
				porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula
				accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor
				sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula accumsan,
				sit amet ullamcorper nunc ultricies. Nulla facilisi.
			</P>
			<Input placeholder="Type something..." />
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
				porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula
				accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor
				sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula accumsan,
				sit amet ullamcorper nunc ultricies. Nulla facilisi.
			</P>
			<Input placeholder="Type something..." />
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
				porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula
				accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor
				sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula accumsan,
				sit amet ullamcorper nunc ultricies. Nulla facilisi.
			</P>
			<Input placeholder="Type something..." />
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
				porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula
				accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor
				sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula accumsan,
				sit amet ullamcorper nunc ultricies. Nulla facilisi.
			</P>
			<Input placeholder="Type something..." />
		</div>
	);
}

export const Default: Story = {
	args: {
		children: (
			<>
				<Drawer.Trigger render={<Button />}>Open</Drawer.Trigger>
				<Drawer.Content>
					<Drawer.Title>Hello world</Drawer.Title>
					<DummyContent />
					<Drawer.Actions>
						<Drawer.Close />
						<Button emphasis="primary">Accept</Button>
					</Drawer.Actions>
				</Drawer.Content>
			</>
		),
	},
};

export const NoDefaultClose: Story = {
	args: {
		children: (
			<>
				<Drawer.Trigger render={<Button />}>Open</Drawer.Trigger>
				<Drawer.Content disableDefaultClose>
					<Drawer.Title>No default close</Drawer.Title>
					<DummyContent />
					<Drawer.Actions>
						<Drawer.Close />
					</Drawer.Actions>
				</Drawer.Content>
			</>
		),
	},
};
