import {
	ColorEquationTools,
	ColorEvaluationContext,
	oklchBuilder,
} from '../base/color.js';
import { createProp, prefixProp, PROPS } from '../base/properties.js';
import {
	ColorRangeItem,
	createColorDarkModeRange,
	createColorLightModeRange,
} from '../base/ranges.js';
import {
	BaseModeSchema,
	MODE_PROPS_LIST,
	ModeSchema,
	modeToCss,
} from '../modes/modeSchema.js';

export interface ColorPreflightsConfig {
	namedHues: Record<string, number>;
	defaultScheme?: 'light' | 'dark';
	saturation?: number;

	baseMode: BaseModeSchema;
	modes: {
		[key: string]: ModeSchema;
	};

	context?: ColorEvaluationContext;
}

const noPreference = `, (prefers-color-scheme: no-preference)`;

export function generateColorPreflight(config: ColorPreflightsConfig) {
	const defaultMode = config.defaultScheme ?? 'light';

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

	const grays = grayRange(config.context);

	return `/* Auto-generated color preflight - do not edit directly */
	:root {
		${PROPS.USER.SATURATION.NAME}: ${
			config.saturation ?? PROPS.USER.SATURATION.FALLBACK
		};

	/* Raw light/dark ranges */
	${lightContent
		.map((item) => prefixKeys(item, '☀️'))
		.map(formatPropertiesToCss)
		.join('\n')}
	${darkContent
		.map((item) => prefixKeys(item, '🌑'))
		.map(formatPropertiesToCss)
		.join('\n')}

	/* Base Mode */
	${formatPropertiesToCss(modeToCss(config.baseMode))}

	@media (prefers-color-scheme: light)${
		defaultMode === 'light' ? noPreference : ''
	} {
		${PROPS.SCHEME.NAME.NAME}: 'light';
		${lightContent
			.map((values) => mapToSchemeRange(values, '☀️'))
			.map(formatPropertiesToCss)
			.join('\n')}
		${formatPropertiesToCss(grays)}
	}

	@media (prefers-color-scheme: dark)${
		defaultMode === 'dark' ? noPreference : ''
	} {
		${PROPS.SCHEME.NAME.NAME}: 'dark';
		${darkContent
			.map((values) => mapToSchemeRange(values, '🌑'))
			.map(formatPropertiesToCss)
			.join('\n')}
		${formatPropertiesToCss(grays)}
	}
}
@scope (.\\@scheme-dark) {
	${darkContent
		.map((values) => mapToSchemeRange(values, '🌑'))
		.map(formatPropertiesToCss)
		.join('\n')}
	${formatPropertiesToCss(grays)}
}
@scope (.\\@scheme-light) {
	${lightContent
		.map((values) => mapToSchemeRange(values, '☀️'))
		.map(formatPropertiesToCss)
		.join('\n')}
	${formatPropertiesToCss(grays)}
}


.\\@scheme-dark {
	${PROPS.SCHEME.NAME.ASSIGN('dark')}
}
.\\@scheme-light {
	${PROPS.SCHEME.NAME.ASSIGN('light')}
}

${Object.entries({ base: config.baseMode, ...config.modes })
	.map(([modeName, modeSchema]) => {
		return `/* Mode: ${modeName} */
.\\@mode-${modeName} {
	${PROPS.MODE.NAME.ASSIGN(modeName)}
}
@scope (.\\@mode-${modeName}) {
	${formatPropertiesToCss(modeToCss(modeSchema))}
}`;
	})
	.join('\n\n')}

${/* Custom properties for each color step */ ''}
${[...lightContent, ...darkContent, grays]
	.flatMap((item) => Object.keys(item))
	.flatMap((name) => [
		colorPropertyDefinition({ name }),
		colorPropertyDefinition({ name: prefixProp(name, '☀️') }),
		colorPropertyDefinition({ name: prefixProp(name, '🌑') }),
	])
	.join('\n\n')}

${MODE_PROPS_LIST.map((PROP) =>
	colorPropertyDefinition({ name: PROP.NAME, initial: PROP.FALLBACK }),
).join('\n\n')}
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

function mapToSchemeRange(map: Record<string, string>, mode: '🌑' | '☀️') {
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

function grayRange(context?: ColorEvaluationContext) {
	// TODO: standard
	const sourceColorFamily = PROPS.COLOR('primary');

	// converts to [-1...1] depending on where we sit in the light/dark
	// spectrum [0, 0.4]
	function lightness($: ColorEquationTools) {
		const fromL = $.add(
			$.literal('l'),
			$.multiply(
				$.divide(
					$.subtract($.literal('l'), $.literal('0.2')),
					$.literal('0.2'),
				),
				$.literal('-0.001'),
			),
		);
		return $.subtract(fromL, $.fn('pow', $.literal('c'), $.literal(1.6)));
	}
	function chroma($: ColorEquationTools) {
		return $.multiply(
			$.literal('c'),
			$.literal(PROPS.USER.SATURATION.VAR),
			$.literal(PROPS.LOCAL.SATURATION.VAR),
			$.literal('0.15'),
		);
	}

	return {
		[PROPS.COLOR('neutral').PAPER.NAME]: oklchBuilder(($) => ({
			from: $.literal(sourceColorFamily.PAPER.NAME),
			l: lightness($),
			c: chroma($),
			h: $.literal('h'),
		})).printComputed(context),
		[PROPS.COLOR('neutral').WASH.NAME]: oklchBuilder(($) => ({
			from: $.literal(sourceColorFamily.WASH.NAME),
			l: lightness($),
			c: chroma($),
			h: $.literal('h'),
		})).printComputed(context),
		[PROPS.COLOR('neutral').LIGHTER.NAME]: oklchBuilder(($) => ({
			from: $.literal(sourceColorFamily.LIGHTER.NAME),
			l: lightness($),
			c: chroma($),
			h: $.literal('h'),
		})).printComputed(context),
		[PROPS.COLOR('neutral').LIGHT.NAME]: oklchBuilder(($) => ({
			from: $.literal(sourceColorFamily.LIGHT.NAME),
			l: lightness($),
			c: chroma($),
			h: $.literal('h'),
		})).printComputed(context),
		[PROPS.COLOR('neutral').DEFAULT.NAME]: oklchBuilder(($) => ({
			from: $.literal(sourceColorFamily.DEFAULT.NAME),
			l: lightness($),
			c: chroma($),
			h: $.literal('h'),
		})).printComputed(context),
		[PROPS.COLOR('neutral').DARK.NAME]: oklchBuilder(($) => ({
			from: $.literal(sourceColorFamily.DARK.NAME),
			l: lightness($),
			c: chroma($),
			h: $.literal('h'),
		})).printComputed(context),
		[PROPS.COLOR('neutral').DARKER.NAME]: oklchBuilder(($) => ({
			from: $.literal(sourceColorFamily.DARKER.NAME),
			l: lightness($),
			c: chroma($),
			h: $.literal('h'),
		})).printComputed(context),
		[PROPS.COLOR('neutral').INK.NAME]: oklchBuilder(($) => ({
			from: $.literal(sourceColorFamily.INK.NAME),
			l: lightness($),
			c: chroma($),
			h: $.literal('h'),
		})).printComputed(context),
	};
}
