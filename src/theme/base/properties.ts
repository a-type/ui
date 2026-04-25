export const PROP_PREFIX = '--🎨';

/**
 * Allowed types of properties - specifying one allows defining
 * a custom property in CSS which enables interpolation in animations
 * and other optimizations.
 *
 * "*" doesn't really do much but does allow any kind of value.
 *
 * "computed" will not generate a property definition and is assumed
 * to be a complex CSS property value like calc() or other things.
 */
export type PropertyType = 'color' | 'size' | '*';

export function createProp(
	name: string,
	{
		type,
		fallback,
		inherits = true,
		noPrefix,
	}: {
		type: PropertyType;
		fallback?: string;
		inherits?: boolean;
		noPrefix?: boolean;
	},
) {
	const resolvedName = noPrefix ? `--${name}` : `${PROP_PREFIX}-${name}`;
	return {
		NAME: resolvedName,
		TYPE: type,
		FALLBACK: fallback,
		VAR: `var(${resolvedName}${fallback ? `, ${fallback}` : ''})`,
		ASSIGN: (value: string) => `${resolvedName}: ${value};`,
		NAMESPACED_NAME: (namespace: string) =>
			`${PROP_PREFIX}-${namespace}-${name}`,
		DEFINITION: `@property ${resolvedName} {
	syntax: '${type === '*' ? '*' : `<${type}>`}';
	inherits: ${inherits};
	initial-value: ${fallback ?? 'initial'};
}`,
	};
}

export type PropertyDefinition = ReturnType<typeof createProp>;

export function isProp(value: any): value is ReturnType<typeof createProp> {
	return typeof value === 'object' && value !== null && 'NAME' in value;
}

export function prefixProp(name: string, prefix: string) {
	const cleanName = name.startsWith(PROP_PREFIX)
		? name.slice(PROP_PREFIX.length)
		: name;
	return `${PROP_PREFIX}-${prefix}-${cleanName}`;
}

export const PROPS = {
	SCHEME: {
		NAME: createProp('🌗-name', { type: '*', fallback: 'light' }),
		BLACK: createProp('🌗-black', { type: 'color', fallback: '#000000' }),
		WHITE: createProp('🌗-white', { type: 'color', fallback: '#ffffff' }),
	},
	MODE: {
		NAME: createProp('Ⓜ️-name', { type: '*' }),
	},
	USER: {
		SATURATION: createProp('🧑-sat', { type: 'size', fallback: '0.6' }),
	},
	LOCAL: {
		SATURATION: createProp('🏠-sat', { type: 'size', fallback: '1' }),
	},
	COLOR: (name: string) => ({
		PAPER: createProp(`${name}-paper`, { type: 'color' }),
		WASH: createProp(`${name}-wash`, { type: 'color' }),
		LIGHTER: createProp(`${name}-lighter`, { type: 'color' }),
		LIGHT: createProp(`${name}-light`, { type: 'color' }),
		DEFAULT: createProp(`${name}-DEFAULT`, { type: 'color' }),
		DARK: createProp(`${name}-dark`, { type: 'color' }),
		DARKER: createProp(`${name}-darker`, { type: 'color' }),
		INK: createProp(`${name}-ink`, { type: 'color' }),
	}),
};

/**
 * Maps all PROP values to themselves - i.e.
 * {
 * '--🌗-black': 'var(--🌗-black)',
 * ...
 * }
 */
export const selfReferencingPropertyMap = {} as Record<string, string>;
function walkPropsAndSelfReference(node: Record<string, any>) {
	for (const key in node) {
		const value = node[key];
		if (isProp(value)) {
			selfReferencingPropertyMap[value.NAME] = `var(${value.NAME}${
				value.FALLBACK ? `, ${value.FALLBACK}` : ''
			})`;
		} else if (typeof value === 'object') {
			walkPropsAndSelfReference(value);
		}
	}
}
walkPropsAndSelfReference(PROPS);
