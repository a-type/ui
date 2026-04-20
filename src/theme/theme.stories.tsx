import type { Meta, StoryObj as Story } from '@storybook/react';
import { PROPS } from './base/properties.js';
import { generateColorPreflight } from './preflights/generateColorRanges.js';

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
}> = {
	argTypes: {
		sourceHue: { control: { type: 'number', min: 0, max: 360, step: 1 } },
	},
	args: {
		sourceHue: 91.8,
	},
	render(args) {
		const rangeProps = PROPS.COLOR('primary');

		const rangeSteps = Object.entries(rangeProps).map(([name, color]) => (
			<div
				key={name}
				className="h-16 flex grow items-center justify-center text-xxs"
				style={{ backgroundColor: `var(${color.NAME})` }}
			>
				{name}
			</div>
		));

		return (
			<div>
				<style>
					{generateColorPreflight({
						namedHues: { primary: args.sourceHue },
					})}
				</style>
				<div
					className="mode-light flex p-md"
					style={{
						backgroundColor: `var(${PROPS.COLOR('neutral').WASH.NAME})`,
					}}
				>
					{rangeSteps}
				</div>
				<div
					className="mode-dark flex p-md"
					style={{
						backgroundColor: `var(${PROPS.COLOR('neutral').WASH.NAME})`,
					}}
				>
					{rangeSteps}
				</div>
			</div>
		);
	},
};
