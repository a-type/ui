import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import { $userColorHue } from './arbor/props.js';
import { Box } from './components/index.js';

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
					[$userColorHue]: args.customHue,
			  }
			: {};

		const ranges = (
			<>
				<Range className="@mode-base" style={style} />
				<Range className="@mode-lemon" />
				<Range className="@mode-leek" />
				<Range className="@mode-tomato" />
				<Range className="@mode-eggplant" />
				<Range className="@mode-blueberry" />
				<Range className="@mode-attention" />
				<Range className="@mode-success" />
				<Box className="relative h-100px">
					<Box grow className="bg-neutral-wash" />
					<Box grow className="bg-neutral-light" />
					<Box grow className="bg-neutral" />
					<Box grow className="bg-neutral-heavy" />
					<Box grow className="bg-neutral-ink" />
					<div className="absolute left-0 top-0 color-neutral-paper bg-neutral-ink/50 text-ambient">
						local gray
					</div>
				</Box>
				<Range className="@mode-gray" />
				<Range className="@mod-high-contrast" />
				<Box className="h-100px">
					<Box grow className="bg-neutral-ink" />
					<Box grow className="bg-neutral-wash" />
					<Box grow className="bg-neutral-paper" />
				</Box>
			</>
		);

		return (
			<Box col>
				<input type="color" className="sticky top-0 z-1" />
				<Box full>
					<Box d="col" grow p surface="white">
						{ranges}
					</Box>
					<Box d="col" className="@scheme-dark" surface="white" grow p>
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
		<Box className={clsx('relative', className)} style={style}>
			<Swatch className="bg-main-wash" />
			<Swatch className="bg-main-light" />
			<Swatch className="bg-main" />
			<Swatch className="bg-main-heavy" />
			<Swatch className="bg-main-ink" />
			<div className="absolute left-0 top-0 color-neutral-paper bg-neutral-ink/50 text-ambient">
				{className}
			</div>
		</Box>
	);
}

export const Modifiers: Story = {
	render(args: any) {
		const style: any = args.customHue
			? {
					[$userColorHue]: args.customHue,
			  }
			: {};
		return (
			<Box col>
				<ModifierRange className="@mode-salt" />
				<ModifierRange className="@mode-lemon" />
				<ModifierRange className="@mode-leek" />
				<ModifierRange className="@mode-tomato" />
				<ModifierRange className="@mode-eggplant" />
				<ModifierRange className="@mode-blueberry" />
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
			<Swatch className="bg-main-heavy">D</Swatch>
			<Swatch className="bg-main-heavy bg-darken-2">D-2</Swatch>
			<Swatch className="bg-main-ink">I</Swatch>
		</Box>
	);
}

export const Inheritance: Story = {
	render(args: any) {
		const style: any = args.customHue
			? {
					[$userColorHue]: args.customHue,
			  }
			: {};
		return (
			<Box color="primary" surface p="xl" className="theme" style={style}>
				<Box
					className="color-bg color-darken-5 border-bg border-darken-5"
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
					className="h-full color-main-heavy/100 bg-main/100 ring-main-light/100 ring b-neutral-ink/100 border"
					grow
				>
					100
				</Box>
				<Box
					className="h-full color-main-heavy/90 bg-main/90 ring-main-light/90 ring b-neutral-ink/90 border"
					grow
				>
					90
				</Box>
				<Box
					className="h-full color-main-heavy/80 bg-main/80 ring-main-light/80 ring b-neutral-ink/80 border"
					grow
				>
					80
				</Box>
				<Box
					className="h-full color-main-heavy/70 bg-main/70 ring-main-light/70 ring b-neutral-ink/70 border"
					grow
				>
					70
				</Box>
				<Box
					className="h-full color-main-heavy/60 bg-main/60 ring-main-light/60 ring b-neutral-ink/60 border"
					grow
				>
					60
				</Box>
				<Box
					className="h-full color-main-heavy/50 bg-main/50 ring-main-light/50 ring b-neutral-ink/50 border"
					grow
				>
					50
				</Box>
				<Box
					className="h-full color-main-heavy/40 bg-main/40 ring-main-light/40 ring b-neutral-ink/40 border"
					grow
				>
					40
				</Box>
				<Box
					className="h-full color-main-heavy/30 bg-main/30 ring-main-light/30 ring b-neutral-ink/30 border"
					grow
				>
					30
				</Box>
				<Box
					className="h-full color-main-heavy/20 bg-main/20 ring-main-light/20 ring b-neutral-ink/20 border"
					grow
				>
					20
				</Box>
				<Box
					className="h-full color-main-heavy/10 bg-main/10 ring-main-light/10 ring b-neutral-ink/10 border"
					grow
				>
					10
				</Box>
			</Box>
		);
	},
};
