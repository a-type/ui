import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import { $userColorHue, $userColorSaturation } from './arbor/props.js';
import cls from './colors.module.css';
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
					[$userColorSaturation]: '1',
			  }
			: {};

		const ranges = (
			<>
				<Range className="@mode-base" />
				<Range className="@mode-user" style={style} />
				<Range className="@mode-lemon" />
				<Range className="@mode-leek" />
				<Range className="@mode-tomato" />
				<Range className="@mode-eggplant" />
				<Range className="@mode-blueberry" />
				<Range className="@mode-attention" />
				<Range className="@mode-success" />
				<Range className="@mode-neutral" />
				<Box className="h-100px">
					<Box grow className={cls.bgNeutralInk} />
					<Box grow className={cls.bgNeutralWash} />
					<Box grow className={cls.bgNeutralPaper} />
				</Box>
			</>
		);

		return (
			<Box col>
				<input type="color" className="sticky top-0 z-1" />
				<Box full>
					<Box d="col" grow p surface="ambient">
						{ranges}
					</Box>
					<Box d="col" className="@mode-dark" surface="ambient" grow p>
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
			<Swatch className={cls.bgWash} />
			<Swatch className={cls.bgLight} />
			<Swatch className={cls.bgMid} />
			<Swatch className={cls.bgHeavy} />
			<Swatch className={cls.bgInk} />
			<div className={cls.rangeLabel}>{className}</div>
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
			<Swatch className={cls.bgWash}>W</Swatch>
			<Swatch className={clsx(cls.bgLight, cls.bgLighten2)}>L+2</Swatch>
			<Swatch className={cls.bgLight}>L</Swatch>
			<Swatch className={cls.bgBetweenMidLight}>B/W</Swatch>
			<Swatch className={clsx(cls.bgMid, cls.bgLighten2)}>P+2</Swatch>
			<Swatch className={clsx(cls.bgMid, cls.bgLighten1)}>P+1</Swatch>
			<Swatch className={cls.bgMid}>P</Swatch>
			<Swatch className={clsx(cls.bgMid, cls.bgDarken1)}>P-1</Swatch>
			<Swatch className={clsx(cls.bgMid, cls.bgDarken2)}>P-2</Swatch>
			<Swatch className={cls.bgBetweenMidHeavy}>B/H</Swatch>
			<Swatch className={cls.bgHeavy}>H</Swatch>
			<Swatch className={clsx(cls.bgHeavy, cls.bgDarken2)}>H-2</Swatch>
			<Swatch className={cls.bgInk}>I</Swatch>
		</Box>
	);
}
