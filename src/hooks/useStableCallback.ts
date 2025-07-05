import { useCallback, useMemo, useRef } from 'react';

export function useStableCallback<Fn extends (...args: any[]) => any>(
	callback: Fn | undefined,
): Fn {
	const ref = useRef(callback);
	useMemo(() => {
		ref.current = callback;
	}, [callback]);
	return useCallback<any>((...args: any[]) => ref.current?.(...args), []);
}
