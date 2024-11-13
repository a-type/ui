import { useEffect } from 'react';

/**
 * Applies bottom offset px as a CSS custom property to the document root.
 */
export function useVisualViewportOffset(disable?: boolean) {
	useEffect(() => {
		if (disable) return;

		const viewport =
			typeof window === 'undefined' ? undefined : window.visualViewport;

		if (!viewport) {
			return;
		}

		const update = () => {
			document.documentElement.style.setProperty(
				'--viewport-bottom-offset',
				`${window.innerHeight - viewport.height}px`,
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
		};

		update();

		window.addEventListener('scroll', update, { passive: true });
		viewport.addEventListener('resize', update);

		return () => {
			viewport.removeEventListener('resize', update);
			window.removeEventListener('scroll', update);
		};
	}, [disable]);
}
