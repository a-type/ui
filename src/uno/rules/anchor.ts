import { Rule } from 'unocss';

export const anchorRules: Rule[] = [
	[
		/^anchor-(\w+)$/,
		(match) => ({
			'anchor-name': `--${match[1]}`,
		}),
		{
			autocomplete: 'anchor-<name>',
		},
	],
	[
		/^anchor-to-(\w+)$/,
		(match) => ({
			'position-anchor': `--${match[1]}`,
		}),
		{
			autocomplete: 'anchor-to-<name>',
		},
	],
];
