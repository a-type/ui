import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { paletteNames } from '../../uno/logic/color.js';
import { Box } from '../box/Box.js';
import { Icon } from '../icon/index.js';
import { Button } from './Button.js';
import { ConfirmedButton } from './ConfirmedButton.js';

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		color: {
			control: 'select',
			options: paletteNames,
		},
	},
	parameters: {
		controls: { expanded: true },
	},
	args: {
		children: 'Button',
		loading: false,
		emphasis: 'default',
		size: 'default',
		visuallyDisabled: false,
		disabled: false,
		visuallyFocused: false,
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: (args) => {
		return (
			<Box col gap>
				<Box gap items="center">
					<Button {...args} />
					<Button {...args} color="primary">
						<Icon name="placeholder" />
						{args.children}
					</Button>
					<Button {...args} size="small" />
					<Button {...args}>
						<Icon name="placeholder" />
					</Button>
				</Box>
				<Box gap items="center">
					<Button emphasis="primary">Primary</Button>
					<Button emphasis="default">Default</Button>
					<Button emphasis="light">Light</Button>
					<Button emphasis="ghost">Ghost</Button>
					<Button emphasis="contrast">Contrast</Button>
				</Box>
			</Box>
		);
	},
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<Icon name="placeholder" />
				Iconic
			</>
		),
	},
};

export const IconOnly: Story = {
	args: {
		children: <Icon name="placeholder" />,
	},
};

export const IconTransition: Story = {
	render: (args) => {
		const [toggled, setToggled] = useState(false);
		return (
			<Button {...args} onClick={() => setToggled((v) => !v)}>
				{toggled ? <Icon name="check" /> : 'no icon'}
			</Button>
		);
	},
};

export const Toggled: Story = {
	render: (args) => {
		const [on, setOn] = useState(false);
		const toggle = () => setOn((v) => !v);
		return <Button {...args} toggled={on} onClick={toggle} />;
	},
};

export const Alignment: Story = {
	render(args) {
		return (
			<div className="col">
				<div className="row border-default">
					<Button {...args} size="small">
						Button
					</Button>
					<Button {...args} size="small">
						<Icon name="placeholder" />
					</Button>
				</div>
				<div className="row border-default">
					<Button {...args}>Button</Button>
					<Button {...args}>
						<Icon name="placeholder" />
					</Button>
				</div>
			</div>
		);
	},
};

export const ConfirmedButtonDemo: Story = {
	render(args) {
		return (
			<ConfirmedButton
				confirmText="Are you sure?"
				confirmTitle="Confirm"
				onConfirm={() => console.log('confirmed')}
				{...args}
			>
				Confirm
			</ConfirmedButton>
		);
	},
};

export const FragmentTest: Story = {
	render(args) {
		return (
			<Box gap items="center">
				<Button {...args}>
					<>{args.children}</>
				</Button>
				<Button {...args}>
					<>
						<Icon name="placeholder" />
						{args.children}
					</>
				</Button>
				<Button>
					<>
						<Icon name="placeholder" />
					</>
				</Button>
			</Box>
		);
	},
};
