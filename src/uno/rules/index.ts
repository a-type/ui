import { anchorRules } from './anchor.js';
import { colorRules } from './color.js';
import { overflowRules } from './overflow.js';
import { shadowRules } from './shadow.js';
import { utilRules } from './util.js';

export const rules = [
	...anchorRules,
	...colorRules,
	...overflowRules,
	...shadowRules,
	...utilRules,
];
