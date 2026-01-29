import { Preflight } from 'unocss';
import { basePreflight } from './base.js';
import { colorPreflight, ColorPreflightOptions } from './colors.js';
import { fontsPreflight, FontsPreflightOptions } from './fonts.js';
import { globalPreflight, GlobalsPreflightConfig } from './globals.js';
import { keyboardPreflight } from './keyboard.js';
import { layerPreflight } from './layers.js';
import { modePreflight } from './mode.js';
import { propertiesPreflight } from './properties.js';
import { userPreflight, UserPreflightOptions } from './user.js';

export type PreflightConfig = FontsPreflightOptions &
	GlobalsPreflightConfig &
	UserPreflightOptions &
	ColorPreflightOptions;

export const preflights = (config: PreflightConfig): Preflight<any>[] => [
	layerPreflight,
	basePreflight,
	globalPreflight(config),
	colorPreflight(config),
	modePreflight(config),
	fontsPreflight(config),
	propertiesPreflight,
	userPreflight(config),
	keyboardPreflight,
];
