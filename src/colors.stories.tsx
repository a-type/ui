import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import { Box } from './components/index.js';
import { snapshotColorContext } from './uno/logic/color.js';
import { palettes } from './uno/logic/palettes.js';

const meta = {
	title: 'System/Colors',
	argTypes: {
		customHue: {
			control: {
				type: 'number',
				min: 0,
				max: 360,
			},
		},
	},
	args: {
		customHue: 0,
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
					'--p-primary-hue': args.customHue,
			  }
			: {};

		const ranges = (
			<>
				<Range className="theme" style={style} />
				<Range className="theme-lemon" />
				<Range className="theme-leek" />
				<Range className="theme-tomato" />
				<Range className="theme-eggplant" />
				<Range className="theme-blueberry" />
				<Range className="palette-attention" />
				<Range className="palette-success" />
				<Box className="h-100px">
					<Box grow className="bg-gray-wash" />
					<Box grow className="bg-gray-light" />
					<Box grow className="bg-gray" />
					<Box grow className="bg-gray-dark" />
					<Box grow className="bg-gray-ink" />
				</Box>
				<Range className="palette-high-contrast" />
				<Box className="h-100px">
					<Box grow className="bg-black" />
					<Box grow className="bg-wash" />
					<Box grow className="bg-white" />
				</Box>
			</>
		);

		return (
			<Box col>
				<input type="color" className="sticky top-0 z-1" />
				<Box full>
					<Box d="col" grow p surface>
						{ranges}
					</Box>
					<Box d="col" className="override-dark theme" grow p>
						{ranges}
					</Box>
				</Box>
			</Box>
		);
	},
};

function Swatch({
	className,
	children,
	style,
}: {
	className?: string;
	children?: React.ReactNode;
	style?: CSSProperties;
}) {
	return (
		<div
			className={clsx(className, 'color-contrast')}
			style={{
				height: '100px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: '1',
				...style,
			}}
		>
			{children}
		</div>
	);
}

function Range({ className, style }: { className?: string; style?: any }) {
	return (
		<Box className={className} style={style}>
			<Swatch className="bg-main-wash" />
			<Swatch className="bg-main-light" />
			<Swatch className="bg-main" />
			<Swatch className="bg-main-dark" />
			<Swatch className="bg-main-ink" />
		</Box>
	);
}

export const Modifiers: Story = {
	render(args: any) {
		const style: any = args.customHue
			? {
					'--p-primary-hue': args.customHue,
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
			<Swatch className="bg-main-wash">W</Swatch>
			<Swatch className="bg-main-light bg-lighten-2">L+2</Swatch>
			<Swatch className="bg-main-light">L</Swatch>
			{/* <Swatch className="bg-main bg-lighten-5">P+5</Swatch> */}
			<Swatch className="bg-main bg-lighten-2">P+2</Swatch>
			<Swatch className="bg-main bg-lighten-1">P+1</Swatch>
			<Swatch className="bg-main">P</Swatch>
			<Swatch className="bg-main bg-darken-1">P-1</Swatch>
			<Swatch className="bg-main bg-darken-2">P-2</Swatch>
			{/* <Swatch className="bg-main bg-darken-5">P-5</Swatch> */}
			<Swatch className="bg-main-dark">D</Swatch>
			<Swatch className="bg-main-dark bg-darken-2">D-2</Swatch>
			<Swatch className="bg-main-ink">I</Swatch>
		</Box>
	);
}

export const Inheritance: Story = {
	render(args: any) {
		const style: any = args.customHue
			? {
					'--p-primary-hue': args.customHue,
			  }
			: {};
		return (
			<Box color="primary" surface p="xl" className="theme" style={style}>
				<Box
					className="border-bg border-darken-5 color-bg color-darken-5"
					border
					p="xl"
				>
					Inherits and darkens
				</Box>
			</Box>
		);
	},
};

export const TweakOpacity: Story = {
	render() {
		// none of these elements have root opacity; all opacity is done through colors
		return (
			<Box color="accent" surface className="h-32" full="width" p gap>
				<Box
					className="bg-primary/100 h-full color-primary-dark/100 ring ring-primary-light/100 border border-black/100"
					grow
				>
					100
				</Box>
				<Box
					className="bg-primary/90 h-full color-primary-dark/90 ring ring-primary-light/90 border border-black/90"
					grow
				>
					90
				</Box>
				<Box
					className="bg-primary/80 h-full color-primary-dark/80 ring ring-primary-light/80 border border-black/80"
					grow
				>
					80
				</Box>
				<Box
					className="bg-primary/70 h-full color-primary-dark/70 ring ring-primary-light/70 border border-black/70"
					grow
				>
					70
				</Box>
				<Box
					className="bg-primary/60 h-full color-primary-dark/60 ring ring-primary-light/60 border border-black/60"
					grow
				>
					60
				</Box>
				<Box
					className="bg-primary/50 h-full color-primary-dark/50 ring ring-primary-light/50 border border-black/50"
					grow
				>
					50
				</Box>
				<Box
					className="bg-primary/40 h-full color-primary-dark/40 ring ring-primary-light/40 border border-black/40"
					grow
				>
					40
				</Box>
				<Box
					className="bg-primary/30 h-full color-primary-dark/30 ring ring-primary-light/30 border border-black/30"
					grow
				>
					30
				</Box>
				<Box
					className="bg-primary/20 h-full color-primary-dark/20 ring ring-primary-light/20 border border-black/20"
					grow
				>
					20
				</Box>
				<Box
					className="bg-primary/10 h-full color-primary-dark/10 ring ring-primary-light/10 border border-black/10"
					grow
				>
					10
				</Box>
			</Box>
		);
	},
};

export const ComputedColors: Story = {
	render() {
		const ctx = snapshotColorContext('primary');
		const oklchValues = [
			palettes.primary.definitions.wash.computeOklch(ctx),
			palettes.primary.definitions.light.computeOklch(ctx),
			palettes.primary.definitions.default.computeOklch(ctx),
			palettes.primary.definitions.dark.computeOklch(ctx),
			palettes.primary.definitions.ink.computeOklch(ctx),
		];

		return (
			<Box col>
				<Range className="theme" />
				<Box className="h-100px">
					{oklchValues.map((oklch) => (
						<Swatch style={{ backgroundColor: oklch }}>OK</Swatch>
					))}
				</Box>
			</Box>
		);
	},
};
