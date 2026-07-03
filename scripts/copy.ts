/// <reference types="node" />

/**
 * Copies all non-TS files from src to dist, preserving the directory structure.
 */
import { copyFile, glob, mkdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';

const srcDir = join(process.cwd(), 'src');
const distDir = join(process.cwd(), 'dist');

async function copyFiles() {
	for await (const file of glob('src/**/*', {
		exclude: ['**/*.ts', '**/*.tsx', '**/*.css'],
		withFileTypes: true,
	})) {
		if (file.isFile()) {
			const src = join(file.parentPath, file.name);
			const dest = join(distDir, relative(srcDir, src));
			await mkdir(dirname(dest), { recursive: true });
			await copyFile(src, dest);
		}
	}
}

copyFiles().catch((error) => {
	console.error('Error copying files:', error);
	process.exit(1);
});
