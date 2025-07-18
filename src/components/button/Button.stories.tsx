import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '../box/Box.js';
import { Icon } from '../icon/index.js';
import { Button } from './Button.js';
import { ConfirmedButton } from './ConfirmedButton.js';

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
	args: {
		children: 'Button',
		loading: false,
		color: 'default',
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
			<Box gap items="center">
				<Button {...args} />
				<Button {...args} color="primary">
					<Icon name="placeholder" />
					{args.children}
				</Button>
				<Button {...args} size="small" />
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
					<Button size="small" {...args}>
						Button
					</Button>
					<Button size="small" {...args}>
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
