// uno.config.ts
import variantGroup from '@unocss/transformer-variant-group';
import { defineConfig } from 'unocss';
import presetAtype from './src/uno/uno.preset.js';

// read all files in src/uno for configDeps
import { readdirSync } from 'fs';
import { join } from 'path';

const unoPath = join(__dirname, 'src', 'uno');

const configDeps = readdirSync(unoPath, {
	withFileTypes: true,
	recursive: true,
})
	.filter((dirent) => dirent.isFile() && dirent.name.endsWith('.ts'))
	.map((dirent) => join(dirent.path, dirent.name));

export default defineConfig({
	presets: [
		presetAtype({
			borderScale: 1,
			roundedness: 1,
			scale: 'md',
			saturation: 100,
		}),
	],
	transformers: [variantGroup()],
	configDeps,
});
