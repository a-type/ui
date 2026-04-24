import {
	ColorEquationTools,
	ColorEvaluationContext,
	oklchBuilder,
} from '../base/color.js';
import { createProp, prefixProp, PROPS } from '../base/properties.js';
import {
	ColorRangeConfig,
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

interface SchemeDefinition {
	getColorRange: (
		config: Pick<ColorRangeConfig, 'sourceHue' | 'context'>,
	) => ColorRangeItem[];
	tag: string;
}

const builtinSchemes: Record<string, SchemeDefinition> = {
	light: {
		getColorRange: createColorLightModeRange,
		tag: '☀️',
	},
	dark: {
		getColorRange: createColorDarkModeRange,
		tag: '🌑',
	},
};

export interface ColorPreflightsConfig {
	namedHues: Record<string, number>;
	defaultScheme?: 'light' | 'dark' | (string & {});
	saturation?: number;

	customSchemes?: Record<string, SchemeDefinition>;

	modes: {
		base: BaseModeSchema;
		[key: string]: ModeSchema;
	};

	context?: ColorEvaluationContext;
}

const noPreference = `, (prefers-color-scheme: no-preference)`;

export function generateThemeWithModes(config: ColorPreflightsConfig) {
	const defaultMode = config.defaultScheme ?? 'light';

	const schemes = {
		...builtinSchemes,
		...config.customSchemes,
	};

	const grays = grayRange(config.context);

	function getSchemeColorRanges(schemeName: string) {
		const scheme = schemes[schemeName]!;
		return [
			...Object.entries(config.namedHues).map(([name, hue]) =>
				colorRangeToCss(
					name,
					scheme.getColorRange({ sourceHue: hue, context: config.context }),
				),
			),
		];
	}

	/**
	 * Each scheme generates a full set of CSS color properties
	 * which are prefixed with its tag. The application of a scheme
	 * then sets the "official" version of each property to the
	 * tagged one when it is applied.
	 */
	function getSchemeRootPropertiesCss(schemeName: string) {
		const scheme = schemes[schemeName]!;
		const hueRanges = getSchemeColorRanges(schemeName);

		return `
		${hueRanges
			.map((range) => prefixKeys(range, scheme.tag))
			.map(formatPropertiesToCss)
			.join('\n')}
		`;
	}

	function schemeApplicationCss(schemeName: string) {
		const scheme = schemes[schemeName]!;
		const ranges = getSchemeColorRanges(schemeName);
		const rangeProperties = Object.keys(
			ranges.reduce((acc, range) => ({ ...acc, ...range }), {}),
		);
		return `${PROPS.SCHEME.NAME.ASSIGN(schemeName)}
	${formatPropertiesToCss(grays)}
	${rangeProperties
		.map((prop) => `${prop}: var(${prefixProp(prop, scheme.tag)});`)
		.join('\n')}
	`;
	}

	const allColorPropertyNamesWithSchemeTags = Array.from(
		new Set(
			Object.keys(schemes).flatMap((schemeName) => {
				const scheme = schemes[schemeName]!;
				return getSchemeColorRanges(schemeName)
					.flatMap((item) => Object.keys(item))
					.flatMap((name) => [name, prefixProp(name, scheme.tag)]);
			}),
		),
	);

	return `/* Auto-generated CSS - do not edit directly */
	:root {
		${PROPS.USER.SATURATION.NAME}: ${
			config.saturation ?? PROPS.USER.SATURATION.FALLBACK
		};

	/* Raw scheme ranges */
	${Object.keys(schemes)
		.map((schemeName) => getSchemeRootPropertiesCss(schemeName))
		.join('\n\n')}

	/* Dark/Light schemes are assigned to built-in device preferences */
	@media (prefers-color-scheme: light)${
		defaultMode === 'light' ? noPreference : ''
	} {
		${schemeApplicationCss('light')}
	}

	@media (prefers-color-scheme: dark)${
		defaultMode === 'dark' ? noPreference : ''
	} {
		${schemeApplicationCss('dark')}
	}
}

/* Scheme class names */
${Object.keys(schemes)
	.map(
		(schemeName) => `.\\@scheme-${schemeName} {
	${schemeApplicationCss(schemeName)}
}`,
	)
	.join('\n\n')}

${Object.entries(config.modes)
	.map(([modeName, modeSchema]) => {
		return `/* Mode: ${modeName} */
.\\@mode-${modeName}, ${Object.keys(schemes)
			.map((schemeName) => `.\\@mode-${modeName} .\\@scheme-${schemeName}`)
			.join(', ')} {
	${PROPS.MODE.NAME.ASSIGN(modeName)}
	${formatPropertiesToCss(modeToCss(modeSchema))}
}
`;
	})
	.join('\n\n')}

${/* Custom properties for each color step */ ''}
${allColorPropertyNamesWithSchemeTags
	.map((name) => colorPropertyDefinition({ name }))
	.join('\n\n')}

${MODE_PROPS_LIST.map((PROP) =>
	colorPropertyDefinition({
		name: PROP.NAME,
		initial: PROP.FALLBACK,
		type: PROP.TYPE,
	}),
).join('\n\n')}
`;
}

function colorRangeToCss(
	name: string,
	range: ColorRangeItem[],
): Record<string, string> {
	return range.reduce(
		(acc, item) => {
			const prop = createProp(`${name}-${item.name}`, 'color');
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

function colorPropertyDefinition({
	name,
	initial = 'transparent',
	inherits = true,
	type = 'color',
}: {
	name: string;
	initial?: string;
	inherits?: boolean;
	type?: 'color' | 'size' | '*';
}) {
	const typeFormatted = type === '*' ? '*' : `<${type}>`;
	return `@property ${name} {
	syntax: '${typeFormatted}';
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
