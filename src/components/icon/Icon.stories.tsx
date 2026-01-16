import type { Meta, StoryObj } from '@storybook/react';
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
			<div className="grid grid-cols-6 gap-xs">
				{iconNames.map((name) => (
					<div
						key={name}
						className="flex flex-col items-center justify-center gap-2 border p-4 border-gray-light"
					>
						<Icon name={name} size={25} />
						<span className="text-center text-sm">{name}</span>
					</div>
				))}
			</div>
		);
	},
};
