import { useCallback, useEffect, useSyncExternalStore } from 'react';
import { useResolvedColorMode } from '../colorMode.js';
import { snapshotColorContext } from '../uno/logic/color.js';
import {
	ColorLogicalPaletteDefinitions,
	PaletteName,
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
	paletteName: PaletteName,
	value: keyof ColorLogicalPaletteDefinitions,
	/** If not provided, will inherit from app */
	mode?: 'light' | 'dark',
	skip?: boolean,
) {
	const { setColor } = useSetTitleBarColor();
	// using a variable to rerun the effect instead of subscribing in-effect...
	// this is an attempt to preserve the cascading behavior in the React tree
	// if a child calls this hook, so ideally the parent and child should both
	// re-evaluate but the child should 'win'
	const visible = useSyncExternalStore(
		(onStoreChange) => {
			document.addEventListener('visibilitychange', onStoreChange);
			return () => {
				document.removeEventListener('visibilitychange', onStoreChange);
			};
		},
		() => document.visibilityState === 'visible',
		() => true,
	);

	useEffect(() => {
		if (skip) return;
		const previousColor = getCurrentColor();

		function update() {
			const palette = palettes[paletteName] ?? palettes.primary;
			const context = snapshotColorContext(paletteName, mode);
			const color = palette.definitions[value].computeOklch(context);
			setColor(color);
		}
		update();

		if (previousColor) {
			return () => {
				setColor(previousColor);
			};
		}
	}, [setColor, paletteName, value, mode, skip, visible]);
}
