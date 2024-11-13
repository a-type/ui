import type { Meta, StoryObj } from '@storybook/react';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogActions,
	DialogClose,
	DialogTitle,
} from './Dialog.js';
import { ParticleLayer } from '../particles.js';
import { H1, P } from '../typography.js';
import { Button } from '../button.js';
import { useEffect, useState } from 'react';
import { Provider } from '../provider.js';
import { Input } from '../input.js';

const meta = {
	title: 'Dialog',
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
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
				porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula
				accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi. Nulla
				facil
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
			<ParticleLayer noPortal>
				<DialogTrigger asChild>
					<Button>Open</Button>
				</DialogTrigger>
				<DummyContent />
				<DialogContent>
					<DialogTitle>Hello world</DialogTitle>
					<DummyContent />
					<DummyContent />
					<DummyContent />
					<DialogActions>
						<DialogClose asChild>
							<Button>Close</Button>
						</DialogClose>
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
				<DialogTrigger asChild>
					<Button>Open</Button>
				</DialogTrigger>
				<DummyContent />
				<DialogContent disableSheet>
					<DialogTitle>Hello world</DialogTitle>
					<DialogActions>
						<DialogClose asChild>
							<Button>Close</Button>
						</DialogClose>
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
				<DialogTrigger asChild>
					<Button>Open</Button>
				</DialogTrigger>
				<DummyContent />
				<DialogContent className="top-auto bottom-0px">
					<DialogTitle>Hello world</DialogTitle>
					<DialogActions>
						<DialogClose asChild>
							<Button>Close</Button>
						</DialogClose>
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
					<DialogTrigger asChild>
						<Button>Open</Button>
					</DialogTrigger>
					<DummyContent />
					<DialogContent>
						<DialogTitle>Hello world</DialogTitle>
						<Input />
						<DialogActions>
							<DialogClose asChild>
								<Button>Close</Button>
							</DialogClose>
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
