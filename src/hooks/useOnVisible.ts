import { useEffect, useRef } from 'react';
import { useStableCallback } from './useStableCallback.js';

export function useOnVisible(onVisible?: () => void) {
	const innerRef = useRef<HTMLDivElement>(null);

	const stableOnVisible = useStableCallback(onVisible);
	useEffect(() => {
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
