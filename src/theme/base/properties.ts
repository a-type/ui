export const PROP_PREFIX = '--🎨';

export function createProp(
	name: string,
	type: 'color' | 'size' | '*',
	fallback?: string,
) {
	const resolvedName = `${PROP_PREFIX}-${name}`;
	return {
		NAME: resolvedName,
		TYPE: type,
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
		NAME: createProp('🌗-name', '*', 'light'),
		BLACK: createProp('🌗-black', 'color', '#000000'),
		WHITE: createProp('🌗-white', 'color', '#ffffff'),
	},
	MODE: {
		NAME: createProp('Ⓜ️-name', '*'),
	},
	USER: {
		SATURATION: createProp('🧑-sat', 'size', '0.6'),
	},
	LOCAL: {
		SATURATION: createProp('🏠-sat', 'size', '1'),
	},
	COLOR: (name: string) => ({
		PAPER: createProp(`${name}-paper`, 'color'),
		WASH: createProp(`${name}-wash`, 'color'),
		LIGHTER: createProp(`${name}-lighter`, 'color'),
		LIGHT: createProp(`${name}-light`, 'color'),
		DEFAULT: createProp(`${name}-DEFAULT`, 'color'),
		DARK: createProp(`${name}-dark`, 'color'),
		DARKER: createProp(`${name}-darker`, 'color'),
		INK: createProp(`${name}-ink`, 'color'),
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
