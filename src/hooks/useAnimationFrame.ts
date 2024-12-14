import { useEffect, useRef } from 'react';
import { useStableCallback } from './useStableCallback.js';

export function useAnimationFrame<Context>(
	callback: (deltaTime: number, context: Context) => void,
	initialContext?: Context,
) {
	const requestRef = useRef<number>(undefined);
	const previousTimeRef = useRef<number>(undefined);
	const contextRef = useRef<Context>(initialContext!);
	const animate = useStableCallback((time: number) => {
		if (previousTimeRef.current !== undefined) {
			const deltaTime = time - previousTimeRef.current;
			callback(deltaTime, contextRef.current);
		}
		previousTimeRef.current = time;
		requestRef.current = requestAnimationFrame(animate);
	});
	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(requestRef.current!);
	}, [animate]);
}
