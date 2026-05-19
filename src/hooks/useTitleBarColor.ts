import { useCallback } from 'react';

let defaultColor = '#ffffff';
function getCurrentColor() {
	return document
		.querySelector('meta[name=theme-color]')
		?.getAttribute('content');
}
if (typeof document !== 'undefined') {
	defaultColor = getCurrentColor() ?? defaultColor;
}

function changeThemeColor(color: string) {
	if (typeof document === 'undefined') {
		return;
	}
	// evaluate css var if necessary
	while (color.startsWith('var(')) {
		const root = document.documentElement;
		const cssVar = color.slice(4, -1).trim();
		color = getComputedStyle(root).getPropertyValue(cssVar);
	}
	let metaThemeColor = document.querySelector('meta[name=theme-color]');
	if (!metaThemeColor) {
		metaThemeColor = document.createElement('meta');
		metaThemeColor.setAttribute('name', 'theme-color');
		document.head.appendChild(metaThemeColor);
	}
	metaThemeColor?.setAttribute('content', color);
	console.log('set title bar color', color);
}

export function useTitleBarColor(
	color: string | { light: string; dark: string },
) {
	/* TODO: rewrite this */
}

export function useSetTitleBarColor() {
	const setColor = useCallback((color: string) => changeThemeColor(color), []);
	const resetColor = useCallback(() => changeThemeColor(defaultColor), []);
	return { setColor, resetColor };
}

export function useThemedTitleBar(
	paletteOrName: any,
	value: any,
	/** If not provided, will inherit from app */
	mode?: 'light' | 'dark',
	skip?: boolean,
) {
	/* TODO: rewrite this */
}
