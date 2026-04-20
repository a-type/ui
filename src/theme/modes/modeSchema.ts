import { PROP_PREFIX } from '../base/properties.js';

export interface ColorIntents {
	bg: string;
	fg: string;
	border: string;
}

export interface FontIntents {
	size: string;
	weight: string;
	lineHeight: string;
}

export interface BaseModeSchema {
	control: ColorIntents;
	action: {
		primary: ColorIntents;
		secondary: ColorIntents;
		ancillary: ColorIntents;
	};
	surface: {
		primary: ColorIntents;
		secondary: ColorIntents;
		ancillary: ColorIntents;
	};
	text: {
		primary: FontIntents;
		secondary: FontIntents;
		ancillary: FontIntents;
	};
}

type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> | undefined };
export type ModeSchema = DeepPartial<BaseModeSchema>;

const emptyMode: BaseModeSchema = {
	control: {
		bg: '',
		fg: '',
		border: '',
	},
	action: {
		primary: {
			bg: '',
			fg: '',
			border: '',
		},
		secondary: {
			bg: '',
			fg: '',
			border: '',
		},
		ancillary: {
			bg: '',
			fg: '',
			border: '',
		},
	},
	surface: {
		primary: {
			bg: '',
			fg: '',
			border: '',
		},
		secondary: {
			bg: '',
			fg: '',
			border: '',
		},
		ancillary: {
			bg: '',
			fg: '',
			border: '',
		},
	},
	text: {
		primary: {
			size: '',
			lineHeight: '',
			weight: '',
		},
		secondary: {
			size: '',
			lineHeight: '',
			weight: '',
		},
		ancillary: {
			size: '',
			lineHeight: '',
			weight: '',
		},
	},
};

function assignPropertyNames(obj: any, parentProp: string) {
	for (const key in obj) {
		const currentProp = parentProp ? `${parentProp}-${key}` : key;
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			obj[key] = assignPropertyNames(obj[key], currentProp);
		} else {
			obj[key] = currentProp;
		}
	}
	return obj;
}

export const modeProperties: BaseModeSchema = assignPropertyNames(
	emptyMode,
	PROP_PREFIX,
);

export function modeToCss(
	mode: ModeSchema | any,
	propStructure: any = modeProperties,
	cssVars: Record<string, string> = {},
): Record<string, string> {
	for (const [key, value] of Object.entries(mode)) {
		if (typeof value === 'object' && value !== null) {
			modeToCss(value as ModeSchema, propStructure[key], cssVars);
			continue;
		} else if (typeof value === 'string') {
			const propName = propStructure[key];
			if (value.startsWith('--')) {
				cssVars[propName] = `var(${value})`;
			} else {
				cssVars[propName] = value as string;
			}
		}
	}
	return cssVars;
}
