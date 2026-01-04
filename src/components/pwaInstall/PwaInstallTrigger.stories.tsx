import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { PwaInstallTrigger } from './PwaInstallTrigger.js';

const meta = {
	title: 'Components/PwaInstallTrigger',
	component: PwaInstallTrigger,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof PwaInstallTrigger>;

export default meta;

type Story = StoryObj<typeof PwaInstallTrigger>;

export const Default: Story = {
	render(args) {
		return (
			<PwaInstallTrigger
				{...args}
				render={<Button color="primary" emphasis="light" />}
			>
				<Icon name="star" /> Install
			</PwaInstallTrigger>
		);
	},
};
