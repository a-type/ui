import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ScrollArea } from './ScrollArea.js';

const meta = {
	title: 'Components/ScrollArea',
	component: ScrollArea,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
	render(args) {
		return (
			<ScrollArea {...args}>
				<div className="flex flex-col gap-2">
					{Array.from({ length: 100 }, (_, i) => (
						<div
							key={i}
							className="h-10 w-full bg-primary-wash color-primary flex items-center justify-center"
						>
							Item {i + 1}
						</div>
					))}
				</div>
			</ScrollArea>
		);
	},
};

export const StickToBottom: Story = {
	render(args) {
		const [itemCount, setItemCount] = useState(50);
		return (
			<div className="flex flex-col gap-2 w-full h-full overflow-hidden">
				<button onClick={() => setItemCount((prev) => prev + 1)}>
					Add Item
				</button>
				<button onClick={() => setItemCount((prev) => prev - 1)}>
					Remove Item
				</button>
				<ScrollArea {...args} className="flex-1" stickToBottom>
					<div className="flex flex-col gap-2">
						{Array.from({ length: itemCount }, (_, i) => (
							<div
								key={i}
								className="h-10 w-full bg-primary-wash color-primary flex items-center justify-center"
							>
								Item {i + 1}
							</div>
						))}
					</div>
				</ScrollArea>
			</div>
		);
	},
};
