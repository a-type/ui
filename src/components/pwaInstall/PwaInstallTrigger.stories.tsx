import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { PwaInstallTrigger } from './PwaInstallTrigger.js';

/**
 * `PwaInstallTrigger` opens the install dialog supplied by `Provider` and hides when the app is already installed. It renders an Install button by default and accepts custom children.
 *
 * The provider loads `/manifest.json` by default; use `manifestPath` to change it. Setting `manifestPath={false}` removes the install dialog, so the trigger will not open one.
 */
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
