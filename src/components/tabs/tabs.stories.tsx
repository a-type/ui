import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './tabs.js';

const meta = {
	title: 'Components/Tabs',
	argTypes: {
		color: {
			control: 'select',
			options: ['gray', 'primary'],
		},
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<Meta>;

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState('tab1');
		return (
			<TabsRoot value={value} onValueChange={setValue}>
				<TabsList color={args.color}>
					<TabsTrigger value="tab1">Tab 1</TabsTrigger>
					<TabsTrigger value="tab2">Tab 2 (long)</TabsTrigger>
					<TabsTrigger value="tab3">Tab 3</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<div>Tab 1 content</div>
				</TabsContent>
				<TabsContent value="tab2">
					<div>Tab 2 content</div>
				</TabsContent>
				<TabsContent value="tab3">
					<div>Tab 3 content</div>
				</TabsContent>
			</TabsRoot>
		);
	},
} satisfies Story;

export const WithManyTabs: Story = {
	render: (args) => {
		const [value, setValue] = useState('tab1');
		return (
			<TabsRoot value={value} onValueChange={setValue}>
				<TabsList color={args.color}>
					{Array.from({ length: 20 }).map((_, i) => (
						<TabsTrigger key={i} value={`tab${i + 1}`}>
							Tab {i + 1}
						</TabsTrigger>
					))}
				</TabsList>
				{Array.from({ length: 20 }).map((_, i) => (
					<TabsContent key={i} value={`tab${i + 1}`}>
						<div>Tab {i + 1} content</div>
					</TabsContent>
				))}
			</TabsRoot>
		);
	},
} satisfies Story;
