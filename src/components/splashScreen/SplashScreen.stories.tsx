import type { Meta, StoryObj } from '@storybook/react-vite';
import { SplashScreen } from './SplashScreen.js';

const meta = {
	title: 'Components/SplashScreen',
	component: SplashScreen,
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'Use `SplashScreen` as a startup surface that fills its container, and place an image or logo inside `SplashScreen.Icon`. ' +
					'Both parts accept `render` when a different underlying element is needed.',
			},
		},
		controls: { expanded: true },
	},
} satisfies Meta<typeof SplashScreen>;

export default meta;

type Story = StoryObj<typeof SplashScreen>;

export const Default: Story = {
	render(args) {
		return (
			<SplashScreen {...args}>
				<SplashScreen.Icon>
					<img src="/android-chrome-512x512.png" />
				</SplashScreen.Icon>
			</SplashScreen>
		);
	},
};
