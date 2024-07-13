import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalList } from './HorizontalList.js';
import { Button } from '../button.js';
import { Icon } from '../icon.js';
import { useState } from 'react';

const meta = {
	title: 'HorizontalList',
	component: HorizontalList,
	argTypes: {},
	args: {
		children: (
			<>
				<Button size="small">One</Button>
				<Button size="small">Two</Button>
				<Button size="small">Three</Button>
				<Button size="small">Four but long</Button>
				<Button size="small">Five</Button>
				<Button size="small">Six</Button>
				<Button size="small">Seven</Button>
				<Button size="small">Eight</Button>
				<Button size="small">Nine</Button>
				<Button size="small">Ten</Button>
				<Button size="small">Eleven</Button>
				<Button size="small">Twelve</Button>
				<Button size="small">Thirteen</Button>
				<Button size="small">Fourteen and long</Button>
				<Button size="small">Fifteen</Button>
				<Button size="small">Sixteen</Button>
				<Button size="small">Seventeen</Button>
				<Button size="small">Eighteen</Button>
				<Button size="small">Nineteen</Button>
				<Button size="small">Twenty</Button>
				<Button size="small">Twenty one</Button>
				<Button size="small">Twenty two</Button>
				<Button size="small">Twenty three</Button>
				<Button size="small">Twenty four</Button>
				<Button size="icon" color="primary">
					<Icon name="plus" />
				</Button>
			</>
		),
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof HorizontalList>;

export default meta;

type Story = StoryObj<typeof HorizontalList>;

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div className="bg-black flex flex-col items-center h-full">
				<div className="bg-white w-400px flex flex-col items-stretch h-full">
					<Button
						toggled={open}
						onClick={() => setOpen(!open)}
						className="mb-auto self-start"
					>
						{open ? 'Close' : 'Open'}
					</Button>
					<HorizontalList
						className="border-t border-t-solid border-t-black max-h-200px"
						open={open}
						{...args}
					/>
				</div>
			</div>
		);
	},
};
