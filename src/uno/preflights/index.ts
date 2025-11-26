import { Preflight } from 'unocss';
import { basePreflight } from './base.js';
import { colorPreflight } from './colors.js';
import {
	customizationPreflight,
	ThemeCustomizationConfig,
} from './customization.js';
import { darkModePreflight } from './dark.js';
import { fontsPreflight, FontsPreflightOptions } from './fonts.js';
import { globalPreflight, GlobalsPreflightConfig } from './globals.js';
import { layerPreflight } from './layers.js';

export const preflights = (
	config: ThemeCustomizationConfig &
		FontsPreflightOptions &
		GlobalsPreflightConfig,
): Preflight<any>[] => [
	layerPreflight,
	basePreflight,
	globalPreflight(config),
	colorPreflight,
	darkModePreflight,
	customizationPreflight(config),
	fontsPreflight(config),
];
