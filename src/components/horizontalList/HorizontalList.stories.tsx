import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../button/index.js';
import { Icon } from '../icon/index.js';
import { HorizontalList } from './HorizontalList.js';

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
				<Button
					size="icon"
					color="primary"
					className="sticky right-2 bottom-2 flex-shrink-0 shadow-sm ml-auto"
				>
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
						className="mt-auto mb-1 mr-1 self-end"
					>
						{open ? 'Close' : 'Open'}
					</Button>
					<HorizontalList
						className="border-t border-t-solid border-t-black max-h-200px"
						open={open}
						onOpenChange={setOpen}
						openDirection="up"
						{...args}
					/>
				</div>
			</div>
		);
	},
};

export const CantOpen: Story = {
	render: (args) => {
		const [more, setMore] = useState(false);
		return (
			<div className="bg-white w-full flex flex-col items-stretch h-full justify-end">
				<HorizontalList
					className="border-t border-t-solid border-t-black max-h-200px"
					openDirection="up"
					{...args}
				>
					<Button size="small" toggled={more} onClick={() => setMore(!more)}>
						More
					</Button>
					<Button size="small">One</Button>
					<Button size="small">Two</Button>
					{more && (
						<>
							<Button size="small">Three</Button>
							<Button size="small">Four</Button>
							<Button size="small">Five</Button>
							<Button size="small">Six</Button>
							<Button size="small">Seven</Button>
							<Button size="small">Eight</Button>
							<Button size="small">Nine</Button>
							<Button size="small">Ten</Button>
							<Button size="small">Eleven</Button>
							<Button size="small">Twelve</Button>
							<Button size="small">Thirteen</Button>
							<Button size="small">Fourteen</Button>
							<Button size="small">Fifteen</Button>
						</>
					)}
					<Button
						size="icon"
						color="primary"
						className="sticky right-2 bottom-2 flex-shrink-0 shadow-sm ml-auto"
					>
						<Icon name="plus" />
					</Button>
				</HorizontalList>
			</div>
		);
	},
};
