import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../box/Box.js';
import { Icon } from './Icon.js';
import { iconNames } from './generated/iconNames.js';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	argTypes: {
		name: {
			control: { type: 'select', options: iconNames },
		},
	},
	args: {
		name: 'placeholder',
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
	render(args) {
		return <Icon {...args} />;
	},
};

export const All: Story = {
	render() {
		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(6, 1fr)',
					gap: 'var(--m-sp-xs)',
				}}
			>
				{iconNames.map((name) => (
					<Box
						surface="ambient"
						col
						p="sm"
						layout="center center"
						border
						key={name}
					>
						<Icon name={name} size={25} />
						<span
							style={{
								textAlign: 'center',
								fontSize: 'var(--m-prose-ambient-size)',
							}}
						>
							{name}
						</span>
					</Box>
				))}
			</div>
		);
	},
};
