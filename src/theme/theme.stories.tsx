import type { Meta, StoryObj as Story } from '@storybook/react';
import { PROPS } from './base/properties.js';
import {
	createColorDarkModeRange,
	createColorLightModeRange,
} from './base/ranges.js';
import { MODE_PROPS } from './modes/modeSchema.js';
import { rootMode } from './modes/rootMode.js';
import { generateColorPreflight } from './preflights/generateColorPreflight.js';

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
					{generateColorPreflight({
						namedHues: { primary: args.sourceHue },
						saturation: args.saturation,
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
						{Object.entries(PROPS.COLOR('primary')).map(([name, color], i) => {
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
				<div className="dark">
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
			<div>
				<style>
					{generateColorPreflight({
						namedHues: { primary: 90, secondary: 210 },
						saturation: 0.5,
						baseMode: rootMode,
						modes: {
							demo: {
								ACTION: {
									PRIMARY: {
										BG: 'red',
										FG: 'white',
									},
								},
								CONTROL: {
									BORDER: 'green',
									BG: 'blue',
								},
							},
						},
					})}
				</style>
				<ModeComponentExample />
				<div
					className="@scheme-dark @mode-base"
					style={{
						backgroundColor: PROPS.COLOR('neutral').PAPER.VAR,
					}}
				>
					<ModeComponentExample />
				</div>
				<div className="@mode-demo">
					<ModeComponentExample />
				</div>
			</div>
		);
	},
};

function ModeComponentExample() {
	return (
		<div>
			<input
				style={{
					backgroundColor: MODE_PROPS.CONTROL.BG.VAR,
					color: MODE_PROPS.CONTROL.FG.VAR,
					borderColor: MODE_PROPS.CONTROL.BORDER.VAR,
					borderWidth: '1px',
					borderStyle: 'solid',
					padding: '0.5em 1em',
					borderRadius: '4px',
					fontSize: '1rem',
					lineHeight: '1.5',
				}}
			/>
			<button
				style={{
					backgroundColor: MODE_PROPS.ACTION.PRIMARY.BG.VAR,
					color: MODE_PROPS.ACTION.PRIMARY.FG.VAR,
					borderColor: MODE_PROPS.ACTION.PRIMARY.BORDER.VAR,
					borderWidth: '1px',
					borderStyle: 'solid',
					padding: '0.5em 1em',
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
