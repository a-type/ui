import { useEffect, useState } from 'react';
import { useConfig } from '../components/provider/Provider.js';
import { useStableCallback } from './useStableCallback.js';

/**
 * Applies bottom offset px as a CSS custom property to the document root.
 */
export function useVisualViewportOffset(disable?: boolean) {
	useReactToViewportChanges((viewport) => {
		document.documentElement.style.setProperty(
			'--viewport-bottom-offset',
			`${window.innerHeight - viewport.height - viewport.offsetTop}px`,
		);
		document.documentElement.style.setProperty(
			'--viewport-height',
			`${viewport.height}px`,
		);
		document.documentElement.style.setProperty(
			'--viewport-width',
			`${viewport.width}px`,
		);
		document.documentElement.style.setProperty(
			'--viewport-top-offset',
			`${viewport.offsetTop}px`,
		);
		document.documentElement.style.setProperty(
			'--viewport-left-offset',
			`${viewport.offsetLeft}px`,
		);
		document.documentElement.style.setProperty(
			'--keyboard-open',
			viewport.height < window.innerHeight ? '1' : '0',
		);
	}, disable);
}

export function useIsKeyboardOpen() {
	const { virtualKeyboardBehavior } = useConfig();

	const [isViewportConstrained, setIsViewportConstrained] = useState(false);
	useReactToViewportChanges((viewport) => {
		// heuristic - 100px difference between visual viewport and window height
		setIsViewportConstrained(
			Math.abs(viewport.height - window.innerHeight) > 100,
		);
	}, virtualKeyboardBehavior !== 'displace');

	const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
	useEffect(() => {
		if (!('virtualKeyboard' in navigator)) {
			// no support
			console.warn(
				`virtual keyboard behavior set to 'overlay', but virtualKeyboard API is not supported in this browser.`,
			);
			return;
		}
		const virtualKeyboard = navigator.virtualKeyboard as any;
		const update = () => {
			setIsKeyboardOpen(virtualKeyboard.boundingRect.height > 0);
		};
		update();
		virtualKeyboard.addEventListener('geometrychange', update);
		return () => {
			virtualKeyboard.removeEventListener('geometrychange', update);
		};
	}, []);

	if (virtualKeyboardBehavior === 'displace') {
		return isViewportConstrained;
	}

	return isKeyboardOpen;
}

function useReactToViewportChanges(
	cb: (viewport: VisualViewport) => void,
	disable?: boolean,
) {
	const stableCb = useStableCallback(cb);
	useEffect(() => {
		if (disable) return;

		const viewport = window.visualViewport;
		if (!viewport) {
			return;
		}

		const update = () => {
			stableCb(viewport);
		};
		let prevTimeout: number | undefined;
		const debouncedUpdate = () => {
			if (prevTimeout) {
				clearTimeout(prevTimeout);
			}
			prevTimeout = window.setTimeout(update, 50);
		};

		update();

		window.addEventListener('scroll', update, { passive: true });
		viewport.addEventListener('resize', update);
		viewport.addEventListener('scroll', debouncedUpdate, { passive: true });

		return () => {
			viewport.removeEventListener('resize', update);
			window.removeEventListener('scroll', update);
			viewport.removeEventListener('scroll', debouncedUpdate);
		};
	}, [stableCb, disable]);
}
