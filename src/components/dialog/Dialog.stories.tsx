import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Button } from '../button/index.js';
import { Input } from '../input/index.js';
import { ParticleLayer } from '../particles/index.js';
import { Provider } from '../provider/Provider.js';
import { Select } from '../select/index.js';
import { Tooltip } from '../tooltip/Tooltip.js';
import { H1, P } from '../typography/index.js';
import {
	Dialog,
	DialogActions,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from './Dialog.js';

const meta = {
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
		<div className="col">
			<H1>Some content</H1>
			<div className="overflow-y-auto max-h-20vh">
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
				<DialogTrigger render={<Button />}>Open</DialogTrigger>
				<DummyContent />
				<DialogContent>
					<DialogTitle>Hello world</DialogTitle>
					<DummyContent />
					<DummyContent />
					<DummyContent />
					<DialogActions>
						<DialogClose />
					</DialogActions>
				</DialogContent>
			</ParticleLayer>
		),
	},
};

export const Small: Story = {
	args: {
		children: (
			<ParticleLayer noPortal>
				<DialogTrigger render={<Button />}>Open</DialogTrigger>
				<DummyContent />
				<DialogContent>
					<DialogTitle>Hello world</DialogTitle>
					<DummyContent />
					<DialogActions>
						<DialogClose />
					</DialogActions>
				</DialogContent>
			</ParticleLayer>
		),
	},
};

export const NoSheet: Story = {
	args: {
		children: (
			<ParticleLayer noPortal>
				<DialogTrigger render={<Button />}>Open</DialogTrigger>
				<DummyContent />
				<DialogContent disableSheet>
					<DialogTitle>Hello world</DialogTitle>
					<DialogActions>
						<DialogClose />
					</DialogActions>
				</DialogContent>
			</ParticleLayer>
		),
	},
};

export const Positioned: Story = {
	args: {
		children: (
			<ParticleLayer noPortal>
				<DialogTrigger render={<Button />}>Open</DialogTrigger>
				<DummyContent />
				<DialogContent className="top-auto bottom-0px">
					<DialogTitle>Hello world</DialogTitle>
					<DialogActions>
						<DialogClose />
					</DialogActions>
				</DialogContent>
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
					<DialogTrigger render={<Button />}>Open</DialogTrigger>
					<DummyContent />
					<DialogContent>
						<DialogTitle>Hello world</DialogTitle>
						<Input />
						<DialogActions>
							<DialogClose />
							<Button onClick={() => setKeyboard((v) => !v)}>
								Toggle fake kb
							</Button>
						</DialogActions>
					</DialogContent>
				</Dialog>
				<div className="fixed bottom-0 h-[var(--mock-virtual-keyboard-height,0)] bg-black w-full transition-height left-0 right-0" />
			</Provider>
		);
	},
};

export const MultiNested: Story = {
	render() {
		return (
			<Dialog>
				<DialogTrigger render={<Button />}>Open</DialogTrigger>
				<DialogContent>
					<DialogTitle>Hello world</DialogTitle>
					<DummyContent />
					<Select value="">
						<Select.Trigger>
							<Select.Value placeholder="Select an option" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="option1">Option 1</Select.Item>
							<Select.Item value="option2">Option 2</Select.Item>
							<Select.Item value="option3">Option 3</Select.Item>
						</Select.Content>
					</Select>
					<Dialog>
						<DialogTrigger render={<Button />}>Open nested</DialogTrigger>
						<DialogContent>
							<DialogTitle>Nested dialog</DialogTitle>
							<Tooltip content="This is a tooltip">
								<Button>Hover me</Button>
							</Tooltip>
							<DummyContent />
							<DummyContent />
						</DialogContent>
					</Dialog>
				</DialogContent>
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
