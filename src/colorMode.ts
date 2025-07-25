import { useSyncExternalStore } from 'react';

export function setColorMode(mode: 'system' | 'light' | 'dark') {
	if (typeof window === 'undefined') return;
	if (mode === 'system') {
		window.localStorage.removeItem('colorMode');
	} else {
		window.localStorage.setItem('colorMode', mode);
	}
	window.dispatchEvent(new Event('colorModeChanged'));
}

const updateMode = () => {
	if (typeof window === 'undefined') return;

	const mode = window.localStorage.getItem('colorMode');
	document.documentElement.classList.remove('override-light', 'override-dark');
	if (mode) {
		document.documentElement.classList.add('override-' + mode);
	}

	// determine final mode, even if it's system
	const finalMode =
		mode ||
		(window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light');
	// set the status bar color in pwas
	const iosStatusBarColor = document.querySelector(
		'meta[name=apple-mobile-web-app-status-bar-style]',
	);
	const androidStatusBarColor = document.querySelector(
		'meta[name=theme-color]',
	);

	// evaluate the var(--color-wash) css var for the bar color
	const root = document.documentElement;
	const cssVar = '--color-wash';
	const color = getComputedStyle(root).getPropertyValue(cssVar);

	if (finalMode === 'dark') {
		iosStatusBarColor?.setAttribute('content', 'black');
		androidStatusBarColor?.setAttribute('content', color);
	}
	if (finalMode === 'light') {
		iosStatusBarColor?.setAttribute('content', 'white');
		androidStatusBarColor?.setAttribute('content', color);
	}
};
updateMode();

// listen for changes and apply an override-mode to the html
if (typeof window !== 'undefined') {
	window.addEventListener('colorModeChanged', updateMode);
}

export function getColorMode(): 'system' | 'light' | 'dark' {
	if (typeof window === 'undefined') return 'system';
	return (window.localStorage.getItem('colorMode') as any) || 'system';
}

export function getResolvedColorMode(): 'light' | 'dark' {
	const mode = getColorMode();
	if (mode === 'system') {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	}
	return mode;
}

export function subscribeToColorModeChange(
	callback: (mode: 'system' | 'light' | 'dark') => void,
) {
	if (typeof window === 'undefined') return () => {};
	const update = () => callback(getColorMode());
	window.addEventListener('colorModeChanged', update);
	return () => {
		window.removeEventListener('colorModeChanged', update);
	};
}

if (typeof window !== 'undefined') {
	(window as any).setColorMode = setColorMode;
}

export function useColorMode() {
	return useSyncExternalStore(
		subscribeToColorModeChange,
		getColorMode,
		() => 'system',
	);
}

export function useResolvedColorMode() {
	return useSyncExternalStore(
		subscribeToColorModeChange,
		getResolvedColorMode,
		() => 'light',
	);
}
