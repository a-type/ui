export const PROP_PREFIX = '--🎨';

function createProp(name: string, fallback?: string) {
	return {
		NAME: `${PROP_PREFIX}-${name}`,
		FALLBACK: fallback,
	};
}

function isProp(value: any): value is ReturnType<typeof createProp> {
	return typeof value === 'object' && value !== null && 'NAME' in value;
}

export const PROPS = {
	MODE: {
		BLACK: createProp('🌗-black', '#000000'),
		WHITE: createProp('🌗-white', '#ffffff'),
		MULT: createProp('🌗-mult', '1'),
		LIGHTNESS: createProp('🌗-lit-neutral', '50%'),
		SATURATION: createProp('🌗-sat-neutral', '50%'),
	},
	USER: {
		SATURATION: createProp('🧑-sat', '0.6'),
	},
	LOCAL: {
		LIGHTNESS_SPREAD: createProp('🏠-lit-spread', '100%'),
		SATURATION: createProp('🏠-sat', '1'),
	},
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
