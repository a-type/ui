import { RefObject, useCallback, useEffect } from 'react';
import { useResolvedColorMode } from '../colorMode.js';
import { snapshotColorContext } from '../uno/logic/color.js';
import {
	ColorLogicalPaletteDefinitions,
	palettes,
} from '../uno/logic/palettes.js';

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

export function useThemedTitleBar(
	paletteName: 'primary' | 'accent' | 'gray',
	value: keyof ColorLogicalPaletteDefinitions,
	options?: { contextElement?: RefObject<HTMLElement> },
) {
	const { setColor } = useSetTitleBarColor();

	useEffect(() => {
		const previousColor = getCurrentColor();

		function update() {
			const palette = palettes[paletteName];
			const context = snapshotColorContext(
				options?.contextElement?.current,
				paletteName,
			);
			const color = palette.definitions[value].computeOklch(context);
			setColor(color);
		}
		update();

		const observer = new MutationObserver(() => {
			update();
		});
		observer.observe(
			options?.contextElement?.current ?? document.documentElement,
			{
				attributes: true,
				attributeFilter: ['class'],
			},
		);

		if (previousColor) {
			return () => {
				setColor(previousColor);
			};
		}
	}, [setColor, paletteName, value, options?.contextElement]);
}
