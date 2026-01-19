import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '../autocomplete/Autocomplete.js';

import clsx from 'clsx';
import { Box } from '../box/Box.js';
import { Icon } from '../icon/Icon.js';
import { PageContent } from '../layouts/PageContent.js';
import { PageNowPlaying } from '../layouts/PageNowPlaying.js';
import { PageRoot } from '../layouts/PageRoot.js';
import { QuickAction } from './QuickAction.js';

const meta = {
	title: 'Components/QuickAction',
	argTypes: {
		align: {
			control: 'select',
			options: ['center', 'start', 'end'],
			description:
				'Alignment of the QuickAction content relative to the trigger.',
			defaultValue: 'center',
		},
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<{ align?: 'center' | 'start' | 'end' }>;

interface ItemGroup {
	category: string;
	items: { id: string; label: string }[];
}
const groupedItems: ItemGroup[] = [
	{
		category: 'Fruits',
		items: [
			{ id: 'apple', label: 'Apple' },
			{ id: 'banana', label: 'Banana' },
			{ id: 'cherry', label: 'Cherry' },
		],
	},
	{
		category: 'Berries',
		items: [
			{ id: 'strawberry', label: 'Strawberry' },
			{ id: 'blueberry', label: 'Blueberry' },
			{ id: 'raspberry', label: 'Raspberry' },
		],
	},
];
const GroupedAutocomplete = Autocomplete.createGrouped<ItemGroup>();

const ActionContent = () => (
	<GroupedAutocomplete items={groupedItems}>
		<Box p col>
			<GroupedAutocomplete.List>
				{(group) => (
					<GroupedAutocomplete.Group key={group.category}>
						<GroupedAutocomplete.GroupLabel>
							{group.category}
						</GroupedAutocomplete.GroupLabel>
						<GroupedAutocomplete.GroupList>
							{group.items.map((item) => (
								<GroupedAutocomplete.Item key={item.id} value={item.id}>
									{item.label}
								</GroupedAutocomplete.Item>
							))}
						</GroupedAutocomplete.GroupList>
					</GroupedAutocomplete.Group>
				)}
			</GroupedAutocomplete.List>
			<GroupedAutocomplete.Empty>No results found.</GroupedAutocomplete.Empty>
			<GroupedAutocomplete.Input disableCaret className="w-full" />
		</Box>
	</GroupedAutocomplete>
);

export const Default: Story = {
	render(args) {
		return (
			<PageRoot>
				<PageContent>
					<PageNowPlaying
						className={clsx('flex flex-col', {
							'items-center': args.align === 'center',
							'items-start': args.align === 'start',
							'items-end': args.align === 'end',
						})}
					>
						<QuickAction {...args}>
							<QuickAction.Trigger>
								<Icon name="plus" />
							</QuickAction.Trigger>
							<QuickAction.Content className="w-95vw" align={args.align}>
								<ActionContent />
							</QuickAction.Content>
						</QuickAction>
					</PageNowPlaying>
				</PageContent>
			</PageRoot>
		);
	},
};
