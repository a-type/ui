import { Rule } from 'unocss';
import { PROPS } from '../logic/properties.js';

export const shadowRules: Rule[] = [
	[
		/^shadow-up$/,
		() => ({
			[PROPS.UTILS.SHADOW_Y_MULT]: '-1',
		}),
	],
	[
		/^shadow-down$/,
		() => ({
			[PROPS.UTILS.SHADOW_Y_MULT]: '1',
		}),
	],
	[
		/^shadow-none$/,
		() => ({
			[PROPS.BUILT_IN.SHADOW]: '0 0 rgb(0 0 0 / 0)',
			'box-shadow':
				'var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
		}),
	],
];
