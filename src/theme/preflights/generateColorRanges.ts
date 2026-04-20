import { ColorEvaluationContext } from '../base/color.js';
import { createProp, prefixProp } from '../base/properties.js';
import {
	ColorRangeItem,
	createColorDarkModeRange,
	createColorLightModeRange,
} from '../base/ranges.js';

export interface ColorPreflightsConfig {
	namedHues: Record<string, number>;
	context?: ColorEvaluationContext;
	defaultMode?: 'light' | 'dark';
}

const noPreference = `, (prefers-color-scheme: no-preference)`;

export function generateColorPreflight(config: ColorPreflightsConfig) {
	const defaultMode = config.defaultMode ?? 'light';

	const lightContent = Object.entries(config.namedHues).map(([name, hue]) =>
		colorRangeToCss(
			name,
			createColorLightModeRange({ sourceHue: hue, context: config.context }),
		),
	);
	const darkContent = Object.entries(config.namedHues).map(([name, hue]) =>
		colorRangeToCss(
			name,
			createColorDarkModeRange({ sourceHue: hue, context: config.context }),
		),
	);

	return `/* Auto-generated color preflight - do not edit directly */

${/* Raw light/dark ranges */ ''}
:root {
	${lightContent
		.map((item) => prefixKeys(item, '☀️'))
		.map(formatPropertiesToCss)
		.join('\n')}
		${darkContent
			.map((item) => prefixKeys(item, '🌑'))
			.map(formatPropertiesToCss)
			.join('\n')}

	@media (prefers-color-scheme: light)${
		defaultMode === 'light' ? noPreference : ''
	} {
		${lightContent
			.map((values) => mapToModeRange(values, '☀️'))
			.map(formatPropertiesToCss)
			.join('\n')}
	}

	@media (prefers-color-scheme: dark)${
		defaultMode === 'dark' ? noPreference : ''
	} {
		${darkContent
			.map((values) => mapToModeRange(values, '🌑'))
			.map(formatPropertiesToCss)
			.join('\n')}
	}
}

.mode-dark {
	${darkContent
		.map((values) => mapToModeRange(values, '🌑'))
		.map(formatPropertiesToCss)
		.join('\n')}
}
.mode-light {
	${lightContent
		.map((values) => mapToModeRange(values, '☀️'))
		.map(formatPropertiesToCss)
		.join('\n')}
}

${/* Custom properties for each color step */ ''}
${[...lightContent, ...darkContent]
	.flatMap((item) => Object.keys(item))
	.flatMap((name) => [
		colorPropertyDefinition({ name }),
		colorPropertyDefinition({ name: prefixProp(name, '☀️') }),
		colorPropertyDefinition({ name: prefixProp(name, '🌑') }),
	])
	.join('\n\n')}
`;
}

function colorRangeToCss(
	name: string,
	range: ColorRangeItem[],
): Record<string, string> {
	return range.reduce(
		(acc, item) => {
			const prop = createProp(`${name}-${item.name}`);
			acc[prop.NAME] = item.css;
			return acc;
		},
		{} as Record<string, string>,
	);
}

function prefixKeys(
	obj: Record<string, string>,
	prefix: string,
): Record<string, string> {
	const result: Record<string, string> = {};
	for (const key in obj) {
		result[prefixProp(key, prefix)] = obj[key];
	}
	return result;
}

function formatPropertiesToCss(properties: Record<string, string>): string {
	return Object.entries(properties)
		.map(([key, value]) => `${key}: ${value};`)
		.join('\n');
}

function mapToModeRange(map: Record<string, string>, mode: '🌑' | '☀️') {
	return Object.fromEntries(
		Object.entries(map).map(([key]) => [key, `var(${prefixProp(key, mode)})`]),
	);
}

function colorPropertyDefinition({
	name,
	initial = 'transparent',
	inherits = true,
}: {
	name: string;
	initial?: string;
	inherits?: boolean;
}) {
	return `@property ${name} {
	syntax: '<color>';
	inherits: ${inherits};
	initial-value: ${initial};
}`;
}
