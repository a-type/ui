import type { Rule } from '@unocss/core';

const containerTypes = [
	'normal',
	'inline-size',
	'size',
	'style',
	'scroll-state',
] as const;

export const containerRules: Rule[] = [
	[
		new RegExp(`^@container(?:-(\\w+))?(?:/(${containerTypes.join('|')}))?$`),
		([, l, v]) => {
			return {
				'container-type': v ?? 'inline-size',
				'container-name': l,
			};
		},
		{
			autocomplete: [
				`@container-<name>`,
				`@container-<name>/<type>`,
				`@container/<type>`,
			],
		},
	],
];
