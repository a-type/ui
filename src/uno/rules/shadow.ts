import { Rule } from 'unocss';

export const shadowRules: Rule[] = [
	[
		/^shadow-up$/,
		() => ({
			'--v-shadow-y-mult': '-1',
		}),
	],
	[
		/^shadow-down$/,
		() => ({
			'--v-shadow-y-mult': '1',
		}),
	],
];
