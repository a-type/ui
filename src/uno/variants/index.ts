import { Variant } from 'unocss';
import { baseUIVariants } from './baseUi.js';

export const variants: Variant[] = [
	/** Selects &+&, good for top borders */
	(matcher) => {
		if (!matcher.startsWith('repeated:')) return matcher;
		return {
			matcher: matcher.slice('repeated:'.length),
			selector: (s) => `${s} + ${s}`,
		};
	},

	...baseUIVariants,
];
