import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { Viewport } from './Viewport.js';
import { useViewport } from './ViewportContext.js';

const meta = {
	title: 'Components/Viewport',
	component: Viewport,
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Viewport>;

export default meta;

type Story = StoryObj<typeof Viewport>;

const CenterButton = () => {
	const viewport = useViewport();

	return (
		<Button emphasis="ghost" size="small" onClick={() => viewport.recenter()}>
			<Icon name="locate" />
		</Button>
	);
};

export const Default: Story = {
	render(args) {
		return (
			<Viewport className="h-600px w-full" {...args}>
				<img src="https://resources.biscuits.club/images/pashka.jpg" />
				<Viewport.Control>
					<Viewport.ZoomControls />
				</Viewport.Control>
				<Viewport.Control position="bottom-right">
					<CenterButton />
				</Viewport.Control>
			</Viewport>
		);
	},
};

export const HighZoomLevel: Story = {
	render(args) {
		return (
			<Viewport
				className="h-600px w-full"
				defaultZoom={100}
				maxZoom={1000}
				minZoom={10}
				{...args}
			>
				<img
					src="https://resources.biscuits.club/images/pashka.jpg"
					width={10}
				/>
				<Viewport.Control>
					<Viewport.ZoomControls />
				</Viewport.Control>
				<Viewport.Control position="bottom-right">
					<CenterButton />
				</Viewport.Control>
			</Viewport>
		);
	},
};
