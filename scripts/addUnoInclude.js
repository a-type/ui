// adds "// @unocss-include" to the top of every file in dist
// this is used to tell unocss to include the file in the build
// files are nested in dist, so we need to recursively add the include

import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

const addInclude = (dir) => {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			addInclude(filePath);
		} else {
			const fileContents = fs.readFileSync(filePath, 'utf8');
			const lines = fileContents.split('\n');
			lines.splice(0, 0, '// @unocss-include');
			fs.writeFileSync(filePath, lines.join('\n'));
		}
	});
};

addInclude(distDir);

console.log('Added @unocss-include to all files in dist');
