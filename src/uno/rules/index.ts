import { anchorRules } from './anchor.js';
import { clipPathRules } from './clipPath.js';
import { colorRules } from './color.js';
import { containerRules } from './container.js';
import { focusRules } from './focus.js';
import { overflowRules } from './overflow.js';
import { shadowRules } from './shadow.js';
import { utilRules } from './util.js';

// const textColorRule = fontStyles.find(
// 	([pattern]) =>
// 		typeof pattern !== 'string' && pattern.source === '^text-(?:color-)?(.+)$',
// )!;

// const excluded = new Set<Rule>([...containerParent, textColorRule]);

export const rules = [
	...colorRules,
	...anchorRules,
	...overflowRules,
	...shadowRules,
	...utilRules,
	...clipPathRules,
	...containerRules,
	...focusRules,
];
