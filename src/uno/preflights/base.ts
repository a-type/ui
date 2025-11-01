import { Theme } from '@unocss/preset-mini';
import { entriesToCss, Preflight, PreflightContext, toArray } from 'unocss';
import { preflight } from './_util.js';

export const basePreflight: Preflight = preflight({
	getCSS: (ctx: PreflightContext<Theme>) => {
		if (ctx.theme.preflightBase) {
			const css = entriesToCss(Object.entries(ctx.theme.preflightBase));
			const roots = toArray(
				ctx.theme.preflightRoot ?? ['*,::before,::after', '::backdrop'],
			);
			return roots
				.map((root) => `@layer preflightBase{${root}{${css}}}`)
				.join('');
		}
	},
});
