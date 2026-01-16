import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box.js';
import { Button } from '../button/index.js';
import { Select, SelectContent, SelectItem, SelectTrigger } from './Select.js';

const meta = {
	title: 'Components/Select',
	component: Select,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
	args: {
		value: 'One',
	},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render(args) {
		return (
			<Box full layout="center center" className="min-h-200px">
				<Select {...args}>
					<SelectTrigger />
					<SelectContent>
						{['One', 'Two', 'Three'].map((item) => (
							<SelectItem key={item} value={item}>
								{item}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</Box>
		);
	},
};

export const LongListWithItemLabels: Story = {
	render({ defaultValue: _, value: __, ...args }) {
		return (
			<Box full layout="center center" className="min-h-200px">
				<Select
					{...args}
					defaultValue={0}
					itemToStringLabel={(i: number) => `Item number ${i + 1}`}
				>
					<SelectTrigger />
					<SelectContent>
						{new Array(50).fill(null).map((_, i) => {
							const item = `Item number ${i + 1}`;
							return (
								<SelectItem key={item} value={i}>
									{item}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			</Box>
		);
	},
};

export const CompareSelectAndButton: Story = {
	render(args) {
		return (
			<div className="row">
				<Select {...args}>
					<SelectTrigger />
					<SelectContent>
						{['One', 'Two', 'Three'].map((item) => (
							<SelectItem key={item} value={item}>
								{item}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Button>Button</Button>

				<Select {...args}>
					<SelectTrigger size="small" />
					<SelectContent>
						{['One', 'Two', 'Three'].map((item) => (
							<SelectItem key={item} value={item}>
								{item}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Button size="small">Button</Button>
			</div>
		);
	},
};
