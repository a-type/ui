import { useEffect } from 'react';

export function useVirtualKeyboardBehavior(
	behavior: 'overlay' | 'displace' = 'overlay',
) {
	useEffect(() => {
		if ('virtualKeyboard' in navigator) {
			// @ts-ignore
			navigator.virtualKeyboard.overlaysContent = behavior === 'overlay';
		}
	}, [behavior]);
}
