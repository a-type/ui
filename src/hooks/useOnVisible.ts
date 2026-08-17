import { useEffect, useRef } from 'react';
import { useStableCallback } from './useStableCallback.js';

export function useOnVisible(onVisible?: () => void) {
	const innerRef = useRef<any>(null);

	const stableOnVisible = useStableCallback(onVisible);
	useEffect(() => {
		const current = innerRef.current;
		if (
			!current ||
			!(current instanceof HTMLElement || current instanceof SVGElement)
		) {
			return;
		}

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				stableOnVisible();
			}
		});
		observer.observe(innerRef.current!);
		return () => {
			observer.disconnect();
		};
	}, [stableOnVisible]);

	return innerRef;
}
