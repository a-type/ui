import { useEffect, useState } from 'react';
import { useConfig } from '../components/provider/Provider.js';
import { useStableCallback } from './useStableCallback.js';

/**
 * Applies bottom offset px as a CSS custom property to the document root.
 */
export function useVisualViewportOffset(disable?: boolean) {
	useReactToViewportChanges(
		(viewport) => {
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
		},
		disable || typeof window === 'undefined',
	);
}

export function useIsKeyboardOpen() {
	const { virtualKeyboardBehavior } = useConfig();

	// viewport heuristic
	const [isViewportConstrained, setIsViewportConstrained] = useState(false);
	useReactToViewportChanges((viewport) => {
		// heuristic - 100px difference between visual viewport and window height
		setIsViewportConstrained(
			Math.abs(viewport.height - window.innerHeight) > 100,
		);
	}, virtualKeyboardBehavior !== 'displace');

	// simulated keyboard
	const [simulateKeyboardOpen, setSimulateKeyboardOpen] = useState<
		boolean | undefined
	>(undefined);
	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}
		function handleOpen() {
			setSimulateKeyboardOpen(true);
		}
		window.addEventListener('simulate-keyboard-open', handleOpen);
		function handleClose() {
			setSimulateKeyboardOpen(false);
		}
		window.addEventListener('simulate-keyboard-close', handleClose);
		return () => {
			window.removeEventListener('simulate-keyboard-open', handleOpen);
			window.removeEventListener('simulate-keyboard-close', handleClose);
		};
	}, []);

	// virtual keyboard API
	const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
	useEffect(() => {
		if (typeof navigator === 'undefined' || typeof window === 'undefined') {
			return;
		}
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

	if (simulateKeyboardOpen !== undefined) {
		return simulateKeyboardOpen;
	}

	if (virtualKeyboardBehavior === 'displace') {
		return isViewportConstrained;
	}

	return isKeyboardOpen;
}

if (typeof window !== 'undefined') {
	(window as any).simulateKeyboardOpen = () => {
		window.dispatchEvent(new Event('simulate-keyboard-open'));
	};

	(window as any).simulateKeyboardClose = () => {
		window.dispatchEvent(new Event('simulate-keyboard-close'));
	};
}

function useReactToViewportChanges(
	cb: (viewport: VisualViewport) => void,
	disable?: boolean,
) {
	const stableCb = useStableCallback(cb);
	useEffect(() => {
		if (disable) return;
		if (typeof window === 'undefined') {
			return;
		}

		const viewport = window.visualViewport;
		if (!viewport) {
			return;
		}

		const update = () => {
			stableCb(viewport);
		};

		const WAIT = 50;
		let timeoutId: number | undefined;
		let lastInvoke = 0;

		// call immediately once
		update();
		lastInvoke = Date.now();

		const throttledUpdate = () => {
			const now = Date.now();
			const remaining = WAIT - (now - lastInvoke);

			if (remaining <= 0) {
				if (timeoutId) {
					clearTimeout(timeoutId);
					timeoutId = undefined;
				}
				lastInvoke = now;
				update();
			} else if (!timeoutId) {
				timeoutId = window.setTimeout(() => {
					timeoutId = undefined;
					lastInvoke = Date.now();
					update();
				}, remaining);
			}
		};

		window.addEventListener('scroll', throttledUpdate, { passive: true });
		viewport.addEventListener('resize', update);
		viewport.addEventListener('scroll', throttledUpdate, { passive: true });

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
				timeoutId = undefined;
			}
			window.removeEventListener('scroll', throttledUpdate);
			viewport.removeEventListener('resize', update);
			viewport.removeEventListener('scroll', throttledUpdate);
		};
	}, [stableCb, disable]);
}

export interface VirtualKeyboardFocusOptions {
	focusElementTypes?: string[];
}
export function useVirtualKeyboardFocusBehavior({
	focusElementTypes = ['input', 'textarea', 'select'],
}: VirtualKeyboardFocusOptions = {}) {
	const stableFocusElementTypes = focusElementTypes
		.map((type) => type.toLowerCase())
		.join(',');
	useEffect(() => {
		if (typeof navigator === 'undefined' || typeof window === 'undefined') {
			return;
		}

		if (!('virtualKeyboard' in navigator)) {
			// no support
			console.warn(
				`virtual keyboard behavior set to 'overlay', but virtualKeyboard API is not supported in this browser.`,
			);
			return;
		}

		const virtualKeyboard = navigator.virtualKeyboard as any;

		const matchElements = stableFocusElementTypes.split(',');

		function update() {
			const open = virtualKeyboard.boundingRect.height > 0;
			if (open) {
				console.log('keyboard opened');
			}
			const activeElement = document.activeElement;
			if (
				activeElement &&
				matchElements.includes(activeElement.tagName.toLowerCase())
			) {
				setTimeout(() => {
					console.log('scroll focused element');
					activeElement.scrollIntoView(true);
				}, 10);
			}
		}

		virtualKeyboard.addEventListener('geometrychange', update);
		return () => {
			virtualKeyboard.removeEventListener('geometrychange', update);
		};
	}, [stableFocusElementTypes]);
}
