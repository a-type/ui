import { useLayoutEffect } from 'react';
import { PaletteName } from '../uno/index.js';

export function useOverrideTheme(theme: PaletteName | null | undefined) {
	useLayoutEffect(() => {
		if (!theme || typeof document === 'undefined') {
			return;
		}
		document.body.classList.add(`theme-${theme}`);
		return () => {
			document.body.classList.remove(`theme-${theme}`);
		};
	}, [theme]);
}
