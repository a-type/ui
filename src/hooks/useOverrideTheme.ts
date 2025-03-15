import { useLayoutEffect } from 'react';
import { ThemeName } from '../components/index.js';

export function useOverrideTheme(theme: ThemeName | null | undefined) {
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
