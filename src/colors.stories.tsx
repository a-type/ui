import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './components/index.js';

const meta = {
	title: 'System/Colors',
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

function Swatch({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<div
			className={className}
			style={{
				width: '100px',
				height: '100px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{children}
		</div>
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

export const Modifiers: Story = {
	render(args: any) {
		const style: any = args.customHue
			? {
					'--dyn-primary-source': args.customHue,
					'--dyn-primary-hue-rotate': args.customRotate,
			  }
			: {};
		return (
			<Box col>
				<ModifierRange className="theme-salt" />
				<ModifierRange className="theme-lemon" />
				<ModifierRange className="theme-leek" />
				<ModifierRange className="theme-tomato" />
				<ModifierRange className="theme-eggplant" />
				<ModifierRange className="theme-blueberry" />
				<ModifierRange style={style} className="theme" />
			</Box>
		);
	},
};

function ModifierRange({
	className,
	style,
}: {
	className?: string;
	style?: any;
}) {
	return (
		<Box className={className} style={style}>
			<Swatch className="bg-primary-wash">W</Swatch>
			<Swatch className="bg-primary-light bg-lighten-3">L+3</Swatch>
			<Swatch className="bg-primary-light">L</Swatch>
			{/* <Swatch className="bg-primary bg-lighten-5">P+5</Swatch> */}
			<Swatch className="bg-primary bg-lighten-3">P+3</Swatch>
			<Swatch className="bg-primary bg-lighten-1">P+1</Swatch>
			<Swatch className="bg-primary">P</Swatch>
			<Swatch className="bg-primary bg-darken-1">P-1</Swatch>
			<Swatch className="bg-primary bg-darken-3">P-3</Swatch>
			{/* <Swatch className="bg-primary bg-darken-5">P-5</Swatch> */}
			<Swatch className="bg-primary-dark">D</Swatch>
			<Swatch className="bg-primary-dark bg-darken-3">D-3</Swatch>
			<Swatch className="bg-primary-ink">I</Swatch>
		</Box>
	);
}

export const Inheritance: Story = {
	render(args: any) {
		const style: any = args.customHue
			? {
					'--dyn-primary-source': args.customHue,
					'--dyn-primary-hue-rotate': args.customRotate,
			  }
			: {};
		return (
			<Box surface="primary" p="xl" className="theme" style={style}>
				<Box
					className="border-color-bg border-color-darken-5 color-bg color-darken-5"
					border
					p="xl"
				>
					Inherits and darkens
				</Box>
			</Box>
		);
	},
};
