import { useLayoutEffect } from 'react';

export function useOverrideRootMode(mode: string | null | undefined) {
	useLayoutEffect(() => {
		if (!mode || typeof document === 'undefined') {
			return;
		}
		document.documentElement.classList.add(`@mode-${mode}`);
		return () => {
			document.documentElement.classList.remove(`@mode-${mode}`);
		};
	}, [mode]);
}
