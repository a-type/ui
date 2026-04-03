/// <reference types="node" />

// uno.config.ts
import variantGroup from '@unocss/transformer-variant-group';
import { defineConfig } from 'unocss';
import presetAtype from './src/uno/uno.preset.js';

export default defineConfig({
	presets: [
		presetAtype({
			borderScale: 1,
			cornerScale: 1,
			spacingScale: 1,
			saturation: 50,
			focusColor: 'black',
		}),
	],
	transformers: [variantGroup()],
	configDeps: ['./src/uno'],
});
