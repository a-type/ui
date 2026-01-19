import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '../box/Box.js';
import { Icon } from '../icon/Icon.js';
import { Autocomplete } from './Autocomplete.js';

interface Args {
	arrow?: boolean;
	autoHighlight?: boolean;
	keepHighlight?: boolean;
	highlightItemOnHover?: boolean;
}

const meta = {
	title: 'Components/Autocomplete',
	argTypes: {
		arrow: {
			control: 'boolean',
			description: 'Whether to show the arrow on the autocomplete popup.',
			defaultValue: false,
		},
		autoHighlight: {
			control: 'boolean',
			description:
				'If true, the first item will be automatically highlighted when the list opens.',
			defaultValue: false,
		},
		keepHighlight: {
			control: 'boolean',
			description:
				'If true, the highlighted item will be kept when the list is reopened.',
			defaultValue: false,
		},
		highlightItemOnHover: {
			control: 'boolean',
			description:
				'If true, items will be highlighted when hovered with the mouse.',
			defaultValue: false,
		},
	},
	args: {
		arrow: false,
		autoHighlight: false,
		keepHighlight: false,
		highlightItemOnHover: true,
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<Args>;

export default meta;

type Story = StoryObj<Args>;

export interface Item {
	id: string;
	label: string;
}

const items: Item[] = [
	{ id: 'apple', label: 'Apple' },
	{ id: 'banana', label: 'Banana' },
	{ id: 'cherry', label: 'Cherry' },
	{ id: 'date', label: 'Date' },
	{ id: 'elderberry', label: 'Elderberry' },
	{ id: 'fig', label: 'Fig' },
	{ id: 'grape', label: 'Grape' },
	{ id: 'honeydew', label: 'Honeydew' },
];

const ExampleAutocomplete = Autocomplete.create<Item>();

export const Default: Story = {
	render({ arrow, autoHighlight, keepHighlight, highlightItemOnHover }) {
		const [value, setValue] = useState<string | undefined>(undefined);
		return (
			<ExampleAutocomplete
				value={value}
				onValueChange={setValue}
				items={items}
				autoHighlight={autoHighlight}
				keepHighlight={keepHighlight}
				highlightItemOnHover={highlightItemOnHover}
			>
				<ExampleAutocomplete.Input
					icon={<Icon name="food" />}
					className="w-[200px]"
				/>
				<ExampleAutocomplete.Content arrow={arrow}>
					<ExampleAutocomplete.List>
						{(item) => (
							<ExampleAutocomplete.Item key={item.id} value={item.id}>
								{item.label}
							</ExampleAutocomplete.Item>
						)}
					</ExampleAutocomplete.List>
					<ExampleAutocomplete.Empty>
						No results found.
					</ExampleAutocomplete.Empty>
				</ExampleAutocomplete.Content>
			</ExampleAutocomplete>
		);
	},
};

interface ItemGroup {
	category: string;
	items: Item[];
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

export const Grouped: Story = {
	render({ arrow, autoHighlight, keepHighlight, highlightItemOnHover }) {
		const [value, setValue] = useState<string | undefined>(undefined);
		return (
			<GroupedAutocomplete
				value={value}
				onValueChange={setValue}
				items={groupedItems}
				autoHighlight={autoHighlight}
				keepHighlight={keepHighlight}
				highlightItemOnHover={highlightItemOnHover}
			>
				<GroupedAutocomplete.Input />
				<GroupedAutocomplete.Content arrow={arrow}>
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
					<GroupedAutocomplete.Separator />
					<div className="p-sm text-xs color-gray-dark">
						Select your favorite fruit or berry.
					</div>
					<GroupedAutocomplete.Empty>
						No results found.
					</GroupedAutocomplete.Empty>
				</GroupedAutocomplete.Content>
			</GroupedAutocomplete>
		);
	},
};

export const NotPopover: Story = {
	render({ autoHighlight, keepHighlight, highlightItemOnHover }) {
		const [value, setValue] = useState<string | undefined>(undefined);
		return (
			<GroupedAutocomplete
				value={value}
				onValueChange={setValue}
				items={groupedItems}
				autoHighlight={autoHighlight}
				keepHighlight={keepHighlight}
				highlightItemOnHover={highlightItemOnHover}
			>
				<Box border p surface="white" col>
					<GroupedAutocomplete.Input />
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
					<GroupedAutocomplete.Empty>
						No results found.
					</GroupedAutocomplete.Empty>
				</Box>
			</GroupedAutocomplete>
		);
	},
};
