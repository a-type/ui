import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { Box } from '../box/Box.js';
import { Button } from '../button/index.js';
import { Input } from '../input/index.js';
import { ParticleLayer } from '../particles/index.js';
import { Provider } from '../provider/Provider.js';
import { Select } from '../select/index.js';
import { Tooltip } from '../tooltip/Tooltip.js';
import { H1, P } from '../typography/index.js';
import { Dialog } from './Dialog.js';

const meta: any = {
	title: 'Components/Dialog',
	component: Dialog,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

function DummyContent() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<H1>Some content</H1>
			<div style={{ maxHeight: '20vh', overflowY: 'auto' }}>
				<P>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
					porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget
					ligula accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi.
					Nulla facil
				</P>
				<P>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
					porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget
					ligula accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi.
					Nulla facil
				</P>
				<P>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
					porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget
					ligula accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi.
					Nulla facil
				</P>
			</div>
			<Button disabled color="primary">
				Click me
			</Button>
		</div>
	);
}

export const Default: Story = {
	args: {
		children: (
			<ParticleLayer noPortal>
				<Dialog.Trigger render={<Button />}>Open</Dialog.Trigger>
				<DummyContent />
				<Dialog.Content>
					<Dialog.Title>Hello world</Dialog.Title>
					<DummyContent />
					<DummyContent />
					<DummyContent />
					<Box gap>
						<Input placeholder="Type something..." />
						<Button emphasis="primary">Submit</Button>
					</Box>
					<Dialog.Actions>
						<Dialog.Close />
						<Button emphasis="primary">Accept</Button>
					</Dialog.Actions>
				</Dialog.Content>
			</ParticleLayer>
		),
	},
};

export const Small: Story = {
	args: {
		children: (
			<ParticleLayer noPortal>
				<Dialog.Trigger render={<Button />}>Open</Dialog.Trigger>
				<DummyContent />
				<Dialog.Content>
					<Dialog.Title>Hello world</Dialog.Title>
					<DummyContent />
					<Dialog.Actions>
						<Dialog.Close />
					</Dialog.Actions>
				</Dialog.Content>
			</ParticleLayer>
		),
	},
};

export const NoSheet: Story = {
	args: {
		disableSheet: true,
		children: (
			<ParticleLayer noPortal>
				<Dialog.Trigger render={<Button />}>Open</Dialog.Trigger>
				<DummyContent />
				<Dialog.Content>
					<Dialog.Title>Hello world</Dialog.Title>
					<Dialog.Actions>
						<Dialog.Close />
					</Dialog.Actions>
				</Dialog.Content>
			</ParticleLayer>
		),
	},
};

export const Positioned: Story = {
	args: {
		children: (
			<ParticleLayer noPortal>
				<Dialog.Trigger render={<Button />}>Open</Dialog.Trigger>
				<DummyContent />
				<Dialog.Content style={{ bottom: 0, top: 'auto' }}>
					<Dialog.Title>Hello world</Dialog.Title>
					<Dialog.Actions>
						<Dialog.Close />
					</Dialog.Actions>
				</Dialog.Content>
			</ParticleLayer>
		),
	},
};

export const VirtualKeyboard: Story = {
	render: () => {
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
			<Provider virtualKeyboardBehavior="overlay">
				<Dialog>
					<Dialog.Trigger render={<Button />}>Open</Dialog.Trigger>
					<DummyContent />
					<Dialog.Content>
						<Dialog.Title>Hello world</Dialog.Title>
						<Input />
						<Dialog.Actions>
							<Dialog.Close />
							<Button onClick={() => setKeyboard((v) => !v)}>
								Toggle fake kb
							</Button>
						</Dialog.Actions>
					</Dialog.Content>
				</Dialog>
				<div
					className="bg-neutral-ink"
					style={{
						position: 'fixed',
						bottom: 0,
						left: 0,
						right: 0,
						height: 'var(--mock-virtual-keyboard-height,0)',
						width: '100%',
						transition: 'height var(--m-dur) var(--m-ease)',
					}}
				/>
			</Provider>
		);
	},
};

export const MultiNested: Story = {
	render() {
		return (
			<Dialog>
				<Dialog.Trigger render={<Button />}>Open</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Title>Hello world</Dialog.Title>
					<DummyContent />
					<Select value="">
						<Select.Trigger>
							<Select.Value />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value={null}>Select an option</Select.Item>
							<Select.Item value="option1">Option 1</Select.Item>
							<Select.Item value="option2">Option 2</Select.Item>
							<Select.Item value="option3">Option 3</Select.Item>
						</Select.Content>
					</Select>
					<Dialog>
						<Dialog.Trigger render={<Button />}>Open nested</Dialog.Trigger>
						<Dialog.Content>
							<Dialog.Title>Nested dialog</Dialog.Title>
							<Tooltip content="This is a tooltip">
								<Button>Hover me</Button>
							</Tooltip>
							<DummyContent />
							<DummyContent />
						</Dialog.Content>
					</Dialog>
				</Dialog.Content>
			</Dialog>
		);
	},
};

export const Selectable: Story = {
	render() {
		return (
			<Dialog>
				<Dialog.SelectTrigger>Open</Dialog.SelectTrigger>
				<Dialog.Content>
					<Dialog.Title>Hello world</Dialog.Title>
					<Dialog.SelectList>
						<Dialog.SelectItem value="option1">Option 1</Dialog.SelectItem>
						<Dialog.SelectItem value="option2">Option 2</Dialog.SelectItem>
						<Dialog.SelectItem value="option3">Option 3</Dialog.SelectItem>
					</Dialog.SelectList>
				</Dialog.Content>
			</Dialog>
		);
	},
};
