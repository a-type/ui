import { Variant } from 'unocss';

export const baseUIVariants: Variant[] = [
	// apply same styles to [data-starting-style] as [data-ending-style]
	(matcher) => {
		if (matcher.startsWith('start-end:')) {
			return {
				matcher: matcher.replace('start-end:', ''),
				selector: (s) => `${s}[data-starting-style], ${s}[data-ending-style]`,
			};
		}
	},
];
