import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { CollapsibleSimple } from './Collapsible.js';

/**
 * Compose `Collapsible` with `Collapsible.Trigger` and `Collapsible.Content`, or use `Collapsible.Simple` when the open state is managed elsewhere.
 *
 * Content animates vertically by default; set `horizontal` or `both` for other directions.
 */
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
