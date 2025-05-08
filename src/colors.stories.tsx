import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './components/index.js';

const meta = {
	title: 'colors',
	argTypes: {
		customHue: {
			control: {
				type: 'range',
				min: 0,
				max: 360,
			},
		},
		customRotate: {
			control: {
				type: 'range',
				min: -180,
				max: 180,
			},
		},
	},
	args: {
		customHue: 0,
		customRotate: 0,
	},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render(args: any) {
		const style: any = args.customHue
			? {
					'--dyn-primary-source': args.customHue,
					'--dyn-primary-hue-rotate': args.customRotate,
			  }
			: {};
		return (
			<Box d="col">
				<Range className="theme-lemon" />
				<Range className="theme-leek" />
				<Range className="theme-tomato" />
				<Range className="theme-eggplant" />
				<Range className="theme-blueberry" />
				<Range className="theme-salt" />
				<Range className="theme" style={style} />
			</Box>
		);
	},
};

function Swatch({ className }: { className?: string }) {
	return (
		<div
			className={className}
			style={{
				width: '100px',
				height: '100px',
			}}
		/>
	);
}

function Range({ className, style }: { className?: string; style?: any }) {
	return (
		<Box className={className} style={style}>
			<Swatch className="bg-primary-wash" />
			<Swatch className="bg-primary-light" />
			<Swatch className="bg-primary" />
			<Swatch className="bg-primary-dark" />
			<Swatch className="bg-primary-ink" />
		</Box>
	);
}
