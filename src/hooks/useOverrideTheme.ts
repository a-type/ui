import { useLayoutEffect } from 'react';
import { PaletteName } from '../uno/logic/color.js';

export function useOverrideTheme(theme: PaletteName | null | undefined) {
	useLayoutEffect(() => {
		if (!theme) {
			return;
		}
		document.body.classList.add(`theme-override-${theme}`);
		return () => {
			document.body.classList.remove(`theme-override-${theme}`);
		};
	}, [theme]);
}
