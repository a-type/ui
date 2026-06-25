import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	Input,
	PageContent,
	PageNowPlaying,
	PageRoot,
	TextArea,
} from './components/index.js';
import { useVirtualKeyboardBehavior } from './hooks/useVirtualKeyboardBehavior.js';

const meta = {
	title: 'Virtual Keyboard Test',
	argTypes: {},
	parameters: {
		controls: { expanded: false },
		layout: 'fullscreen',
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render(args) {
		useVirtualKeyboardBehavior('overlay');
		return (
			<PageRoot id="root">
				<PageContent>
					<div
						style={{
							height: '100vh',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<div
							className="flex-grow"
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 'var(--m-space-lg)',
							}}
						>
							Focus the inputs below to see how the virtual keyboard behavior
							works.
						</div>
						<Input style={{ width: '100%' }} />
						<TextArea style={{ width: '100%' }} />
					</div>
					<PageNowPlaying keepAboveKeyboard>
						<Input placeholder="now playing" />
					</PageNowPlaying>
				</PageContent>
			</PageRoot>
		);
	},
};
