import { Preflight } from 'unocss';
import { fontsPreflight, FontsPreflightOptions } from './fonts.js';
import { globalPreflight, GlobalsPreflightConfig } from './globals.js';
import { layerPreflight } from './layers.js';

export type PreflightConfig = FontsPreflightOptions & GlobalsPreflightConfig;

export const preflights = (config: PreflightConfig): Preflight<any>[] => [
	layerPreflight,
	globalPreflight(config),
	fontsPreflight(config),
];
