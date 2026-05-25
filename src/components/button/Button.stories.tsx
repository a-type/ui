import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Avatar } from '../avatar/Avatar.js';
import { Box } from '../box/Box.js';
import { Icon } from '../icon/index.js';
import { Button, ButtonProps } from './Button.js';
import { ConfirmedButton } from './ConfirmedButton.js';

const meta = {
	title: 'Components/Button',
	component: Button,
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
			<Box col gap wrap full="width">
				<Box gap items="center">
					<Button {...args} />
					<Button {...args}>
						<Icon name="placeholder" />
						{args.children}
					</Button>
					<Button {...args} disabled>
						Disabled
					</Button>
					<Button {...args} size="small" />
					<Button {...args} size="wrapper">
						<Button.Icon render={<Avatar name="A" />} />
					</Button>
					<Button {...args}>
						<Icon name="placeholder" />
					</Button>
					<Button {...args} size="small">
						<Icon name="placeholder" />
					</Button>
				</Box>
				<Box gap items="center">
					<Button {...args} emphasis="primary">
						Primary
					</Button>
					<Button {...args} emphasis="default">
						Default
					</Button>
					<Button {...args} emphasis="light">
						Light
					</Button>
					<Button {...args} emphasis="ghost">
						Ghost
					</Button>
					<Button {...args} emphasis="primary" className="@mode-contrast">
						Contrast
					</Button>
				</Box>
			</Box>
		);
	},
};

function ButtonStack({ emphasis }: { emphasis: ButtonProps['emphasis'] }) {
	return (
		<Box col gap>
			<Button emphasis={emphasis}>Button</Button>
			<Button emphasis={emphasis}>
				<Icon name="placeholder" />
				Icon
			</Button>
			<Button emphasis={emphasis} disabled>
				Disabled
			</Button>
			<Button emphasis={emphasis} size="small">
				Small
			</Button>
			<Button emphasis={emphasis} size="wrapper">
				<Button.Icon
					render={<Avatar imageSrc="https://i.pravatar.cc/300" name="Avatar" />}
				/>
			</Button>
			<Button emphasis={emphasis}>
				<Icon name="placeholder" />
			</Button>
			<Button emphasis={emphasis} size="small">
				<Icon name="placeholder" />
			</Button>
		</Box>
	);
}
export const AllButtons: Story = {
	render() {
		return (
			<Box col gap>
				<Box gap justify="between">
					{['primary', 'light', 'default', 'ghost'].map((emphasis) => (
						<ButtonStack
							key={emphasis}
							emphasis={emphasis as ButtonProps['emphasis']}
						/>
					))}
				</Box>
				<Box gap surface justify="between" className="@mode-success">
					{['primary', 'light', 'default', 'ghost'].map((emphasis) => (
						<ButtonStack
							key={emphasis}
							emphasis={emphasis as ButtonProps['emphasis']}
						/>
					))}
				</Box>
				<Box gap surface justify="between" className="@mode-attention">
					{['primary', 'light', 'default', 'ghost'].map((emphasis) => (
						<ButtonStack
							key={emphasis}
							emphasis={emphasis as ButtonProps['emphasis']}
						/>
					))}
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

export const ToggledIcon: Story = {
	render: (args) => {
		const [on, setOn] = useState(false);
		const toggle = () => setOn((v) => !v);
		return (
			<Button {...args} toggled={on} onClick={toggle}>
				<Icon name="placeholder" />
			</Button>
		);
	},
};

export const Alignment: Story = {
	render(args) {
		return (
			<div className="flex flex-col">
				<div className="flex flex-row b b-solid">
					<Button {...args} size="small">
						Button
					</Button>
					<Button {...args} size="small">
						<Icon name="placeholder" />
					</Button>
				</div>
				<div className="flex flex-row b b-solid">
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
