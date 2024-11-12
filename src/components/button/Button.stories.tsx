import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.js';
import { useState } from 'react';
import { Icon } from '../icon.js';

const meta = {
	title: 'Button',
	component: Button,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Toggled: Story = {
	render: (args) => {
		const [on, setOn] = useState(false);
		const toggle = () => setOn((v) => !v);
		return <Button {...args} toggled={on} onClick={toggle} />;
	},
};

export const Alignment: Story = {
	render() {
		return (
			<div className="col">
				<div className="row border-default">
					<Button size="small">Button</Button>
					<Button size="icon-small">
						<Icon name="placeholder" />
					</Button>
				</div>
				<div className="row border-default">
					<Button>Button</Button>
					<Button size="icon">
						<Icon name="placeholder" />
					</Button>
				</div>
			</div>
		);
	},
};
