import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { Viewport } from './Viewport.js';
import { useViewport } from './ViewportContext.js';

/**
 * `Viewport` provides pan and zoom for its children. Give it a constrained size and add `Viewport.Control` with `Viewport.ZoomControls` for visible controls.
 *
 * Configure `minZoom`, `maxZoom`, and the default center or zoom as needed. Use `viewportRef` outside the viewport or `useViewport()` in a descendant for programmatic control.
 */
const meta = {
	title: 'Components/Viewport',
	component: Viewport,
	parameters: {
		controls: { expanded: true },
	},
	args: {
		onCenterChange: undefined,
		onZoomChange: undefined,
	},
} satisfies Meta<typeof Viewport>;

export default meta;

type Story = StoryObj<typeof Viewport>;

const CenterButton = () => {
	const viewport = useViewport();

	return (
		<Button
			emphasis="ghost"
			size="small"
			onClick={() => viewport.recenter()}
			aria-label="Center"
		>
			<Icon name="locate" />
		</Button>
	);
};

export const Default: Story = {
	render(args) {
		return (
			<Viewport
				style={{
					height: 600,
					width: '100%',
				}}
				{...args}
			>
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
				style={{
					height: 600,
					width: '100%',
				}}
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
