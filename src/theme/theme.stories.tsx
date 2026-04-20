import type { Meta, StoryObj as Story } from '@storybook/react';
import {
	createColorDarkModeRange,
	createColorLightModeRange,
} from './base/ranges.js';

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
		const config = {
			sourceHue: args.sourceHue,
			context: {
				appliedProperties: {},
			},
		};
		const lightRange = createColorLightModeRange(config);
		const darkRange = createColorDarkModeRange(config);
		return (
			<div>
				<div className="flex p-md bg-white">
					{lightRange.map(({ equation, css: color, name }, i) => (
						<div
							key={i}
							data-color={color}
							data-dynamic={equation.printDynamic()}
							data-name={name}
							className="h-16 flex grow items-center justify-center text-xxs"
							style={{ backgroundColor: color }}
						>
							{name}
						</div>
					))}
				</div>
				<div className="flex p-md bg-black">
					{darkRange.map(({ css: color, name }, i) => (
						<div
							key={i}
							data-color={color}
							data-name={name}
							className="h-16 flex grow items-center justify-center text-xxs"
							style={{ backgroundColor: color }}
						>
							{name}
						</div>
					))}
				</div>
			</div>
		);
	},
};
