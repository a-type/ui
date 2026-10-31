import type { Meta, StoryObj } from '@storybook/react-vite';
import { Ol, Ul } from './lists.js';

const meta = {
	title: 'Components/lists',
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'Use `Ol` or `Ul` with their `Item` parts for styled ordered or unordered lists. ' +
					'They render semantic list elements and accept normal list props.\n\n' +
					'Set `unstyled` to remove markers and default spacing.',
			},
		},
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const OrderedList: Story = {
	render(args) {
		return (
			<Ol {...args}>
				<Ol.Item>First item</Ol.Item>
				<Ol.Item>Second item</Ol.Item>
				<Ol.Item>Third item</Ol.Item>
			</Ol>
		);
	},
};

export const UnorderedList: Story = {
	render(args) {
		return (
			<Ul {...args}>
				<Ul.Item>First item</Ul.Item>
				<Ul.Item>Second item</Ul.Item>
				<Ul.Item>Third item</Ul.Item>
			</Ul>
		);
	},
};

export const NoMarkers: Story = {
	render(args) {
		return (
			<Ul {...args} unstyled>
				<Ul.Item>First item</Ul.Item>
				<Ul.Item>Second item</Ul.Item>
				<Ul.Item>Third item</Ul.Item>
			</Ul>
		);
	},
};
