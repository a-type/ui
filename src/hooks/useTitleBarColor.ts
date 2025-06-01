import { useCallback, useEffect } from 'react';
import { useResolvedColorMode } from '../colorMode.js';

let defaultColor = '#ffffff';
if (typeof document !== 'undefined') {
	defaultColor =
		document.querySelector('meta[name=theme-color]')?.getAttribute('content') ??
		defaultColor;
}

function changeThemeColor(color: string) {
	// evaluate css var if necessary
	if (color.startsWith('var(')) {
		const root = document.documentElement;
		const cssVar = color.slice(4, -1).trim();
		color = getComputedStyle(root).getPropertyValue(cssVar);
	}
	var metaThemeColor = document.querySelector('meta[name=theme-color]');
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
	const colorMode = useResolvedColorMode();
	useEffect(() => {
		const finalColor =
			typeof color === 'string'
				? color
				: colorMode === 'dark'
				? color.dark
				: color.light;
		const previousColor =
			document
				.querySelector('meta[name=theme-color]')
				?.getAttribute('content') ?? defaultColor;
		changeThemeColor(finalColor);
		return () => {
			changeThemeColor(previousColor);
		};
	}, [color, colorMode]);
}

export function useSetTitleBarColor() {
	const setColor = useCallback((color: string) => changeThemeColor(color), []);
	const resetColor = useCallback(() => changeThemeColor(defaultColor), []);
	return { setColor, resetColor };
}
