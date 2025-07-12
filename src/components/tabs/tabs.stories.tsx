import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './tabs.js';

const meta = {
	title: 'Components/Tabs',
	argTypes: {
		color: {
			control: 'select',
			options: ['default', 'primary'],
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
				<TabsList>
					<TabsTrigger value="tab1" color={args.color}>
						Tab 1
					</TabsTrigger>
					<TabsTrigger value="tab2" color={args.color}>
						Tab 2 (long)
					</TabsTrigger>
					<TabsTrigger value="tab3" color={args.color}>
						Tab 3
					</TabsTrigger>
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
