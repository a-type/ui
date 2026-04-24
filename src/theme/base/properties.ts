export const PROP_PREFIX = '--🎨';

export function createProp(name: string, fallback?: string) {
	const resolvedName = `${PROP_PREFIX}-${name}`;
	return {
		NAME: resolvedName,
		FALLBACK: fallback,
		VAR: `var(${resolvedName}${fallback ? `, ${fallback}` : ''})`,
		ASSIGN: (value: string) => `${resolvedName}: ${value};`,
		NAMESPACED_NAME: (namespace: string) =>
			`${PROP_PREFIX}-${namespace}-${name}`,
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
		NAME: createProp('🌗-name', 'light'),
		BLACK: createProp('🌗-black', '#000000'),
		WHITE: createProp('🌗-white', '#ffffff'),
	},
	MODE: {
		NAME: createProp('Ⓜ️-name'),
	},
	USER: {
		SATURATION: createProp('🧑-sat', '0.6'),
	},
	LOCAL: {
		SATURATION: createProp('🏠-sat', '1'),
	},
	COLOR: (name: string) => ({
		PAPER: createProp(`${name}-paper`),
		WASH: createProp(`${name}-wash`),
		LIGHTER: createProp(`${name}-lighter`),
		LIGHT: createProp(`${name}-light`),
		DEFAULT: createProp(`${name}-DEFAULT`),
		DARK: createProp(`${name}-dark`),
		DARKER: createProp(`${name}-darker`),
		INK: createProp(`${name}-ink`),
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
