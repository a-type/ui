import type { Meta, StoryObj as Story } from '@storybook/react';
import { PROPS } from '../base/properties.js';
import {
	createColorDarkModeRange,
	createColorLightModeRange,
	createColorRangeCustom,
} from '../base/ranges.js';
import { generateThemeWithModes } from '../preflights/generateColorPreflight.js';
import {
	altMode,
	denseMode,
	greenButtonsMode,
	modeSchema,
	rootMode,
} from './modes.js';

const meta = {
	title: 'theme',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta;

export default meta;

export const Range: Story<{
	sourceHue: number;
	saturation?: number;
}> = {
	argTypes: {
		sourceHue: { control: { type: 'number', min: 0, max: 360, step: 1 } },
		saturation: { control: { type: 'number', min: 0, max: 1, step: 0.05 } },
	},
	args: {
		sourceHue: 91.8,
		saturation: 0.6,
	},
	render(args) {
		const exampleLightRange = createColorLightModeRange({
			sourceHue: args.sourceHue,
		});
		const exampleDarkRange = createColorDarkModeRange({
			sourceHue: args.sourceHue,
		});

		return (
			<div>
				<style>
					{generateThemeWithModes({
						namedHues: { primary: args.sourceHue },
						saturation: args.saturation,
						modes: {
							base: rootMode,
						},
					})}
				</style>
				<input type="color" className="mb-2xl" />
				<div className="light">
					<div
						className="flex p-md"
						style={{
							backgroundColor: `var(${PROPS.COLOR('neutral').PAPER.NAME})`,
						}}
					>
						{Object.entries(PROPS.COLOR('primary')).map(([name, color]) => {
							const equation = exampleLightRange.find((item) =>
								color.NAME.endsWith(item.name),
							)?.equation;
							const lValue =
								(equation?.compute({
									appliedProperties: {},
								}).l.value as number) / 100;
							const cValue =
								(equation?.compute({
									appliedProperties: {
										[PROPS.USER.SATURATION.NAME]: (
											args.saturation ?? 0.6
										).toString(),
										[PROPS.LOCAL.SATURATION.NAME]: '1',
									},
								}).c.value as number) / 0.4;
							return (
								<div
									key={name}
									className="relative h-16 flex grow items-center justify-center text-xxs"
									style={{ backgroundColor: `var(${color.NAME})` }}
									title={equation?.printDynamic()}
									data-l-value={lValue}
									data-c-value={cValue}
								>
									{name}
									<PlotDot position={lValue} />
									<PlotDot position={cValue} color="red" />
								</div>
							);
						})}
					</div>
					<div
						className="flex p-md"
						style={{
							backgroundColor: `var(${PROPS.COLOR('neutral').PAPER.NAME})`,
						}}
					>
						{Object.entries(PROPS.COLOR('neutral')).map(([name, color]) => (
							<div
								key={name}
								className="h-16 flex grow items-center justify-center text-xxs"
								style={{ backgroundColor: `var(${color.NAME})` }}
							>
								{name}
							</div>
						))}
					</div>
				</div>
				<div className="divider" />
				<div className="@scheme-dark">
					<div
						className="flex p-md"
						style={{
							backgroundColor: `var(${PROPS.COLOR('neutral').PAPER.NAME})`,
						}}
					>
						{Object.entries(PROPS.COLOR('primary')).map(([name, color]) => {
							const equation = exampleDarkRange.find((item) =>
								color.NAME.endsWith(item.name),
							)?.equation;
							const lValue =
								(equation?.compute({
									appliedProperties: {
										[PROPS.USER.SATURATION.NAME]: (
											args.saturation ?? 0
										).toString(),
									},
								}).l.value as number) / 100;
							const cValue =
								(equation?.compute({
									appliedProperties: {
										[PROPS.USER.SATURATION.NAME]: (
											args.saturation ?? 0.6
										).toString(),
										[PROPS.LOCAL.SATURATION.NAME]: '1',
									},
								}).c.value as number) / 0.4;
							return (
								<div
									key={name}
									className="relative h-16 flex grow items-center justify-center text-xxs"
									style={{ backgroundColor: `var(${color.NAME})` }}
									title={equation?.printDynamic()}
									data-l-value={lValue}
									data-c-value={cValue}
								>
									{name}
									<PlotDot position={lValue} />
									<PlotDot position={cValue} color="red" />
								</div>
							);
						})}
					</div>
					<div
						className="flex p-md"
						style={{
							backgroundColor: `var(${PROPS.COLOR('neutral').PAPER.NAME})`,
						}}
					>
						{Object.entries(PROPS.COLOR('neutral')).map(([name, color]) => (
							<div
								key={name}
								className="h-16 flex grow items-center justify-center text-xxs"
								style={{ backgroundColor: `var(${color.NAME})` }}
							>
								{name}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	},
};

function PlotDot({
	position,
	color = 'black',
}: {
	position: number;
	color?: string;
}) {
	return (
		<div
			className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
			style={{
				left: `50%`,
				bottom: `${position * 100}%`,
				width: '8px',
				height: '8px',
				border: '1px solid white',
				backgroundColor: color,
			}}
		/>
	);
}

export const Mode: Story = {
	render() {
		return (
			<Surface className="@mode-base">
				<style>
					{generateThemeWithModes({
						namedHues: { primary: 90, blue: 210, green: 150 },
						saturation: 0.5,
						modes: {
							base: rootMode,
							blue: altMode,
							greenButtons: greenButtonsMode,
							dense: denseMode,
						},
						customSchemes: {
							contrast: {
								tag: '💟',
								getColorRange: ({ sourceHue, context }) =>
									createColorRangeCustom({
										sourceHue,
										context,
										lightness: ($, { step, rangeSize }) =>
											$.literal(step > Math.round(rangeSize / 3) ? '1' : '0'),
										chroma: ($) => $.literal('0.1'),
									}),
							},
						},
					})}
				</style>
				<ModeComponentExample />
				<Surface className="@mode-blue">
					<ModeComponentExample />
					<Surface className="@mode-greenButtons">
						<ModeComponentExample />
						<Surface className="@mode-base">
							<ModeComponentExample />
							<Surface className="@mode-greenButtons">
								<ModeComponentExample />
							</Surface>
						</Surface>
					</Surface>
					<Surface className="@scheme-dark">
						<ModeComponentExample />
						<Surface className="@mode-greenButtons @mode-dense">
							<ModeComponentExample />
							<Surface className="@mode-base @mode-dense">
								<ModeComponentExample />
								<Surface className="@mode-greenButtons">
									<ModeComponentExample />
								</Surface>
							</Surface>
						</Surface>
					</Surface>
				</Surface>
				<Surface
					className="@scheme-dark"
					style={{
						backgroundColor: PROPS.COLOR('neutral').PAPER.VAR,
					}}
				>
					<ModeComponentExample />
					<div className="@mode-blue">
						<ModeComponentExample />
					</div>
				</Surface>
				<Surface className="@scheme-contrast">
					<ModeComponentExample />
				</Surface>
			</Surface>
		);
	},
};

function Surface({
	children,
	className = '',
	style = {},
}: {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}) {
	return (
		<div
			className={`p-md ${className}`}
			style={{ ...style, backgroundColor: PROPS.COLOR('neutral').PAPER.VAR }}
		>
			<label
				style={{
					color: PROPS.COLOR('neutral').INK.VAR,
				}}
			>
				{className}
			</label>
			{children}
		</div>
	);
}

function ModeComponentExample() {
	return (
		<div>
			<input
				style={{
					backgroundColor: modeSchema.PROPS.CONTROL.BG.VAR,
					color: modeSchema.PROPS.CONTROL.FG.VAR,
					borderColor: modeSchema.PROPS.CONTROL.BORDER.VAR,
					borderWidth: '1px',
					borderStyle: 'solid',
					padding: `calc(0.5em * ${modeSchema.PROPS.DENSITY.VAR}) calc(1em * ${modeSchema.PROPS.DENSITY.VAR})`,
					borderRadius: '4px',
					fontSize: '1rem',
					lineHeight: '1.5',
				}}
			/>
			<button
				style={{
					backgroundColor: modeSchema.PROPS.ACTION.PRIMARY.BG.VAR,
					color: modeSchema.PROPS.ACTION.PRIMARY.FG.VAR,
					borderColor: modeSchema.PROPS.ACTION.PRIMARY.BORDER.VAR,
					borderWidth: '1px',
					borderStyle: 'solid',
					padding: `calc(0.5em * ${modeSchema.PROPS.DENSITY.VAR}) calc(1em * ${modeSchema.PROPS.DENSITY.VAR})`,
					borderRadius: '4px',
					fontSize: '1rem',
					lineHeight: '1.5',
				}}
			>
				Button
			</button>
		</div>
	);
}
