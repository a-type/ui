import { createProp, isProp, PropertyDefinition } from '../base/properties.js';

export interface ColorIntents {
	BG: string;
	FG: string;
	BORDER: string;
}

export interface FontIntents {
	SIZE: string;
	WEIGHT: string;
	LINE_HEIGHT: string;
}

export interface BaseModeSchema {
	CONTROL: ColorIntents;
	ACTION: {
		PRIMARY: ColorIntents;
		SECONDARY: ColorIntents;
		ANCILLARY: ColorIntents;
	};
	SURFACE: {
		PRIMARY: ColorIntents;
		SECONDARY: ColorIntents;
		ANCILLARY: ColorIntents;
	};
	TEXT: {
		PRIMARY: FontIntents;
		SECONDARY: FontIntents;
		ANCILLARY: FontIntents;
	};
}

type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> | undefined };
export type ModeSchema = DeepPartial<BaseModeSchema>;

const emptyMode: BaseModeSchema = {
	CONTROL: {
		BG: '',
		FG: '',
		BORDER: '',
	},
	ACTION: {
		PRIMARY: {
			BG: '',
			FG: '',
			BORDER: '',
		},
		SECONDARY: {
			BG: '',
			FG: '',
			BORDER: '',
		},
		ANCILLARY: {
			BG: '',
			FG: '',
			BORDER: '',
		},
	},
	SURFACE: {
		PRIMARY: {
			BG: '',
			FG: '',
			BORDER: '',
		},
		SECONDARY: {
			BG: '',
			FG: '',
			BORDER: '',
		},
		ANCILLARY: {
			BG: '',
			FG: '',
			BORDER: '',
		},
	},
	TEXT: {
		PRIMARY: {
			SIZE: '',
			LINE_HEIGHT: '',
			WEIGHT: '',
		},
		SECONDARY: {
			SIZE: '',
			LINE_HEIGHT: '',
			WEIGHT: '',
		},
		ANCILLARY: {
			SIZE: '',
			LINE_HEIGHT: '',
			WEIGHT: '',
		},
	},
};

type AsPropertyDefinitions<T extends object> = {
	[P in keyof T]: T[P] extends string
		? PropertyDefinition
		: T[P] extends object
		? AsPropertyDefinitions<T[P]>
		: never;
};

function assignProperties(
	obj: any,
	parentProp: string = 'Ⓜ️',
): AsPropertyDefinitions<BaseModeSchema> {
	for (const key in obj) {
		const currentProp = parentProp ? `${parentProp}-${key}` : key;
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			obj[key] = assignProperties(obj[key], currentProp);
		} else {
			obj[key] = createProp(currentProp.toLowerCase().replaceAll('_', '-'));
		}
	}
	return obj;
}

export const MODE_PROPS = assignProperties(emptyMode);

function flattenToPropsList(obj: any): PropertyDefinition[] {
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

export const MODE_PROPS_LIST: PropertyDefinition[] =
	flattenToPropsList(MODE_PROPS);

console.log(MODE_PROPS_LIST);

export function modeToCss(mode: ModeSchema): Record<string, string> {
	return modeToCssDeep(mode);
}

function modeToCssDeep(
	mode: any,
	propStructure: AsPropertyDefinitions<object> = MODE_PROPS,
	cssVars: Record<string, string> = {},
): Record<string, string> {
	for (const [key, value] of Object.entries(mode)) {
		const currentProp = (propStructure as any)[key as any] as any;
		if (typeof currentProp !== 'object') {
			continue;
		}
		if (!isProp(currentProp)) {
			modeToCssDeep(value as ModeSchema, currentProp, cssVars);
		} else if (isProp(currentProp)) {
			cssVars[currentProp.NAME] = value as string;
		} else {
			throw new Error(`Invalid mode schema structure at key: ${key}`);
		}
	}
	return cssVars;
}
