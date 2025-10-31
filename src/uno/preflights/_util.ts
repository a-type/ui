import { Preflight } from 'unocss';

export function preflight(def: Preflight): Preflight {
	return {
		...def,
		getCSS: async (...args) =>
			(await def.getCSS(...args))?.replace(/\n+/gm, ' ').replaceAll('\t', '') +
			'\n',
	};
}
