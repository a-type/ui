import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Box, Button, Dialog, Icon, Provider } from '../components/index.js';
import { useThemedTitleBar, useTitleBarColor } from './useTitleBarColor.js';

const meta = {
	title: 'Hooks/useTitleBarColor',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof useTitleBarColor>;

export default meta;

type Story = StoryObj<typeof useTitleBarColor>;

export const Default: Story = {
	render() {
		return (
			<Provider>
				<Box col border surface className="overflow-hidden aspect-[9/16]">
					<MockTitleBar />
					<Box p="md">
						<p>
							This is a mock title bar that changes its background color based
							on the meta tag in the document head.
						</p>
					</Box>
					<Dialog>
						<Dialog.Trigger render={<Button />}>Override</Dialog.Trigger>
						<Dialog.Content>
							<Dialog.Title>Overriding color</Dialog.Title>
							<Dialog.Description>
								The title bar color is overridden while this dialog is open.
							</Dialog.Description>
							<Overrider />
							<Dialog.Actions>
								<Dialog.Close />
							</Dialog.Actions>
						</Dialog.Content>
					</Dialog>
				</Box>
			</Provider>
		);
	},
};

function MockTitleBar() {
	// observe the meta tag for changes
	const [color, setColor] = useState(() => {
		const metaThemeColor = document.querySelector('meta[name=theme-color]');
		return metaThemeColor
			? metaThemeColor.getAttribute('content') ?? '#ffffff'
			: '#ffffff';
	});
	useEffect(() => {
		const metaThemeColor = document.querySelector('meta[name=theme-color]');
		if (!metaThemeColor) return;

		const observer = new MutationObserver(() => {
			const newColor = metaThemeColor.getAttribute('content');
			if (newColor) {
				setColor(newColor);
			}
		});

		observer.observe(metaThemeColor, {
			attributes: true,
			attributeFilter: ['content'],
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	const time = new Date().toLocaleTimeString();

	return (
		<Box
			justify="between"
			items="center"
			p="md"
			style={{ backgroundColor: color }}
		>
			<div>{time}</div>
			<Box gap items="center">
				<Icon name="globe" />
			</Box>
		</Box>
	);
}

function Overrider() {
	useThemedTitleBar('primary', 'dark');
	return null;
}
