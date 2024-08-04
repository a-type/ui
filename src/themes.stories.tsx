import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { Button } from './components/button.js';
import { Input } from './components/input.js';
import { TextArea } from './components/textArea.js';
import { Card } from './components/card.js';
import { Tabs } from './components/tabs.js';

const meta = {
	title: 'themes',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

function DemoUI({ className }: { className?: string }) {
	return (
		<div className={clsx('grid gap-2 grid-cols-3', className)}>
			<div className="col">
				<Button color="primary">Primary</Button>
				<Button color="accent">Accent</Button>
				<Button>Default</Button>
				<Button size="small" color="destructive">
					Destructive
				</Button>
				<Button size="small" color="ghostDestructive">
					Ghost Destructive
				</Button>
			</div>
			<div className="col">
				<Input placeholder="Placeholder" />
				<TextArea placeholder="Placeholder" />
			</div>
			<div>
				<Card>
					<Card.Main>
						<Card.Title>Card Title</Card.Title>
						<Card.Content>Card Content</Card.Content>
					</Card.Main>
					<Card.Footer>
						<Card.Actions>
							<Button size="small">Action 1</Button>
						</Card.Actions>
					</Card.Footer>
				</Card>
			</div>
			<div>
				<Tabs defaultValue="tab1">
					<Tabs.List>
						<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
						<Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="tab1">Tab 1 Content</Tabs.Content>
					<Tabs.Content value="tab2">Tab 2 Content</Tabs.Content>
				</Tabs>
			</div>
		</div>
	);
}

export const Default: Story = {
	render() {
		return <DemoUI />;
	},
};
