import type { Meta, StoryObj as Story } from '@storybook/react';
import { PROPS } from './base/properties.js';
import {
	createColorDarkModeRange,
	createColorLightModeRange,
} from './base/ranges.js';
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
				<div className="mode-light">
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
				<div className="mode-dark">
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
