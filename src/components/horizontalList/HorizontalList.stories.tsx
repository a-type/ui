import type { Meta, StoryObj } from '@storybook/react-vite';
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
					emphasis="primary"
					style={{
						position: 'sticky',
						bottom: 8,
						right: 8,
						marginLeft: 'auto',
						flexShrink: 0,
						boxShadow: 'var(--m-shadow-sm)',
					}}
				>
					<Icon name="plus" />
				</Button>
			</>
		),
		onCanOpenChange: () => {},
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
			<div
				style={{
					height: '100%',
					minHeight: '80vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: 'var(--m-color-neutral-ink)',
				}}
			>
				<div
					style={{
						width: 400,
						display: 'flex',
						flexDirection: 'column',
						flex: 1,
						alignItems: 'stretch',
						backgroundColor: 'var(--m-color-neutral-paper)',
					}}
				>
					<Button
						toggled={open}
						onClick={() => setOpen(!open)}
						style={{
							marginBottom: '0.25rem',
							marginRight: '0.25rem',
							marginTop: 'auto',
							alignSelf: 'flex-end',
						}}
					>
						{open ? 'Close' : 'Open'}
					</Button>
					<HorizontalList
						style={{
							borderTop: '1px solid var(--m-color-neutral)',
							maxHeight: 200,
						}}
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
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
					justifyContent: 'flex-end',
					backgroundColor: 'var(--m-color-neutral-paper)',
				}}
			>
				<HorizontalList
					style={{
						maxHeight: 200,
						borderTop: '1px solid var(--m-color-neutral)',
					}}
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
						style={{
							position: 'sticky',
							bottom: 8,
							right: 8,
							marginLeft: 'auto',
							flexShrink: 0,
							boxShadow: 'var(--m-shadow-sm)',
						}}
					>
						<Icon name="plus" />
					</Button>
				</HorizontalList>
			</div>
		);
	},
};
