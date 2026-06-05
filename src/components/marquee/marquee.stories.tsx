import type { Meta, StoryObj } from '@storybook/react-vite';
import { Marquee } from './marquee.js';

const meta = {
	title: 'Components/Marquee',
	component: Marquee,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Marquee>;

export default meta;

type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
	render(params) {
		return (
			<Marquee style={{ height: 200 }} {...params}>
				<Marquee.Item>
					<img src="https://resources.biscuits.club/images/pashka.jpg" />
				</Marquee.Item>
				<Marquee.Item
					className="bg-primary-wash color-main-heavy text-primary"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					Hello, world
				</Marquee.Item>
				<Marquee.Item
					render={
						<img src="https://resources.biscuits.club/images/pashka.jpg" />
					}
				/>
			</Marquee>
		);
	},
};
