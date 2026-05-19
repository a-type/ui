/// <reference types="node" />

// uno.config.ts
import variantGroup from '@unocss/transformer-variant-group';
import { globSync } from 'node:fs';
import { defineConfig } from 'unocss';
import presetAtype from './src/uno/uno.preset.js';

const deps = ['./src/arbor/arbor.ts', ...globSync('../src/uno/**/*.ts')];

export default defineConfig({
	presets: [presetAtype({})],
	transformers: [variantGroup()],
	configDeps: deps,
});
