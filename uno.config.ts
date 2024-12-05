// uno.config.ts
import variantGroup from '@unocss/transformer-variant-group';
import { defineConfig } from 'unocss';
import presetAglio from './src/uno.preset.js';

export default defineConfig({
	presets: [presetAglio()],
	transformers: [variantGroup()],
});
