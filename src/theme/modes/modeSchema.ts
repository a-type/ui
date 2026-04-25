import {
	createProp,
	isProp,
	PropertyDefinition,
	PropertyType,
} from '../base/properties.js';

export type ModePropertyType = PropertyType;
export type ModeSchemaProperty =
	| ModePropertyType
	| {
			type: ModePropertyType;
			fallback: string;
	  };

export type ModeSchemaLevel = {
	[Key: string]: ModeSchemaProperty | ModeSchemaLevel;
};
export type ModeSchema<TSchema extends ModeSchemaLevel = ModeSchemaLevel> = {
	definition: TSchema;
	tag: string;
	PROPS: AsPropertyDefinitions<TSchema>;
	createBase: (def: ModeOf<TSchema>) => ModeOf<TSchema>;
	createPartial: (
		def: DeepPartial<ModeOf<TSchema>>,
	) => DeepPartial<ModeOf<TSchema>>;
};

function isModeSchemaProperty(value: any): value is ModeSchemaProperty {
	return (
		typeof value === 'string' ||
		(typeof value === 'object' &&
			value !== null &&
			'type' in value &&
			value.type !== undefined)
	);
}
function getModeSchemaPropertyAsPropertyDefinition(
	name: string,
	prop: ModeSchemaProperty,
): PropertyDefinition {
	if (typeof prop === 'string') {
		return createProp(name, { type: prop });
	} else {
		return createProp(name, { type: prop.type, fallback: prop.fallback });
	}
}

const shapeSymbol = Symbol('modeSchemaShape');

export function getPropShapeFromMode(mode: any): any {
	return mode[shapeSymbol] || null;
}

export function attachSchemaToMode(mode: any, schema: any) {
	Object.defineProperty(mode, shapeSymbol, {
		value: schema,
		enumerable: false,
	});
}

export function createModeSchema<T extends ModeSchemaLevel>(
	schema: T,
	tag = 'Ⓜ️',
): ModeSchema<T> {
	const PROPS = generateModeProperties(schema, tag);
	return {
		definition: schema,
		tag,
		PROPS,
		createBase: (def: ModeOf<T>) => {
			attachSchemaToMode(def, PROPS);
			return def;
		},
		createPartial: (def: DeepPartial<ModeOf<T>>) => {
			attachSchemaToMode(def, PROPS);
			return def;
		},
	};
}

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> | undefined };

export type ModeOf<T extends ModeSchemaLevel> = {
	[P in keyof T]: T[P] extends ModeSchemaProperty
		? string | number
		: T[P] extends ModeSchemaLevel
		? ModeOf<T[P]>
		: never;
};

type AsPropertyDefinitions<T> = T extends object
	? {
			[P in keyof T]: T[P] extends string
				? PropertyDefinition
				: T[P] extends object
				? AsPropertyDefinitions<T[P]>
				: never;
	  }
	: never;

export function generateModeProperties<T extends ModeSchemaLevel>(
	root: T,
	tag: string,
): AsPropertyDefinitions<T> {
	function generatePropsForSchemaLevel(
		schemaLevel: any,
		propPrefix: string,
	): any {
		const propsLevel: any = {};
		for (const key in schemaLevel) {
			const value = schemaLevel[key];
			const currentPrefix = `${propPrefix}-${key.toLowerCase()}`;
			if (isModeSchemaProperty(value)) {
				const propertyDefinition = getModeSchemaPropertyAsPropertyDefinition(
					currentPrefix,
					value,
				);
				propsLevel[key] = propertyDefinition;
			} else if (typeof value === 'object' && value !== null) {
				propsLevel[key] = generatePropsForSchemaLevel(value, currentPrefix);
			}
		}
		return propsLevel;
	}
	return generatePropsForSchemaLevel(root, tag);
}

export function flattenToPropsList(obj: any): PropertyDefinition[] {
	const propsList: PropertyDefinition[] = [];
	for (const key in obj) {
		if (isProp(obj[key])) {
			propsList.push(obj[key]);
		} else if (typeof obj[key] === 'object' && obj[key] !== null) {
			propsList.push(...flattenToPropsList(obj[key]));
		}
	}
	return propsList;
}

export function modeToCss(
	mode: DeepPartial<ModeOf<any>>,
	propShape: AsPropertyDefinitions<any>,
): Record<string, string> {
	return modeToCssDeep(mode, propShape);
}

function modeToCssDeep(
	mode: any,
	propStructure: AsPropertyDefinitions<object>,
	cssVars: Record<string, string> = {},
): Record<string, string> {
	for (const [key, value] of Object.entries(mode)) {
		const currentProp = (propStructure as any)[key as any] as any;
		if (typeof currentProp !== 'object') {
			continue;
		}
		if (!isProp(currentProp)) {
			modeToCssDeep(value, currentProp, cssVars);
		} else if (isProp(currentProp)) {
			cssVars[currentProp.NAME] = value as string;
		} else {
			throw new Error(`Invalid mode schema structure at key: ${key}`);
		}
	}
	return cssVars;
}
