import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/Button.js';
import { Checkbox } from '../checkbox/Checkbox.js';
import { Icon } from '../icon/Icon.js';
import { Progress } from '../progress/Progress.js';
import { Slider } from '../slider/Slider.js';
import { Switch } from '../switch/Switch.js';
import { ToggleGroup } from '../toggleGroup/toggleGroup.js';
import { Text } from '../typography/typography.js';
import { Box } from './Box.js';

const meta = {
	title: 'Components/Box',
	component: Box,
	argTypes: {
		border: {
			type: 'boolean',
			defaultValue: false,
		},
		surface: {
			type: 'boolean',
			defaultValue: false,
		},
		elevated: {
			type: 'string',
			options: [
				'sm',
				'md',
				'lg',
				'xl',
				'-sm',
				'-md',
				'-lg',
				'-xl',
				'sm-up',
				'md-up',
				'lg-up',
				'xl-up',
				'-sm-up',
				'-md-up',
				'-lg-up',
				'-xl-up',
			],
			control: {
				type: 'select',
			},
		},
		layout: {
			type: 'string',
		},
		wrap: {
			type: 'boolean',
		},
		container: {
			type: 'boolean',
		},
		children: {
			table: {
				disable: true,
			},
		},
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		children: (
			<>
				<Button emphasis="primary">Primary</Button>
				<Button emphasis="ghost">Ghost</Button>
				<Button>Default</Button>
			</>
		),
		p: 'md',
		gap: 'md',
		border: true,
	},
};

function SurfaceContent({ name }: { name: string }) {
	return (
		<>
			<div>{name} Surface</div>
			<Box gap layout="center start">
				<Button emphasis="primary">Primary</Button>
				<Button emphasis="ghost">Ghost</Button>
				<Checkbox checked />
				<Switch checked />
			</Box>
			<Progress value={50} style={{ width: '100%' }} />
			<ToggleGroup defaultValue={['one']}>
				<ToggleGroup.Item value="one">One</ToggleGroup.Item>
				<ToggleGroup.Item value="two">Two</ToggleGroup.Item>
			</ToggleGroup>
			<Slider defaultValue={[30]} style={{ width: '100%' }} />
		</>
	);
}
export const Surfaces: Story = {
	render(args) {
		return (
			<div
				className="bg-main-wash"
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gap: 'var(--m-space-lg)',
				}}
				{...args}
			>
				<Box {...args} surface="ambient" p="lg" col gap>
					<SurfaceContent name="Ambient" />
				</Box>
				<Box
					{...args}
					surface="primary"
					className="@mode-primary"
					p="lg"
					col
					gap
				>
					<SurfaceContent name="Primary" />
				</Box>
				<Box
					{...args}
					surface="secondary"
					className="@mode-primary"
					p="lg"
					col
					gap
				>
					<SurfaceContent name="Secondary" />
				</Box>
				<Box {...args} surface className="@mode-accent" p="lg" col gap>
					<SurfaceContent name="Accent" />
				</Box>
				<Box {...args} surface className="@mode-neutral" p="lg" col gap>
					<SurfaceContent name="Neutral" />
				</Box>
				<Box {...args} surface className="@mode-attention" p="lg" col gap>
					<SurfaceContent name="Attention" />
				</Box>
				<Box {...args} surface className="@mode-success" p="lg" col gap>
					<SurfaceContent name="Success" />
				</Box>
			</div>
		);
	},
};

export const DimComparison: Story = {
	render(args) {
		return (
			<Box gap>
				<Box dim>
					Dimmed non-surface
					<Text>Text</Text>
					<Icon name="placeholder" />
				</Box>
				<Box surface="ambient" dim>
					Dimmed box
					<Text>Text</Text>
					<Icon name="placeholder" />
				</Box>
				<Box surface="primary" dim>
					Dimmed box
					<Text>Text</Text>
					<Icon name="placeholder" />
				</Box>
				<Box surface="ambient">
					<Text dim>Dimmed text</Text>
				</Box>
			</Box>
		);
	},
};
