import { Preflight } from 'unocss';
import { basePreflight } from './base.js';
import { colorPreflight } from './colors.js';
import {
	customizationPreflight,
	ThemeCustomizationConfig,
} from './customization.js';
import { darkModePreflight } from './dark.js';
import { fontsPreflight, FontsPreflightOptions } from './fonts.js';
import { globalPreflight } from './globals.js';
import { layerPreflight } from './layers.js';

export const preflights = (
	config: ThemeCustomizationConfig & FontsPreflightOptions,
): Preflight<any>[] => [
	layerPreflight,
	basePreflight,
	globalPreflight,
	colorPreflight,
	darkModePreflight,
	customizationPreflight(config),
	fontsPreflight(config),
];
