import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CollapsibleSimple } from './Collapsible.js';

const meta = {
	title: 'Components/CollapsibleSimple',
	component: CollapsibleSimple,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof CollapsibleSimple>;

export default meta;

type Story = StoryObj<typeof CollapsibleSimple>;

export const Default: Story = {
	render: () => {
		const [count, setCount] = useState(2);
		const [open, setOpen] = useState(false);

		return (
			<>
				<CollapsibleSimple open={open}>
					<button onClick={() => setCount(count + 1)}>Increment</button>
					<button onClick={() => setCount(count - 1)}>Decrement</button>
					{new Array(count).fill(null).map((_, i) => (
						<div key={i}>Item {i}</div>
					))}
				</CollapsibleSimple>
				<button onClick={() => setOpen(!open)}>Toggle</button>
			</>
		);
	},
};
