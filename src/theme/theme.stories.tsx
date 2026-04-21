import type { Meta, StoryObj as Story } from '@storybook/react';
import { PROPS } from './base/properties.js';
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
}> = {
	argTypes: {
		sourceHue: { control: { type: 'number', min: 0, max: 360, step: 1 } },
	},
	args: {
		sourceHue: 91.8,
	},
	render(args) {
		const rangeSteps = (name: string) =>
			Object.entries(PROPS.COLOR(name)).map(([name, color]) => (
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
				<input type="color" className="mb-2xl" />
				<div className="mode-light">
					<div
						className="flex p-md"
						style={{
							backgroundColor: `var(${PROPS.COLOR('neutral').WASH.NAME})`,
						}}
					>
						{rangeSteps('primary')}
					</div>
					<div
						className="flex p-md"
						style={{
							backgroundColor: `var(${PROPS.COLOR('neutral').WASH.NAME})`,
						}}
					>
						{rangeSteps('neutral')}
					</div>
				</div>
				<div className="divider" />
				<div className="mode-dark">
					<div
						className="flex p-md"
						style={{
							backgroundColor: `var(${PROPS.COLOR('neutral').WASH.NAME})`,
						}}
					>
						{rangeSteps('primary')}
					</div>
					<div
						className="flex p-md"
						style={{
							backgroundColor: `var(${PROPS.COLOR('neutral').WASH.NAME})`,
						}}
					>
						{rangeSteps('neutral')}
					</div>
				</div>
			</div>
		);
	},
};
