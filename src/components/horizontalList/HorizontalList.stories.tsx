import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../button/index.js';
import { Icon } from '../icon/index.js';
import { HorizontalList } from './HorizontalList.js';

const meta = {
	title: 'Components/HorizontalList',
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
					color="primary"
					className="sticky bottom-2 right-2 ml-auto flex-shrink-0 shadow-sm"
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
			<div className="h-full min-h-80vh flex flex-col items-center bg-black">
				<div className="w-400px flex flex-1 flex-col items-stretch bg-white">
					<Button
						toggled={open}
						onClick={() => setOpen(!open)}
						className="mb-1 mr-1 mt-auto self-end"
					>
						{open ? 'Close' : 'Open'}
					</Button>
					<HorizontalList
						className="max-h-200px border-t border-t-solid border-t-black"
						openDirection="up"
						{...args}
						open={open}
						onOpenChange={setOpen}
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
			<div className="h-full w-full flex flex-col items-stretch justify-end bg-white">
				<HorizontalList
					className="max-h-200px border-t border-t-solid border-t-black"
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
						color="primary"
						className="sticky bottom-2 right-2 ml-auto flex-shrink-0 shadow-sm"
					>
						<Icon name="plus" />
					</Button>
				</HorizontalList>
			</div>
		);
	},
};
