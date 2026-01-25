import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PaletteName } from '../../uno/index.js';
import { Box } from '../box/Box.js';
import { Icon } from '../icon/Icon.js';
import { Combobox } from './Combobox.js';

interface Args {
	arrow?: boolean;
	autoHighlight?: boolean;
	creatable?: boolean;
	highlightItemOnHover?: boolean;
}

const meta = {
	title: 'Components/Combobox',
	argTypes: {
		arrow: {
			control: 'boolean',
			description: 'Whether to show the arrow on the Combobox popup.',
			defaultValue: false,
		},
		autoHighlight: {
			control: 'boolean',
			description:
				'If true, the first item will be automatically highlighted when the list opens.',
			defaultValue: false,
		},
		highlightItemOnHover: {
			control: 'boolean',
			description:
				'If true, items will be highlighted when hovered with the mouse.',
			defaultValue: false,
		},
		creatable: {
			control: 'boolean',
			description:
				'If true, the Combobox will allow creating new items based on user input.',
			defaultValue: false,
		},
	},
	args: {
		arrow: false,
		autoHighlight: false,
		highlightItemOnHover: true,
		creatable: false,
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

const ExampleCombobox = Combobox.create<Item>();

export const Default: Story = {
	render({ arrow, autoHighlight, highlightItemOnHover, creatable }) {
		const [value, setValue] = useState<Item | null>(null);
		const allItems =
			value && items.includes(value)
				? items
				: value
				? [value, ...items]
				: items;
		return (
			<ExampleCombobox
				value={value}
				onValueChange={setValue}
				items={allItems}
				autoHighlight={autoHighlight}
				highlightItemOnHover={highlightItemOnHover}
				showCreatableItem={creatable}
				onCreate={
					creatable
						? (value: string) => {
								console.log('Creating item:', value);
								setValue({ id: value, label: value });
						  }
						: undefined
				}
			>
				<ExampleCombobox.Input
					icon={<Icon name="food" />}
					className="w-[200px]"
				>
					{creatable && (
						<ExampleCombobox.CreateButton
							size="small"
							emphasis="primary"
							className="aspect-1 h-full"
						>
							<Icon name="plus" />
						</ExampleCombobox.CreateButton>
					)}
				</ExampleCombobox.Input>
				<ExampleCombobox.Content arrow={arrow}>
					<ExampleCombobox.List>
						{(item) => (
							<ExampleCombobox.Item key={item.id} value={item}>
								{item.label}
							</ExampleCombobox.Item>
						)}
					</ExampleCombobox.List>
					<ExampleCombobox.Empty>No results found.</ExampleCombobox.Empty>
				</ExampleCombobox.Content>
			</ExampleCombobox>
		);
	},
};

interface ItemGroup {
	category: string;
	color: PaletteName;
	items: Item[];
}
const groupedItems: ItemGroup[] = [
	{
		category: 'Fruits',
		color: 'lemon',
		items: [
			{ id: 'apple', label: 'Apple' },
			{ id: 'banana', label: 'Banana' },
			{ id: 'cherry', label: 'Cherry' },
		],
	},
	{
		category: 'Berries',
		color: 'blueberry',
		items: [
			{ id: 'strawberry', label: 'Strawberry' },
			{ id: 'blueberry', label: 'Blueberry' },
			{ id: 'raspberry', label: 'Raspberry' },
		],
	},
];

const GroupedCombobox = Combobox.createGrouped<ItemGroup>();

export const Grouped: Story = {
	render({ arrow, autoHighlight, highlightItemOnHover, creatable }) {
		const [value, setValue] = useState<Item | null>(null);
		const [input, setInput] = useState<string>('');
		return (
			<GroupedCombobox
				value={value}
				onValueChange={setValue}
				inputValue={input}
				onInputValueChange={setInput}
				items={groupedItems}
				autoHighlight={autoHighlight}
				highlightItemOnHover={highlightItemOnHover}
				onCreate={
					creatable
						? (value: string) => alert(`Create item: ${value}`)
						: undefined
				}
			>
				<GroupedCombobox.Input />
				<GroupedCombobox.Content arrow={arrow}>
					<GroupedCombobox.List>
						{(group) => (
							<GroupedCombobox.Group key={group.category}>
								<GroupedCombobox.GroupLabel>
									{group.category}
								</GroupedCombobox.GroupLabel>
								<GroupedCombobox.GroupList>
									{group.items.map((item) => (
										<GroupedCombobox.Item
											key={item.id}
											value={item}
											color={group.color}
										>
											{item.label}
										</GroupedCombobox.Item>
									))}
								</GroupedCombobox.GroupList>
							</GroupedCombobox.Group>
						)}
					</GroupedCombobox.List>
					<GroupedCombobox.Empty>
						{creatable ? (
							<div>
								<Icon name="enterKey" /> Create "{input}"
							</div>
						) : (
							`No results found.`
						)}
					</GroupedCombobox.Empty>
					<GroupedCombobox.Separator />
					<div className="p-sm text-xs color-gray-dark">
						Select your favorite fruit or berry.
						{creatable ? ' Enter creates a new item.' : ''}
					</div>
				</GroupedCombobox.Content>
			</GroupedCombobox>
		);
	},
};

export const NotPopover: Story = {
	render({ autoHighlight, highlightItemOnHover, creatable }) {
		const [value, setValue] = useState<Item | null>(null);
		return (
			<GroupedCombobox
				value={value}
				onValueChange={setValue}
				items={groupedItems}
				autoHighlight={autoHighlight}
				highlightItemOnHover={highlightItemOnHover}
				onCreate={
					creatable
						? (value: string) => alert(`Create item: ${value}`)
						: undefined
				}
			>
				<Box border p surface="white" col>
					<GroupedCombobox.Input disableCaret className="w-full" disableClear>
						<GroupedCombobox.CreateButton
							size="small"
							emphasis="primary"
							className="aspect-1 h-full"
						>
							<Icon name="plus" />
						</GroupedCombobox.CreateButton>
					</GroupedCombobox.Input>
					<GroupedCombobox.List>
						{(group) => (
							<GroupedCombobox.Group key={group.category}>
								<GroupedCombobox.GroupLabel>
									{group.category}
								</GroupedCombobox.GroupLabel>
								<GroupedCombobox.GroupList>
									{group.items.map((item) => (
										<GroupedCombobox.Item key={item.id} value={item}>
											{item.label}
										</GroupedCombobox.Item>
									))}
								</GroupedCombobox.GroupList>
							</GroupedCombobox.Group>
						)}
					</GroupedCombobox.List>
					<GroupedCombobox.Empty>No results found.</GroupedCombobox.Empty>
				</Box>
			</GroupedCombobox>
		);
	},
};

export const MultiSelect: Story = {
	render({ arrow, autoHighlight, highlightItemOnHover, creatable }) {
		const [value, setValue] = useState<Item[]>([]);
		return (
			<ExampleCombobox.Multi
				multiple
				value={value}
				onValueChange={setValue}
				items={items}
				autoHighlight={autoHighlight}
				highlightItemOnHover={highlightItemOnHover}
				showCreatableItem={creatable}
			>
				<ExampleCombobox.Chips className="w-300px">
					<ExampleCombobox.MultiValue>
						{(items) => (
							<>
								<ExampleCombobox.ChipsList>
									{items.map((item) => (
										<ExampleCombobox.Chip key={item.id} color={'accent'}>
											{item.label}
										</ExampleCombobox.Chip>
									))}
								</ExampleCombobox.ChipsList>
								<ExampleCombobox.Input />
							</>
						)}
					</ExampleCombobox.MultiValue>
				</ExampleCombobox.Chips>
				<ExampleCombobox.Content arrow={arrow}>
					<ExampleCombobox.List>
						{(item) => (
							<ExampleCombobox.Item key={item.id} value={item}>
								{item.label}
							</ExampleCombobox.Item>
						)}
					</ExampleCombobox.List>
					<ExampleCombobox.Empty>No results found.</ExampleCombobox.Empty>
				</ExampleCombobox.Content>
			</ExampleCombobox.Multi>
		);
	},
};
