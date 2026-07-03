import fs from 'node:fs/promises';
import postcss from 'postcss';
import config from './postcss.config.ts';

const processor = postcss(config.plugins);

for await (const file of fs.glob('dist/**/*.css')) {
	const css = await fs.readFile(file, 'utf8');
	const result = await processor.process(css, { from: file, to: file });
	await fs.writeFile(file, result.css);
	if (result.map) {
		await fs.writeFile(`${file}.map`, result.map.toString());
	}
	console.log(`[postcss] Processed ${file}`);
}
