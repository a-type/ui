import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/Button.js';
import { Checkbox } from '../checkbox/Checkbox.js';
import { Progress } from '../progress/Progress.js';
import { Slider } from '../slider/Slider.js';
import { Switch } from '../switch/Switch.js';
import { ToggleGroup } from '../toggleGroup/toggleGroup.js';
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

export const NestedContainers: Story = {
	render(args) {
		return (
			<Box {...args} p gap container surface color="accent" direction="col">
				<Box {...args} p gap container surface items="center" color="primary">
					<Button>Button</Button>
					<Button>Button</Button>
					<Box {...args} p gap surface color="attention">
						<Button>Button</Button>
						<Button>Button</Button>
					</Box>
				</Box>
				<Box {...args} p gap surface color="gray">
					<Button>Button</Button>
					<Button>Button</Button>
				</Box>
			</Box>
		);
	},
};

function SurfaceContent({ name }: { name: string }) {
	return (
		<>
			<div>{name} Surface</div>
			<Box gap layout="center start">
				<Button emphasis="primary">Primary</Button>
				<Checkbox checked />
				<Switch checked />
			</Box>
			<Progress value={50} className="w-full" />
			<ToggleGroup defaultValue={['one']}>
				<ToggleGroup.Item value="one">One</ToggleGroup.Item>
				<ToggleGroup.Item value="two">Two</ToggleGroup.Item>
			</ToggleGroup>
			<Slider defaultValue={[30]} className="w-full" />
		</>
	);
}
export const Surfaces: Story = {
	render(args) {
		return (
			<div
				className="grid grid-cols-2 bg-main-wash gap-lg md:grid-cols-3"
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
				<Box {...args} surface className="@scheme-highContrast" p="lg" col gap>
					<SurfaceContent name="High Contrast" />
				</Box>
			</div>
		);
	},
};
