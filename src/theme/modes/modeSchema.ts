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

type AsPropertyDefinitions<T extends object> = {
	[P in keyof T]: T[P] extends string
		? PropertyDefinition
		: T[P] extends object
		? AsPropertyDefinitions<T[P]>
		: never;
};

export const MODE_PROPS: AsPropertyDefinitions<BaseModeSchema> = {
	ACTION: {
		ANCILLARY: {
			BG: createProp('Ⓜ️-action-ancillary-bg', 'color'),
			FG: createProp('Ⓜ️-action-ancillary-fg', 'color'),
			BORDER: createProp('Ⓜ️-action-ancillary-border', 'color'),
		},
		PRIMARY: {
			BG: createProp('Ⓜ️-action-primary-bg', 'color'),
			FG: createProp('Ⓜ️-action-primary-fg', 'color'),
			BORDER: createProp('Ⓜ️-action-primary-border', 'color'),
		},
		SECONDARY: {
			BG: createProp('Ⓜ️-action-secondary-bg', 'color'),
			FG: createProp('Ⓜ️-action-secondary-fg', 'color'),
			BORDER: createProp('Ⓜ️-action-secondary-border', 'color'),
		},
	},
	CONTROL: {
		BG: createProp('Ⓜ️-control-bg', 'color'),
		FG: createProp('Ⓜ️-control-fg', 'color'),
		BORDER: createProp('Ⓜ️-control-border', 'color'),
	},
	SURFACE: {
		PRIMARY: {
			BG: createProp('Ⓜ️-surface-primary-bg', 'color'),
			FG: createProp('Ⓜ️-surface-primary-fg', 'color'),
			BORDER: createProp('Ⓜ️-surface-primary-border', 'color'),
		},
		SECONDARY: {
			BG: createProp('Ⓜ️-surface-secondary-bg', 'color'),
			FG: createProp('Ⓜ️-surface-secondary-fg', 'color'),
			BORDER: createProp('Ⓜ️-surface-secondary-border', 'color'),
		},
		ANCILLARY: {
			BG: createProp('Ⓜ️-surface-ancillary-bg', 'color'),
			FG: createProp('Ⓜ️-surface-ancillary-fg', 'color'),
			BORDER: createProp('Ⓜ️-surface-ancillary-border', 'color'),
		},
	},
	TEXT: {
		PRIMARY: {
			SIZE: createProp('Ⓜ️-text-primary-size', 'size'),
			WEIGHT: createProp('Ⓜ️-text-primary-weight', '*'),
			LINE_HEIGHT: createProp('Ⓜ️-text-primary-line-height', 'size'),
		},
		SECONDARY: {
			SIZE: createProp('Ⓜ️-text-secondary-size', 'size'),
			WEIGHT: createProp('Ⓜ️-text-secondary-weight', '*'),
			LINE_HEIGHT: createProp('Ⓜ️-text-secondary-line-height', 'size'),
		},
		ANCILLARY: {
			SIZE: createProp('Ⓜ️-text-ancillary-size', 'size'),
			WEIGHT: createProp('Ⓜ️-text-ancillary-weight', '*'),
			LINE_HEIGHT: createProp('Ⓜ️-text-ancillary-line-height', 'size'),
		},
	},
};

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
